import React from 'react'
import { useHistory } from "react-router-dom"


function ProductCard({id,name,img,price,disc}) {

    const history = useHistory()

    function cardClick(e){
        history.push(`/product/${id}`)
    }

    return (
        <div className='productCard' onClick={(event)=>{cardClick(event)}}>
            <img className='productImage' src={img}/>
            <div className='productHeader'>
                <h4 className='productName'>{name}</h4>
                <h6 className='productPrice'>{price}</h6>
            </div>
            <div className='productBody'>
                {disc}
            </div>
            <div className='productFooter'>

            </div>
        </div>
    )
}

export default ProductCard
