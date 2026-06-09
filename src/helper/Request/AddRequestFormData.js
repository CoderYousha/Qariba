export function buildAddRequestFormData ({
    service,
    category,
    subCategory,
    description,
    modelId
}){
    const formData = new FormData();
    
    formData.append('service', service);
    formData.append('category', category);
    formData.append('sub_category', subCategory);
    formData.append('description', description);
    formData.append('model_id', modelId);
    return formData;
}