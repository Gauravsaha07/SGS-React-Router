import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {

    const [products , setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data)
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    if (products.length === 0) {
        return (
            <h1 className='text-center text-4xl'>Loading...</h1>
        )
    }

    return (
        <div className="min-h-screen p-8 flex items-center flex-col space-y-10 justify-center">

            <ul>
                {
                    products.map(product => {
                        return(
                            <li key={product.id} className='my-4'>
                                <Link className='my-2 p-2 border border-black hover:bg-blue-300' to={`/products/${product.id}`}>{product.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Products
