import { Box, CircularProgress, Typography } from "@mui/material";
import Background1 from '../../images/backgrounds/background1.jpg';
import { useWaits } from "../../hooks/UseWait";
import { useEffect, useState } from "react";
import Fetch from "../../services/Fetch";
import { useConstants } from "../../hooks/UseConstants";
import MediaCard from "../../components/MediaCard";
import { useNavigate } from "react-router-dom";

function Projects() {
    const { host } = useConstants();
    const { getWait, setGetWait } = useWaits();
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    const getProjects = async () => {
        let result = await Fetch(`${host}/api/projects`, 'GET');

        if (result.status === 200) {
            setProjects(result.data.data.projects);
        }

        setGetWait(false);
    }

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <Box>
            <img className="w-full h-screen absolute top-0 -z-10" src={Background1} />
            {/* Starter */}
            <Box className="w-full h-screen pt-32">
                <Typography variant="h2" fontWeight={800} className="text-white text-center !my-5">معرض الأعمال</Typography>
                <Typography variant="h3" className="text-white text-center !mt-5">هنا تجدون الأعمال التي قمنا بإنجازها</Typography>
            </Box>

            {/* Projects */}
            <Box className="w-full h-screen py-5" dir="rtl">
                <Typography variant="h4" fontWeight={800} className="text-center">المشاريع</Typography>
                {
                    getWait ?
                        <Box className="w-full h-screen relative flex justify-center items-center">
                            <CircularProgress className="!text-yellow-500" size={70} />
                        </Box>
                        :
                        <Box className='grid grid-cols-3 gap-3 p-5'>
                            {
                                projects.map((project, index) =>
                                    <MediaCard title={ project.title } description={project.description} image={`${host}/${project.cover_image}`} btn1="تفاصيل" onClickBtn1={() => navigate(`/portfolio/${project.id}`)}/>
                                )
                            }
                        </Box>

                }
            </Box>
        </Box>
    );
}

export default Projects;