export type Category='care'|'look'|'bag'|'calm';
export type Task={id:string;title:string;category:Category;date:string;done:boolean;minutes:number;custom?:boolean};
export type Profile={name:string;weddingDate:string;minutes:number;priorities:Category[]};
export const categories:Record<Category,string>={care:'العناية',look:'الإطلالة',bag:'حقيبة الزفاف',calm:'الراحة والتواصل'};
export type Template={id:string;title:string;category:Category;offset:number;minutes:number};
export const templates:Template[]=[
{id:'priorities',title:'راجعي أولويات تجهيزاتك وحددي ما تم بالفعل',category:'bag',offset:30,minutes:15},
{id:'vendors',title:'راجعي مواعيد مقدمي خدمات يوم الزفاف',category:'look',offset:28,minutes:15},
{id:'care-plan',title:'رتّبي روتين العناية المعتاد المناسب لك',category:'care',offset:27,minutes:15},
{id:'essentials',title:'جهّزي قائمة المستلزمات الشخصية',category:'bag',offset:25,minutes:20},
{id:'makeup',title:'حددي موعد تجربة المكياج أو تأكدي منه',category:'look',offset:23,minutes:15},
{id:'rest-week',title:'خصصي وقتًا للراحة وحددي أولويات الأسبوع',category:'calm',offset:21,minutes:10},
{id:'missing',title:'راجعي المستلزمات الناقصة وحددي طريقة توفيرها',category:'bag',offset:19,minutes:20},
{id:'trial-notes',title:'دوّني ملاحظاتك عن تجربة المكياج أو الشعر',category:'look',offset:17,minutes:15},
{id:'care-check',title:'راجعي ما يناسبك من روتين العناية المعتاد',category:'care',offset:15,minutes:10},
{id:'look-check',title:'تأكدي من مواعيد وتجهيزات الإطلالة',category:'look',offset:13,minutes:15},
{id:'pack-first',title:'رتّبي حقيبة يوم الزفاف مبدئيًا',category:'bag',offset:11,minutes:20},
{id:'confirm',title:'أرسلي رسالة تأكيد للمواعيد الأساسية',category:'look',offset:9,minutes:15},
{id:'essentials-check',title:'راجعي احتياجاتك الشخصية ليوم الزفاف',category:'bag',offset:7,minutes:15},
{id:'rest-short',title:'خذي استراحة قصيرة واكتبي أهم 3 أولويات',category:'calm',offset:6,minutes:10},
{id:'pack-final',title:'تأكدي من تجهيز حقيبة يوم الزفاف',category:'bag',offset:4,minutes:20},
{id:'contacts',title:'راجعي الجدول النهائي وأرقام التواصل',category:'look',offset:3,minutes:15},
{id:'lay-out',title:'جهّزي أغراضك الأساسية في مكان واضح',category:'bag',offset:2,minutes:15},
{id:'rest-final',title:'خففي المهام غير الضرورية وخذي وقتًا للراحة',category:'calm',offset:1,minutes:10},
{id:'wedding-day',title:'راجعي المستلزمات المهمة بهدوء',category:'bag',offset:0,minutes:10}
];

