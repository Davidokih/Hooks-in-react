import axios from "axios";
import { useState } from "react";

const CreateProduct = () => {

    const [ values, setValues ] = useState({
        title:'',
        price:0,
        description:''
    })
    
    const handleChange = (event) => {
        const {name,value} = event.target

        setValues({
            ...values,[name]:value
        })
    }

    const createProduct = async (e) => {
        e.preventDefault()
        await axios.post('https://fakestoreapi.com/products/', values).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <div>
            <form onSubmit={createProduct}>
                <input placeholder='Title' name="title" onChange={ handleChange} />
                <input placeholder='price' name='price' type='number' onChange={ handleChange} />
                <textarea placeholder='Description' name="description" onChange={ handleChange} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CreateProduct