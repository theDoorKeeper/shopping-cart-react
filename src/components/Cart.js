import React, { useEffect, useState } from 'react'

const Cart = (props) => {
    const [displayedCart,setDisplayedCart] = useState([])
    const {cartArray} = props;

    useEffect(() => {
        setDisplayedCart(cartArray.map(( data,index ) => {
          return  <div key={index} className="card" id={data.items[0].id}>
                        <div className="card-title"><h2>{data.items[0].name}</h2></div>
                        <img className="card-icon" src={data.items[0].images.featured ? data.items[0].images.featured : data.items[0].images.icon} alt="item icon"/>
                        <div className="card-details"><h5>{data.items[0].description}</h5> <br/> </div>
                        <div className="card-price"><h6>{data.regularPrice} <img className="vbuck-icon"src={"https://fortnite-api.com/images/vbuck.png"} alt="vbuck icon"/>
                        </h6>
                        
                        </div>
                        
                    </div>

        }))

    }, [cartArray])

    return (
        <div>
            {displayedCart}
        </div>
    )
}

export default Cart
