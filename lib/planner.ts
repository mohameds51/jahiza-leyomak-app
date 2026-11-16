export type Category='care'|'look'|'bag'|'calm';
export type Task={id:string;title:string;category:Category;date:string;done:boolean;minutes:number;custom?:boolean};
export type Responsibility='other'|'shared'|'mine';
export type Profile={name:string;weddingDate:string;minutes:number;priorities:Category[];responsibility?:Responsibility;include?:string[];contractStatus?:'done'|'pending'|'not-applicable'};
export const categories:Record<Category,string>={care:'العناية',look:'الإطلالة',bag:'حقيبة الزفاف',calm:'الراحة والتواصل'};
export type Template={id:string;title:string;category:Category;offset:number;minutes:number};
export const templates:Template[]=[
{id:'marriage-contract',title:'راجعي إجراءات عقد الزواج والفحص قبل الزواج إذا لم تُستكمل',category:'calm',offset:30,minutes:20},
{id:'priorities',title:'راجعي أولويات تجهيزاتك وحددي ما تم بالفعل',category:'bag',offset:30,minutes:15},
{id:'vendors',title:'راجعي مواعيد مقدمي خدمات يوم الزفاف',category:'look',offset:28,minutes:15},
{id:'care-plan',title:'رتّبي روتين العناية المعتاد المناسب لك',category:'care',offset:27,minutes:15},
{id:'essentials',title:'جهّزي قائمة المستلزمات الشخصية',category:'bag',offset:25,minutes:20},
{id:'makeup',title:'اختاري خبيرة المكياج وسجلي تفاصيل الحجز',category:'look',offset:23,minutes:15},
{id:'rest-week',title:'خصصي وقتًا للراحة وحددي أولويات الأسبوع',category:'calm',offset:21,minutes:10},
{id:'missing',title:'راجعي المستلزمات الناقصة وحددي طريقة توفيرها',category:'bag',offset:19,minutes:20},
{id:'trial-notes',title:'راجعي اتفاق المكياج والشعر وسجلي تفاصيله',category:'look',offset:17,minutes:15},
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
{id:'wedding-day',title:'راجعي المستلزمات المهمة بهدوء',category:'bag',offset:0,minutes:10},
{id:"scope",title:"حددي شكل الحفل وما يدخل ضمن مسؤولياتك",category:"calm",offset:30,minutes:20},
{id:"budget",title:"راجعي ميزانية التجهيز والمبالغ المتبقية",category:"look",offset:29,minutes:25},
{id:"venue",title:"راجعي عقد القاعة ومواعيد الدخول والخروج",category:"look",offset:29,minutes:20},
{id:"guest",title:"ثبّتي العدد التقريبي للمدعوات وآخر موعد للتعديل",category:"calm",offset:28,minutes:20},
{id:"dress",title:"راجعي الفستان والمقاس وموعد الاستلام",category:"look",offset:27,minutes:20},
{id:"shoe",title:"جرّبي الحذاء مع طول الفستان داخل المنزل",category:"look",offset:26,minutes:15},
{id:"hair",title:"ثبّتي حجز الشعر وتفاصيل الخدمة",category:"look",offset:25,minutes:20},
{id:"photo",title:"راجعي اتفاق التصوير والخصوصية والتسليم",category:"look",offset:24,minutes:20},
{id:"invites",title:"راجعي الدعوات والموقع وطريقة الوصول",category:"calm",offset:23,minutes:20},
{id:"accessories",title:"راجعي الطرحة والإكسسوارات والقطع المكملة",category:"look",offset:22,minutes:20},
{id:"transport",title:"حددي وسيلة التنقل وخطة التأخير",category:"look",offset:21,minutes:20},
{id:"beauty-appointments",title:"راجعي مواعيد خدمات العناية المحجوزة",category:"care",offset:20,minutes:15},
{id:"skin-kit",title:"جهّزي منتجات البشرة المعتادة ليوم التجهيز",category:"care",offset:19,minutes:15},
{id:"hair-care",title:"راجعي تعليمات الشعر قبل موعد التصفيف",category:"care",offset:18,minutes:15},
{id:"services",title:"راجعي الخدمات الإضافية المطلوبة فعلًا",category:"look",offset:17,minutes:20},
{id:"payments",title:"اعملي كشفًا بالمستحقات وتواريخ سدادها",category:"look",offset:16,minutes:20},
{id:"emergency",title:"جهزي احتياجات الطوارئ الواقعية",category:"bag",offset:15,minutes:20},
{id:"delegation",title:"وزّعي مسؤوليات يوم الحفل على أشخاص محددين",category:"calm",offset:14,minutes:20},
{id:"run-sheet",title:"اكتبي الجدول الزمني ليوم الزفاف",category:"look",offset:13,minutes:30},
{id:"outfit-review",title:"راجعي الإطلالة كاملة قبل الاستلام النهائي",category:"look",offset:12,minutes:20},
{id:"contact-sheet",title:"أنشئي قائمة تواصل مختصرة ليوم الحفل",category:"calm",offset:11,minutes:20},
{id:"meal",title:"خططي لوجبة ومياه ووقت استراحة أثناء التجهيز",category:"calm",offset:10,minutes:10},
{id:"arrival",title:"راجعي وصول المورّدين ونقاط التسليم",category:"look",offset:9,minutes:20},
{id:"dress-pickup",title:"استلمي الفستان وتحققي من سلامته",category:"look",offset:8,minutes:20},
{id:"bag-handoff",title:"حددي مكان الحقيبة ومن سيحملها",category:"bag",offset:7,minutes:15},
{id:"final-guests",title:"ثبتي الأعداد النهائية مع الجهة المختصة",category:"calm",offset:6,minutes:15},
{id:"weather",title:"راجعي الظروف المؤثرة على الوصول والتنقل",category:"calm",offset:5,minutes:10},
{id:"final-payments",title:"راجعي أي دفعات مستحقة يوم الحفل",category:"look",offset:4,minutes:15},
{id:"day-before",title:"نفذي مراجعة الليلة السابقة دون إضافة مهام جديدة",category:"calm",offset:1,minutes:15},
{id:"handoff",title:"سلّمي جدول يوم الزفاف للشخص المسؤول",category:"calm",offset:0,minutes:10},
];

