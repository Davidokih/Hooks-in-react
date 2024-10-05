import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

  const [data,setData] = useState()
  const { id } = useParams()
  console.log(id)

  const getProduct = async() => {
    await axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log(res)
      setData(res.data)
    }).catch((error) => {
      console.log(error)
      // alert(error.message)
    })
  }

  useEffect(() => {
    getProduct()
  }, [])
  
  return (
      <div>
      <img src={ data?.image} />
      <div>{ data?.title}</div>
      <div>price: ${data?.price }</div>
      <div>{ data?.description}</div>
    </div>
  )
}

export default ProductDetail