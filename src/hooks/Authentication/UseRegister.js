import { useState } from "react";

export function useRegister (){
    const [fullName, setFullName] =useState('');
    const [phone, setPhone] =useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [passwordConfirmation, setPasswordConfirmation] =useState('');

    return {
        fullName, setFullName, phone, setPhone, email, setEmail, password, setPassword, passwordConfirmation,
        setPasswordConfirmation
    };
}