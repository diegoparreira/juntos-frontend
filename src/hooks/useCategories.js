import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";
import usePostRequest from "./usePostRequest";

export function useCategories (){
    const [categories, setCategories] = useState([]);
    const { get } = useGetRequest("categories/");
    const { post } = usePostRequest("categories/");

    useEffect(() => {
        const getAllCategories = async () => {
            try {
                const response = await get();
                console.log(response);
        
                setCategories(response.data);
            } catch (error) {
                console.log(error);
                setCategories(null);
            }
        };
        getAllCategories();
    }, []);

    const create = async (body) => {
        const result = await post(body);
        return result;
    }

    return { categories, create }
}

