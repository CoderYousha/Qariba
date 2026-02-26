import { Box, Typography } from "@mui/material";
import Background from '../images/backgrounds/background4.jpg';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HighQualityOutlinedIcon from '@mui/icons-material/HighQualityOutlined';

function Aboutus() {
    return (
        <Box className="" dir="rtl">
            <img className="w-full h-screen absolute top-0 -z-10" src={Background} />
            {/* Starter */}
            <Box className="w-full h-screen pt-32">
                <Typography variant="h2" className="text-white text-center max-sm:!text-2xl">قريبة شريكك الاستراتيجي للنمو الرقمي في المنطقة</Typography>
                <Typography variant="h6" className="text-white text-center !mt-10">تأسست شركة قريبة عام 2022 انطلاقًا من رؤية واضحة لدعم التحول الرقمي وتمكين الشركات من تحقيق نمو مستدام. تقدم قريبة حلولًا متكاملة في البرمجيات، التسويق الرقمي، وتطوير الأعمال، تجمع بين الابتكار التقني والفهم العميق لاحتياجات السوق.</Typography>
                <Typography variant="h6" className="text-white text-center !mt-10">وتعد قريبة اليوم من الشركات الرائدة في الإمارات وسوريا، حيث تعمل بخبرة والتزام على تطوير أعمال الشركات في مختلف المجالات الرقمية، عبر استراتيجيات ذكية وحلول عملية تصنع أثرًا حقيقيًا ونتائج ملموسة.</Typography>
            </Box>

            {/* Services */}
            <Box className="w-full h-screen px-5 py-5 max-sm:h-fit" sx={{ backgroundColor: '#F0D7A1' }}>
                <Typography variant="h4" fontWeight={800} className="text-center !pt-10">مبادئ قريبة</Typography>
                <Box className="grid grid-cols-2 gap-x-2 gap-y-5 mt-40 max-sm:grid-cols-1 max-sm:mt-14">
                    <Box className="relative glass px-5 py-5 !shadow-lg !shadow-[#793503] hover:!shadow-md">
                        <Typography fontWeight={800} variant="h6" className="text-center !mt-10 black-gold-color">الابتكار المستمر</Typography>
                        <Typography variant="body1" className="!mt-10 text-center">نؤمن أن التطور الرقمي لا يتوقف، لذلك نواكب أحدث التقنيات ونطوّر حلولًا ذكية تواكب المستقبل.</Typography>
                        <LightbulbOutlinedIcon fontSize="large" className="text-yellow-500 absolute top-5 left-5"/>
                    </Box>
                    <Box className="relative glass px-5 py-5 !shadow-lg !shadow-[#793503] hover:!shadow-md">
                        <Typography fontWeight={800} variant="h6" className="text-center !mt-10 black-gold-color">النتائج قبل كل شيء</Typography>
                        <Typography variant="body1" className="!mt-10 text-center">نركز على تحقيق نتائج ملموسة وقابلة للقياس، لأن نجاح عملائنا هو المعيار الحقيقي لنجاحنا.</Typography>
                        <SportsScoreIcon fontSize="large" className="text-gray-600 absolute top-5 left-5"/>
                    </Box>
                    <Box className="relative glass px-5 py-5 !shadow-lg !shadow-[#793503] hover:!shadow-md">
                        <Typography fontWeight={800} variant="h6" className="text-center !mt-10 black-gold-color">الشراكة لا التعاقد</Typography>
                        <Typography variant="body1" className="!mt-10 text-center">نتعامل مع عملائنا كشركاء في النجاح، ونسير معهم خطوة بخطوة نحو تحقيق أهدافهم.</Typography>
                        <HandshakeIcon fontSize="large" className="text-orange-500 absolute top-5 left-5"/>
                    </Box>
                    <Box className="relative glass px-5 py-5 !shadow-lg !shadow-[#793503] hover:!shadow-md">
                        <Typography fontWeight={800} variant="h6" className="text-center !mt-10 black-gold-color">الجودة والاحترافية</Typography>
                        <Typography variant="body1" className="!mt-10 text-center">نلتزم بأعلى معايير الجودة في البرمجة، التصميم، والتسويق لضمان تجربة متكاملة ومتميزة.</Typography>
                        <HighQualityOutlinedIcon fontSize="large" className="text-blue-500 absolute top-5 left-5"/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Aboutus;