import { useEffect, useState } from "react"
import { projectAuth } from "../firebaseConfig/config"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [pending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setError(null);
        setIsPending(true);

        try {
            const response = await projectAuth.signInWithEmailAndPassword(email, password)

            //DISPATCH LOGIN ACTION
            dispatch({ type: 'LOGIN', payload: response.user })


            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }
        } catch (error) {
            console.log('error: ', error)
            if (!isCancelled) {
                setError(error.message)
                setIsPending(false);
            }
        }

    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { login, error, pending }
}