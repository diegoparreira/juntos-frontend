import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

export function useExtraDocs (contentId){
    const [extraDocs, setExtraDocs] = useState([]);
    const { get } = useGetRequest("extradocs/" + contentId);

    useEffect(() => {
        const getAllExtraDocs = async () => {
            try {
                const response = await get();
                console.log(response);
        
                setExtraDocs(response.data.data);
            } catch (error) {
                console.log(error);
                setExtraDocs(null);
            }
        };
        getAllExtraDocs();
    }, []);

    return { extraDocs }
}

