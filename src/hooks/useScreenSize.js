import { useState, useEffect } from "react";

export const useScreenSize = () => {

    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
    })
    

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
            })
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return screenSize
}