import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";
import usePostRequest from "./usePostRequest";

export function useComments (contentId){
    const [comments, setComments] = useState([]);
    const { get } = useGetRequest('comments/' + contentId);
    const { post } = usePostRequest('comments/');

    useEffect(() => {
        const getAllComments = async () => {
            try {
                const response = await get();
                console.log(response);
        
                setComments(response.data);
            } catch (error) {
                console.log(error);
                setComments(null);
            }
        };
        getAllComments();
    }, []);

    const handleNewComment = async (newComment) => {
        try {
            const response = await post(newComment);
            console.log(response);
            return response;
        } catch (error) {
            console.error('Erro na criação do comentário')
        }
    }

    return { 
        comments,
        setComments,
        handleNewComment
     }
}

