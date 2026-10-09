const assert=require('node:assert/strict');
const E=require('../docs/assets/inheritance-engine.js');
const base={gender:'male',spouse:false,wives:1,father:false,mother:false,sons:0,daughters:0};
let examples=0;
function check(input,expected){
 const r=E.calculate({...base,...input});assert.equal(r.ok,true,JSON.stringify(input));
 assert.deepEqual(Object.fromEntries(r.rows.map(x=>[x.key,[x.fraction,x.count]])),Object.fromEntries(Object.entries(expected).map(([key,val])=>[key,[val[0],val[1]??1]])),JSON.stringify(input));examples++;
}
// Independently worked examples using Civil Code Articles 918–927.
check({fullBrothers:1},{fullBrothers:['1']});
check({fullSisters:1},{fullSisters:['1']});
check({fullSisters:3},{fullSisters:['1/3',3]});
check({fullBrothers:1,fullSisters:1},{fullBrothers:['2/3'],fullSisters:['1/3']});
check({paternalBrothers:1,paternalSisters:1},{paternalBrothers:['2/3'],paternalSisters:['1/3']});
check({maternalBrothers:1,maternalSisters:2},{maternalBrothers:['1/3'],maternalSisters:['1/3',2]});
check({fullSisters:1,paternalBrothers:2},{fullSisters:['1'],paternalBrothers:['0',2]});
check({fullBrothers:1,paternalSisters:1,maternalSisters:1},{fullBrothers:['5/6'],paternalSisters:['0'],maternalSisters:['1/6']});
check({fullSisters:1,maternalSisters:1},{fullSisters:['5/6'],maternalSisters:['1/6']});
check({fullSisters:2,maternalBrothers:1},{fullSisters:['5/12',2],maternalBrothers:['1/6']});
check({fullBrothers:1,fullSisters:1,maternalBrothers:1,maternalSisters:2},{fullBrothers:['4/9'],fullSisters:['2/9'],maternalBrothers:['1/9'],maternalSisters:['1/9',2]});
check({gender:'female',spouse:true,fullBrothers:1,maternalSisters:1},{husband:['1/2'],fullBrothers:['1/3'],maternalSisters:['1/6']});
check({spouse:true,fullSisters:1,maternalSisters:1},{wife:['1/4'],fullSisters:['7/12'],maternalSisters:['1/6']});
check({gender:'female',spouse:true,fullSisters:2,maternalSisters:2},{husband:['1/2'],fullSisters:['1/12',2],maternalSisters:['1/6',2]});
check({spouse:true,wives:2,paternalBrothers:1,paternalSisters:1,maternalBrothers:2},{wife:['1/8',2],paternalBrothers:['5/18'],paternalSisters:['5/36'],maternalBrothers:['1/6',2]});
check({spouse:true,maternalSisters:1},{wife:['1/4'],maternalSisters:['3/4']});
check({gender:'female',spouse:true,maternalBrothers:1,maternalSisters:1},{husband:['1/2'],maternalBrothers:['1/4'],maternalSisters:['1/4']});
check({spouse:true,fullSisters:1},{wife:['1/4'],fullSisters:['3/4']});
check({paternalGrandmother:true},{paternalGrandmother:['1']});
check({maternalGrandfather:true},{maternalGrandfather:['1']});
check({paternalGrandfather:true,paternalGrandmother:true},{paternalGrandfather:['2/3'],paternalGrandmother:['1/3']});
check({maternalGrandfather:true,maternalGrandmother:true},{maternalGrandfather:['1/2'],maternalGrandmother:['1/2']});
const four={paternalGrandfather:true,paternalGrandmother:true,maternalGrandfather:true,maternalGrandmother:true};
check(four,{paternalGrandfather:['4/9'],paternalGrandmother:['2/9'],maternalGrandfather:['1/6'],maternalGrandmother:['1/6']});
check({...four,spouse:true},{wife:['1/4'],paternalGrandfather:['5/18'],paternalGrandmother:['5/36'],maternalGrandfather:['1/6'],maternalGrandmother:['1/6']});
check({...four,spouse:true,gender:'female'},{husband:['1/2'],paternalGrandfather:['1/9'],paternalGrandmother:['1/18'],maternalGrandfather:['1/6'],maternalGrandmother:['1/6']});
check({paternalGrandfather:true,maternalSisters:1},{paternalGrandfather:['5/6'],maternalSisters:['1/6']});
check({paternalGrandmother:true,maternalGrandmother:true,maternalSisters:1},{paternalGrandmother:['2/3'],maternalGrandmother:['1/6'],maternalSisters:['1/6']});
check({paternalGrandmother:true,fullBrothers:1},{paternalGrandmother:['1/3'],fullBrothers:['2/3']});
check({maternalGrandfather:true,fullBrothers:1},{maternalGrandfather:['1/3'],fullBrothers:['2/3']});
check({maternalGrandmother:true,maternalBrothers:1,maternalSisters:1},{maternalGrandmother:['1/3'],maternalBrothers:['1/3'],maternalSisters:['1/3']});
check({...four,fullBrothers:1,fullSisters:1,maternalBrothers:1,maternalSisters:1},{paternalGrandfather:['2/9'],paternalGrandmother:['1/9'],fullBrothers:['2/9'],fullSisters:['1/9'],maternalGrandfather:['1/12'],maternalGrandmother:['1/12'],maternalBrothers:['1/12'],maternalSisters:['1/12']});
check({sons:1,fullBrothers:1,maternalGrandmother:true},{son:['1']});
check({mother:true,fullBrothers:2},{mother:['1']});
check({fullBrothers:1,siblingDescendants:true},{fullBrothers:['1']});
check({fullBrothers:1,otherHeirs:true},{fullBrothers:['1']});
for(const [input,code] of [
 [{paternalGrandfather:true,siblingDescendants:true},'siblingDescendants'],
 [{siblingDescendants:true,spouse:true},'siblingDescendants'],
 [{remoteAncestors:true,spouse:true},'remoteAncestors'],
 [{fullBrothers:1,remoteAncestors:true},'remoteAncestors'],
 [{fullBrothers:1,grandchildren:true},'grandchildren'],
 [{fullBrothers:1,special:true},'special'],
 [{fullBrothers:-1},'invalid'],[{maternalSisters:1.5},'invalid'],[{paternalSisters:101},'invalid'],
 [{otherHeirs:true},'otherHeirs']
]){assert.equal(E.calculate({...base,...input}).code,code);examples++;}
const excluded=E.calculate({...base,fullBrothers:1,paternalBrothers:1,maternalSisters:1});
assert.ok(excluded.notes.includes('excludedPaternal'));
const money=E.allocations(excluded.rows,600000000);
assert.deepEqual(Object.fromEntries(money.map(x=>[x.key,x.amount])),{paternalBrothers:0,maternalSisters:100000000,fullBrothers:500000000});
let combinations=0;
for(const gender of ['male','female'])for(const spouse of [false,true])for(let f=0;f<3;f++)for(let fs=0;fs<3;fs++)for(let p=0;p<3;p++)for(let m=0;m<3;m++)for(let ms=0;ms<3;ms++)for(let mask=0;mask<16;mask++){
 const x={...base,gender,spouse,fullBrothers:f,fullSisters:fs,paternalBrothers:p,maternalBrothers:m,maternalSisters:ms,...Object.fromEntries(Object.keys(four).map((key,i)=>[key,!!(mask&(1<<i))]))};
 const r=E.calculate(x);if(!r.ok)continue;
 assert.ok(r.rows.every(row=>row.value>=0));
 assert.ok(Math.abs(r.rows.reduce((n,row)=>n+row.count*row.value,0)-1)<1e-12);
 assert.equal(E.allocations(r.rows,100000003).reduce((n,row)=>n+row.amount,0),100000003);
 const P=r.rows.filter(row=>/^(full|paternal)/.test(row.key)&&row.value>0),M=r.rows.filter(row=>row.key.startsWith('maternal'));
 if(spouse&&(P.length||M.length))assert.equal(r.rows.find(row=>row.key===(gender==='male'?'wife':'husband')).fraction,gender==='male'?'1/4':'1/2');
 if((f||fs)&&p)assert.equal(r.rows.find(row=>row.key==='paternalBrothers').fraction,'0');
 if(P.length&&M.length){const maternalTotal=M.reduce((n,row)=>n+row.count*row.value,0);assert.ok(Math.abs(maternalTotal-(!x.maternalGrandfather&&!x.maternalGrandmother&&m+ms===1?1/6:1/3))<1e-12);}
 if(M.length>1)assert.ok(M.every(row=>row.fraction===M[0].fraction));
 combinations++;
}
console.log(`${examples} second-class examples and blocked cases, ${combinations} combinations passed.`);
