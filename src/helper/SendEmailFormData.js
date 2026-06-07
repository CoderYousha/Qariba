export function buildSendEmailFormData ({
    name,
    email,
    message
}){
    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    return formData;
}