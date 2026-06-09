import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useConstants } from "../../hooks/UseConstants";
import { useWaits } from "../../hooks/UseWait";
import Fetch from "../../services/Fetch";
import { useNavigate } from "react-router-dom";

function Banners() {
    const { language, host } = useConstants();
    const { getWait, setGetWait } = useWaits();
    const [banners, setBanners] = useState([]);
    const navigate = useNavigate();

    const getBanners = async () => {
        let result = await Fetch(`${host}/api/banners`, 'GET');

        if (result.status === 200) {
            setBanners(result.data.data.banners);
        }

        setGetWait(false);
    }

    useEffect(() => {
        getBanners();
    }, []);

    return (
        <>
            {
                getWait ?
                    <Box className="w-full h-screen relative flex justify-center items-center" sx={{ float: language === 'en' && 'right' }}>
                        <CircularProgress className="!text-yellow-500" size={70} />
                    </Box>
                    :
                    <Box className="p-10 pt-16" sx={{backgroundColor: "#F0D7A1"}} dir={language === 'en' ? 'ltr' : 'rtl'}>
                        {
                            banners.map((banner, index) =>
                                <Box className='w-5/6 mx-auto shadow-lg bg-white mb-20 rounded-lg'>
                                    <img src={host + `/${banner.image}`} className="w-full h-96 rounded-lg rounded-b-none" />
                                    <Box className="mx-5 mt-3 max-sm:flex-col">
                                        <Typography className="text-gray-400" fontWeight={800} variant="h6">{ banner.title }</Typography>
                                        <Typography variant="h6">{ banner.description }</Typography>
                                    </Box>
                                </Box>
                            )
                        }
                    </Box>
            }
        </>
    );
}

export default Banners;