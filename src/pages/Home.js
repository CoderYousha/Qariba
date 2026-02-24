import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Background1 from '../images/backgrounds/background1.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home () {
     const settings = {
          dots: true,
          infinite: false,
          speed: 400,
          slidesToShow: 3,
          slidesToScroll: 1,
          rtl: false,
     };
     return (
          <Box>
               <Header />
               <img className="w-full h-screen absolute top-0 -z-10" src={Background1} />
               <Box className="w-full h-screen pt-32">
                    <Typography variant="h6" className="text-white text-center">شركة قريبة للحلول البرمجية والتسويقية</Typography>
                    <Typography variant="h2" fontWeight={800} className="text-white text-center !my-5">نطور أعمالك رقميا</Typography>
                    <Typography variant="h2" fontWeight={800} className="text-white text-center">ونقربك من النجاح</Typography>
                    <Typography variant="body1" className="text-white text-center !mt-5">حلول برمجية متقدمة واستراتيجيات تسويق ذكية تحت سقف واحد، لنحول فكرتك إلى مشروع رقمي ناجح ونساعدك على التوسع بثقة في السوق</Typography>
                    <Typography variant="body1" className="text-white text-center !mt-5">ابدأ رحلتك الرقمية معنا اليوم</Typography>
               </Box>
               <Box className="w-full h-screen px-5 py-5" sx={{backgroundColor: '#F0D7A1'}}>
                         <Typography variant="h4" fontWeight={800} className="text-center">خدماتنا</Typography>
                    {/* <Box className="w-full flex justify-between mt-10"> */}
                    <Slider arrows={false} {...settings} className="mt-10">
                         <Box className="w-1/4 px-2 h-full">
                              <Box className="rounded-xl glass py-4 h-[530px] flow-root relative">
                                   <Typography variant="h5" fontWeight={800} className="text-center !my-5" sx={{color: '#793503'}}>تطوير البرمجيات</Typography>
                                   <Typography variant="body1" className="text-center !mb-5 ">حول فكرتك إلى حل رقمي قوي قابل للتوسع</Typography>
                                   <ul className="w-full px-5 text-center" dir="rtl">
                                        <li>تطوير مواقع وتطبيقات ويب – منصات سريعة وآمنة وقابلة للنمو</li>
                                        <li className="mt-3">تطوير تطبيقات موبايل – iOS & Android بتجربة استخدام سلسة</li>
                                        <li  className="mt-3">حلول التجارة الإلكترونية – متجر احترافي (عادي أو متعدد البائعين) مع إدارة كاملة</li>
                                        <li className="mt-3">أنظمة مخصصة (CRM / ERP / HR) – حلول داخلية حسب احتياج شركتك</li>
                                        <li className="mt-3">تطوير وربط APIs – تكامل مع الدفع، الشحن، الرسائل، وأنظمة الطرف الثالث</li>
                                        <li className="mt-3">صيانة ودعم – تحديثات وحماية وتحسينات مستمرة بعد التسليم</li>
                                   </ul>
                              </Box>
                         </Box>
                         <Box className="w-1/4 px-2 h-full">
                              <Box className="rounded-xl glass py-4 h-[530px] flow-root relative">
                                   <Typography variant="h5" fontWeight={800} className="text-center !my-5" sx={{color: '#793503'}}>التسويق الرقمي</Typography>
                                   <Typography variant="body1" className="text-center !mb-5">نحن لا نروج فقط... نحن نصنع نموا حقيقيا</Typography>
                                   <ul className="w-full px-5 text-center" dir="rtl">
                                        <li>حملات إعلانية تحقق مبيعات فعلية لا مجرد تفاعل</li>
                                        <li className="mt-3">محتوى إبداعي يجذب، يقنع، ويحوّل الجمهور إلى عملاء</li>
                                        <li className="mt-3">استراتيجيات نمو مدروسة مبنية على تحليل السوق والمنافسين</li>
                                        <li className="mt-3">تصدّر نتائج البحث وابقَ في الصدارة دائماً</li>
                                        <li className="mt-3">بناء تموضع قوي لعلامتك في السوق</li>
                                        <li className="mt-3">تحسين مستمر قائم على البيانات لرفع العائد الاستثماري</li>
                                   </ul>
                              </Box>
                         </Box>
                         <Box className="w-1/4 px-2">
                              <Box className="rounded-xl glass py-4 h-[530px] relative">
                                   <Typography variant="h5" fontWeight={800} className="text-center !my-5" sx={{color: '#793503'}}>إدارة السوشال ميديا</Typography>
                                   <Typography variant="body1" className="text-center !mb-5">لا ننشر فق.... بنصنع تأثيرا وانتشارا</Typography>
                                   <ul className="w-full px-5 text-center" dir="rtl">
                                        <li>خطة محتوى استراتيجية تجذب جمهورك المستهدف بدقة</li>
                                        <li className="mt-3">فيديوهات وتصاميم إبداعية تسرق الانتباه خلال ثوانٍ</li>
                                        <li className="mt-3">دارة احترافية للتفاعل وبناء مجتمع حول علامتك</li>
                                        <li className="mt-3">دعم مدفوع ذكي لزيادة الوصول والمبيعات</li>
                                        <li className="mt-3">صياغة هوية صوتية تميزك عن المنافسين</li>
                                        <li className="mt-3">تقارير وتحليل أداء مستمر لتحقيق نمو فعلي</li>
                                   </ul>
                              </Box>
                         </Box>
                         <Box className="w-1/4 px-2">
                              <Box className="rounded-xl glass py-4 h-[530px] relative">
                                   <Typography variant="h5" fontWeight={800} className="text-center !my-5" sx={{color: '#793503'}}>التصوير وصناعة المحتوى</Typography>
                                   <Typography variant="body1" className="text-center !mb-5">لا نلتقط صورا... نصنع انطباعا لا ينسى</Typography>
                                   <ul className="w-full px-5 text-center" dir="rtl">
                                        <li>تصوير منتجات احترافي يعزز قرار الشراء</li>
                                        <li className="mt-3">جلسات تصوير للعلامات التجارية والشركات بأسلوب احترافي</li>
                                        <li className="mt-3">فيديوهات قصيرة وإبداعية مخصصة للسوشال ميديا</li>
                                        <li className="mt-3">إنتاج إعلانات بصرية عالية الجودة</li>
                                        <li className="mt-3">إخراج فني متكامل يعكس قوة علامتك</li>
                                        <li className="mt-3">* مونتاج ومعالجة لونية بطابع احترافي وسينمائي</li>
                                   </ul>
                              </Box>
                         </Box>
                    </Slider>
                    {/* </Box> */}
               </Box>
          </Box>
     );
}

export default Home;