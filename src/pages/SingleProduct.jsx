import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {

    const [product , setProduct] = useState(null)

    const params = useParams()
    
        const fetchProduct = async () => {
            const response = await fetch('https://fakestoreapi.com/products/' + params.id)
            const data = await response.json()
            console.log(data)
            setProduct(data)
        }
    
        useEffect(() => {
            fetchProduct()
        }, [])
    
        if (!product) {
            return (
                <h1 className='text-center text-4xl'>Loading...</h1>
            )
        }

  return (
    <div className='p-8'>
        <h1>{product.title}</h1>
        <p>{product.price}</p>
    </div>
  )
}

export default SingleProduct