import { Accordion, AccordionDetails, AccordionSummary, Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import Header from "../components/Header";
import Background1 from '../images/backgrounds/background1.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";
import Image1 from '../images/clients/image1.jpg';
import Image2 from '../images/clients/image2.jpg';
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Fetch from "../services/Fetch";
import { useConstants } from "../hooks/UseConstants";
import { useWaits } from "../hooks/UseWait";
import { useSendEmail } from "../hooks/UseSendEmail";
import { buildSendEmailFormData } from "../helper/SendEmailFormData";
import SnackbarAlert from "../components/SnackBar";
import useSnackBar from "../hooks/UseSnackBar";
import ProgrammingImage from '../images/services/programming.png';
import PromotionImage from '../images/services/promotion.jpg';
import CameraImage from '../images/services/camera.jpg';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';

function Home() {
     const { host } = useConstants();
     const navigate = useNavigate();
     const [clients, setClients] = useState([]);
     const [contacts, setContacts] = useState('');
     const { name, setName, email, setEmail, msg, setMsg } = useSendEmail();
     const { openSnackBar, type, message, setSnackBar, setOpenSnackBar } = useSnackBar();
     const { getWait, setGetWait, sendWait, setSendWait } = useWaits();
     const settings = {
          dots: true,
          infinite: false,
          speed: 400,
          // slidesToShow: 3,
          slidesToScroll: 1,
          rtl: false,
     };

     const images = [
          Image1,
          Image2,
          'https://qariba.net/wp-content/uploads/2025/09/17.svg',
          'https://qariba.net/wp-content/uploads/2025/09/13-1.svg',
          'https://qariba.net/wp-content/uploads/2025/09/15.svg',
          'https://qariba.net/wp-content/uploads/2025/09/11-1.svg',
          'https://qariba.net/wp-content/uploads/2025/09/15.svg',
          'https://qariba.net/wp-content/uploads/2025/09/18.svg',
          'https://qariba.net/wp-content/uploads/2025/09/472976722_925174923092466_7272901601190845643_n1.jpg'
     ];

     const openServices = () => {
          document.getElementById('services').style.display = 'block';
     }

     const closeServices = () => {
          document.getElementById('services').style.display = 'none';
     }

     const getClients = async () => {
          let result = await Fetch(`${host}/api/clients`, 'GET');

          if (result.status === 200) {
               setClients(result.data.data.clients);
          }

          setGetWait(false);
     }

     const sendEmail = async () => {
          setSendWait(true);
          const formData = buildSendEmailFormData({
               name: name,
               email: email,
               message: msg,
          });

          let result = await Fetch(`${host}/api/contacts/send-email`, 'POST', formData);

          if (result.status === 200) {
               setSnackBar('success', result.data.message);
          } else if (result.status === 422) {
               setSnackBar('error', result.data.errors[0]);
          } else if (result.status === 400) {
               setSnackBar('error', result.data.error);
          }

          setSendWait(false);
     }

     function setNumbers() {
          var clientNumber = 0;
          var designNumber = 0;
          var serviceNumber = 0;

          var client = document.getElementById('client');
          var design = document.getElementById('design');
          var service = document.getElementById('service');

          const clientInterval = setInterval(() => {
               if (clientNumber < 220) {
                    clientNumber++;
                    client.innerText = '+' + clientNumber;
               } else {
                    clearInterval(clientInterval);
               }
          }, 10);

          const designInterval = setInterval(() => {
               if (designNumber < 13) {
                    designNumber++;
                    design.innerText = '+' + designNumber + 'K';
               } else {
                    clearInterval(designInterval);
               }
          }, 70);

          const serviceInterval = setInterval(() => {
               if (serviceNumber < 25) {
                    serviceNumber++;
                    service.innerText = '+' + serviceNumber;
               } else {
                    clearInterval(serviceNumber);
               }
          }, 60);
     }

     useEffect(() => {
          getClients();
     }, []);

     useEffect(() => {
          if (!getWait) {
               setNumbers();
          }
     }, [getWait]);

     return (
          <Box>
               <Header onMouseEnter={openServices} onMouseLeave={closeServices} />
               <img className="w-full h-screen absolute top-0 -z-10" src={Background1} />
               {/* Starter */}
               <Box className="w-full h-screen pt-32" onClick={closeServices}>
                    <Typography variant="h6" className="text-white text-center">شركة قريبة للحلول البرمجية والتسويقية</Typography>
                    <Typography variant="h2" fontWeight={800} className="text-white text-center !my-5">نطور أعمالك رقميا</Typography>
                    <Typography variant="h2" fontWeight={800} className="text-white text-center">ونقربك من النجاح</Typography>
                    <Typography variant="body1" className="text-white text-center !mt-5">حلول برمجية متقدمة واستراتيجيات تسويق ذكية تحت سقف واحد، لنحول فكرتك إلى مشروع رقمي ناجح ونساعدك على التوسع بثقة في السوق</Typography>
                    <Typography variant="body1" className="text-white text-center !mt-5">ابدأ رحلتك الرقمية معنا اليوم</Typography>
                    <Box className='grid grid-cols-3 justify-items-center mt-5 w-1/2 mx-auto'>
                         <Box className="bg-white w-24 h-24 rounded-full flex items-center justify-center max-sm:w-12 max-sm:h-12">
                              <Diversity2OutlinedIcon className="text-yellow-600" fontSize="large" />
                         </Box>
                         <Box className="bg-white w-24 h-24 rounded-full flex items-center justify-center max-sm:w-12 max-sm:h-12">
                              <BrushOutlinedIcon className="text-yellow-600" fontSize="large" />
                         </Box>
                         <Box className="bg-white w-24 h-24 rounded-full flex items-center justify-center max-sm:w-12 max-sm:h-12">
                              <DesignServicesOutlinedIcon className="text-yellow-600" fontSize="large" />
                         </Box>
                         <Typography variant="h6" fontWeight={800} className="text-white max-sm:!text-sm text-center">شركاء النجاح</Typography>
                         <Typography variant="h6" fontWeight={800} className="text-white max-sm:!text-sm text-center">تصاميم وفيديوهات</Typography>
                         <Typography variant="h6" fontWeight={800} className="text-white max-sm:!text-sm text-center">الخدمات</Typography>
                         <Typography id='client' variant="h4" fontWeight={800} className="text-white max-sm:!text-lg">+0</Typography>
                         <Typography id='design' variant="h4" fontWeight={800} className="text-white max-sm:!text-lg">+0</Typography>
                         <Typography id='service' variant="h4" fontWeight={800} className="text-white max-sm:!text-lg">+0</Typography>
                    </Box>
               </Box>

               {/* Services */}
               <Box className="w-full h-screen px-5 py-5" sx={{ backgroundColor: '#F0D7A1' }}>
                    <Typography variant="h4" fontWeight={800} className="text-center">خدماتنا</Typography>
                    <Slider slidesToShow={3} arrows={false} {...settings} className="mt-10 max-sm:!hidden">
                         <Box className="w-1/4 px-2 h-full">
                              <Box className="rounded-xl glass py-4 h-[530px] flow-root relative cursor-pointer" onClick={() => navigate('/software-development')}>
                                   <Typography variant="h5" fontWeight={800} className="text-center !my-5" sx={{ color: '#793503' }}>تطوير البرمجيات</Typography>
                                   <Typography variant="body1" className="text-center !mb-5 ">حول فكرتك إلى حل رقمي قوي قابل للتوسع</Typography>
                                   <ul className="w-full px-5 text-center" dir="rtl">
                                        <li>تطوير مواقع وتطبيقات ويب – منصات سريعة وآمنة وقابلة للنمو</li>
                                        <li className="mt-3">تطوير تطبيقات موبايل – iOS & Android بتجربة استخدام سلسة</li>
                                        <li className="mt-3">حلول التجارة الإلكترونية – متجر احترافي (عادي أو متعدد البائعين) مع إدارة كاملة</li>
                                        <li className="mt-3">أنظمة مخصصة (CRM / ERP / HR) – حلول داخلية حسب احتياج شركتك</li>
                                        <li className="mt-3">تطوير وربط APIs – تكامل مع الدفع، الشحن، الرسائل، وأنظمة الطرف الثالث</li>
                                        <li className="mt-3">صيانة ودعم – تحديثات وحماية وتحسينات مستمرة بعد التسليم</li>
                                   </ul>
                              </Box>
                         </Box>
                         <Box className="w-1/4 px-2 h-full">
                              <Box className="rounded-xl glass py-4 h-[530px] flow-root relative cursor-pointer" onClick={() => navigate('/electronic-marketing-social-media')}>
                                   <Typography variant="h5" fontWeight={800} className="text-center !my-5" sx={{ color: '#793503' }}>التسويق الرقمي والسوشال ميديا</Typography>
                                   <Typography variant="body1" className="text-center !mb-5">نحن لا نروج فقط... نحن نصنع نموا حقيقيا</Typography>
                                   <ul className="w-full px-5 text-center" dir="rtl">
                                        <li>حملات إعلانية تحقق مبيعات فعلية لا مجرد تفاعل</li>
                                        <li className="mt-3">محتوى إبداعي يجذب، يقنع، ويحوّل الجمهور إلى عملاء</li>
                                        <li className="mt-3">استراتيجيات نمو مدروسة مبنية على تحليل السوق والمنافسين</li>
                                        <li className="mt-3">تصدّر نتائج البحث وابقَ في الصدارة دائماً</li>
                                        <li className="mt-3">بناء تموضع قوي لعلامتك في السوق</li>
                                        <li className="mt-3">تحسين مستمر قائم على البيانات لرفع العائد الاستثماري</li>
                                        <li className="mt-3">فيديوهات وتصاميم إبداعية تسرق الانتباه خلال ثوانٍ</li>
                                        <li className="mt-3">دارة احترافية للتفاعل وبناء مجتمع حول علامتك</li>
                                        <li className="mt-3">دعم مدفوع ذكي لزيادة الوصول والمبيعات</li>
                                        <li className="mt-3">صياغة هوية صوتية تميزك عن المنافسين</li>
                                   </ul>
                              </Box>
                         </Box>
                         <Box className="w-1/4 px-2">
                              <Box className="rounded-xl glass py-4 h-[530px] relative cursor-pointer">
                                   <Typography variant="h5" fontWeight={800} className="text-center !my-5" sx={{ color: '#793503' }}>التصوير وصناعة المحتوى</Typography>
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
                    <Slider slidesToShow={1} arrows={false} {...settings} className="!hidden mt-10 max-sm:!block">
                         <Box className="w-1/4 px-2 h-full">
                              <Box className="rounded-xl glass py-4 h-[530px] flow-root relative cursor-pointer" onClick={() => navigate('/software-development')}>
                                   <Typography variant="h5" fontWeight={800} className="text-center !my-5" sx={{ color: '#793503' }}>تطوير البرمجيات</Typography>
                                   <Typography variant="body1" className="text-center !mb-5 ">حول فكرتك إلى حل رقمي قوي قابل للتوسع</Typography>
                                   <ul className="w-full px-5 text-center" dir="rtl">
                                        <li>تطوير مواقع وتطبيقات ويب – منصات سريعة وآمنة وقابلة للنمو</li>
                                        <li className="mt-3">تطوير تطبيقات موبايل – iOS & Android بتجربة استخدام سلسة</li>
                                        <li className="mt-3">حلول التجارة الإلكترونية – متجر احترافي (عادي أو متعدد البائعين) مع إدارة كاملة</li>
                                        <li className="mt-3">أنظمة مخصصة (CRM / ERP / HR) – حلول داخلية حسب احتياج شركتك</li>
                                        <li className="mt-3">تطوير وربط APIs – تكامل مع الدفع، الشحن، الرسائل، وأنظمة الطرف الثالث</li>
                                        <li className="mt-3">صيانة ودعم – تحديثات وحماية وتحسينات مستمرة بعد التسليم</li>
                                   </ul>
                              </Box>
                         </Box>
                         <Box className="w-1/4 px-2 h-full">
                              <Box className="rounded-xl glass py-4 h-[530px] flow-root relative cursor-pointer" onClick={() => navigate('/electronic-marketing-social-media')}>
                                   <Typography variant="h5" fontWeight={800} className="text-center !my-5" sx={{ color: '#793503' }}>التسويق الرقمي والسوشال ميديا</Typography>
                                   <Typography variant="body1" className="text-center !mb-5">نحن لا نروج فقط... نحن نصنع نموا حقيقيا</Typography>
                                   <ul className="w-full px-5 text-center" dir="rtl">
                                        <li>حملات إعلانية تحقق مبيعات فعلية لا مجرد تفاعل</li>
                                        <li className="mt-3">محتوى إبداعي يجذب، يقنع، ويحوّل الجمهور إلى عملاء</li>
                                        <li className="mt-3">استراتيجيات نمو مدروسة مبنية على تحليل السوق والمنافسين</li>
                                        <li className="mt-3">تصدّر نتائج البحث وابقَ في الصدارة دائماً</li>
                                        <li className="mt-3">بناء تموضع قوي لعلامتك في السوق</li>
                                        <li className="mt-3">تحسين مستمر قائم على البيانات لرفع العائد الاستثماري</li>
                                        <li className="mt-3">فيديوهات وتصاميم إبداعية تسرق الانتباه خلال ثوانٍ</li>
                                        <li className="mt-3">دارة احترافية للتفاعل وبناء مجتمع حول علامتك</li>
                                        <li className="mt-3">دعم مدفوع ذكي لزيادة الوصول والمبيعات</li>
                                        <li className="mt-3">صياغة هوية صوتية تميزك عن المنافسين</li>
                                   </ul>
                              </Box>
                         </Box>
                         <Box className="w-1/4 px-2">
                              <Box className="rounded-xl glass py-4 h-[530px] relative cursor-pointer">
                                   <Typography variant="h5" fontWeight={800} className="text-center !my-5" sx={{ color: '#793503' }}>التصوير وصناعة المحتوى</Typography>
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
               </Box>

               {/* FAQ */}
               <Box className="w-full h-screen px-5 flow-root" sx={{ backgroundColor: '#8D3C02' }} dir="rtl">
                    <Typography variant="h4" fontWeight={800} className="text-center !my-10 text-white">الأسئلة الشائعة</Typography>
                    <Accordion className="mb-10">
                         <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                         >
                              <Typography component="span" className="!text-xl">لماذا أختار شركة قريبة دون غيرها؟</Typography>
                         </AccordionSummary>
                         <AccordionDetails className="text-lg">
                              لأننا لا نبيع خدمات... نحن نصنع نتائج.
                              <br />
                              نجمع بين التطوير البررمجي والتسويق الذكي لنضمن أن مشروعك لا يطلق فقط... بل ينمو ويتوسع بثبات
                         </AccordionDetails>
                    </Accordion>
                    <Accordion className="mb-10">
                         <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                         >
                              <Typography component="span" className="!text-xl">هل فعلا أحتاج لتحول رقمي الآن؟</Typography>
                         </AccordionSummary>
                         <AccordionDetails className="text-lg">
                              إذا كنت تريد البقاء في المنافسة، فالإجابة نعم.
                              <br />
                              السوق يتغير بسرعة، والعملاء يتخذون قراراتهم أونلاين. نحن نساعدك لتكون في المكان الصحيح قبل منافسيك.
                         </AccordionDetails>
                    </Accordion>
                    <Accordion className="mb-10">
                         <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                         >
                              <Typography component="span" className="!text-xl">ما العائد المتوقع من الاستثمار معنا؟</Typography>
                         </AccordionSummary>
                         <AccordionDetails className="text-lg">
                              هدفنا الأول هو تحقيق نمو قابل للقياس.
                              <br />
                              سواء عبر زيادة المبيعات، تحسين الظهور، أو أتمتة العمليات — كل خطوة مبنية على أرقام واضحة ونتائج حقيقية.
                         </AccordionDetails>
                    </Accordion>
                    <Accordion className="mb-10">
                         <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                         >
                              <Typography component="span" className="!text-xl">ماذا يحدث بعد تسليم المشروع؟</Typography>
                         </AccordionSummary>
                         <AccordionDetails className="text-lg">
                              لا نختفي بعد الإطلاق.
                              <br />
                              نقدم دعم مستمر، تحسينات دورية، وتحليل أداء لضمان استمرار النمو وتحقيق أقصى استفادة من مشروعك.
                         </AccordionDetails>
                    </Accordion>
                    <Accordion className="">
                         <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                         >
                              <Typography component="span" className="!text-xl">هل يمكن البدء بمشروع صغير ثم التوسع؟</Typography>
                         </AccordionSummary>
                         <AccordionDetails className="text-lg">
                              بالتأكيد.
                              <br />
                              نصمم حلولاً قابلة للتوسع، تبدأ بما تحتاجه الآن… وتنمو مع نمو أعمالك.
                         </AccordionDetails>
                    </Accordion>
               </Box>

               {/* Our Clients */}
               <Box className="w-full h-screen">
                    <Typography variant="h4" fontWeight={800} className="text-center !my-10">عملاء نعتز بهم</Typography>
                    <Box className="py-10"></Box>
                    {
                         getWait ?
                              <Box className="w-full h-screen relative flex justify-center items-center">
                                   <CircularProgress className="!text-yellow-500" size={70} />
                              </Box>
                              :
                              <Box>
                                   <Slider infinite={true} speed={400} slidesToShow={3} slidesToScroll={1} dots={false} className="w-4/5 mx-auto max-sm:!hidden">
                                        {
                                             clients.map((client, index) =>
                                                  <Box className="w-1/4 text-center !flex justify-center">
                                                       <img key={index} src={`${host}/${client.image}`} className="w-36 h-36 rounded-lg" />
                                                  </Box>
                                             )
                                        }
                                   </Slider>
                                   <Slider infinite={true} speed={400} slidesToShow={1} slidesToScroll={1} dots={false} className="!hidden w-4/5 mx-auto max-sm:!block">
                                        {
                                             clients.map((client, index) =>
                                                  <Box className="w-1/4 text-center !flex justify-center">
                                                       <img key={index} src={client.image} className="w-36 h-36 rounded-lg" />
                                                  </Box>
                                             )
                                        }
                                   </Slider>
                              </Box>
                    }
               </Box>

               {/* Send Email */}
               <Box className='w-1/2 mx-auto pb-5'>
                    <Typography variant="h4" fontWeight={800} className="text-center !my-10">تواصل معنا</Typography>
                    <TextField className="w-full" variant="outlined" label="الاسم" onChange={(e) => setName(e.target.value)} />
                    <TextField className="w-full !mt-3" variant="outlined" label="البريد الإلكتروني" onChange={(e) => setEmail(e.target.value)} />
                    <TextField className="w-full !mt-3" variant="outlined" multiline rows={3} label="الرسالة" onChange={(e) => setMsg(e.target.value)} />
                    <Box className='mx-auto w-1/3 mt-10 max-sm:w-full'>
                         <Button onClick={sendEmail} variant='outlined' className='!rounded-full w-full !border-green-500 !bg-green-500 !text-white hover:!bg-white hover:!text-green-500'>
                              {
                                   sendWait ?
                                        <CircularProgress size={20} className="" color="white" />
                                        :
                                        'إرسال'
                              }
                         </Button>
                    </Box>
               </Box>

               {/* Services Popup View */}
               <Box onMouseEnter={openServices} id='services' className='w-[500px] h-fit hidden bg-white absolute top-12 left-1/2 -translate-x-1/2 rounded-lg p-3'>
                    <Box onClick={() => navigate('/software')} className='flex items-center cursor-pointer hover:bg-gray-100 duration-100 p-2 rounded-lg' dir="rtl">
                         <img src={ProgrammingImage} className="w-20 h-2w-20 rounded-lg ml-3" />
                         <Typography fontWeight={800} variant="h5">تطوير البرمجيات</Typography>
                    </Box>
                    <Box onClick={() => navigate('/marketing')} className='flex items-center cursor-pointer hover:bg-gray-100 duration-100 p-2 rounded-lg' dir="rtl">
                         <img src={PromotionImage} className="w-20 h-2w-20 rounded-lg ml-3" />
                         <Typography fontWeight={800} variant="h5">التسويق الرقمي</Typography>
                    </Box>
                    <Box onClick={() => navigate('/photography')} className='flex items-center cursor-pointer hover:bg-gray-100 duration-100 p-2 rounded-lg' dir="rtl">
                         <img src={CameraImage} className="w-20 h-2w-20 rounded-lg ml-3" />
                         <Typography fontWeight={800} variant="h5">التصوير</Typography>
                    </Box>
               </Box>

               {/* <a href="https://wa.me"  target="_blank" className='fixed bottom-5 right-5 bg-yellow-400 w-16 h-16 rounded-full flex justify-center items-center cursor-pointer'>
                    <WhatsAppIcon className="text-white" fontSize="large" />
               </a> */}

               <Footer />

               {/* Snackbar Alert */}
               <SnackbarAlert open={openSnackBar} message={message} severity={type} onClose={() => setOpenSnackBar(false)} />
          </Box>
     );
}

export default Home;