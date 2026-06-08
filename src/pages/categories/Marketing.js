import { Box, CircularProgress, Typography } from "@mui/material";
import Background1 from '../../images/backgrounds/background1.jpg';
import { useWaits } from "../../hooks/UseWait";
import { useContext, useEffect, useState } from "react";
import Fetch from "../../services/Fetch";
import { useConstants } from "../../hooks/UseConstants";
import MediaCard from "../../components/MediaCard";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import useSnackBar from "../../hooks/UseSnackBar";
import { usePopups } from "../../hooks/UsePopups";
import InboxIcon from '@mui/icons-material/Inbox';
import RequestNewService from "../../popup/request/RequestNewService";
import SnackbarAlert from "../../components/SnackBar";

function Marketing() {
    const { wait, profile } = useContext(AuthContext);
    const { host, language } = useConstants();
    const { getWait, setGetWait } = useWaits();
    const [categories, setCategories] = useState([]);
    const { setPopup } = usePopups();
    const { openSnackBar, type, message, setSnackBar, setOpenSnackBar } = useSnackBar();
    const navigate = useNavigate();

    const getCategories = async () => {
        let result = await Fetch(`${host}/api/categories?service=digital_marketing`, 'GET');

        if (result.status === 200) {
            setCategories(result.data.data);
        }

        setGetWait(false);
    }

    const createRequest = () => {
        if (!profile) {
            setSnackBar('error', 'يجب عليك تسجيل الدخول أولا');
        } else {
            setPopup('request', 'flex');
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <Box>
            <img className="w-full h-screen absolute top-0 -z-10" src={Background1} />
            {/* Starter */}
            <Box className="w-full h-screen pt-32">
                <Typography variant="h2" fontWeight={800} className="text-white text-center !my-5">التسويق الرقمي والسوشال ميديا</Typography>
                <Typography variant="h3" className="text-white text-center !mt-5">نحن لا نروج فقط.. نحن نصنع نموا حقيقيا</Typography>
            </Box>

            {/* Categories */}
            <Box className="w-full min-h-screen py-5" dir="rtl">
                <Typography variant="h4" fontWeight={800} className="text-center">الأصناف</Typography>
                {
                    getWait ?
                        <Box className="w-full h-screen relative flex justify-center items-center">
                            <CircularProgress className="!text-yellow-500" size={70} />
                        </Box>
                        :
                        <Box className='grid grid-cols-3 gap-3 p-5'>
                            {
                                categories.map((category, index) =>
                                    <MediaCard title={category.category} btn1="تفاصيل" onClickBtn1={() => navigate(`/sub-categories/${category.id}`)} />
                                )
                            }
                        </Box>

                }
            </Box>

            <Box onClick={createRequest} className='fixed bottom-5 right-5 bg-yellow-400 w-16 h-16 rounded-full flex justify-center items-center cursor-pointer'>
                <InboxIcon className="text-white" fontSize="large" />
            </Box>

            {/* Create Request Popup */}
            <Box id="request" sx={{ right: language === 'en' && '0' }} className="w-screen h-screen fixed top-0 left-1/2 -translate-x-1/2 bg-gray-200 bg-opacity-5 hidden justify-center items-center">
                <RequestNewService service='photography' setSnackBar={setSnackBar} onClickCancel={() => setPopup('request', 'none')} />
            </Box>

            {/* Snackbar Alert */}
            <SnackbarAlert open={openSnackBar} message={message} severity={type} onClose={() => setOpenSnackBar(false)} />
        </Box>
    );
}

export default Marketing;