import react, { useState } from "react";

const useForm = (callback) => {
    const [values, setValues] = useState({})

    const handleChange = (e) => {
        const auxValues = { ...values }
        auxValues[e.target.name] = e.target.value
        setValues(auxValues)
    };

    const reset = () => {
        setValues("")    
    }

    const handleSubmit = callback => e => {
        e.preventDefault();
        callback();
    };
    return [{ values }, reset, handleChange, handleSubmit];
};

export default useForm;