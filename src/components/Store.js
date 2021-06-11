import React, { useEffect, useState } from 'react'

const Store = () => {
        const [category,setCategory]=useState('daily')
        const [itemArray,setItemArray]=useState([])

        const getData = async (category)=>{
           const response = await fetch("https://fortnite-api.com/v2/shop/br",{mode:'cors'})
           const jsonfile = await response.json()
           setItemArray( jsonfile.data[category].entries )
        }


            useEffect(() => {
                getData(category);

            }, [category])

  /*           useEffect(() => {
                
            }, [itemArray]) */






    return (
        <div className="Store">
            <button className="category-btn" id="daily" onClick={()=>{setCategory('daily')}}> daily</button>
            <button className="category-btn" id="featured" onClick={()=>{setCategory('featured')}}> featured</button>
            
        </div>
    )
}

export default Store
