import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import './Orders.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const [products, setProducts]=useProducts()
    const [cart,setCart]=useCart(products)

      const handleRemoveProduct = product =>{
        const rest = cart.filter(pd=>pd.id!==product.id)
        setCart(rest)
        removeFromDb(product.id)
      }

    return (
        <div className="shopContainer">
      <div className="reviewItemContainer">
        
        {
            cart.map(product=><ReviewItem key={product.id} product={product} handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
        }

      </div>
      <div className="cartContainer">
        <Cart cart={cart}>
        <Link to={'/inventory'}>
          <button className='reviewAndProceed'>Proceed Checkout <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon> </button>
        </Link>
        </Cart>
      </div>
    </div>
    );
};

export default Orders;