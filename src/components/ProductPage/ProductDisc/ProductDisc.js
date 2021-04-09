import React from 'react'
import 'antd/dist/antd.css';
import { InputNumber } from 'antd';

function ProductDisc({img,name,price,category = 'N/A',disc}) {

    function onChange(value) {
    console.log('changed', value);
    }

    return (
        <div className='discBody'>
            <img src={img} className='discImage'/>
            <div>
                <div className='discMeta'>
                    <h2 className='discTitle'>{name}</h2>
                    <div>
                        <h3 >Price: <span className='discPrice'>{price}</span></h3>
                        <h3 >Category: <span className='discCategory'>{category}</span></h3>
                    </div>
                </div>

                    <p className='disc'>{disc}</p>
                    <div className='discQuantity'>
                        <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />
                        <button id='buyBtn'>Buy</button>
                    </div>

                
            </div>
        </div>
    )
}







export default ProductDisc
