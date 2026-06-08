export function buildRegisterFormData ({
    fullName,
    phone,
    email,
    password,
    passwordConfirmation
}){
    const formData = new FormData();

    formData.append('full_name', fullName);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirmation', passwordConfirmation);

    return formData;
}