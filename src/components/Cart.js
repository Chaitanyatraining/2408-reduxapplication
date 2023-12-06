import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/productactions/ProductActions'

const Cart = () => {
  const dispatch = useDispatch()
  // the hook that can access the store data - useSelector
  const cartData = useSelector(state => state.productsData.cartData)
  console.log(cartData)

  return (
    <>
      <h2>Cart</h2>
      {
        cartData.length > 0 ? (
          <div>
            {
              cartData.map((product) => (
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='border mt-2 p-2'>
                      <img src={product.image} className='img-fluid' style={{height:"200px", width:"200px"}} />
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                  </div>
                  <div className='col-md-4'>
                    <p>Price: ${product.price}</p>
                    <button className='btn btn-danger' 
                    onClick={()=> dispatch(removeFromCart(product.id))}
                    >Remove</button>
                  </div>
                </div>
              ))
            }
          </div>
        ) : <p>please add some product</p>
      }
    </>
  )
}

export default Cart