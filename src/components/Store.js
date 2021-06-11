import React, { useEffect, useState } from 'react'

const Store = () => {
        const [category,setCategory]=useState('featured')
        const [itemArray,setItemArray]=useState([])

        const getData = async ()=>{
           const response = await fetch("https://fortnite-api.com/v2/shop/br",{mode:'cors'})
           const jsonfile = await response.json()
           setItemArray( jsonfile.data.featured.entries )
        }
    useEffect(() => {
            getData();
            console.log(itemArray)

    }, [])

    return (
        <div className="Store">
            
        </div>
    )
}

export default Store
