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
