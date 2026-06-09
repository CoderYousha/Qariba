import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useReveal from "../hooks/UseReval";

function QaribaCard({ frontFaceImage, backFaceImage, frontFaceTitle, backFaceTitle, backFaceDescription, onClick }) {
    const revealRef = useReveal();
    return (
        // <Box className="w-2/3 h-72 bg-yellow-500 rounded-lg text-white cursor-pointer brightness-110" onClick={onClick}>
        //     <Box className="card-inner cursor-pointer flex flex-col justify-center items-center py-3">
        //         <img src={image} className="w-20 h-20 rounded-full" />
        //         <Typography variant="h5" fontWeight={800} className="!mt-10 text-center text-white max-sm:!text-sm">{title}</Typography>
        //     </Box>
        // </Box>
        <Box className="w-2/3 h-72 [perspective:1000px] group cursor-pointer" onClick={onClick}>
            <Box className="relative w-full h-full duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                <Box className="absolute inset-0 w-full h-full bg-yellow-500 rounded-lg text-white flex flex-col justify-center items-center py-3 [backface-visibility:hidden]">
                    {
                        frontFaceImage &&
                        <img src={frontFaceImage} className="w-20 h-20 rounded-full" />
                    }
                    <Typography variant="h5" fontWeight={800} className="!mt-10 text-center text-white max-sm:!text-sm">
                        {frontFaceTitle}
                    </Typography>
                </Box>

                <Box className="absolute inset-0 w-full h-full bg-orange-600 rounded-lg text-white flex flex-col justify-center items-center p-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    {
                        backFaceImage &&
                        <img src={backFaceImage} className="" />
                    }
                    {
                        backFaceTitle &&
                        <Typography variant="h5" fontWeight={800} className="!mt-10 text-center text-white max-sm:!text-sm">
                            {backFaceTitle}
                        </Typography>
                    }
                    <Typography variant="body1" fontWeight={800} className="!mt-10 text-center text-white max-sm:!text-sm">
                        {backFaceDescription}
                    </Typography>
                </Box>

            </Box>
        </Box>
    );
}

export default QaribaCard;