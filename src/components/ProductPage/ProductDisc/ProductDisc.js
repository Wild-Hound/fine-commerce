import React from 'react'

function ProductDisc({img,name,price,category = 'N/A',disc}) {
    return (
        <div className='discBody'>
            <img src={img} className='discImage'/>
            <div>
                <div className='discMeta'>
                    <h2>{name}</h2>
                    <div>
                        <h3>Price: {price}</h3>
                        <h3>Category: {category}</h3>
                    </div>
                </div>
                <div className='disc'>
                    <p>{disc}</p>
                    <div className='discQuantity'>
                    <input 
                    type='text' 
                    placeholder='Quantity'
                    />
                    <button>Buy</button>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProductDisc
