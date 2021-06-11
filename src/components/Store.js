import React, { useEffect, useState } from 'react'
import "./Store.css"
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
                    return <div key={index} className="card" id={item.items[0].id}>
                        <div className="card-title"><h2>{item.items[0].name}</h2></div>
                        <img className="card-icon" src={item.items[0].images.featured ? item.items[0].images.featured : item.items[0].images.icon} alt="item icon"/>
                        <div className="card-details"><h5>{item.items[0].description}</h5> <br/> </div>
                        <div className="card-price"><h6>{item.regularPrice} <img className="vbuck-icon"src={"https://fortnite-api.com/images/vbuck.png"} alt="vbuck icon"/>
                        <button className="card-buy" id={item.items[0].id}>Add to cart</button>
                        </h6>
                        
                        </div>
                        
                    </div>
                }))
            }, [itemArray]) 






    return (
        <div className="store">
            <div className="buttons">
            <button className="category-btn" id="daily" onClick={()=>{setCategory('daily')}}> daily</button>
            <button className="category-btn" id="special-daily" onClick={()=>{setCategory('specialDaily')}}> Special daily</button>
            <button className="category-btn" id="featured" onClick={()=>{setCategory('featured')}}> featured</button>
            <button className="category-btn" id="special-featured" onClick={()=>{setCategory('specialFeatured')}}> Special featured</button>
            </div>
            <div className="catalogue">
            {displayedItems}
            </div>
        </div>
    )
}

export default Store
