import { useEffect, useState, useRef } from "react"
import { projectFirestore } from "../firebaseConfig/config"

export const useCollection = (collection, _query) => {
    const [documents, setDocuments] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading]= useState(false)

    const query = useRef(_query).current

    useEffect(() => {
        setLoading(true)
        let ref = projectFirestore.collection(collection)

        //if we don't use a ref --> infinite loop in useEffect
        // _query is an array and is "different" on every function call
        if (query) {
            ref = ref.where(...query)
        }

        const unsubscribe = ref.onSnapshot((snapshot) => {

            let results = []
            snapshot.docs.map((doc) => {
                return results.push({ ...doc.data(), id: doc.id })
            })
            setDocuments(results)
            setError(null)
            setLoading(false)
        }, (error => {
            setError('could not fetch the data: ', error.message)
        }))

        //unsubscribe on unmount
        return () => unsubscribe()

    }, [collection, query])

    return { documents, error, loading }
}

