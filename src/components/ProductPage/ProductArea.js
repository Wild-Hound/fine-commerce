import React, {useContext,useState,useEffect} from 'react'
import { useParams } from "react-router-dom"
import {GlobalContext} from '../../App'
import ProductDisc from './ProductDisc/ProductDisc'

function ProductArea() {

    const {products,cartList, setCartList} = useContext(GlobalContext)
    const [product, setProduct] = useState({})
    const [isSelected,setIsSelected] = useState(false)
    const {id} = useParams()


    useEffect(()=>{
        products.forEach(product =>{
            if(product.id == id){
                setProduct(product)
            }
        })
    },[])
    
    useEffect(()=>{
        cartList?.forEach((cart)=>{
            cart.id == product.id? setIsSelected(true) : setIsSelected(false)
        })
    },[cartList])

    const addToCartAction = (e,product) =>{
        isSelected?console.log("bypass"):setCartList([...cartList, product])
    }

    return (
        <div className='productArea'>
            <ProductDisc 
            product = {product}
            addToCart={addToCartAction}
            btnText={isSelected?"Selected":"Add to cart"}
            />
            <div></div>
        </div>
    )
}

export default ProductArea
