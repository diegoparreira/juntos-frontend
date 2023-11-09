import { useEffect, useState } from "react";
import axios from 'axios';

const BASE_ENDPOINT = "http://localhost:3003";

export function useComments (contentId){
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        const getAllComments = async (contentId) => {
            try {
                const response = await axios.get(`${BASE_ENDPOINT}/comments/${contentId}`);
                console.log(response);
        
                setComments(response.data);
            } catch (error) {
                console.log(error);
                setComments(null);
            }
        };
        getAllComments(contentId);
    }, []);

    const handleNewComment = async (newComment, userId, contentId) => {
        console.log('Debugging newComment');
        console.log(newComment);
        console.log(userId);
        console.log(contentId);
        try {
            const response = await axios.post(`${BASE_ENDPOINT}/comments/`, {
                content: newComment,
                userId: userId,
                contentId: contentId
            });
            console.log("Resposta da criação do comentário");
            console.log(response.data);

            if(response.status === 201){
                console.log('Comentário criado com sucesso');
                // Como lidar com o fato de que o comentário precisa ser aprovado

            }
        } catch (error) {
            console.error('Erro na criação do comentário')
        }
    }

    return { 
        comments,
        setComments,
        newComment,
        setNewComment,
        handleNewComment
     }
}

