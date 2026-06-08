import { Box, Button, Checkbox, CircularProgress, Divider, FormControlLabel, TextField, Typography, useTheme } from "@mui/material";
import { useConstants } from "../../hooks/UseConstants";
import PhoneInput from "react-phone-input-2";
import { useWaits } from "../../hooks/UseWait";
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import Fetch from "../../services/Fetch";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAddRequest } from "../../hooks/Request/UseAddRequest";
import { buildAddRequestFormData } from "../../helper/Request/AddRequestFormData";

function RequestNewService({ onClickCancel, setSnackBar, service }) {
    const theme = useTheme();
    const { host, language } = useConstants();
    const { sendWait, setSendWait } = useWaits();
    const {category, setCategory,subCategory, setSubCategory, description, setDescription} = useAddRequest();

    const addRequest = async () => {
        setSendWait(true);

        const formData = buildAddRequestFormData({
            service: service,
            category: category,
            subCategory: subCategory,
            description: description
        });

        let result = await Fetch(`${host}/api/requests`, 'POST', formData);

        if (result.status === 201) {
            setSnackBar('success', result.data.message);
            resetValue();
            onClickCancel();
        } else if (result.status === 422) {
            setSnackBar('error', result.data.errors[0]);
        } else if (result.status === 400) {
            setSnackBar('error', result.data.error);
        }

        setSendWait(false);
    }

    const resetValue = () => {
        setCategory('');
        setSubCategory('');
        setDescription('');
    }

    return (
        <Box sx={{ backgroundColor: theme.palette.background.paper }} className="shadow-lg w-3/5 h-fit rounded-3xl px-4 py-5 overflow-y-scroll none-view-scroll max-sm:w-4/5 max-sm:translate-x-0 max-sm:left-0 relative max-sm:overflow-y-scroll" dir={language === 'en' ? 'ltr' : "rtl"}>
            <Typography variant="h5" className="!font-semibold max-sm:!text-xl">
                إنشاء الطلب
            </Typography>
            <CloseIcon onClick={() => { resetValue(); onClickCancel(); }} className="text-gray-700 cursor-pointer absolute top-5 left-5" fontSize="large" sx={{ left: language === 'en' && '90%' }}></CloseIcon>
            <Divider className="!my-5" />
            <Box>
                <Box className='flex flex-col justify-between mt-16 gap-y-3 max-sm:flex-col'>
                    <TextField variant="outlined" label='الصنف' className="w-full max-sm:w-full" value={category} onChange={(e) => setCategory(e.target.value)} />
                    <TextField variant="outlined" label='الصنف الفرعي' className="w-full max-sm:w-full" value={subCategory} onChange={(e) => setSubCategory(e.target.value)} />
                    <TextField variant="outlined" multiline rows={3} label='الوصف' className="w-full max-sm:w-full" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Box>
                <Box className='mx-auto w-1/3 mt-10 max-sm:w-full'>
                    <Button onClick={addRequest} variant='outlined' className='!rounded-full w-full !border-green-500 !bg-green-500 !text-white hover:!bg-white hover:!text-green-500'>
                        {
                            sendWait ?
                                <CircularProgress size={20} className="" color="white" />
                                :
                                'إنشاء'
                        }
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default RequestNewService;