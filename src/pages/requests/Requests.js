import { useContext, useEffect, useState } from "react";
import { useConstants } from "../../hooks/UseConstants";
import AuthContext from "../../context/AuthContext";
import { Box, Button, CircularProgress, Typography, useTheme } from "@mui/material";
import { useWaits } from "../../hooks/UseWait";
import { usePopups } from "../../hooks/UsePopups";
import { useParams } from "react-router-dom";
import Fetch from "../../services/Fetch";
import useSnackBar from "../../hooks/UseSnackBar";
import SnackbarAlert from "../../components/SnackBar";
import MediaCard from "../../components/MediaCard";
import Background from '../../images/backgrounds/background5.png';

function Requests() {
    const { language, host } = useConstants();
    const { wait } = useContext(AuthContext);
    const { getWait, setGetWait } = useWaits();
    const { setPopup } = usePopups();
    const theme = useTheme();
    const [requests, setRequests] = useState([]);
    const { openSnackBar, type, message, setSnackBar, setOpenSnackBar } = useSnackBar();

    const getRequests = async () => {
        let result = await Fetch(`${host}/api/requests`, 'GET');

        if (result.status === 200) {
            setRequests(result.data.data.requests);
        }

        setGetWait(false);
    }

    const deleteRequests = async (id) => {
        let result = await Fetch(`${host}/api/requests/${id}`, 'DELETE');

        if (result.status === 200) {
            setRequests((prevRequests) => prevRequests.filter((prevRequest) => prevRequest.id !== id));
            setSnackBar('success', result.data.message);
        }
    }

    useEffect(() => {
        getRequests();
    }, []);

    return (
        <>
            {
                wait ?
                    <Box className="w-full h-screen relative flex justify-center items-center" sx={{ float: language === 'en' && 'right' }}>
                        <CircularProgress className="!text-yellow-500" size={70} />
                    </Box>
                    :
                    <Box>
                        <img src={Background} className="w-screen h-screen fixed -z-20"/>
                        <Box className="w-full rounded-xl relative" dir={language === 'en' ? 'ltr' : "rtl"} sx={{ float: language === 'en' && 'right' }}>
                            {
                                getWait ?
                                    <Box className="w-full h-screen relative flex justify-center items-center">
                                        <CircularProgress className="!text-yellow-500" size={70} />
                                    </Box>
                                    :
                                    <Box className="rounded-xl px-2">
                                        {/* Top Section */}
                                        <Box className="flex justify-between items-center px-2">
                                            <Typography fontWeight={800} variant="h3" className="py-2 px-3 text-white max-sm:!text-lg">الطلبات</Typography>
                                        </Box>
                                        <Box className='grid grid-cols-3 gap-y-5 mt-10 max-sm:grid-cols-1'>
                                            {
                                                requests.map((request, index) =>
                                                    <MediaCard
                                                        key={index}
                                                        title={request.category}
                                                        subTitle={request.sub_category}
                                                        description={request.description}

                                                        btn1='حذف'
                                                        onClickBtn1={() => deleteRequests(request.id)}
                                                    />
                                                )
                                            }
                                        </Box>
                                    </Box>
                            }
                        </Box>
                    </Box>
            }

            {/* Snackbar Alert */}
            <SnackbarAlert open={openSnackBar} message={message} severity={type} onClose={() => setOpenSnackBar(false)} />
        </>
    );
}

export default Requests;