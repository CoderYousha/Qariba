import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import AuthContext from "../../context/AuthContext";
import { useWaits } from "../../hooks/UseWait";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useConstants } from "../../hooks/UseConstants";
import Fetch from "../../services/Fetch";
import { useNavigate, useParams } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import SnackbarAlert from "../../components/SnackBar";
import useSnackBar from "../../hooks/UseSnackBar";
import ReactPlayer from 'react-player';
import Background from '../../images/backgrounds/background4.jpg';

function ProjectDetails() {
    const { host, language } = useConstants();
    const { openSnackBar, type, message, setSnackBar, setOpenSnackBar } = useSnackBar();
    const { getWait, setGetWait } = useWaits();
    const [project, setProject] = useState('');
    const param = useParams();
    const navigate = useNavigate();

    const getProject = async () => {
        let result = await Fetch(host + `/api/projects/${param.id}`, 'GET');

        if (result.status === 200) {
            setProject(result.data.data.project);
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
        getProject();
    }, []);

    return (
        <>
            {
                getWait ?
                    <Box className="w-full h-screen relative flex justify-center items-center" sx={{ float: language === 'en' && 'right' }}>
                        <CircularProgress className="!text-yellow-500" size={70} />
                    </Box>
                    :
                    <>
                        <img src={Background} className="fixed w-screen h-screen -z-30"/>
                        <Box className="p-5 text-white">
                            <Box className="float-left">
                                <Box className="h-[500px] overflow-y-scroll w-fit float-left none-view-scroll mr-3 cursor-pointer max-sm:flex max-sm:overflow-x-scroll max-sm:h-fit">
                                    {
                                        project.images?.map((image, index) =>
                                            <>
                                                <img key={index} onClick={() => changeImage(`${host}/${image.image}`)} src={`${host}/${image.image}`} className="w-14 h-14 mb-1 rounded-full max-sm:mr-3" />
                                                <Typography variant="body1" className="text-center !mb-3">{image.sort_order}</Typography>

                                            </>
                                        )
                                    }
                                </Box>
                                <img id="main-image" src={`${host}/${project.images[0]?.image}`} className="w-[500px] h-[500px]" />
                            </Box>
                            <Box className="float-right ml-10 max-sm:ml-0 max-sm:w-full" dir="rtl">
                                <Typography fontWeight={800} variant="h3">{project.title}</Typography>
                                <Typography fontWeight={500} variant="body1" className="!mt-5">{project.description}</Typography>
                                {
                                    project.client_name &&
                                    <Typography fontWeight={500} variant="body1" className="!mt-5"><b>اسم العميل:</b> {project.client_name}</Typography>
                                }
                                {
                                    project.project_url &&
                                    <Button variant="contained" className="!mt-10" onClick={() => navigate(project.project_url)}>رابط المشروع</Button>
                                }
                            </Box>
                        </Box>
                        <Box className='grid grid-cols-3 p-5 gap-x-1 max-sm:grid-cols-1 w-full'>
                            {
                                project.videos?.map((video, index) =>
                                    <Box key={index} className='relative w-fit h-48'>
                                        <ReactPlayer src={`${host}/${video.video}`} controls={true}
                                            width="100%"
                                            height="100%" />
                                    </Box>
                                )
                            }
                        </Box>
                    </>
            }

            {/* Snackbar Alert */}
            <SnackbarAlert open={openSnackBar} message={message} severity={type} onClose={() => setOpenSnackBar(false)} />
        </>
    );
}

export default ProjectDetails;