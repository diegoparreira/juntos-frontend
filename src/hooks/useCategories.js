import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";
import usePostRequest from "./usePostRequest";
import usePutRequest from "./usePutRequest";

export function useCategories (){
    const [categories, setCategories] = useState([]);
    const { get } = useGetRequest("categories/");
    const { post } = usePostRequest("categories/");
    const { put } = usePutRequest("categories/");

    useEffect(() => {
        const getAllCategories = async () => {
            try {
                const response = await get();
                setCategories(response.data.data);
            } catch (error) {
                setCategories(null);
            }
        };
        getAllCategories();
    }, []);

    const create = async (body) => {
        try {
            const result = await post(body);
            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    const edit = async (id, body) => {
        try {
            const result = await put(id, body);
            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    return { categories, create, edit }
}