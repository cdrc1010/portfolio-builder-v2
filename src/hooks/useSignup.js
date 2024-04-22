import { useState, useEffect } from "react";
import { projectAuth, projectStorage } from "../firebaseConfig/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [pending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (email, password, displayName, photoFile) => {
        setError(null)
        setIsPending(true)

        try {
            const response = await projectAuth.createUserWithEmailAndPassword(email, password);

            if (!response) {
                throw new Error('Could not complete signup');
            }

            // Add display name 
            await response.user.updateProfile({ displayName });

            // Upload photo to Firebase Storage
            if (photoFile) {
                const storageRef = projectStorage.ref();
                const fileRef = storageRef.child(`${response.user.uid}/profile-photo.jpg`);
                await fileRef.put(photoFile);
                const photoUrl = await fileRef.getDownloadURL();
                await response.user.updateProfile({ photoURL: photoUrl });
            }

            // Dispatch login action
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