import React from 'react'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors'; 

import CheckoutItem from '../../components/checkout-item/checkout.component';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, cartTotal}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>Product</div>
            <div className='header-block'>Description</div>
            <div className='header-block'>Quantity</div>
            <div className='header-block'>Price</div>
            <div className='header-block'>Remove</div>
        </div>
        {
            cartItems.map(cartItem => ( 
                <CheckoutItem key={cartItem.id} item={cartItem}/>
                )
            )

        }
        <div className='total'>${cartTotal}</div>
    </div>
)

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);