// خطوات عملية مصغّرة لكل محطة: ليست مجرد تذكير، بل طريقة تنفيذ ونتيجة واضحة.
export const taskGuides:Record<string,{steps:string[];result:string}>={
'priorities':{steps:['اكتبي ما تم حجزه أو شراؤه بالفعل.','حددي ثلاث أولويات تحتاج قرارًا هذا الأسبوع.','احذفي من قائمتك ما لا يناسب حفلك أو ميزانيتك.'],result:'قائمة أولويات واضحة بدل مهام متفرقة'},
'vendors':{steps:['اجمعي اسم ورقم كل مزود خدمة في مكان واحد.','راجعي الموعد والموقع والعربون والمتبقي.','حددي من سيتابع مع كل مزود يوم الزفاف.'],result:'جدول مؤكد للخدمات والمسؤوليات'},
'care-plan':{steps:['حددي روتين البشرة والشعر والجسم الذي اعتدتِ عليه.','اختاري أيامًا واقعية للتنفيذ في أداة العناية.','تجنبي بدء علاجات أو منتجات قوية دون استشارة مختص.'],result:'روتين قابل للاستمرار حتى يوم الزفاف'},
'essentials':{steps:['افتحي حقيبة الزفاف وراجعي العناصر المقترحة.','أضيفي احتياجاتك الخاصة واحذفي غير المناسب.','حددي من سيتولى إحضار الحقيبة.'],result:'قائمة حقيبة شخصية ومسؤول محدد'},
'makeup':{steps:['حددي أسلوب الإطلالة والصور المرجعية.','ثبتي موعد تجربة المكياج واسم المختصة.','سجلي الموعد والملاحظات في أداة تجارب الإطلالة.'],result:'موعد تجربة واضح ومعايير للمقارنة'},
'rest-week':{steps:['اختاري ثلاث مهام مهمة فقط لهذا الأسبوع.','وزعي الباقي على أيام مختلفة.','اتركي وقتًا خاليًا من التجهيزات للراحة.'],result:'أسبوع متوازن بدون تكديس'},
'missing':{steps:['راجعي العناصر غير المجهزة في الحقيبة.','صنفيها إلى ضروري واختياري.','حددي موعد توفير الضروري فقط.'],result:'قائمة نواقص قابلة للتنفيذ'},
'trial-notes':{steps:['دوّني ما أعجبك وما يحتاج تعديلًا.','أضيفي صورة مرجعية إذا رغبتِ.','قارني التجارب قبل اتخاذ القرار النهائي.'],result:'قرار إطلالة مبني على ملاحظات فعلية'},
'care-check':{steps:['راجعي انتظام روتينك المعتاد.','خففي أي خطوة تسبب تهيجًا أو إجهادًا.','احتفظي بالأنشطة المريحة والملائمة لكِ.'],result:'روتين بسيط مناسب للأيام المتبقية'},
'look-check':{steps:['راجعي موعد الشعر والمكياج ووقت الوصول.','تأكدي من مكان التجهيز والانتقال.','اكتبي أي تعديلات متفق عليها مع المختصات.'],result:'جدول إطلالة واضح بلا مفاجآت'},
'pack-first':{steps:['ضعي العناصر المتوفرة في حقيبة واحدة.','راجعي الشاحن والأغراض الشخصية وبدائل الطوارئ.','اتركي غير المتوفر في القائمة بدون وضع علامة جاهز.'],result:'حقيبة أولية قابلة للمراجعة'},
'confirm':{steps:['افتحي رسائل التواصل الجاهزة.','عدلي التاريخ والوقت والموقع قبل الإرسال.','احتفظي برد التأكيد ضمن ملاحظاتك.'],result:'تأكيد مكتوب للمواعيد الأساسية'},
'essentials-check':{steps:['راجعي حقيبة الزفاف بندًا بندًا.','اسألي من سيوصل الحقيبة وأين ستوضع.','أضيفي أي احتياج شخصي ناقص.'],result:'قائمة نهائية واقعية'},
'rest-short':{steps:['اكتبي ثلاث أولويات فقط لليوم.','خذي استراحة تنفس هادئ أو مشي قصير.','فوّضي مهمة واحدة إن أمكن.'],result:'يوم أخف وتركيز أوضح'},
'pack-final':{steps:['افحصي محتويات الحقيبة فعليًا.','تأكدي من الشحن والمستندات الضرورية.','سلّمي الحقيبة للشخص المسؤول أو ضعيها بمكان معروف.'],result:'حقيبة جاهزة فعليًا'},
'contacts':{steps:['اجمعي أرقام الصالون والمصورة والقاعة.','أرسلي الجدول النهائي للشخص المساعد.','اتركي هامش وقت للتنقل والتأخير.'],result:'خطة تواصل يوم الزفاف'},
'lay-out':{steps:['جهزي الفستان والإكسسوارات والحذاء.','ضعي الحقيبة والجوال والشاحن بمكان واضح.','راجعي موعد الانطلاق ووسيلة النقل.'],result:'كل الأساسيات في مكانها'},
'rest-final':{steps:['أوقفي أي مهام غير ضرورية.','راجعي فقط ما لا يمكن تأجيله.','امنحي نفسك وقتًا للراحة والنوم.'],result:'التركيز على راحتك لا على الكمال'},
'wedding-day':{steps:['راجعي موعد الوصول والموقع مع الشخص المساعد.','تأكدي من الحقيبة والأغراض الشخصية.','اتركي تفاصيل التنسيق لمن تم الاتفاق معه.'],result:'بداية يوم هادئة وواضحة'}
};
export function taskGuide(id:string){return taskGuides[id.replace(/^base-/,'')]||{steps:['حددي المطلوب بالضبط.','جهزي ما تحتاجينه لتنفيذه.','بعد الانتهاء، حدّثي حالة المهمة.'],result:'مهمة مكتملة'};}
export function dateString(d:Date){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
export function parseDate(s:string){const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d,12)}
export function isValidDate(s:string){return /^\d{4}-\d{2}-\d{2}$/.test(s)&&dateString(parseDate(s))===s}
export function daysUntil(date:string,now=new Date()){if(!isValidDate(date))return -1;const a=parseDate(date),b=new Date(now.getFullYear(),now.getMonth(),now.getDate(),12);return Math.round((a.getTime()-b.getTime())/86400000)}
export function shiftDate(s:string,days:number){const d=parseDate(s);return dateString(new Date(d.getFullYear(),d.getMonth(),d.getDate()+days,12))}
/** Distribute the relevant milestones over the remaining horizon. If the wedding is soon,
 * move earlier preparation tasks into available days rather than silently omitting them.
 * Over-capacity tasks stay in the horizon; no tasks are scheduled in the past. */
