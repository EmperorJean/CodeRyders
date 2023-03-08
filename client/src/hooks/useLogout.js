import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();

    const logout = () => {
        // remove user from storage. 
        localStorage.removeItem("user");

        // dispatch log out
        dispatch({type: "LOGOUT"});
    }

    return {logout};
}