// Wedding coordination is optional: neither payment nor venue management is presumed to be the bride's duty.
export const optionalAreas={venue:'القاعة والضيافة',guests:'الدعوات والضيوف',payments:'مدفوعات الحفل',photo:'التصوير',transport:'التنقل والتنسيق'} as const;
export type OptionalArea=keyof typeof optionalAreas;
const optionalTaskAreas:Record<string,OptionalArea>={venue:'venue',guest:'guests',invites:'guests','final-guests':'guests',budget:'payments',payments:'payments','final-payments':'payments',photo:'photo',transport:'transport',arrival:'venue',services:'venue'};
const legalTaskIds=new Set(['marriage-contract']);
export function applicableTemplates(profile:Profile):Template[]{
 const included=new Set(profile.include||[]);
 return templates.filter(t=>{
  const area=optionalTaskAreas[t.id];
  if(area && !included.has(area))return false;
  if(legalTaskIds.has(t.id) && profile.contractStatus!=='pending')return false;
  return true;
 });
}
// خطوات عملية مصغّرة لكل محطة: ليست مجرد تذكير، بل طريقة تنفيذ ونتيجة واضحة.
export const taskGuides:Record<string,{steps:string[];result:string}>={
'marriage-contract':{steps:['راجعي حالة الفحص قبل الزواج عبر القنوات الرسمية عند انطباقه.','راجعي متطلبات عقد الزواج في ناجز مع الأطراف المعنية دون تسجيل أرقام الهويات أو بيانات الفحص داخل التطبيق.','حددي الإجراء المتبقي والمسؤول عنه وموعد إتمامه.'],result:'معرفة الإجراءات النظامية المتبقية دون تخزين معلومات حساسة'},
'priorities':{steps:['اكتبي ما تم حجزه أو شراؤه بالفعل.','حددي ثلاث أولويات تحتاج قرارًا هذا الأسبوع.','احذفي من قائمتك ما لا يناسب حفلك أو ميزانيتك.'],result:'قائمة أولويات واضحة بدل مهام متفرقة'},
'vendors':{steps:['اجمعي اسم ورقم كل مزود خدمة في مكان واحد.','راجعي الموعد والموقع والعربون والمتبقي.','حددي من سيتابع مع كل مزود يوم الزفاف.'],result:'جدول مؤكد للخدمات والمسؤوليات'},
'care-plan':{steps:['حددي روتين البشرة والشعر والجسم الذي اعتدتِ عليه.','اختاري أيامًا واقعية للتنفيذ في أداة العناية.','تجنبي بدء علاجات أو منتجات قوية دون استشارة مختص.'],result:'روتين قابل للاستمرار حتى يوم الزفاف'},
'essentials':{steps:['افتحي حقيبة الزفاف وراجعي العناصر المقترحة.','أضيفي احتياجاتك الخاصة واحذفي غير المناسب.','حددي من سيتولى إحضار الحقيبة.'],result:'قائمة حقيبة شخصية ومسؤول محدد'},
'makeup':{steps:['حددي أسلوب المكياج الذي يناسب ذوقك.','قارني الأعمال السابقة والتكلفة وشروط الحجز.','سجلي الجهة والموعد والعربون في منظم الإطلالة.'],result:'اختيار واضح وحجز موثق'},
'rest-week':{steps:['اختاري ثلاث مهام مهمة فقط لهذا الأسبوع.','وزعي الباقي على أيام مختلفة.','اتركي وقتًا خاليًا من التجهيزات للراحة.'],result:'أسبوع متوازن بدون تكديس'},
'missing':{steps:['راجعي العناصر غير المجهزة في الحقيبة.','صنفيها إلى ضروري واختياري.','حددي موعد توفير الضروري فقط.'],result:'قائمة نواقص قابلة للتنفيذ'},
'trial-notes':{steps:['راجعي تفاصيل الاتفاق مع خبيرة المكياج ومصففة الشعر.','سجلي الموعد والموقع والمبلغ المتبقي.','حدّثي حالة كل حجز بعد التأكيد.'],result:'تفاصيل إطلالة موثقة وقابلة للمراجعة'},
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
'wedding-day':{steps:['راجعي موعد الوصول والموقع مع الشخص المساعد.','تأكدي من الحقيبة والأغراض الشخصية.','اتركي تفاصيل التنسيق لمن تم الاتفاق معه.'],result:'بداية يوم هادئة وواضحة'},
"scope":{steps:["اكتبي نوع المناسبة: حفل في قاعة، منزل، أو مناسبة أصغر.","حددي ما تتولاه القاعة أو المنسقة وما تتولين أنتِ متابعته.","ضعي علامة «لا ينطبق» على أي بند لا يخص حفلك."],result:"قائمة مسؤوليات مناسبة لحفلك"},
"budget":{steps:["اجمعي الأسعار المتفق عليها للحجوزات الأساسية.","اكتبي العربون المدفوع والمبلغ المتبقي وتاريخ السداد لكل جهة.","اتركي مبلغًا احتياطيًا واقعيًا للمصروفات الطارئة، دون شراء إضافات غير ضرورية."],result:"كشف بالمستحقات ومواعيد دفعها"},
"venue":{steps:["تأكدي من تاريخ الحفل وساعات استخدام القاعة وموعد دخول المورّدين.","راجعي الخدمات المشمولة: الضيافة، التنسيق، الصوت، الإضاءة، الغرف.","سجلي اسم مسؤول القاعة ورقمه وأي رسوم إضافية أو شروط إلغاء."],result:"تفاصيل القاعة واضحة ومكتوبة"},
"guest":{steps:["راجعي العدد مع الأسرة والشخص المسؤول عن الدعوات.","اسألي القاعة أو الضيافة عن آخر موعد لتأكيد العدد النهائي.","دوّني أي ترتيبات خاصة بالجلوس أو الوصول أو احتياجات الضيوف."],result:"عدد متفق عليه وموعد نهائي للتأكيد"},
"dress":{steps:["تأكدي من موعد القياس أو التعديل الأخير وموعد الاستلام.","راجعي الطول مع الحذاء، والإغلاق، والحركة والجلوس براحة.","اسألي عن طريقة الحفظ والنقل والكيّ المسموح بها."],result:"فستان مناسب وخطة استلام ونقل"},
"shoe":{steps:["جرّبي الحذاء لفترة قصيرة في مكان آمن.","تأكدي أن طول الفستان مناسب للحذاء المختار.","جهزي بديلًا مريحًا إذا احتجتِ، دون الاعتماد على حذاء جديد غير مجرب."],result:"حذاء مناسب وخطة بديلة للراحة"},
"hair":{steps:["راجعي أعمال المصففة والأسلوب المتفق عليه.","تأكدي من الموعد والمكان والمدة وما إذا كانت الإكسسوارات والتركيب مشمولة.","سجلي العربون والمتبقي وسياسة التأخير أو الإلغاء."],result:"حجز شعر واضح وتفاصيله محفوظة"},
"photo":{steps:["تأكدي من عدد ساعات التصوير، والوقت، والمكان، والمخرجات المتفق عليها.","اتّفقي صراحة على سياسة نشر الصور ومشاركتها ومن يحق له الاطلاع عليها.","حددي الشخص الذي سيتواصل مع المصورة أثناء الحفل."],result:"اتفاق تصوير واضح يحترم الخصوصية"},
"invites":{steps:["تأكدي من كتابة التاريخ والوقت واسم القاعة والموقع بدقة.","حددي من سيرسل الدعوات ويتابع الاستفسارات.","جهزي رسالة قصيرة بالموقع والتعليمات المهمة إن وجدت."],result:"دعوات صحيحة وشخص مسؤول عن المتابعة"},
"accessories":{steps:["اجمعي الطرحة والحلي ومشابك الشعر وأي قطع خاصة بالإطلالة.","تأكدي من تناسقها مع الفستان وتسريحة الشعر.","احتفظي بالقطع الصغيرة في أكياس منفصلة مع تسمية واضحة."],result:"إطلالة مكتملة دون قطع مفقودة"},
"transport":{steps:["اكتبي مواقع التجهيز والتصوير والحفل وترتيب التنقل بينها.","حددي السائق أو الشخص المسؤول وأرقام التواصل.","اتركي وقتًا احتياطيًا معقولًا للزحام والتأخير."],result:"مسار انتقال واضح مع بديل عند الحاجة"},
"beauty-appointments":{steps:["اجمعي مواعيد أي جلسات أو خدمات سبق الاتفاق عليها.","راجعي تعليمات المختصة والفترة المناسبة قبل المناسبة.","تجنبي إدخال إجراءات تجميلية جديدة أو عالية التهييج قرب الحفل دون تقييم مختص."],result:"جدول عناية آمن ومتوافق مع الحجوزات"},
"skin-kit":{steps:["اختاري المنتجات التي تعرفين أن بشرتك تتحملها.","راجعي توفر المرطب والواقي وما تستخدمينه عادةً.","لا تجربي تقشيرًا قويًا أو منتجًا جديدًا قبل المناسبة مباشرة."],result:"مستلزمات عناية مألوفة ومجهزة"},
"hair-care":{steps:["اسألي المصففة متى يُفضّل غسل الشعر بالنسبة للموعد.","تأكدي من أي تعليمات تخص الزيوت أو المنتجات أو الإضافات.","لا تبدئي صبغة أو علاجًا جديدًا في اللحظة الأخيرة."],result:"تعليمات شعر واضحة دون تجارب مفاجئة"},
"services":{steps:["حددي ما إذا كان الحفل يحتاج تنسيق زهور أو صوتًا أو إضاءة أو ضيافة مستقلة.","احذفي أي خدمة مشمولة بالفعل في عقد القاعة.","سجلي اسم المسؤول والموعد والمتبقي فقط للخدمات التي تنطبق."],result:"خدمات مؤكدة بلا ازدواجية في الدفع"},
"payments":{steps:["اكتبي لكل جهة المبلغ الإجمالي والمدفوع والمتبقي.","راجعي موعد السداد وطريقته ومن سيتولى الدفع.","احتفظي بإثباتات السداد في مكان آمن خارج التطبيق عند الحاجة."],result:"قائمة مستحقات واضحة قابلة للمراجعة"},
"emergency":{steps:["راجعي ما تحتاجينه شخصيًا مثل مناديل ودبابيس آمنة ولاصق مناسب ووسيلة شحن.","أضيفي فقط ما تستخدمينه فعلًا من مستلزماتك المعتادة.","حددي من سيحتفظ بالحقيبة وأين ستكون."],result:"حقيبة طوارئ صغيرة وعملية"},
"delegation":{steps:["اختاري شخصًا للتواصل مع القاعة وآخر للمتابعة مع مقدمي الخدمات عند الحاجة.","اكتبي لكل شخص مهمة واضحة ورقم الجهة التي سيتواصل معها.","شاركيهم الجدول النهائي بعد تأكيده، دون مشاركة بيانات أكثر من اللازم."],result:"مسؤوليات موزعة بدل انشغالك بالتنسيق"},
"run-sheet":{steps:["ابدئي بموعد الوصول المطلوب للقاعة أو التصوير.","احسبي عكسيًا وقت الشعر والمكياج وارتداء الفستان والتنقل مع هامش احتياطي.","راجعي الجدول مع الجهات المسؤولة وعدليه حسب مددها الفعلية."],result:"جدول ساعات واقعي ليوم الحفل"},
"outfit-review":{steps:["راجعي الفستان والطرحة والحذاء والإكسسوارات معًا.","تأكدي من توفر كل قطعة ومن الشخص الذي سينقلها.","سجلي أي تعديل أخير ومتى سينتهي، دون تغييرات غير ضرورية."],result:"كل قطعة لها حالة ومكان ومسؤول"},
"contact-sheet":{steps:["اجمعي رقم القاعة والمكياج والشعر والمصورة والنقل إن كانت خدماتك تتضمنها.","أضيفي اسم المسؤول البديل عند عدم الرد.","شاركي القائمة مع شخص أو اثنين مسؤولين فقط."],result:"قائمة اتصالات جاهزة عند الحاجة"},
"meal":{steps:["حددي وقتًا واقعيًا لتناول طعام مألوف ومياه خلال يوم التجهيز.","اسألي عن إمكانية استراحة قصيرة بين المواعيد.","تجنبي الاعتماد على جدول مزدحم بلا وقت للأكل أو الراحة."],result:"وقت أساسي للراحة والطعام داخل الجدول"},
"arrival":{steps:["تأكدي من وقت دخول كل مزود خدمة ومكان الوصول.","راجعي متطلبات التصاريح أو مواقف السيارات مع القاعة إن وجدت.","حددي من سيستقبل كل جهة ويحل أي تأخير."],result:"خطة وصول واضحة للجهات المشاركة"},
"dress-pickup":{steps:["راجعي القطعة عند الاستلام أمام الجهة الموردة.","تأكدي من الملحقات وطريقة التغليف والنقل.","احتفظي بمعلومات التواصل في حال وجود مشكلة تحتاج إصلاحًا."],result:"فستان مستلم ومفحوص"},
"bag-handoff":{steps:["اجمعي محتويات الحقيبة الأساسية حسب قائمتك.","حددي الشخص المسؤول عن نقلها ومكان حفظها.","اتّفقي معه على موعد تسليم واضح."],result:"الحقيبة لها مسؤول ومكان محدد"},
"final-guests":{steps:["راجعي آخر تحديث للعدد مع الشخص المسؤول.","أبلغي القاعة أو الضيافة ضمن الموعد المتفق عليه.","احتفظي بتأكيد العدد أو التعديل كتابيًا."],result:"عدد نهائي مؤكد"},
"weather":{steps:["راجعي احتمالات الازدحام أو تغير الطقس إن كان التنقل خارجيًا.","أكدي مكان انتظار السيارة ومسار الوصول.","جهزي بديلًا بسيطًا عند الحاجة دون قلق مبالغ فيه."],result:"خطة تنقل مرنة"},
"final-payments":{steps:["حددي الجهات التي سيُدفع لها مبلغ يوم المناسبة.","اتفقي مسبقًا على الشخص المسؤول عن الدفع وطريقته.","لا تضعي على نفسك مهمة إدارة المدفوعات أثناء التجهيز."],result:"مدفوعات اليوم مفوضة وواضحة"},
"day-before":{steps:["راجعي الجدول والأرقام والحقيبة والفستان مرة أخيرة فقط.","اتركي أي تحسين اختياري لا يؤثر على سير اليوم.","حددي وقتًا مناسبًا للنوم والراحة."],result:"مراجعة نهائية قصيرة بلا تكديس"},
"handoff":{steps:["تأكدي أن الشخص المسؤول معه أرقام الجهات والجدول.","أخبريه بأي أولوية مهمة أو تغيير أخير.","ركزي على تجهيزك واتركي التنسيق التشغيلي له."],result:"يوم زفاف منظم بمسؤول متابعة"},
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
 const sorted=[...applicableTemplates(profile)].sort((a,b)=>b.offset-a.offset || a.id.localeCompare(b.id));
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
 return old.filter(t=>t.custom||t.done||generated.has(t.id)).map(t=>!t.custom&&!t.done&&generated.has(t.id)?{...t,date:generated.get(t.id)!.date}:t)
  .sort((a,b)=>a.date.localeCompare(b.date));
}

/** Add newly published milestones to an existing plan without overwriting decisions,
 * completion flags, user dates, custom tasks or renamed tasks. */
export function upgradePlan(existing:Task[],profile:Profile,now=new Date()):Task[]{
 const generated=makePlan(profile,now);
 const eligible=new Set(generated.map(t=>t.id));
 const retained=existing.filter(t=>t.custom||t.done||eligible.has(t.id));
 const present=new Set(retained.map(t=>t.id));
 const added=generated.filter(t=>!present.has(t.id));
 return [...retained,...added].sort((a,b)=>a.date.localeCompare(b.date)||a.id.localeCompare(b.id));
}