export function makePlan(profile:Profile,now=new Date()):Task[]{
 const left=daysUntil(profile.weddingDate,now);if(left<0)return [];
 const horizon=Math.min(30,left),start=shiftDate(profile.weddingDate,-horizon);
 const daily=new Map<string,number>();
 const sorted=[...templates].sort((a,b)=>b.offset-a.offset || a.id.localeCompare(b.id));
 const tasks:Task[]=[];
 for(const t of sorted){
  // For short timelines, compress the original milestone position proportionally.
  const desired=Math.round(t.offset*horizon/30);
  let best=desired,bestScore=Infinity;
  for(let offset=0;offset<=horizon;offset++){
   const date=shiftDate(profile.weddingDate,-offset),used=daily.get(date)||0;
   const overload=Math.max(0,used+t.minutes-profile.minutes);
   const priorityBonus=profile.priorities.includes(t.category)?0:0.15;
   const score=Math.abs(offset-desired)*4+overload*2+used*.015+priorityBonus;
   if(score<bestScore){bestScore=score;best=offset}
  }
  const date=shiftDate(profile.weddingDate,-best);
  daily.set(date,(daily.get(date)||0)+t.minutes);
  tasks.push({id:`base-${t.id}`,title:t.title,category:t.category,date,done:false,minutes:t.minutes});
 }
 return tasks.filter(t=>t.date>=start).sort((a,b)=>a.date.localeCompare(b.date)||a.id.localeCompare(b.id));
}
/** Reschedule only pending template tasks; completed and custom tasks remain untouched. */
export function reschedulePlan(old:Task[],profile:Profile,now=new Date()):Task[]{
 const generated=new Map(makePlan(profile,now).map(t=>[t.id,t]));
 return old.map(t=>!t.custom&&!t.done&&generated.has(t.id)?{...t,date:generated.get(t.id)!.date}:t)
  .sort((a,b)=>a.date.localeCompare(b.date));
}
