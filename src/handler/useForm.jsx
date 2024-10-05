import React from 'react'

const omit = (key, obj) => {
    const { [ key ]: _, ...reset } = obj
    return reset
}
const useForm = () => {
    const [ values, setValues ] = React.useState()
    const [ errors, setErrors ] = React.useState()
    
    const validateValues = (name, value) => {
        switch (name) {
            case 'userName':
                if (value.length <= 2) {
                    setErrors({...errors, [name]:'Full Name should be more than two characters'})
                } else {
                    let newObj = omit('userName',errors)
                    setErrors(newObj)
                }
                
                break;
            case 'password':
                if (!/[0-9]/.test(value)) {
                    setErrors({ ...errors, [ name ]: 'Password must have a number' });
                } else if (!RegExp(/[a-zA-Z]/).test(value)) {
                    setErrors({ ...errors, [ name ]: 'Password must have a letter' });
                } else {
                    let newObj = omit('password', errors);
                    setErrors(newObj);
                }

                break;
        
            default:
                break;
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        validateValues(name,value)
        setValues({
            ...values,[name]:value
        })
    }

    return {
        handleChange,
        values,
        errors
    }
}

export default useForm