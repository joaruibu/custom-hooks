import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

    const isMounted = useRef(true)

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect(() => {

        //uso este hook para al desmontar el component eme cambie la referencia al false
        return () => {
            isMounted.current = false
        }
    }, [])


    useEffect(() => {
        // para que aparezca el div de loading al pedir otra frase
        setState({
            data: null,
            loading: true,
            error: null
        })
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (isMounted.current) {

                    setState({
                        data: data,
                        loading: false,
                        error: null
                    })
                    console.log('llamadado')
                } else {
                    console.log('Componente cerrado')
                }

            })

    }, [url])
    return state
}
