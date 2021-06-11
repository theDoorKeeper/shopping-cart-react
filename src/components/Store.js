import React, { useEffect, useState } from 'react'

const Store = () => {
        const [category,setCategory]=useState('daily')
        const [itemArray,setItemArray]=useState([])
        const [displayedItems,setDisplayedItems]=useState([])


        const getData = async (category)=>{
           const response = await fetch("https://fortnite-api.com/v2/shop/br",{mode:'cors'})
           const jsonfile = await response.json()
           setItemArray( jsonfile.data[category].entries )
        }


            useEffect(() => {
                getData(category);

            }, [category])

             useEffect(() => {
                setDisplayedItems(itemArray.map((item,index) => {
                    return <div key={index} className="card">

                        <div className="card-title"><h2>{item.items[0].name}</h2></div>
                        <img src={item.items[0].images.featured ? item.items[0].images.featured : item.items[0].images.icon} alt="item icon"/>
                        <div className="card-details"><h5>{item.items[0].description}</h5></div>
                        <div className="card-price"><h6>{item.regularPrice} <img src={"https://fortnite-api.com/images/vbuck.png"} alt="vbuck icon"/></h6></div>
                    </div>
                }))
            }, [itemArray]) 






    return (
        <div className="Store">
            <button className="category-btn" id="daily" onClick={()=>{setCategory('daily')}}> daily</button>
            <button className="category-btn" id="featured" onClick={()=>{setCategory('featured')}}> featured</button>
            {displayedItems}
        </div>
    )
}

export default Store
