export type TrialKind='makeup'|'hair';
export type LookTrial={id:string;kind:TrialKind;date:string;provider:string;notes:string;rating:number;favorite:boolean;imageIds:string[]};
export type JournalEntry={id:string;date:string;title:string;notes:string};
export type CalmActivity={id:string;date:string;done:boolean};
export const messageTemplates=[
 {id:'salon',title:'تأكيد موعد الصالون',body:'السلام عليكم، حابة أتأكد من موعدي يوم {التاريخ} الساعة {الوقت}، وشكرًا لكِ.'},
 {id:'photo',title:'التواصل مع المصورة',body:'السلام عليكم، حابة أتأكد من تفاصيل التصوير يوم {التاريخ}، ووقت الحضور والموقع. يعطيكِ العافية.'},
 {id:'venue',title:'تأكيد ترتيبات القاعة',body:'السلام عليكم، ممكن تأكيد موعد التجهيز والدخول للقاعة يوم {التاريخ}، وأي متطلبات لازمة؟ شكرًا.'}
];
export function compareTrials(trials:LookTrial[],ids:string[]){return ids.slice(0,2).map(id=>trials.find(t=>t.id===id)).filter((t):t is LookTrial=>Boolean(t));}
export function validTrial(trial:LookTrial){return !!trial.id && ['hair','makeup'].includes(trial.kind)&& /^\d{4}-\d{2}-\d{2}$/.test(trial.date) && trial.provider.length<=120 && trial.notes.length<=2000 && trial.rating>=0&&trial.rating<=5&&trial.imageIds.length<=3;}
export function progressCalm(items:CalmActivity[],date:string){return items.filter(i=>i.date===date&&i.done).length;}
