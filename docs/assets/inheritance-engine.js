/* Iranian Civil Code, direct first-class heirs and immediate second-class relatives.
   No rounding in the share calculation. Articles 916–927 govern the second class. */
(function(root) {
  'use strict';
  const gcd = (a,b) => b ? gcd(b,a%b) : (a<0n?-a:a);
  class Q {
    constructor(n,d=1n){n=BigInt(n);d=BigInt(d);if(!d)throw Error('division');if(d<0n){n=-n;d=-d;}const g=gcd(n,d);this.n=n/g;this.d=d/g;}
    add(q){return new Q(this.n*q.d+q.n*this.d,this.d*q.d);}
    sub(q){return new Q(this.n*q.d-q.n*this.d,this.d*q.d);}
    mul(q){return new Q(this.n*q.n,this.d*q.d);}
    div(q){return new Q(this.n*q.d,this.d*q.n);}
    get value(){return Number(this.n)/Number(this.d);}
    get text(){return this.d===1n?String(this.n):`${this.n}/${this.d}`;}
  }
  const q=(n,d=1)=>new Q(n,d), zero=q(0), one=q(1);
  const fail=code=>({ok:false,code,rows:[]});
  function count(n,max=100){return Number.isInteger(n)&&n>=0&&n<=max;}
  const siblingKeys=['fullBrothers','fullSisters','paternalBrothers','paternalSisters','maternalBrothers','maternalSisters'];
  const grandparentKeys=['paternalGrandfather','paternalGrandmother','maternalGrandfather','maternalGrandmother'];
  function secondClass(x,R,add,notes){
    const full=(x.fullBrothers||0)+(x.fullSisters||0);
    const paternal=[],maternal=[];
    const group=(list,key,n,weight)=>{if(n)list.push({key,count:n,weight});};
    for(const key of ['paternalGrandfather','paternalGrandmother'])group(paternal,key,Number(!!x[key]),key.endsWith('Grandfather')?2:1);
    for(const key of ['maternalGrandfather','maternalGrandmother'])group(maternal,key,Number(!!x[key]),1);
    const active=full?'full':'paternal';
    group(paternal,active+'Brothers',x[active+'Brothers']||0,2);
    group(paternal,active+'Sisters',x[active+'Sisters']||0,1);
    group(maternal,'maternalBrothers',x.maternalBrothers||0,1);
    group(maternal,'maternalSisters',x.maternalSisters||0,1);
    if(full){
      for(const key of ['paternalBrothers','paternalSisters'])if(x[key])add(key,zero,'excludedPaternal',x[key]);
      if(x.paternalBrothers||x.paternalSisters)notes.push('excludedPaternal');
    }
    function divide(list,total,weighted){
      const units=list.reduce((sum,r)=>sum+r.count*(weighted?r.weight:1),0);
      for(const r of list)add(r.key,total.mul(q(weighted?r.weight:1,units)),'secondClass',r.count);
    }
    if(!paternal.length){
      divide(maternal,R,false);notes.push('maternalOnly');
    }else if(!maternal.length){
      divide(paternal,R,true);notes.push('paternalOnly');
    }else{
      const singleMaternalSibling=!x.maternalGrandfather&&!x.maternalGrandmother&&(x.maternalBrothers||0)+(x.maternalSisters||0)===1;
      const M=singleMaternalSibling?q(1,6):q(1,3);
      divide(maternal,M,false);divide(paternal,R.sub(M),true);
      notes.push(singleMaternalSibling?'maternalSixth':'maternalThird');
      if(x.spouse)notes.push('secondSpouse');
    }
    notes.push('secondClass');
    if(x.siblingDescendants)notes.push('excludedSiblingDescendants');
    if(x.otherHeirs)notes.push('excludedThird');
  }
  function calculate(x){
    if(!x||!['male','female'].includes(x.gender)||!count(x.sons)||!count(x.daughters)||!count(x.brothers||0)||!count(x.sisters||0))return fail('invalid');
    if(x.spouse&&x.gender==='male'&&(!count(x.wives,4)||x.wives<1))return fail('invalid');
    if(x.special)return fail('special');
    if(siblingKeys.some(key=>!count(x[key]??0)))return fail('invalid');
    const children=x.sons+x.daughters, parents=Number(!!x.father)+Number(!!x.mother);
    if(!children&&x.grandchildren)return fail('grandchildren');
    const second=siblingKeys.some(key=>x[key]>0)||grandparentKeys.some(key=>x[key]);
    const siblings=siblingKeys.reduce((n,key)=>n+(x[key]||0),0);
    if(!children&&!parents){
      if(x.remoteAncestors)return fail('remoteAncestors');
      if(!siblings&&x.siblingDescendants)return fail('siblingDescendants');
      if(!second&&x.otherHeirs)return fail('otherHeirs');
      if(!second&&!x.spouse)return fail('noHeirs');
    }
    const hajib=!!(x.father&&x.mother&&x.siblingConditions&&(x.brothers>=2||(x.brothers>=1&&x.sisters>=2)||x.sisters>=4));
    let spouse=zero;
    if(x.spouse)spouse=x.gender==='female'?q(1,children?4:2):q(1,children?8:4);
    const rows=[],notes=[],R=one.sub(spouse);
    function add(key,share,note,count=1){rows.push({key,share,note,count});}
    if(x.spouse){
      const wives=x.gender==='male'?x.wives:1;
      add(x.gender==='male'?'wife':'husband',spouse.div(q(wives)),'spouse',wives);
      if(x.gender==='male')notes.push('wifeProperty');
    }
    if(!parents&&!children&&second){
      secondClass(x,R,add,notes);
    }else if(!parents&&!children){
      if(x.gender==='female'){rows[0].share=one;rows[0].note='husbandOnly';}
      else {add('unallocated',R,'wifeOnly');notes.push('wifeOnly');}
    }else if(!children){
      if(x.father&&x.mother){
        const m=hajib?q(1,6):q(1,3);
        add('mother',m,hajib?'motherHajib':'motherThird');add('father',R.sub(m),'remainder');
      }else add(x.father?'father':'mother',R,'parentOnly');
    }else if(x.sons>0){
      if(x.father)add('father',q(1,6),'parentSixth');
      if(x.mother)add('mother',q(1,6),'parentSixth');
      const rem=R.sub(q(parents,6)),unit=rem.div(q(2*x.sons+x.daughters));
      add('son',unit.mul(q(2)),'children',x.sons);
      if(x.daughters)add('daughter',unit,'children',x.daughters);
    }else{
      const blood=[];
      if(x.father)blood.push({key:'father',base:q(1,6),eligible:true});
      if(x.mother)blood.push({key:'mother',base:q(1,6),eligible:!hajib});
      blood.push({key:'daughter',base:x.daughters===1?q(1,2):q(2,3),eligible:true});
      const used=blood.reduce((s,r)=>s.add(r.base),zero),extra=R.sub(used);
      if(extra.n<0n){
        // Deficiency is borne by daughters, never pro-rated across fixed shares.
        for(const b of blood)add(b.key,b.key==='daughter'?b.base.add(extra).div(q(x.daughters)):b.base,b.key==='daughter'?'deficiency':'parentSixth',b.key==='daughter'?x.daughters:1);
        notes.push('deficiency');
      }else{
        const weights=blood.filter(b=>b.eligible).reduce((s,b)=>s.add(b.base),zero);
        for(const b of blood){
          const share=b.eligible?b.base.add(extra.mul(b.base).div(weights)):b.base;
          add(b.key,b.key==='daughter'?share.div(q(x.daughters)):share,extra.n>0n&&b.eligible?'return':b.key==='daughter'?'daughterFixed':hajib&&b.key==='mother'?'motherHajib':'parentSixth',b.key==='daughter'?x.daughters:1);
        }
        if(extra.n>0n)notes.push('return');
      }
    }
    if(hajib)notes.push('hajib');
    if(children||parents)notes.push('excludedClasses');
    const total=rows.reduce((s,r)=>s.add(r.share.mul(q(r.count))),zero);
    if(total.text!=='1'||rows.some(r=>r.share.n<0n))throw Error('Invalid share invariant');
    const out=rows.map(r=>({key:r.key,count:r.count,note:r.note,n:String(r.share.n),d:String(r.share.d),fraction:r.share.text,value:r.share.value}));
    return {ok:true,rows:out,notes:[...new Set(notes)],hajib,total:'1'};
  }
  function integerText(text){
    return String(text??'').replace(/[۰-۹]/g,c=>String(c.charCodeAt(0)-1776)).replace(/[٠-٩]/g,c=>String(c.charCodeAt(0)-1632)).replace(/[,٬\s]/g,'');
  }
  function amount(text,blank=0){
    const s=integerText(text);if(!s)return blank;
    if(!/^\d+$/.test(s))throw Error('amount');
    const n=Number(s);if(!Number.isSafeInteger(n))throw Error('amount');return n;
  }
  function netEstate(x){
    const gross=amount(x.gross,null),costs=amount(x.costs),debts=amount(x.debts),bequest=amount(x.bequest);
    if(gross===null)return {ok:false,code:'amount'};
    if(costs>gross||debts>gross-costs)return {ok:false,code:'deductions'};
    const after=gross-costs-debts;
    // Do not silently cap a disputed or partly approved will.
    if(BigInt(bequest)*3n>BigInt(after))return {ok:false,code:'bequest'};
    return {ok:true,gross,costs,debts,bequest,net:after-bequest};
  }
  function allocations(rows,total){
    // Largest remainder distributes whole currency units while preserving the total.
    const items=[];let floorSum=0n;
    for(const r of rows)for(let i=1;i<=r.count;i++){
      const n=BigInt(total)*BigInt(r.n),d=BigInt(r.d),floor=n/d;
      floorSum+=floor;items.push({key:r.key,index:i,count:r.count,fraction:r.fraction,value:r.value,note:r.note,amount:floor,rem:n%d,den:d});
    }
    const order=items.map((_,i)=>i).sort((a,b)=>{const A=items[a],B=items[b],delta=A.rem*B.den-B.rem*A.den;return delta>0n?-1:delta<0n?1:a-b;});
    let left=BigInt(total)-floorSum;for(const i of order){if(!left)break;items[i].amount++;left--;}
    return items.map(({rem,den,...r})=>({...r,amount:Number(r.amount)}));
  }
  const api={calculate,netEstate,amount,allocations};
  if(typeof module==='object'&&module.exports)module.exports=api;else root.DaaderInheritance=api;
})(typeof globalThis!=='undefined'?globalThis:this);
