import React from 'react'
import 'antd/dist/antd.css';
import { InputNumber } from 'antd';

function ProductDisc(props) {

    const {image,name,price,disc, category='N/A'} = props.product
    function onChange(value) {
    console.log('changed', value);
    }

    return (
        <div className='discBody'>
            <img src={image} className='discImage'/>
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
                        <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} id='productQuantity' />
                        <button 
                        id='buyBtn'
                        onClick={(event)=> props.addToCart(event, props.product)}
                        >{props.btnText}</button>
                    </div>

                
            </div>
        </div>
    )
}







export default ProductDisc
