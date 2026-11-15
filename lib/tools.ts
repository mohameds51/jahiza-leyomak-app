export type CareRoutine={id:string;title:string;area:'skin'|'hair'|'body';weekdays:number[];active:boolean};
export type CareCompletion={routineId:string;date:string};
export type BagItem={id:string;title:string;group:'personal'|'look'|'documents'|'other';packed:boolean;owner:string};
export const careSuggestions:CareRoutine[]=[
 {id:'care-skin',title:'اتباع روتين البشرة المعتاد',area:'skin',weekdays:[0,1,2,3,4,5,6],active:true},
 {id:'care-hair',title:'العناية المعتادة بالشعر',area:'hair',weekdays:[1,4],active:true},
 {id:'care-body',title:'ترطيب الجسم بالمنتج المعتاد',area:'body',weekdays:[0,1,2,3,4,5,6],active:true}
];
export const bagSuggestions:BagItem[]=[
 {id:'bag-phone',title:'الجوال والشاحن',group:'personal',packed:false,owner:''},
 {id:'bag-tissues',title:'مناديل ومستلزمات شخصية',group:'personal',packed:false,owner:''},
 {id:'bag-shoes',title:'حذاء مريح احتياطي',group:'look',packed:false,owner:''},
 {id:'bag-pins',title:'دبابيس شعر ومستلزمات الإطلالة المعتادة',group:'look',packed:false,owner:''},
 {id:'bag-contacts',title:'أرقام التواصل والمواعيد المهمة',group:'documents',packed:false,owner:''}
];

export const careGuidance=[
 {title:'البشرة',detail:'ثبتي التنظيف والترطيب والحماية المناسبة لكِ. لا تختبري مقشرات أو جلسات جديدة قرب الزفاف دون رأي مختص.'},
 {title:'الشعر',detail:'خططي لموعد تجربة التسريحة، وراجعي المنتجات التي اعتدتِ عليها. حددي موعد الغسل والتصفيف مع المختصة.'},
 {title:'الجسم',detail:'جهزي المستلزمات المعتادة، واهتمي بالراحة والترطيب المناسب. أي إجراء تجميلي جديد يحتاج تقييمًا مسبقًا.'}
];
export const bagChecklistIdeas=[
 {title:'بطاقة الهوية عند الحاجة',group:'documents'}, {title:'نسخة من جدول المواعيد وأرقام التواصل',group:'documents'},
 {title:'شاحن متنقل وكابل',group:'personal'}, {title:'مستلزمات النظافة الشخصية المعتادة',group:'personal'},
 {title:'عطر أو مزيل عرق معتاد',group:'personal'}, {title:'مستلزمات صحية شخصية عند الحاجة',group:'personal'},
 {title:'إكسسوارات الإطلالة المتفق عليها',group:'look'}, {title:'مشابك ودبابيس إضافية',group:'look'},
 {title:'حذاء احتياطي مريح',group:'look'}, {title:'عدة خياطة صغيرة عند الحاجة',group:'other'},
 {title:'وجبة خفيفة وماء حسب ترتيبات المكان',group:'other'}
] as const;
export function dueOn(r:CareRoutine,date:string){if(!r.active||!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(date))return false;const [y,m,d]=date.split('-').map(Number);const dt=new Date(y,m-1,d,12);return dt.getFullYear()===y&&dt.getMonth()===m-1&&dt.getDate()===d&&r.weekdays.includes(dt.getDay())}
export function careStats(routines:CareRoutine[],completions:CareCompletion[],date:string){const due=routines.filter(r=>dueOn(r,date));return {due:due.length,done:due.filter(r=>completions.some(c=>c.routineId===r.id&&c.date===date)).length}}
export function bagStats(items:BagItem[]){return {total:items.length,done:items.filter(x=>x.packed).length}}
