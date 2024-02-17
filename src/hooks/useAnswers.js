import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";
import usePostRequest from "./usePostRequest";


export function useAnswers (commentId){
    const [answers, setAnswers] = useState([]);
    const { get } = useGetRequest('answers/' + commentId);
    const { post } = usePostRequest('answers/');

    useEffect(() => {
        const getAllAnswers = async () => {
            try {
                const response = await get();
                console.log(response);
        
                setAnswers(response.data);
            } catch (error) {
                console.log(error);
                setAnswers(null);
            }
        };
        getAllAnswers();
    }, []);

    const handleNewAnswer = async (newAnswer) => {
        try {
            const response = await post(newAnswer);

            if(response.status === 201){
                console.log('Resposta enviada para aprovação');
            }
        } catch (error) {
            console.error('Erro na criação da resposta');
        }
    }

    return { 
        answers,
        setAnswers,
        handleNewAnswer
     }
}

