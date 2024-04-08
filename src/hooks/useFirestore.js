import { useReducer, useEffect, useState } from "react";
import { projectFirestore, timestamp } from "../firebaseConfig/config";

let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null,
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case 'IS_PENDING':
            return { isPending: true, document: null, success: false, error: null }
        case 'ADDED_DOCUMENT':
            return { success: true, isPending: false, error: null, document: action.payload }
        case 'DELETED_DOCUMENT':
            return { isPending: false, success: true, error: null }
        case 'ERROR':
            return { isPending: false, document: null, success: false, error: action.payload }
        default:
            return state
    }

};

export const useFirestore = (collection) => {

    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)

    const ref = projectFirestore.collection(collection)

    const dispatchIfNotCancelled = (action) => {
        if (!isCancelled) {
            dispatch(action)
        }
    }

    const addDocument = async (doc) => {
        dispatch({ type: 'IS_PENDING' })
        try {
            const createdAt = timestamp.fromDate(new Date())
            const addedDocument = await ref.add({ ...doc, createdAt })

            dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument })
        } catch (error) {
            console.log(error.message)
            dispatchIfNotCancelled({ type: 'ERROR', payload: error.message })
        }
    }

    const deleteDocument = async (id) => {
        dispatch({ type: 'IS_PENDING' })
        try {
            const deletedDocument = await ref.doc(id).delete()

            dispatchIfNotCancelled({ type: 'DELETED_DOCUMENT' })
        } catch (error) {
            console.log(error.message)
            dispatchIfNotCancelled({ type: 'ERROR', payload: error.message })
        }
    }

    //cleanup function
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { addDocument, deleteDocument, response };
}