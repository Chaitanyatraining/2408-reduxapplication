import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { addToCart } from '../../redux/productactions/ProductActions'
import {useDispatch} from 'react-redux'

const Product = () => {
  const [product, setProduct] = useState({})
  const [isProductAdded, setIsProductAdded] = useState(false)
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
    console.log(data)
    setProduct(data)
  }

  // array.length
  // for object how can we check the data is available or not ?
  //Object.keys
  return (
    <>
    
      <h2>Product</h2>
      {
        Object.keys(product).length ? (
          <div className='row border border-primary mt-2'>
            <div className='col-md-6'>
              <img src={product.image} className='img-fluid' />
            </div>
            <div className='col-md-6'>
              <h2 className='pt-4'>{product.title}</h2>
              <div id="category_id">
                <h4>{product.category}</h4>
              </div>
              <div>
              <span className='bg-info'>Price: ${product.price}</span>
              </div>
              <div className='mt-3'>
              <span className=''>Description: {product.description}</span>
              </div>
              <div className='pt-4'>
                <button className='btn btn-warning' 
                onClick={() => {
                  dispatch(addToCart(product))
                  setIsProductAdded(true)
                }}
                >{isProductAdded ? "Added" : "Add To Cart"}</button>
              </div>
            </div>
          </div>
        ) : <p>Loading...</p>
      }
    </>
  )
}

export default Product