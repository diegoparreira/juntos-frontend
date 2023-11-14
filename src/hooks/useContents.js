import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

export function useContents (){
    const [contents, setContents] = useState({});
    const { get } = useGetRequest("contents/bycategories");

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

    return { contents }
}

