import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { useWaits } from "../../hooks/UseWait";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useConstants } from "../../hooks/UseConstants";
import Fetch from "../../services/Fetch";
import { useNavigate, useParams } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import { FormattedMessage } from "react-intl";
import SnackbarAlert from "../../components/SnackBar";
import useSnackBar from "../../hooks/UseSnackBar";

function BannerDetails() {
    const { host, language } = useConstants();
    const { wait } = useContext(AuthContext);
    const { openSnackBar, type, message, setSnackBar, setOpenSnackBar } = useSnackBar();
    const { getWait, setGetWait, sendWait, setSendWait } = useWaits();
    const [banner, setBanner] = useState('');
    const param = useParams();
    const navigate = useNavigate();

    const getBanner = async () => {
        let result = await Fetch(host + `/api/banners/${param.id}`, 'GET', null);

        if (result.status === 200) {
            setBanner(result.data.data.banner);
        }

        setGetWait(false);
    }

    const changeImage = (path) => {
        document.getElementById('main-image').style.display = 'none';
        document.getElementById('main-image').setAttribute('src', path);

        setTimeout(() => {
            document.getElementById('main-image').style.display = 'block';
        }, 0.1)
    }

    useEffect(() => {
        getBanner();
    }, []);

    return (
        <>
            {
                wait ?
                    <Box className="w-full h-screen relative flex justify-center items-center" sx={{ float: language === 'en' && 'right' }}>
                        <CircularProgress className="!text-purple-500" size={70} />
                    </Box>
                    :
                    <>
                        {
                            getWait ?
                                <Box className="w-full h-screen relative flex justify-center items-center" sx={{ float: language === 'en' && 'right' }}>
                                    <CircularProgress className="!text-purple-500" size={70} />
                                </Box>
                                :
                                <Box className="p-5">
                                    <Box className="float-left">
                                        <Box className="h-[500px] overflow-y-scroll w-fit float-left none-view-scroll mr-3 cursor-pointer max-sm:flex max-sm:overflow-x-scroll max-sm:h-fit">
                                            {
                                                banner.images?.map((image, index) =>
                                                    <img key={index} onClick={() => changeImage(host + `/${image.image}`)} src={host + `/${image.image}`} className="w-14 h-14 mb-3 rounded-full max-sm:mr-3" />
                                                )
                                            }
                                        </Box>
                                        <img id="main-image" src={host + `/${banner.images[0].image}`} className="w-[500px] h-[500px]" />
                                    </Box>
                                    <Box className="float-left ml-10 max-sm:ml-0 max-sm:w-full">
                                        <Typography fontWeight={800} variant="h6">{language === 'en' ? banner.name_en : banner.name_ar}</Typography>
                                        <Button disabled={sendWait} onClick={()=> navigate(`/product/${banner.product.id}`)} variant="contained" className="!bg-purple-600 !mt-10 w-full">{language === 'en' ? banner.product.name_en : banner.product.name_ar}</Button>
                                    </Box>
                                </Box>
                        }
                    </>
            }

            {/* Snackbar Alert */}
            <SnackbarAlert open={openSnackBar} message={message} severity={type} onClose={() => setOpenSnackBar(false)} />
        </>
    );
}

export default BannerDetails;