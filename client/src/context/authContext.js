import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(undefined);

    const getLoggedIn = async () => {
        const response = await axios.get("http://localhost:9000/users/require-auth");
        setLoggedIn(response.data);
    }

    useEffect(() => {
        getLoggedIn();
    }, [])
    return <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;
export {AuthContextProvider};