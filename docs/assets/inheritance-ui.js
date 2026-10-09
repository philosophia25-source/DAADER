(() => {
 'use strict';
 const E=window.DaaderInheritance,T=JSON.parse(document.getElementById('calc-labels').textContent),form=document.getElementById('inheritance-form');
 const $=id=>document.getElementById(id),checked=id=>$(id).checked;
 const locale={fa:'fa-IR',ar:'ar',en:'en-GB'}[document.documentElement.lang]||'en-GB';
 const nf=new Intl.NumberFormat(locale),pf=new Intl.NumberFormat(locale,{style:'percent',maximumFractionDigits:2});
 let lastCopy='';
 const secondCounts=['fullBrothers','fullSisters','paternalBrothers','paternalSisters','maternalBrothers','maternalSisters'];
 const secondChecks=['paternalGrandfather','paternalGrandmother','maternalGrandfather','maternalGrandmother','siblingDescendants','remoteAncestors'];
 const showError=code=>{$('calc-error').textContent=T.errors[code]||T.errors.invalid;$('calc-error').hidden=false;};
 function sync(){
   $('wives-field').hidden=!checked('spouse')||$('gender').value!=='male';$('wives').disabled=$('wives-field').hidden;
   $('amount-fields').hidden=!checked('amountMode');
   const parents=checked('father')&&checked('mother');
   $('hajib-details').hidden=!parents;
   for(const id of ['brothers','sisters','siblingConditions'])$(id).disabled=!parents;
   let children=false;try{children=E.amount($('sons').value)+E.amount($('daughters').value)>0;}catch{}
   $('grandchildren').disabled=children;if(children)$('grandchildren').checked=false;
   const first=children||checked('father')||checked('mother'),blocked=first||checked('grandchildren');
   $('second-card').hidden=blocked;$('second-excluded').hidden=!first;
   for(const id of [...secondCounts,...secondChecks])$(id).disabled=blocked;
 }
 function hideResult(){if(!$('calc-result').hidden)$('calc-stale').hidden=false;$('calc-result').hidden=true;$('calc-empty').hidden=false;$('calc-error').hidden=true;lastCopy='';$('copy-status').textContent='';}
 function inputs(){
   const parents=checked('father')&&checked('mother');
   const second=!$('second-card').hidden;
   return {gender:$('gender').value,spouse:checked('spouse'),wives:checked('spouse')&&$('gender').value==='male'?E.amount($('wives').value):1,father:checked('father'),mother:checked('mother'),sons:E.amount($('sons').value),daughters:E.amount($('daughters').value),brothers:parents?E.amount($('brothers').value):0,sisters:parents?E.amount($('sisters').value):0,siblingConditions:parents&&checked('siblingConditions'),grandchildren:checked('grandchildren'),otherHeirs:checked('otherHeirs'),special:checked('special'),...Object.fromEntries(secondCounts.map(id=>[id,second?E.amount($(id).value):0])),...Object.fromEntries(secondChecks.map(id=>[id,second&&checked(id)]))};
 }
 function render(r,estate){
   const withMoney=!!estate,unit=T[$('currency').value];
   $('calc-rows').replaceChildren();$('calc-chart').replaceChildren();$('calc-notes').replaceChildren();
   $('calc-net').hidden=!withMoney;
   if(withMoney)$('calc-net').textContent=T.netLabel+' · '+nf.format(estate.net)+' '+unit;
   const allocations=E.allocations(r.rows,withMoney?estate.net:0),copy=[T.title];
   if(withMoney)copy.push(T.netLabel+' '+nf.format(estate.net)+' '+unit);
   for(const row of allocations){
     const name=T.names[row.key]+(row.count>1?' '+nf.format(row.index):'');
     const tr=document.createElement('tr');if(row.value===0)tr.className='calc-excluded-row';const th=document.createElement('th');th.scope='row';th.textContent=name;tr.append(th);
     const fraction=document.createElement('td'),bdi=document.createElement('bdi');bdi.textContent=row.fraction;bdi.dir='ltr';fraction.append(bdi);tr.append(fraction);
     const pct=document.createElement('td');pct.textContent=pf.format(row.value);tr.append(pct);
     if(withMoney){const td=document.createElement('td');td.textContent=nf.format(row.amount);tr.append(td);}
     $('calc-rows').append(tr);
     copy.push([name,row.fraction,pf.format(row.value),withMoney?nf.format(row.amount)+' '+unit:''].filter(Boolean).join(' | '));
   }
   for(const row of r.rows){if(row.value===0)continue;const bar=document.createElement('span');bar.style.flexGrow=String(row.value*row.count);bar.className='calc-segment calc-'+row.key;$('calc-chart').append(bar);}
   for(const key of r.notes){const li=document.createElement('li');li.textContent=T.notes[key];$('calc-notes').append(li);copy.push(T.notes[key]);}
   document.querySelectorAll('.calc-money').forEach(e=>e.hidden=!withMoney);
   $('calc-total-percent').textContent=pf.format(1);$('calc-total-money').textContent=withMoney?nf.format(estate.net):'';
   $('calc-result').hidden=false;$('calc-empty').hidden=true;$('calc-stale').hidden=true;$('calc-error').hidden=true;$('copy-status').textContent='';
   lastCopy=copy.concat(T.rounding,T.assumption).join('\n');
 }
 function calculate(){
   $('calc-result').hidden=true;lastCopy='';
   let x;try{x=inputs();}catch{showError('invalid');return;}
   const r=E.calculate(x);if(!r.ok){showError(r.code);return;}
   let estate=null;
   if(checked('amountMode')){
     try{estate=E.netEstate(Object.fromEntries(['gross','costs','debts','bequest'].map(k=>[k,$(k).value])));}catch{showError('amount');return;}
     if(!estate.ok){showError(estate.code);return;}
   }
   render(r,estate);
 }
 form.addEventListener('submit',ev=>{ev.preventDefault();calculate();});
 for(const event of ['input','change'])form.addEventListener(event,()=>{hideResult();sync();});
 // The native reset completes after its event, so sync in the next task.
 form.addEventListener('reset',()=>{setTimeout(()=>{hideResult();$('calc-stale').hidden=true;sync();},0);});
 document.querySelectorAll('[data-example]').forEach(button=>button.addEventListener('click',()=>{
   form.reset();setTimeout(()=>{
     if(button.dataset.example==='second'){
       $('gender').value='female';$('spouse').checked=true;$('fullBrothers').value='1';$('maternalSisters').value='1';
     }else{
       $('father').checked=true;
       if(button.dataset.example==='daughter')$('daughters').value='1';else{$('sons').value='1';$('spouse').checked=true;}
     }
     sync();calculate();
   },0);
 }));
 $('calc-copy').addEventListener('click',async()=>{if(!lastCopy)return;try{await navigator.clipboard.writeText(lastCopy);$('copy-status').textContent=T.copied;}catch{$('copy-status').textContent=T.copyFailed;}});
 sync();
})();
