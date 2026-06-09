import { useNavigate } from "react-router-dom";
import { useConstants } from "../../hooks/UseConstants";
import CheckLogin from "../../services/CheckLogin";
import { useWaits } from "../../hooks/UseWait";
import { useLogin } from "../../hooks/Authentication/UseLogin";
import { buildLoginFormData } from "../../helper/Authentication/LoginFormData";
import Fetch from "../../services/Fetch";
import useSnackBar from "../../hooks/UseSnackBar";
import SnackbarAlert from "../../components/SnackBar";
import { Typography, Box, Button, CircularProgress, useTheme } from '@mui/material';
import { useEffect, useState } from "react";
import Logo from "../../images/logo/logo.jpeg";
import { useRegister } from "../../hooks/Authentication/UseRegister";
import { buildRegisterFormData } from "../../helper/Authentication/RegisterFormData";
import VerificationInput from "react-verification-input";

function Register() {
    const { host } = useConstants();
    const { getWait, setGetWait, sendWait, setSendWait } = useWaits();
    const { email, setEmail, password, setPassword, fullName, setFullName, passwordConfirmation, setPasswordConfirmation, phone, setPhone } = useRegister();
    const { openSnackBar, type, message, setOpenSnackBar, setSnackBar } = useSnackBar();
    const [ openCodeSection, setOpenCodeSection ] = useState(false);
    const navigate = useNavigate();
    const theme = useTheme();

    //Check Login Function
    const checkLogin = async () => {
        let result = await CheckLogin(host);
        if (result) {
            navigate('/home');
        } else {
            setGetWait(false);
        }
    }

    //Register
    const register = async () => {
        setSendWait(true);

        const formData = buildRegisterFormData({
            fullName: fullName,
            phone: phone,
            email: email,
            password: password,
            passwordConfirmation: passwordConfirmation
        });

        let result = await Fetch(`${host}/api/register`, 'POST', formData);

        if (result.status === 201) {
            localStorage.setItem('verify-token', result.data.data);
            setOpenCodeSection(true);
        } else if (result.status === 422) {
            setSnackBar('error', result.data.errors[0]);
        } else if (result.status === 400) {
            setSnackBar('error', result.data.error);
        }

        setSendWait(false);
    }

    //Verify Register
    const verifyRegister = async (code) => {
        const formData = new FormData();
        formData.append('code', code);

        let result = await Fetch(`${host}/api/verify-register`, 'POST', formData, localStorage.getItem('verify-token'));

        if (result.status === 201) {
            localStorage.setItem('token',result.data.data.token);
            localStorage.removeItem('verify-token');
            navigate('/home');
        }
    }

    useEffect(() => {
        checkLogin();
    }, []);

    return (
        <>
            {
                getWait ?
                    <Box className="w-full h-screen relative flex justify-center items-center">
                        <CircularProgress size={70} className='!text-yellow-500' />
                    </Box>
                    :
                    <Box className=''>
                        <Box className='w-2/6 mx-auto mt-20 rounded-xl shadow-lg px-5 py-5 max-sm:w-4/5 bg-white'>
                            <img src={Logo} className="rounded-full w-20 h-20 mx-auto" />
                            {
                                !openCodeSection ?
                                    <>
                                        <Typography variant='h3' className='!my-5' fontWeight={700}>Register</Typography>
                                        <Typography variant='body1'>Full Name</Typography>
                                        <input onChange={(e) => setFullName(e.target.value)} type='text' className='w-full py-2 rounded-lg indent-2 outline-none bg-yellow-100' />
                                        <Typography variant='body1' className='!mt-3'>Phone</Typography>
                                        <input onChange={(e) => setPhone(e.target.value)} type='text' className='w-full py-2 rounded-lg indent-2 outline-none bg-yellow-100' />
                                        <Typography variant='body1' className='!mt-3'>Email</Typography>
                                        <input onChange={(e) => setEmail(e.target.value)} type='text' className='w-full py-2 rounded-lg indent-2 outline-none bg-yellow-100' />
                                        <Typography variant='body1' className='!mt-3'>Password</Typography>
                                        <input onChange={(e) => setPassword(e.target.value)} type='password' className='w-full py-2 rounded-lg indent-2 outline-none bg-yellow-100' />
                                        <Typography variant='body1' className='!mt-3'>Password Confirmation</Typography>
                                        <input onChange={(e) => setPasswordConfirmation(e.target.value)} type='password' className='w-full py-2 rounded-lg indent-2 outline-none bg-yellow-100' />
                                        <Typography onClick={() => navigate('/login')} variant='body1' className='!my-3 cursor-pointer text-gray-600 hover:text-orange-500 w-fit'>I already have an account</Typography>
                                        <Box className='mx-auto w-fit'>
                                            <Button onClick={register} variant='outlined' className='!rounded-full w-32 !border-green-500 !bg-green-500 !text-white hover:!bg-white hover:!text-green-500'>
                                                {
                                                    sendWait ?
                                                        <CircularProgress size={20} className="" color="white" />
                                                        :
                                                        'SIGN IN'
                                                }
                                            </Button>
                                        </Box>
                                    </>
                                    :
                                    <Box className=''>
                                        <Typography variant='h5' className="!mt-5">Verification Code</Typography>
                                        <Box className='mx-auto w-fit my-5'>
                                            <VerificationInput
                                                autoFocus
                                                passwordChar="*"
                                                passwordMode
                                                classNames={{
                                                    character: "character",
                                                    characterInactive: "character--inactive",
                                                    characterSelected: "character--selected",
                                                    characterFilled: "character--filled",
                                                }}
                                                onComplete={(value) => verifyRegister(value)}
                                            />
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

export default Register;