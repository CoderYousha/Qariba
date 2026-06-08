import { Box, CircularProgress, Typography } from "@mui/material";
import Background1 from '../../images/backgrounds/background1.jpg';
import { useWaits } from "../../hooks/UseWait";
import { useContext, useEffect, useState } from "react";
import Fetch from "../../services/Fetch";
import { useConstants } from "../../hooks/UseConstants";
import MediaCard from "../../components/MediaCard";
import { useParams } from "react-router-dom";
import RequestService from "../../popup/request/RequestService";
import SnackbarAlert from "../../components/SnackBar";
import useSnackBar from "../../hooks/UseSnackBar";
import { usePopups } from "../../hooks/UsePopups";
import AuthContext from "../../context/AuthContext";

function SubCategories() {
    const {wait, profile} = useContext(AuthContext);
    const { host, language } = useConstants();
    const { getWait, setGetWait } = useWaits();
    const [subCategories, setSubCategories] = useState([]);
    const { openSnackBar, type, message, setSnackBar, setOpenSnackBar } = useSnackBar();
    const { setPopup } = usePopups();
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const param = useParams();

    const getCategory = async () => {
        let result = await Fetch(`${host}/api/categories/${param.id}`, 'GET');

        if (result.status === 200) {
            setCategory(result.data.data);
        }
    }

    const getSubCategories = async () => {
        let result = await Fetch(`${host}/api/sub-categories/category/${param.id}`, 'GET');

        if (result.status === 200) {
            setSubCategories(result.data.data);
        }
    }

    const createRequest = (subcategory) => {
        if(!profile){
            setSnackBar('error', 'يجب عليك تسجيل الدخول أولا');
        }else{
            setSubCategory(subcategory);
            setPopup('request', 'flex');
        }
    }

    useEffect(() => {
        const synchronization = async () => {
            await getCategory();
            await getSubCategories();
            setGetWait(false);
        }

        synchronization();
    }, []);

    return (
        <Box>
            {
                getWait && wait ?
                    <Box className="w-full h-screen relative flex justify-center items-center">
                        <CircularProgress className="!text-yellow-500" size={70} />
                    </Box>
                    :
                    <>
                        <img className="w-full h-screen absolute top-0 -z-10" src={Background1} />
                        {/* Starter */}
                        <Box className="w-full h-screen pt-32">
                            <Typography variant="h2" fontWeight={800} className="text-white text-center !my-5">{category.category}</Typography>
                        </Box>

                        {/* Sub Categories */}
                        <Box className="w-full min-h-screen py-5" dir="rtl">
                            <Typography variant="h4" fontWeight={800} className="text-center">الأصناف الفرعية</Typography>
                            <Box className='grid grid-cols-3 gap-3 p-5'>
                                {
                                    subCategories.map((subCategory, index) =>
                                        <MediaCard
                                            title={subCategory.sub_category}
                                            btn1='طلب الخدمة'
                                            onClickBtn1={() => createRequest(subCategory)}
                                        />
                                    )
                                }
                            </Box>

                        </Box>
                    </>
            }

            {/* Create Request Popup */}
            <Box id="request" sx={{ right: language === 'en' && '0' }} className="w-4/5 h-screen fixed top-0 left-1/2 -translate-x-1/2 bg-gray-200 bg-opacity-5 hidden justify-center items-center">
                <RequestService setSnackBar={setSnackBar} onClickCancel={() => setPopup('request', 'none')} categoryId={category.id} service={category.service} subCategoryId={subCategory.id} />
            </Box>
            {/* Snackbar Alert */}
            <SnackbarAlert open={openSnackBar} message={message} severity={type} onClose={() => setOpenSnackBar(false)} />
        </Box>
    );
}

export default SubCategories;