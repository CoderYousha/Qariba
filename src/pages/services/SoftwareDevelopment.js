import { Box, Typography } from "@mui/material";
import Background from '../../images/backgrounds/background2.jpg';
import { useState } from "react";

function SoftwareDevelopment() {
    const [selectedService, setSelectedService] = useState(1);

    return (
        <Box dir="rtl">
            <img className="w-full h-screen absolute top-0 -z-10" src={Background} />

            {/* Starter */}
            <Box className="w-full h-screen pt-32">
                <Typography variant="h6" className="text-white text-center">شركة قريبة لتطوير البرمجيات</Typography>
                <Typography variant="h2" fontWeight={800} className="text-white text-center !my-5">من فكرة إلى نظام متكامل يصنع فرقا في عملك</Typography>
                <Typography variant="h2" fontWeight={800} className="text-white text-center">ونقربك من النجاح</Typography>
                <Typography variant="body1" className="text-white text-center !mt-5">فكرة قوية بدون نظام احترافي تبقى مجرد تصور.
                    في قريبة نحول أفكارك إلى حلول برمجية متكاملة تُبنى على أسس تقنية قوية وتعمل بكفاءة عالية.
                </Typography>
                <Typography variant="body1" className="text-white text-center !mt-5">لا نطوّر مواقع وتطبيقات فقط، بل نبني أنظمة ذكية تساعدك على إدارة أعمالك، أتمتة عملياتك، وتحقيق نمو قابل للتوسع.</Typography>
                <Typography variant="body1" className="text-white text-center !mt-5">نصمم منصات ويب متطورة، تطبيقات موبايل احترافية، وأنظمة مخصصة (CRM / ERP) تواكب احتياجاتك وتدعم تطورك المستقبلي.</Typography>
                <Typography variant="body1" className="text-white text-center !mt-5">نعتمد على أحدث التقنيات، ونهتم بأدق التفاصيل في تجربة المستخدم، الأداء، والأمان، لنضمن لك منتجاً رقمياً يليق بطموحاتك.</Typography>
                <Typography variant="h6" className="text-white text-center !mt-5" fontWeight={800}>مع قريبة البرمجة ليست كودا فقط... بل استراتيجية تقنية تقربك من أهدافك.</Typography>
            </Box>

            <Box className="w-full min-h-screen px-5 py-5" sx={{ backgroundColor: '#F0D7A1' }}>
                <Typography variant="h4" fontWeight={800} className="text-center !my-10">خدمات تصميم وتطوير البرمجيات الاحترافية</Typography>
                <Typography variant="body1" className="text-center !mt-5">البرمجيات اليوم ليست مجرد أدوات تشغيل، بل هي المحرك الحقيقي لنمو الأعمال وتطورها.
                    في قريبة للحلول البرمجية نحول أفكارك إلى أنظمة ذكية، وتحدياتك إلى حلول تقنية عملية تدعم استقرارك وتسرّع توسعك.
                </Typography>
                <Typography variant="body1" className="text-center !mt-5">نقدم حلولاً برمجية متكاملة تجمع بين قوة البرمجة، دقة التحليل، وتجربة المستخدم الذكية، لنمنحك نظامًا يعمل بكفاءة، يتطور معك، ويخدم أهدافك على المدى الطويل.</Typography>
                <Box className="mt-20 flex justify-between">
                    <Box className="px-2 py-3 border bg-opacity-50 cursor-pointer border-black rounded-3xl" sx={{ backgroundColor: selectedService === 1 ? 'rgb(255 255 255 / var(--tw-bg-opacity, 1))' : 'none', border: selectedService === 1 ? '1px solid black' : 'none' }} onClick={() => setSelectedService(1)}>جمع المتطلبات وتحليلها</Box>
                    <Box className="px-2 py-3 bg-opacity-50 cursor-pointer border-black rounded-3xl" sx={{ backgroundColor: selectedService === 2 ? 'rgb(255 255 255 / var(--tw-bg-opacity, 1))' : 'none', border: selectedService === 2 ? '1px solid black' : 'none' }} onClick={() => setSelectedService(2)}>تصميم واجهات المستخدم</Box>
                    <Box className="px-2 py-3 bg-opacity-50 cursor-pointer border-black rounded-3xl" sx={{ backgroundColor: selectedService === 3 ? 'rgb(255 255 255 / var(--tw-bg-opacity, 1))' : 'none', border: selectedService === 3 ? '1px solid black' : 'none' }} onClick={() => setSelectedService(3)}>الدومين واستضافة موقع</Box>
                    <Box className="px-2 py-3 bg-opacity-50 cursor-pointer border-black rounded-3xl" sx={{ backgroundColor: selectedService === 4 ? 'rgb(255 255 255 / var(--tw-bg-opacity, 1))' : 'none', border: selectedService === 4 ? '1px solid black' : 'none' }} onClick={() => setSelectedService(4)}>تصميم مواقع احترافية عبر WordPress</Box>
                    <Box className="px-2 py-3 bg-opacity-50 cursor-pointer border-black rounded-3xl" sx={{ backgroundColor: selectedService === 5 ? 'rgb(255 255 255 / var(--tw-bg-opacity, 1))' : 'none', border: selectedService === 5 ? '1px solid black' : 'none' }} onClick={() => setSelectedService(5)}>تطوير تطبيقات الموبايل</Box>
                    <Box className="px-2 py-3 bg-opacity-50 cursor-pointer border-black rounded-3xl" sx={{ backgroundColor: selectedService === 6 ? 'rgb(255 255 255 / var(--tw-bg-opacity, 1))' : 'none', border: selectedService === 6 ? '1px solid black' : 'none' }} onClick={() => setSelectedService(6)}>تصميم موتطوير متاجر إلكترونية</Box>
                    <Box className="px-2 py-3 bg-opacity-50 cursor-pointer border-black rounded-3xl" sx={{ backgroundColor: selectedService === 7 ? 'rgb(255 255 255 / var(--tw-bg-opacity, 1))' : 'none', border: selectedService === 7 ? '1px solid black' : 'none' }} onClick={() => setSelectedService(7)}>تطوير مواقع ويب</Box>
                </Box>
                {
                    selectedService === 1 ?
                        <Box key={selectedService} className="mt-10 selected-service">
                            <Typography variant="h6" fontWeight={800} sx={{ color: '#793503' }} className="">الواجهة الصحيحة تبدأ بفهم عميق لاحتياجاتك</Typography>
                            <Typography variant="body1" className="!mt-5">في قريبة للحلول البرمجية نؤمن أن أي مشروع ناجح لا يبدأ بالكود… بل يبدأ بفهم دقيق للرؤية، الأهداف، والتحديات.</Typography>
                            <Typography variant="body1" className="!mt-5">نقود مرحلة جمع وتحليل المتطلبات باحترافية عالية لنحوّل فكرتك إلى وثيقة واضحة، منظمة، وقابلة للتنفيذ، تقلل المخاطر وتضمن تنفيذًا دقيقًا بدون مفاجآت.</Typography>
                            <Typography variant="subtitle1" className="!mt-5">ومن خلال هذه المرحلة نضمن لك:</Typography>
                            <ul className="list-disc pr-5 mt-5">
                                <li className="font-medium">تحليل شامل لفكرتك وأهدافك: جلسات اكتشاف لفهم نموذج عملك، جمهورك، ونقاط القوة في مشروعك.</li>
                                <li className="mt-5 medium">توثيق احترافي للمتطلبات (SRS): تحويل الأفكار إلى وثيقة تفصيلية تشمل الوظائف، الأدوار، السيناريوهات، وقواعد العمل.</li>
                                <li className="mt-5 medium">تصميم تدفق العمليات (Workflow): رسم خريطة واضحة لرحلة المستخدم داخل النظام لضمان تجربة سلسة ومنطقية.</li>
                                <li className="mt-5 medium">تقليل الأخطاء والتكاليف المستقبلية: دراسة دقيقة قبل البرمجة لتفادي إعادة التطوير أو تضخم الميزانية لاحقًا.</li>
                                <li className="mt-5 medium">خطة تنفيذ واضحة: تقسيم المشروع إلى مراحل زمنية مدروسة مع تحديد أولويات التطوير.</li>
                            </ul>
                        </Box>
                        :
                        selectedService === 2 ?
                            <Box key={selectedService} className="mt-10 selected-service">
                                <Typography variant="h6" fontWeight={800} sx={{ color: '#793503' }} className="">تصميم واجهات المستخدم… حيث تتحول الفكرة إلى تجربة تُبهر</Typography>
                                <Typography variant="body1" className="!mt-5">واجهة المستخدم ليست مجرد ألوان وأزرار بل هي الانطباع الأول، وهي اللحظة التي يقرر فيها العميل أن يكمل معك أو يغادر</Typography>
                                <Typography variant="body1" className="!mt-5">في قريبة للحلول البرمجية نصمم واجهات ذكية تجمع بين الجاذبية البصرية وسهولة الاستخدام، لنمنح مشروعك حضورًا رقميًا احترافيًا يعكس قوة علامتك ويحوّل الزوار إلى عملاء.</Typography>
                                <Typography variant="subtitle1" className="!mt-5">ماذا نقدم في تصميم واجهات المستخدم؟</Typography>
                                <ul className="list-disc pr-5 mt-5">
                                    <li className="medium"> تصميم عصري مميز: واجهات حديثة تعكس هوية مشروعك وتمنحه طابعًا احترافيًا فريدًا.</li>
                                    <li className="mt-5 medium"> تجربة استخدام سلسة (UX-driven UI): نصمم بناءً على دراسة سلوك المستخدم لضمان تنقل سهل وواضح.</li>
                                    <li className="mt-5 medium">تصميم متجاوب بالكامل: يعمل بكفاءة على جميع الأجهزة (موبايل – تابلت – كمبيوتر).</li>
                                    <li className="mt-5 medium"> توازن بين الجمال والوظيفة: ليس فقط شكل جميل… بل تصميم يخدم الهدف التجاري.</li>
                                    <li className="mt-5 medium"> نماذج أولية تفاعلية (Prototypes): تشاهد وتختبر مشروعك قبل بدء البرمجة.</li>
                                </ul>
                            </Box>
                            :
                            selectedService === 3 ?
                                <Box key={selectedService} className="mt-10 selected-service">
                                    <Typography variant="h6" fontWeight={800} sx={{ color: '#793503' }} className="">الدومين والاستضافة… الأساس الذي يقوم عليه حضورك الرقمي</Typography>
                                    <Typography variant="body1" className="!mt-5">قبل أن يرى العميل تصميم موقعك يجب أن يكون له عنوان واضح ومنزل آمن على الإنترنت.</Typography>
                                    <Typography variant="body1" className="!mt-5">في قريبة للحلول البرمجية نوفر لك الدومين المناسب والاستضافة القوية لتضمن سرعة، أمان، واستقرار موقعك على مدار الساعة.</Typography>
                                    <Typography variant="subtitle1" className="!mt-5">حجز الدومين (اسم النطاق):</Typography>
                                    <ul className="list-disc pr-5 mt-5">
                                        <li className="medium">اختيار اسم احترافي يعكس نشاطك</li>
                                        <li className="mt-5 medium">حجز دومينات محلية وعالمية (.com – .net – .ae – وغيرها)</li>
                                        <li className="mt-5 medium">حماية ملكية الدومين</li>
                                        <li className="mt-5 medium">ربط الدومين بالموقع والبريد الرسمي</li>
                                        <Typography variant="subtitle1" fontWeight={800} className="!mt-5">اسمك على الإنترنت هو هويتك الرقمية… ونساعدك تختاره صح من البداية.</Typography>
                                    </ul>
                                </Box>
                                :
                                selectedService === 4 ?
                                    <Box key={selectedService} className="mt-10 selected-service">
                                        <Typography variant="h6" fontWeight={800} sx={{ color: '#793503' }} className="">المرونة والقوة في منصة واحدة</Typography>
                                        <Typography variant="body1" className="!mt-5">إذا كنت تبحث عن موقع احترافي، سريع، وسهل الإدارة فـ WordPress هو الخيار الذكي، ومع قريبة نحوله إلى منصة قوية تخدم أهدافك وتدعم نمو أعمالك.</Typography>
                                        <Typography variant="body1" className="!mt-5">نصمم مواقع ووردبريس بأسلوب يجمع بين الجمال البصري، الأداء العالي، وسهولة التحكم، لتملك موقعك بالكامل بدون تعقيد.</Typography>
                                        <Typography variant="subtitle1" className="!mt-5">ماذا نقدم في تصميم مواقع WordPress؟</Typography>
                                        <ul className="list-disc pr-5 mt-5">
                                            <li className="medium">تصميم مخصص بالكامل: لا نستخدم قوالب جاهزة بشكل عشوائي بل نصمم موقعًا يعكس هوية علامتك بدقة.</li>
                                            <li className="mt-5 medium">تحكم سهل في المحتوى: لوحة تحكم مرنة تتيح لك تعديل النصوص والصور وإضافة الصفحات بسهولة.</li>
                                            <li className="mt-5 medium">سرعة وأداء محسّن: تهيئة الموقع ليكون سريع التحميل ومتوافق مع معايير Google.</li>
                                            <li className="mt-5 medium">تهيئة لمحركات البحث (SEO Ready): بنية صحيحة تساعدك على الظهور في نتائج البحث.</li>
                                            <li className="mt-5 medium">موقع متجاوب بالكامل: يعمل بكفاءة على الموبايل والتابلت والكمبيوتر.</li>
                                            <li className="mt-5 medium">إمكانية التوسع مستقبلاً: إضافة متجر إلكتروني، مدونة، نظام حجز، أو أي ميزة أخرى بسهولة.</li>
                                        </ul>
                                    </Box>
                                    :
                                    selectedService === 5 ?
                                        <Box key={selectedService} className="mt-10 selected-service">
                                            <Typography variant="h6" fontWeight={800} sx={{ color: '#793503' }} className="">تطبيقك… هو أقرب طريق لعملائك</Typography>
                                            <Typography variant="body1" className="!mt-5">اليوم، الموبايل ليس مجرد جهاز بل هو المنصة الأولى التي يتفاعل فيها العميل مع علامتك التجارية.</Typography>
                                            <Typography variant="body1" className="!mt-5"></Typography>
                                            <Typography variant="body1" className="!mt-5">في قريبة للحلول البرمجية نطوّر تطبيقات موبايل ذكية، سريعة، وسهلة الاستخدام، مصممة لتحقق أهدافك التجارية وتمنح عملاءك تجربة سلسة ومميزة.</Typography>
                                            <Typography variant="subtitle1" className="!mt-5">ماذا نقدم في تطوير تطبيقات الموبايل؟</Typography>
                                            <ul className="list-disc pr-5 mt-5">
                                                <li className="medium">تطبيقات iOS و Android: تطوير احترافي يعمل بكفاءة على جميع الأجهزة.</li>
                                                <li className="mt-5 medium">تصميم تجربة مستخدم مدروسة (UX/UI): واجهة جذابة وسهلة تجعل المستخدم يعود مرة بعد مرة.</li>
                                                <li className="mt-5 medium">أداء سريع واستقرار عالي: برمجة نظيفة تضمن سرعة واستجابة بدون أخطاء.</li>
                                                <li className="mt-5 medium">ربط أنظمة وAPI Integration: توصيل التطبيق مع أنظمتك الداخلية أو بوابات الدفع أو الخرائط.</li>
                                                <li className="mt-5 medium">إشعارات ذكية (Push Notifications): لزيادة التفاعل وتعزيز المبيعات.</li>
                                                <li className="mt-5 medium">لوحة تحكم لإدارة التطبيق: تحكم كامل بالمحتوى، المستخدمين، والتقارير.</li>
                                            </ul>
                                        </Box>
                                        :
                                        selectedService === 6 ?
                                            <Box key={selectedService} className="mt-10 selected-service">
                                                <Typography variant="h6" fontWeight={800} sx={{ color: '#793503' }} className="">متجرك الرقمي… يعمل 24/7 لزيادة مبيعاتك</Typography>
                                                <Typography variant="body1" className="!mt-5">المتجر الإلكتروني ليس مجرد منصة عرض منتجات،
                                                    بل هو نظام بيع متكامل يصنع تجربة شراء سهلة، سريعة، وآمنة لعملائك.</Typography>
                                                <Typography variant="body1" className="!mt-5">في قريبة للحلول البرمجية نصمم ونطوّر متاجر إلكترونية احترافية تجمع بين الجاذبية البصرية، الأداء العالي، وأنظمة الإدارة الذكية، لنمنحك منصة بيع قوية قابلة للنمو والتوسع.</Typography>
                                                <Typography variant="subtitle1" className="!mt-5">ماذا نقدم في تطوير المتاجر الإلكترونية؟</Typography>
                                                <ul className="list-disc pr-5 mt-5">
                                                    <li className="medium">تصميم متجر احترافي يعكس هوية علامتك: واجهة جذابة تبني الثقة وتحفّز الشراء.</li>
                                                    <li className="mt-5 medium">تجربة شراء سلسة وسريعة: تنقل بسيط، سلة ذكية، وخطوات دفع مختصرة.</li>
                                                    <li className="mt-5 medium">ربط بوابات الدفع والشحن: تكامل كامل مع وسائل الدفع المحلية  وأنظمة الشحن.</li>
                                                    <li className="mt-5 medium">لوحة تحكم متكاملة لإدارة المنتجات والطلبات: تحكم كامل بالمخزون، الأسعار، العروض، والتقارير.</li>
                                                    <li className="mt-5 medium">تحسين الأداء والسرعة: تحميل سريع وتجربة استخدام مريحة على جميع الأجهزة.</li>
                                                </ul>
                                            </Box>
                                            :
                                            <Box key={selectedService} className="mt-10 selected-service">
                                                <Typography variant="h6" fontWeight={800} sx={{ color: '#793503' }} className="">تطوير مواقع ويب احترافية</Typography>
                                                <Typography variant="body1" className="!mt-5">موقعك هو أقوى أداة تسويق وبيع تمتلكها</Typography>
                                                <Typography variant="body1" className="!mt-5">في العالم الرقمي اليوم، موقعك ليس مجرد واجهة بل هو مركز عملياتك، وأداة التأثير الأولى على عملائك.</Typography>
                                                <Typography variant="body1" className="!mt-5">في قريبة للحلول البرمجية نطوّر مواقع ويب متكاملة تجمع بين التصميم العصري، الأداء السريع، والبنية التقنية القوية، لنمنحك منصة رقمية تعكس احترافك وتدعم نمو أعمالك.</Typography>
                                                <Typography variant="subtitle1" className="!mt-5">ماذا نقدم في تطوير مواقع الويب؟</Typography>
                                                <ul className="list-disc pr-5 mt-5">
                                                    <li className="medium">مواقع تعريفية للشركات: تعكس هوية علامتك وتبني الثقة لدى عملائك.</li>
                                                    <li className="mt-5 medium">منصات ويب مخصصة حسب الطلب: حلول برمجية مصممة خصيصًا لاحتياجات نشاطك.</li>
                                                    <li className="mt-5 medium">تطوير بأنظمة حديثة وتقنيات متقدمة: أداء سريع، أمان عالي، وقابلية للتوسع.</li>
                                                    <li className="mt-5 medium">مواقع متجاوبة بالكامل (Responsive): تجربة مثالية على الموبايل والتابلت والكمبيوتر.</li>
                                                </ul>
                                            </Box>
                }
            </Box>
        </Box>
    );
}

export default SoftwareDevelopment;