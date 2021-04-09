import React, {useContext,useState,useEffect} from 'react'
import { useParams } from "react-router-dom"
import {GlobalContext} from '../../App'
import ProductDisc from './ProductDisc/ProductDisc'

function ProductArea() {

    const {products} = useContext(GlobalContext)
    const [product, setProduct] = useState({})
    const {id} = useParams()
    const {image,name,price,disc} = product

    useEffect(()=>{
        products.forEach(product =>{
            if(product.id == id){
                setProduct(product)
            }
        })
    },[])

    return (
        <div className='productArea'>
            <ProductDisc 
            img={image}
            name={name}
            price={price}
            disc={disc} />
            <div></div>
        </div>
    )
}

export default ProductArea
