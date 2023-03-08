import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import  axios  from "axios";
const  API_URL = "https://coderyders-api.onrender.com"
export const useRegister = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();

    const register = async (username, email, password) => {
        setIsLoading(true);
        setError(null);

        const userData = {username, email, password}
        
        const res = await axios.post(API_URL, userData);
        const data = res.data;

        if (data.message) {
            setIsLoading(false);
            setError(data.message);
        }

        if (data.email) {
            localStorage.setItem("user", JSON.stringify(data));

            // update the auth context
            dispatch({type: "LOGIN", payload: data});

            setIsLoading(false);
        }
        
    }

    return {register, isLoading, error}
}