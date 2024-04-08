import { useState, useEffect } from "react";
import { projectAuth } from "../firebaseConfig/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [pending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try {
            const response = await projectAuth.createUserWithEmailAndPassword(email, password)
            // console.log(response.user);

            if (!response) {
                throw new Error('Could not complete singup')
            }

            //adding display name 
            await response.user.updateProfile({ displayName })

            //dispatch login action
            dispatch({ type: 'LOGIN', payload: response.user });

            setIsPending(false)

            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }
        } catch (err) {
            console.log('error: ', err)
            if (!isCancelled) {
                setError(err.message)
                setIsPending(false);
            }
        }

    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { error, pending, signup }
};