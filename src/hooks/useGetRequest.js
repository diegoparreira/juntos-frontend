import axios from "axios";
import {useCallback} from "react";
// Criar variáveis de ambiente
const BASE_URL = process.env.REACT_APP_BASE_API;

const useGetRequest = (endpoint) => {
  
    const get = useCallback(async (resource = '') => {
      try {
        const URL = BASE_URL + endpoint + resource;
        const rsp = await axios.get(URL);
        return rsp;
      } catch (error) {
        console.error("Error in GET from server");
        console.error(error);
      }
    }, [endpoint]);
    return { get };
  };
  
  export default useGetRequest;