import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";
import usePostRequest from "./usePostRequest";

export function useContents (){
    const [contents, setContents] = useState({});
    const { get } = useGetRequest("contents/bycategories");
    const { post } = usePostRequest("contents/");

    useEffect(() => {
        const getAllContents = async () => {
            try {
                const response = await get();
                console.log(response);
        
                setContents(response.data);
            } catch (error) {
                console.log(error);
                setContents(null);
            }
        };
        getAllContents();
    }, []);

    const create = async (body) => {
        const result = await post(body);
        return result;
    }

    return { contents, create }
}

