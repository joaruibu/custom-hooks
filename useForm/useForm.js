import { useState } from "react"


export const useForm = (initialState = {}) => {


    const [formValues, setFormValues] = useState(initialState);


    const handleInputChange = (e) => {

        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formValues)
    // }

    const reset = () => {
        setFormValues(initialState)
    }

    return [formValues, handleInputChange, reset];
}
