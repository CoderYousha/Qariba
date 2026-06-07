import { Box, Divider, Typography } from "@mui/material";
import Logo from '../images/logo/logo.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useConstants } from "../hooks/UseConstants";
import Fetch from "../services/Fetch";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Footer() {
    const { host } = useConstants();
    const [contacts, setContacts] = useState('');
    const navigate = useNavigate();

    const getContacts = async () => {
        let result = await Fetch(`${host}/api/contacts`, 'GET');

        if (result.status === 200) {
            setContacts(result.data.data.data);
        }
    }

    useEffect(() => {
        getContacts();
    }, []);

    return (
        <Box id="contact-us" className="w-full h-fit bg-orange-700 rounded-tr-[50px] py-5 px-5">
            <Box className="flex justify-between">
                <Box className="w-1/4 flex items-center justify-between max-sm:w-2/4">
                    {
                        contacts.facebook &&
                        <a className="contact-a-hover text-white text-4xl hover:text-gray-300 duration-200 cursor-pointer" href={contacts.facebook} target="_blank"><i className="fab fa-facebook-f"></i></a>
                    }
                    {
                        contacts.youtube &&
                        <a className="contact-a-hover text-white text-4xl hover:text-gray-300 duration-200 cursor-pointer" href={contacts.youtube} target="_blank"><i className="fab fa-youtube"></i></a>
                    }
                    {
                        contacts.tiktok &&
                        <a className="contact-a-hover text-white text-4xl hover:text-gray-300 duration-200 cursor-pointer" href={contacts.tiktok} target="_blank"><i className="fab fa-tiktok"></i></a>
                    }
                    {
                        contacts.instagram &&
                        <a className="contact-a-hover text-white text-4xl hover:text-gray-300 duration-200 cursor-pointer" href={contacts.instagram} target="_blank"><i className="fab fa-instagram"></i></a>
                    }
                </Box>
                <img src={Logo} className="w-28" />
            </Box>
            <Box className="text-white flex flex-row-reverse justify-between pt-10 max-sm:block">
                <Box className="text-center">
                    <Typography variant="body1" className="">شركة قريبة للحلول البرمجية والتسويقية</Typography>
                    <Typography variant="body1" className="!mt-5">نساعدك لتحويل أفكارك إلى حقيقة</Typography>
                </Box>
                <Divider className="bg-white !my-5 hidden max-sm:block" />
                <Box className="text-center">
                    <Typography variant="body1" fontWeight={800} className="">روابط سريعة</Typography>
                    <HashLink to='/home#header' smooth>
                        <Typography variant="body1" className="cursor-pointer !mt-5">الصفحة الرئيسية</Typography>
                    </HashLink>
                    <Typography onClick={() => navigate('/about-us')} variant="body1" className="cursor-pointer !mt-5">من نحن</Typography>
                    <Typography variant="body1" onClick={() => navigate('/banners')} className="cursor-pointer !mt-5">الإعلانات</Typography>
                </Box>
                <Divider className="bg-white !my-5 hidden max-sm:block" />
                <Box className="text-center">
                    <Typography variant="body1" fontWeight={800} className="">تواصل معنا</Typography>
                    <Typography variant="body1" className="!mt-5">سوريا - دمشق</Typography>
                    <Typography variant="body1" className="!mt-5">العنوان</Typography>
                    <Typography variant="body1" className="!mt-5">العنوان: السبع بحرات - مقابل معهد نيو هرايزن</Typography>
                    <Typography variant="body1" className="!mt-5">رقم الهاتف</Typography>
                    <Typography variant="body1" className="!mt-5">+963982482409</Typography>
                    <Typography variant="body1" className="!mt-5">الإيميل</Typography>
                    <Typography variant="body1" className="!mt-5">support@qariba.net</Typography>
                </Box>
                <Divider className="bg-white !my-5 hidden max-sm:block" />
                <Box className="text-center">
                    <Typography fontWeight={800} className="">تواصل معنا</Typography>
                    <Typography className="!mt-5">الإمارات - أبو ظبي</Typography>
                    <Typography className="!mt-5">العنوان</Typography>
                    <Typography className="!mt-5">شارع محمد بن زايد</Typography>
                    <Typography className="!mt-5">رقم الهاتف</Typography>
                    <Typography className="!mt-5">+971562662764</Typography>
                    <Typography className="!mt-5">الإيميل</Typography>
                    <Typography className="!mt-5">support@qariba.net</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;