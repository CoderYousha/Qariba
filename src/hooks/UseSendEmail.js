import { useState } from "react";

export function useSendEmail () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    return {
        name, setName, email, setEmail, msg, setMsg
    };
}