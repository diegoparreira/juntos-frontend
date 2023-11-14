import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

export function useCategories (){
    const [categories, setCategories] = useState([]);
    const { get } = useGetRequest("categories/");

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

    return { categories }
}

