import { useEffect, useState } from "react"
import { projectAuth } from "../firebaseConfig/config"
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [pending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const logout = async () => {
        setError(null);
        setIsPending(true);

        //signing out user
        try {
            await projectAuth.signOut()


            //dispatch logout action
            dispatch({ type: 'LOGOUT' })

            //update state
            if (!isCancelled) {
                setIsPending(false)
                setError(null)

            }

        } catch (error) {

            if (!isCancelled) {
                setError(error.message)
                setIsPending(false);
            }
        }

    };

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { logout, error, pending }
}


