import React, { useEffect, useState } from 'react'

const Cart = (props) => {
    const [displayedCart,setDisplayedCart] = useState([])
    const {cartArray} = props;

    useEffect(() => {
        console.log(cartArray)

    }, [cartArray])

    return (
        <div>
            
        </div>
    )
}

export default Cart
