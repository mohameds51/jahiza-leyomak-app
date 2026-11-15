import assert from 'node:assert/strict';
import {makePlan,reschedulePlan,daysUntil,shiftDate,templates,isValidDate} from './planner.ts';
const now=new Date(2026,10,14,12);
const p={name:'اختبار',weddingDate:'2026-12-14',minutes:30,priorities:['care','look']};
assert.equal(daysUntil(p.weddingDate,now),30);
assert.equal(shiftDate('2027-01-01',-1),'2026-12-31');
assert.equal(isValidDate('2026-02-30'),false);
for(const remaining of [0,1,7,12,30,45]){
 const profile={...p,weddingDate:shiftDate('2026-11-14',remaining)};
 const tasks=makePlan(profile,now);
 assert.equal(tasks.length,templates.length);
 assert.equal(new Set(tasks.map(t=>t.id)).size,tasks.length);
 assert.ok(tasks.every(t=>t.date>='2026-11-14'&&t.date<=profile.weddingDate));
 assert.deepEqual(makePlan(profile,now),tasks);
}
const original=makePlan(p,now);const completed={...original[0],done:true};
const custom={id:'custom-1',title:'مهمتي',category:'bag',date:'2026-11-20',done:false,minutes:10,custom:true};
const changed=reschedulePlan([completed,...original.slice(1),custom],{...p,weddingDate:'2026-12-08'},now);
assert.deepEqual(changed.find(t=>t.id===completed.id),completed);
assert.deepEqual(changed.find(t=>t.id===custom.id),custom);
assert.ok(changed.some(t=>t.id!==completed.id&&!t.custom&&t.date!==original.find(x=>x.id===t.id).date));
console.log('Planner tests passed: date validity, short horizons, deterministic generation, task preservation.');
