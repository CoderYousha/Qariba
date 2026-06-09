import { useState } from "react";

export function useAddRequest() {
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [description, setDescription] = useState('');
    const [modelId, setModelId] = useState('');

    return {
        category, setCategory, subCategory, setSubCategory, description, setDescription, modelId, setModelId
    };
}