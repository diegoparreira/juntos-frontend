import axios from "axios";
import { useCallback } from "react";

const BASE_URL = process.env.REACT_APP_BASE_API;

const usePutRequest = (endpoint) => {
    const put = useCallback(async (resource = '', body = {}) => {
        try {
            const URL = BASE_URL + endpoint + resource;
            const rsp = await axios.put(URL, body);
            return rsp;
        } catch (error) {
            console.error("Error in PUT to server");
            console.error(error);
        }
    }, [endpoint]);

    return { put };
};

export default usePutRequest;