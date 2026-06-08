import { useState } from "react";

export function useAddRequest() {
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [description, setDescription] = useState('');

    return {
        category, setCategory, subCategory, setSubCategory, description, setDescription
    };
}