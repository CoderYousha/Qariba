import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Background from '../../images/backgrounds/background3.jpg';
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTableStyles } from "../../hooks/UseTableStyles";
import CheckIcon from '@mui/icons-material/Check';

function ElectronicMarketingAndSocialMedia() {
    const [selectedService, setSelectedService] = useState(1);
    const { StyledTableCell, StyledTableRow } = useTableStyles();

    function createData(name, category1, category2, category3) {
        return { name, category1, category2, category3 };
    }

    const rows = [
        createData('إدارة صفحات التواصل الاجتماعي', <CheckIcon color="success"/>, <CheckIcon color="success"/>, <CheckIcon color="success"/>),
        createData('بوستات', 10, 20, 30),
        createData('ستوري', 10, 20, 30),
        createData('تصوير فيديوهات تسويقية', 3, 6, 12),
        createData('صبايا لتقديم المحتوى', <CheckIcon color="success"/>, <CheckIcon color="success"/>, <CheckIcon color="success"/>),
        createData('خطة تسويقية', <CheckIcon color="success"/>, <CheckIcon color="success"/>, <CheckIcon color="success"/>),
        createData('مونتاج احترافي', <CheckIcon color="success"/>, <CheckIcon color="success"/>, <CheckIcon color="success"/>),
        createData('إدارة الحملات الممولة', <CheckIcon color="success"/>, <CheckIcon color="success"/>, <CheckIcon color="success"/>),
        createData('دراسة المنافسين', <CheckIcon color="success"/>, <CheckIcon color="success"/>, <CheckIcon color="success"/>),
        createData('كتابة المحتوى', <CheckIcon color="success"/>, <CheckIcon color="success"/>, <CheckIcon color="success"/>),
        createData('النشر والمتابعة الخاصة بالمحتوى', <CheckIcon color="success"/>, <CheckIcon color="success"/>, <CheckIcon color="success"/>),
        createData('الرد على التعليقات والرسائل', <CheckIcon color="success"/>, <CheckIcon color="success"/>, <CheckIcon color="success"/>),
        createData('زيادة الإعجابات والتعليقات', <CheckIcon color="success"/>, <CheckIcon color="success"/>, <CheckIcon color="success"/>),
        createData('تكبير صفحات', <CheckIcon color="success"/>, <CheckIcon color="success"/>, <CheckIcon color="success"/>),
        createData('تفعيل الرد التلقائي', <CheckIcon color="success"/>, <CheckIcon color="success"/>, <CheckIcon color="success"/>),
        createData('إعداد الهايلايتس والبايو', <CheckIcon color="success"/>, <CheckIcon color="success"/>, <CheckIcon color="success"/>),
        createData('تزويد متابعين', 1000, 1000, 1000),
        createData('المدة', 'شهر', 'شهر', 'شهر'),
        createData('', '495$', '695$', '895$'),
    ];

    return (
        <Box className="" dir="rtl">
            <img className="w-full h-screen absolute top-0 -z-10" src={Background} />
            {/* Starter */}
            <Box className="w-full h-screen pt-32">
                <Typography variant="h6" className="text-white text-center">شركة قريبة للتسويق الإلكتروني والسوشال ميديا</Typography>
                <Typography variant="h2" className="text-white text-center !my-5">نصنع حضورك الرقمي ونحوله إلى نتائج</Typography>
                <Typography variant="body1" className="text-white text-center !mt-5">ندير حساباتك باحتراف، نصنع محتوى يجذب جمهورك، ونطلق حملات مدروسة تزيد التفاعل والمبيعات.</Typography>
                <Typography variant="body1" className="text-white text-center !mt-5">استراتيجية ذكية، أرقام واضحة، ونمو حقيقي لعلامتك التجارية.</Typography>
                <Typography variant="h6" className="text-white text-center !mt-5" fontWeight={800}>ابدأ رحلتك الرقمية اليوم</Typography>
            </Box>

            {/* Services */}
            <Box className="w-full min-h-screen px-5 py-5" sx={{ backgroundColor: '#F0D7A1' }}>
                <Typography variant="h4" fontWeight={800} className="text-center !my-10">خدمات تسويق إلكتروني احترافية تحقق نموا حقيقيا لعلامتك</Typography>
                <Typography variant="body1" className="text-center !mt-5">
                    تقدم شركة قريبة حلول تسويق إلكتروني متكاملة يقودها فريق متخصص يجمع بين الإبداع والتحليل الرقمي.
                </Typography>
                <Typography variant="body1" className="text-center !mt-5">
                    نبدأ بدراسة السوق وجمهورك المستهدف بدقة، ثم نصمم استراتيجيات مخصصة تعزز حضورك الرقمي، وتزيد التفاعل، وتحول الاهتمام إلى نتائج قابلة للقياس
                </Typography>
                <Typography variant="body1" className="text-center !mt-5">في قريبة، لا نعدك بالانتشار فقط بل نبني لك تأثيرا يصنع الفرق</Typography>
                <Box className="mt-20 flex justify-between">
                    <Box className="px-2 py-3 border bg-opacity-50 cursor-pointer border-black rounded-3xl" sx={{ backgroundColor: selectedService === 1 ? 'rgb(255 255 255 / var(--tw-bg-opacity, 1))' : 'none', border: selectedService === 1 ? '1px solid black' : 'none' }} onClick={() => setSelectedService(1)}>خطط تسويقية فعالة</Box>
                    <Box className="px-2 py-3 bg-opacity-50 cursor-pointer border-black rounded-3xl" sx={{ backgroundColor: selectedService === 2 ? 'rgb(255 255 255 / var(--tw-bg-opacity, 1))' : 'none', border: selectedService === 2 ? '1px solid black' : 'none' }} onClick={() => setSelectedService(2)}>إعلانات السوشال ميديا</Box>
                    <Box className="px-2 py-3 bg-opacity-50 cursor-pointer border-black rounded-3xl" sx={{ backgroundColor: selectedService === 3 ? 'rgb(255 255 255 / var(--tw-bg-opacity, 1))' : 'none', border: selectedService === 3 ? '1px solid black' : 'none' }} onClick={() => setSelectedService(3)}>إدارة صفحات السوشال ميديا</Box>
                    <Box className="px-2 py-3 bg-opacity-50 cursor-pointer border-black rounded-3xl" sx={{ backgroundColor: selectedService === 4 ? 'rgb(255 255 255 / var(--tw-bg-opacity, 1))' : 'none', border: selectedService === 4 ? '1px solid black' : 'none' }} onClick={() => setSelectedService(4)}>كتابة محتوى تفاعلي جذاب</Box>
                    <Box className="px-2 py-3 bg-opacity-50 cursor-pointer border-black rounded-3xl" sx={{ backgroundColor: selectedService === 5 ? 'rgb(255 255 255 / var(--tw-bg-opacity, 1))' : 'none', border: selectedService === 5 ? '1px solid black' : 'none' }} onClick={() => setSelectedService(5)}>تصميم الهوية البصرية</Box>
                    <Box className="px-2 py-3 bg-opacity-50 cursor-pointer border-black rounded-3xl" sx={{ backgroundColor: selectedService === 6 ? 'rgb(255 255 255 / var(--tw-bg-opacity, 1))' : 'none', border: selectedService === 6 ? '1px solid black' : 'none' }} onClick={() => setSelectedService(6)}>تزويد متابعين حقيقيين</Box>
                    <Box className="px-2 py-3 bg-opacity-50 cursor-pointer border-black rounded-3xl" sx={{ backgroundColor: selectedService === 7 ? 'rgb(255 255 255 / var(--tw-bg-opacity, 1))' : 'none', border: selectedService === 7 ? '1px solid black' : 'none' }} onClick={() => setSelectedService(7)}>التسويق عبر الرسائل النصية</Box>
                </Box>
                {
                    selectedService === 1 ?
                        <Box key={selectedService} className="mt-10 selected-service">
                            <Typography variant="h6" fontWeight={800} sx={{ color: '#793503' }} className="">استراتيجيات تسويقية فعالة تقود نمو أعمالك</Typography>
                            <Typography variant="body1" className="!mt-5">لم يعد النجاح الرقمي يعتمد على الحملات العشوائية، بل على خطط تسويقية مدروسة مبنية على تحليل السوق وسلوك الجمهور. في قريبة نضع لك خارطة طريق واضحة تبدأ بتحديد أهدافك وتنتهي بنتائج قابلة للقياس ترفع من مبيعاتك وتعزز حضورك الرقمي.</Typography>
                            <Typography variant="body1" className="!mt-5">نصمم خططا تسويقية مخصصة تناسب طبيعة نشاطك، وتجمع بين الإبداع والتحليل لتحقيق أفضل عائد على الاستثمار.</Typography>
                            <Typography variant="subtitle1" className="!mt-5">وتشمل خططنا التسويقية:</Typography>
                            <ul className="list-disc pr-5 mt-5">
                                <li className="font-medium">تحليل السوق والمنافسين: دراسة دقيقة لفرص النمو ونقاط القوة.</li>
                                <li className="mt-5 medium">تحديد الجمهور المستهدف: الوصول للعملاء المناسبين في الوقت المناسب.</li>
                                <li className="mt-5 medium">خطة محتوى استراتيجية: محتوى يجذب، يقنع، ويحوّل المتابعين إلى عملاء.</li>
                                <li className="mt-5 medium">إدارة الحملات الإعلانية: تحسين الأداء وزيادة العائد الإعلاني.</li>
                                <li className="mt-5 medium">قياس وتحليل النتائج: تقارير واضحة وتطوير مستمر للأداء.</li>
                            </ul>
                            <Typography variant="h6" fontWeight={800} className="!mt-5">خطط مدروسة… نتائج ملموسة… ونمو مستدام لعلامتك.</Typography>
                        </Box>
                        :
                        selectedService === 2 ?
                            <Box key={selectedService} className="mt-10 selected-service">
                                <Typography variant="h6" fontWeight={800} sx={{ color: '#793503' }} className="">إعلانات سوشال ميديا تحقق انتشارًا وتأثيرًا حقيقيًا</Typography>
                                <Typography variant="body1" className="!mt-5">في قريبة نصمم حملات إعلانية مدفوعة على منصات التواصل الاجتماعي تستهدف جمهورك بدقة، وتحوّل المشاهدات إلى تفاعل، والتفاعل إلى مبيعات.</Typography>
                                <Typography variant="body1" className="!mt-5">نعتمد على تحليل البيانات، واختيار الرسالة المناسبة، وتحديد الفئة المستهدفة بأعلى دقة لضمان أفضل عائد على استثمارك الإعلاني.</Typography>
                                <Typography variant="subtitle1" className="!mt-5">وتشمل خدماتنا:</Typography>
                                <ul className="list-disc pr-5 mt-5">
                                    <li className="medium"> إعداد استراتيجية إعلانية مخصصة حسب هدفك.</li>
                                    <li className="mt-5 medium">استهداف دقيق للجمهور المناسب.</li>
                                    <li className="mt-5 medium">تصميم محتوى وإعلانات جذابة ومحفّزة.</li>
                                    <li className="mt-5 medium">إدارة وتحسين الحملات بشكل مستمر.</li>
                                    <li className="mt-5 medium">تقارير أداء واضحة وقياس النتائج بدقة.</li>
                                </ul>
                                <Typography variant="h6" fontWeight={800} className="!mt-5">إعلانات ذكية… نتائج قابلة للقياس… ونمو أسرع لعلامتك.</Typography>
                            </Box>
                            :
                            selectedService === 3 ?
                                <Box key={selectedService} className="mt-10 selected-service">
                                    <Typography variant="h6" fontWeight={800} sx={{ color: '#793503' }} className="">إدارة صفحات السوشال ميديا باحترافية تصنع حضورك الرقمي</Typography>
                                    <Typography variant="body1" className="!mt-5">في قريبة لا نكتفي بالنشر… بل نبني هوية رقمية متكاملة تعكس قوة علامتك وتخلق تواصلًا حقيقيًا مع جمهورك. ندير صفحاتك بأسلوب استراتيجي يجمع بين الإبداع، التفاعل المستمر، وتحليل الأداء لضمان نمو مستدام.</Typography>
                                    <Typography variant="subtitle1" className="!mt-5">وتشمل خدماتنا:</Typography>
                                    <ul className="list-disc pr-5 mt-5">
                                        <li className="medium">إعداد خطة محتوى شهرية متوافقة مع أهدافك.</li>
                                        <li className="mt-5 medium">تصميم منشورات احترافية تعزز الهوية البصرية.</li>
                                        <li className="mt-5 medium">كتابة محتوى جذاب ومحفّز للتفاعل.</li>
                                        <li className="mt-5 medium">إدارة التعليقات والرسائل وبناء علاقة مع الجمهور.</li>
                                        <li className="mt-5 medium">تحليل النتائج وتطوير الأداء بشكل مستمر.</li>
                                    </ul>
                                    <Typography variant="h6" fontWeight={800} className="!mt-5">حضور قوي… تفاعل أعلى… وصورة احترافية تدعم نمو أعمالك.</Typography>
                                </Box>
                                :
                                selectedService === 4 ?
                                    <Box key={selectedService} className="mt-10 selected-service">
                                        <Typography variant="h6" fontWeight={800} sx={{ color: '#793503' }} className="">كتابة محتوى تفاعلي يجذب جمهورك ويعزز حضورك</Typography>
                                        <Typography variant="body1" className="!mt-5">في قريبة نكتب محتوى لا يُقرأ فقط… بل يُتفاعل معه.</Typography>
                                        <Typography variant="body1" className="!mt-5">نصنع رسائل ذكية تعبّر عن هوية علامتك، وتخاطب جمهورك بأسلوب مؤثر يحفّز التعليق والمشاركة واتخاذ القرار.</Typography>
                                        <Typography variant="subtitle1" className="!mt-5">وتشمل خدماتنا:</Typography>
                                        <ul className="list-disc pr-5 mt-5">
                                            <li className="medium">كتابة منشورات إبداعية تحفّز التفاعل.</li>
                                            <li className="mt-5 medium">صياغة محتوى بيعي يقنع ويحوّل المتابعين إلى عملاء.</li>
                                            <li className="mt-5 medium">إعداد أفكار حملات ومحتوى ترندي مواكب للسوق.</li>
                                            <li className="mt-5 medium">كتابة سكربتات ريلز وفيديوهات قصيرة جذابة.</li>
                                            <li className="mt-5 medium">توظيف Call To Action قوي يزيد من معدلات التحويل.</li>
                                        </ul>
                                        <Typography variant="h6" fontWeight={800} className="!mt-5">محتوى مؤثر… تفاعل أعلى… ونتائج أقوى لعلامتك.</Typography>
                                    </Box>
                                    :
                                    selectedService === 5 ?
                                        <Box key={selectedService} className="mt-10 selected-service">
                                            <Typography variant="h6" fontWeight={800} sx={{ color: '#793503' }} className="">تصميم هوية بصرية تعبّر عن قوة علامتك</Typography>
                                            <Typography variant="body1" className="!mt-5">في قريبة لا نصمم مجرد شعار… بل نبني هوية متكاملة تعكس شخصية مشروعك وتترك انطباعًا لا يُنسى. </Typography>
                                            <Typography variant="body1" className="!mt-5">نحول رؤيتك إلى عناصر بصرية احترافية تمنحك حضورًا قويًا ومتسقًا في كل نقطة تواصل مع جمهورك.</Typography>
                                            <Typography variant="subtitle1" className="!mt-5">وتشمل خدماتنا:</Typography>
                                            <ul className="list-disc pr-5 mt-5">
                                                <li className="medium">تصميم شعار احترافي يعكس رسالتك وقيمك.</li>
                                                <li className="mt-5 medium">تحديد الألوان والخطوط بما يخدم شخصيتك التجارية.</li>
                                                <li className="mt-5 medium">إعداد دليل هوية (Brand Guidelines) لضمان الاتساق.</li>
                                                <li className="mt-5 medium">تصميم القرطاسية والمواد التسويقية.</li>
                                                <li className="mt-5 medium">توحيد المظهر البصري عبر السوشال ميديا والمنصات الرقمية.</li>
                                            </ul>
                                            <Typography variant="h6" fontWeight={800} className="!mt-5">هوية قوية… صورة احترافية… وثقة تبنى من أول نظرة.</Typography>
                                        </Box>
                                        :
                                        selectedService === 6 ?
                                            <Box key={selectedService} className="mt-10 selected-service">
                                                <Typography variant="h6" fontWeight={800} sx={{ color: '#793503' }} className="">تزويد متابعين حقيقيين يعززون قوة حضورك</Typography>
                                                <Typography variant="body1" className="!mt-5">في قريبة نركز على الجودة قبل الأرقام.</Typography>
                                                <Typography variant="body1" className="!mt-5">نعمل على جذب متابعين حقيقيين مهتمين بمجالك، لزيادة التفاعل وبناء مجتمع فعلي حول علامتك التجارية، بعيدًا عن الحسابات الوهمية أو الأرقام غير المؤثرة.</Typography>
                                                <Typography variant="subtitle1" className="!mt-5">وتشمل خدماتنا:</Typography>
                                                <ul className="list-disc pr-5 mt-5">
                                                    <li className="medium">استراتيجيات نمو عضوي مستهدف.</li>
                                                    <li className="mt-5 medium">حملات مدروسة لزيادة المتابعين المهتمين.</li>
                                                    <li className="mt-5 medium">تحسين المحتوى لرفع معدل التفاعل.</li>
                                                    <li className="mt-5 medium">استهداف دقيق للجمهور المناسب لنشاطك.</li>
                                                    <li className="mt-5 medium">بناء قاعدة متابعين تدعم مبيعاتك على المدى الطويل.</li>
                                                </ul>
                                                <Typography variant="h6" fontWeight={800} className="!mt-5">نمو حقيقي… جمهور فعلي… وتأثير مستدام لعلامتك.</Typography>
                                            </Box>
                                            :
                                            <Box key={selectedService} className="mt-10 selected-service">
                                                <Typography variant="h6" fontWeight={800} sx={{ color: '#793503' }} className="">التسويق عبر الرسائل النصية… وصول مباشر وتأثير فوري</Typography>
                                                <Typography variant="body1" className="!mt-5">في قريبة نوفر لك حملات رسائل نصية مدروسة تصل إلى عملائك مباشرة على هواتفهم، برسائل قصيرة مؤثرة تحفّزهم على التفاعل واتخاذ القرار بسرعة.</Typography>
                                                <Typography variant="body1" className="!mt-5">نعتمد على استهداف دقيق وتوقيت مثالي لضمان أعلى معدل فتح واستجابة، سواء للترويج للعروض، إطلاق المنتجات، أو تذكير العملاء بخدماتك.</Typography>
                                                <Typography variant="subtitle1" className="!mt-5">وتشمل خدماتنا:</Typography>
                                                <ul className="list-disc pr-5 mt-5">
                                                    <li className="medium">إعداد وصياغة رسائل احترافية وجذابة.</li>
                                                    <li className="mt-5 medium">استهداف شرائح محددة من العملاء.</li>
                                                    <li className="mt-5 medium">جدولة الحملات في الوقت الأنسب.</li>
                                                    <li className="mt-5 medium">تتبع الأداء وقياس معدل الاستجابة.</li>
                                                    <li className="mt-5 medium">حملات مخصصة للعروض والتنبيهات والتذكير.</li>
                                                </ul>
                                                <Typography variant="h6" fontWeight={800} className="!mt-5">رسالة واحدة ذكية… قد تصنع قرار شراء فوري.</Typography>
                                            </Box>
                }
            </Box>

            {/* Table */}
            <Box className="w-full min-h-screen px-5 py-5" sx={{ backgroundColor: '#D58725' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center">الباقة الأساسية</TableCell>
                                <TableCell align="center">الباقة الاقتصادية</TableCell>
                                <TableCell align="center">الباقة الاحترافية</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center" component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">{row.category1}</TableCell>
                                    <TableCell align="center">{row.category2}</TableCell>
                                    <TableCell align="center">{row.category3}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            {/* FAQ */}
            <Box className="w-full min-h-screen px-5 flow-root" sx={{ backgroundColor: '#8D3C02' }} dir="rtl">
                <Typography variant="h4" fontWeight={800} className="text-center !my-10 text-white">الأسئلة الشائعة</Typography>
                <Accordion className="mb-10">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span" className="!text-xl">ما المدة التي أحتاجها لرؤية نتائج التسويق الإلكتروني؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="text-lg">
                        تختلف حسب طبيعة نشاطك والمنافسة في السوق، لكن غالبًا تبدأ النتائج بالظهور خلال الأسابيع الأولى مع تحسن مستمر عند تطبيق الاستراتيجية بشكل متكامل.
                    </AccordionDetails>
                </Accordion>
                <Accordion className="mb-10">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span" className="!text-xl">هل يمكنكم إدارة جميع حسابات السوشال ميديا الخاصة بشركتي؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="text-lg">
                        نعم، ندير مختلف المنصات مثل فيسبوك، إنستغرام، تيك توك، لينكدإن وغيرها، مع توحيد الهوية البصرية والرسائل التسويقية.
                    </AccordionDetails>
                </Accordion>
                <Accordion className="mb-10">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span" className="!text-xl">هل تقدمون حملات إعلانية ممولة؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="text-lg">
                        بالتأكيد، نقوم بإعداد وإدارة الحملات الإعلانية باحتراف مع استهداف دقيق وتحسين مستمر لزيادة العائد على الاستثمار.
                    </AccordionDetails>
                </Accordion>
                <Accordion className="mb-10">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span" className="!text-xl">كيف يتم قياس نجاح الحملات التسويقية؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="text-lg">
                        نقيس الأداء عبر مؤشرات واضحة مثل التفاعل، عدد العملاء المحتملين، المبيعات، والعائد الإعلاني، مع تقارير دورية مفصلة.
                    </AccordionDetails>
                </Accordion>
                <Accordion className="mb-10">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span" className="!text-xl">هل يمكن تصميم استراتيجية مخصصة لنشاطي؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="text-lg">
                        نعم، نبدأ بدراسة السوق وجمهورك ثم نضع خطة تسويقية مصممة خصيصًا لتحقيق أهدافك.
                    </AccordionDetails>
                </Accordion>
                <Accordion className="mb-10">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span" className="!text-xl">هل توفرون كتابة محتوى وتصميم منشورات؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="text-lg">
                        نعم، فريقنا يقدم كتابة محتوى احترافي وتصميم بصري متكامل يعكس هوية علامتك.
                    </AccordionDetails>
                </Accordion>
                <Accordion className="mb-10">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span" className="!text-xl">هل يمكن تعديل الخطة التسويقية أثناء التنفيذ؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="text-lg">
                        نعم، نعمل بمرونة تامة ونطور الاستراتيجية حسب نتائج الأداء وتغيرات السوق.
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    );
}

export default ElectronicMarketingAndSocialMedia;