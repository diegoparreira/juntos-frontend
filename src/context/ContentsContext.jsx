import React, { createContext, useContext, useEffect, useState } from "react";
import usePostRequest from "../hooks/usePostRequest";
import useGetRequest from "../hooks/useGetRequest";

const ContentsContext = createContext();

export const useContents = () => {
  return useContext(ContentsContext);
};

export const ContentsProvider = ({ children }) => {
  const [contents, setContents] = useState([]);
  const [contentsByCategory, setContentsByCategory] = useState([]);
  const { post } = usePostRequest("contents/");
  const { get } = useGetRequest("contents/");

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
    const getAllContentsByCategory = async () => {
        try {
            const response = await get('bycategory');
            console.log(response);

            setContentsByCategory(response.data);
        } catch (error) {
            console.log(error);
            setContentsByCategory(null);
        }
    }
    getAllContents();
    getAllContentsByCategory();
  }, []);

  const create = async (newContent) => {
    const result = await post(newContent);
    console.log(result);
    if (result.status === 201) {
      // TODO
    }
    return result;
  };

  const getAllContents = async () => {};

  const getAllContentsByCategory = async () => {};

  const getAllUnaprovedContents = async () => {};

  const editContent = async () => {};

  return (
    <ContentsContext.Provider value={{ contents, contentsByCategory, create }}>
      {children}
    </ContentsContext.Provider>
  );
};
