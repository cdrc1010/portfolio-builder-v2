import { useEffect, useState } from "react"
import { projectAuth } from "../firebaseConfig/config"
import { useAuthContext } from "./useAuthContext"
import { useHistory } from 'react-router-dom';
import { projectFirestore } from "../firebaseConfig/config";

const storeIdInNewCollection = async (collection, id, name, photoURL, email) => {
    try {
        const ref = projectFirestore.collection(collection);
        const addedDocument = await ref.doc(id).set({ id, name, photoURL, email });
        console.log("addedDocument: ", addedDocument);
    } catch (err) {
        console.log("error: ", err);
    }
};


export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [pending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();
    const history = useHistory()

    const redirectToPortfolio = (uid) => {
        const url = `/user?${uid}`
        return history.push(url)
    }

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
            storeIdInNewCollection(
                "publicData",
                response.user.uid,
                response.user.displayName,
                response.user.photoURL,
                response.user.email,
            );
            redirectToPortfolio(response.user.uid)
        } catch (error) {
            setError(error.message)
            setIsPending(false);


            // if (!isCancelled) {
            //     setError(error.message)
            //     setIsPending(false);
            // }
        }

    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { login, error, pending }
}