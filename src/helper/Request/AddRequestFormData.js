export function buildAddRequestFormData ({
    service,
    category,
    subCategory,
    description,
}){
    const formData = new FormData();
    
    formData.append('service', service);
    formData.append('category', category);
    formData.append('sub_category', subCategory);
    formData.append('description', description);
    return formData;
}