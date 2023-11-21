import {useCallback} from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3003/";

const usePostRequest = (endpoint) => {
  
    const post = useCallback(async (body, resource = '') => {
      try {
        const header = {
            headers: {
              'Content-Type': 'application/json',
            }
        };
        const URL = BASE_URL + endpoint + resource;
        const result = await axios.post(URL, body, header);
        const {status, data} = result;
        return {status: status, data: data, message: "Request success", code: null};
      } catch (error) {
        console.error("Error in POST from server");
        console.error(error);

        const {status, data} = error.response;

        return {status: status, code: data.code, message: data.message, data: null };
      }
    }, [endpoint]);
    return { post };
  };
  
  export default usePostRequest;