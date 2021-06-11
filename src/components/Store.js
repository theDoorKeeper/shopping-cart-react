import React, { useEffect, useState } from 'react'

const Store = () => {
        const [category,setCategory]=useState('featured')
        const itemArray=[];

        const getData = async ()=>{
           const response = await fetch("https://fortnite-api.com/v2/shop/br",{mode:'corse'})
           const data = await response.json()
           console.log(data)
        }
    useEffect(() => {
            getData();

    }, [])

    return (
        <div className="Store">
            
        </div>
    )
}

export default Store
