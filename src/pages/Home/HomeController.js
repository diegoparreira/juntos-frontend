import { useState } from "react"
import axios from 'axios';

export function useHomeState(){
    const [contents, setContents] = useState([]);
    const [categories, setCategories] = useState([]);

    const BASE_ENDPOINT = "http://localhost:3003";

    const getAllContents = async () => {
        try {
            console.log(`${BASE_ENDPOINT}/contents/bycategories`);
            const response = await axios.get(`${BASE_ENDPOINT}/contents/bycategories`);
            console.log("Response of bycategories");
            console.log(response);
    
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    const getAllCategories = async () => {
        try {
            console.log(`${BASE_ENDPOINT}/categories`);
            const response = await axios.get(`${BASE_ENDPOINT}/categories`);
            console.log("Response of categories");
            console.log(response);
    
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    return {
        contents,
        setContents,
        categories,
        setCategories,
        getAllContents,
        getAllCategories
    }
}