import React,{useEffect,useState,useContext} from 'react'
import { GlobalContext } from '../../App'
import ProductCard from './ProductCard/ProductCard'

function HomeArea() {
    const {products} = useContext(GlobalContext)
    
    return (
        <div>
            <div className='ProductsArea'>
                {products?.map(({id,name,image,price,disc})=>{
                    return(<ProductCard 
                        id={id}
                        name={name} 
                        img={image} 
                        price={price} 
                        disc={disc} 
                        key={id}
                        />)
                })}
            </div>
        </div>
    )
}

export default HomeArea
