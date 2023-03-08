import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import  axios  from "axios";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const userData = {email, password}
        
        const res = await axios.post("http://localhost:9000/users/login", userData);
        const data = res.data;
        console.log(data);

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

    return {login, isLoading, error}
}