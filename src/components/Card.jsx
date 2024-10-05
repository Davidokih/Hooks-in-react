import { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
// import { GlobalContext } from './GlobalState';
import { Link } from 'react-router-dom'
const Card = () => {
    const [ change, setChange ] = useState(false)
    const [ data, setData ] = useState()
    const [ cart, setCart ] = useState([])

    const handleChange = () => {
        setChange(!change)
    }

    console.log(cart)

    const getProduct = async() => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            // console.log(response)
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const addToCart = (productInfo) => {
            const updateProduct = {...productInfo, quantity: 1}
            setCart([...cart, updateProduct])
    }

    // const updateCart = (productId) => {
    //     setCart(prevCart => {
    //         const updateCart = { ...prevCart }
    //         console.log(updateCart[productId])
    //         if (updateCart[productId]) {
    //             updateCart[productId] = {...updateCart[productId],quantity:updateCart[productId].quantity + 1 }
    //         } else {
    //             console.log('hello',updateCart[productId])
    //         }
    //         return [...prevCart,updateCart]
    //     })
    // }
    useEffect(() => {
        getProduct()
    },[])
    return (
        <div className='grid grid-cols-mediaGrid gap-3'>
            hello
            { data?.map((props,index) => (
                 <div key={index} className='flex justify-center flex-col items-center shadow-md' onMouseEnter={handleChange} onMouseLeave={handleChange}>
                 <div className='size-[200px]'>
                        <img className='size-full object-contain' src={ props.image} />
                 </div>
                 <div className='w-full px-2'>
                        <Link to={`/product/${props.id}`}><div className='text-small'>{ props.title.slice(0,20)}...</div></Link>
                        <div className={ `flex text-sm ${change && 'text-primary'}` }>price: <div className='font-bold'>${ props.price }</div></div>
                        <button
                        onClick={()=>addToCart(props)}
                        className='bg-slate-700 w-full py-2 mb-2 mt-2 text-white rounded'>Add Cart</button>
                 </div>
             </div>
            ))}
            {/* <button onClick={increment}>Click me</button> */}
        </div>
    )
}

export default Card