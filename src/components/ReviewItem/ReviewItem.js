import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {handleRemoveProduct, product}=props
    const {name, img, price, shipping, quantity}=props.product
    return (
        <div className='reviewItem'>
            <div>
            <img src={img} alt="" />
            </div>
            <div className='reviewDetails'>
            <h1>{name}</h1>
            <span>Price : ${price}</span>
            <span>Shipping Details : ${shipping}</span>
            <span>Quantity : {quantity}</span>
            </div>
            <div>
                <button onClick={()=>handleRemoveProduct(product)} className='deleteButton'>
                    <FontAwesomeIcon className='deleteIcon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>

            </div>
        </div>
    );
};

export default ReviewItem;