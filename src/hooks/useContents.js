import { useEffect, useState } from "react";

const BASE_ENDPOINT = "http://localhost:3003";

const useContents = () => {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        const getAllContents = async () => {
            try {
                const response = await axios.get(`${BASE_ENDPOINT}/contents`);
                console.log(response);
        
                setContents(response.data);
            } catch (error) {
                console.log(error);
                setContents(null);
            }
        };
        getAllContents();
    }, []);

    return { contents, setContents }
}

