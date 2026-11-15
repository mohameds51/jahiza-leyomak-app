'use client';
import {useEffect,useState} from 'react';
import {BagItem,CareCompletion,CareRoutine,careStats,bagStats} from '../lib/tools';
import {LookTrial} from '../lib/experience';
import {dateString} from '../lib/planner';

type Snapshot={bag:{total:number;done:number};care:{due:number;done:number};trials:LookTrial[]};
const empty:Snapshot={bag:{total:0,done:0},care:{due:0,done:0},trials:[]};
function load():Snapshot{
 try{
  const get=<T,>(key:string,fallback:T):T=>{const raw=localStorage.getItem(key);return raw?JSON.parse(raw) as T:fallback};
  const bag=get<BagItem[]>('jahiza-bag-v1',[]);
  const routines=get<CareRoutine[]>('jahiza-care-v1',[]);
  const completions=get<CareCompletion[]>('jahiza-care-completions-v1',[]);
  const trials=get<LookTrial[]>('jahiza-looks-v1',[]);
  return {bag:bagStats(bag),care:careStats(routines,completions,dateString(new Date())),trials:trials.filter(x=>x.date>=dateString(new Date())).sort((a,b)=>a.date.localeCompare(b.date)).slice(0,2)};
 }catch{return empty}
}
export default function Overview({go}:{go:(tab:'care'|'look'|'bag')=>void}){
 const [snapshot,setSnapshot]=useState<Snapshot>(empty);
 useEffect(()=>{const refresh=()=>setSnapshot(load());refresh();window.addEventListener('jahiza-data-change',refresh);window.addEventListener('storage',refresh);window.addEventListener('focus',refresh);return()=>{window.removeEventListener('jahiza-data-change',refresh);window.removeEventListener('storage',refresh);window.removeEventListener('focus',refresh)}},[]);
 return <section className="overviewSection" aria-label="متابعة أدواتك"><div className="overviewHead"><div><span className="sectionKicker">كل تجهيزاتك في مكان واحد</span><h2>لوحة متابعة استعداداتك</h2><p>تابعي تقدم الأدوات من هنا، وادخلي مباشرة على الجزء الذي يحتاج اهتمامك.</p></div></div><div className="overviewGrid">
 <button className="overviewCard" onClick={()=>go('care')}><span className="overviewIcon">♡</span><strong>عناية اليوم</strong><span>{snapshot.care.due?`${snapshot.care.done} من ${snapshot.care.due} خطوات مكتملة`:'افتحي الأداة لتنظيم روتينك'}</span><b>افتحي روتينك ←</b></button>
 <button className="overviewCard" onClick={()=>go('bag')}><span className="overviewIcon">✧</span><strong>حقيبة الزفاف</strong><span>{snapshot.bag.total?`${snapshot.bag.done} من ${snapshot.bag.total} مستلزم جاهز`:'ابدئي بتجهيز قائمة حقيبتك'}</span><b>راجعي الحقيبة ←</b></button>
 <button className="overviewCard" onClick={()=>go('look')}><span className="overviewIcon">✦</span><strong>تجارب الإطلالة</strong><span>{snapshot.trials.length?`أقرب تجربة ${snapshot.trials[0].date} — ${snapshot.trials[0].kind==='makeup'?'مكياج':'شعر'}`:'لم تسجلي موعد تجربة قادمًا'}</span><b>نظّمي التجارب ←</b></button>
 </div><p className="overviewNote">مؤشرات الأدوات مستقلة عن نسبة إنجاز الخطة؛ لا تُحسب أي خطوة مكتملة إلا بعد تأكيدك لها.</p></section>
}
