import React, {useContext,useState,useEffect} from 'react'
import { useParams } from "react-router-dom"
import {GlobalContext} from '../../App'
import ProductDisc from './ProductDisc/ProductDisc'
import RelatedProducts from './RelatedProducts/RelatedProducts'

function ProductArea() {

    const {products,cartList, setCartList} = useContext(GlobalContext)
    const [product, setProduct] = useState({})
    // this is used to determine the text and function of buy button
    const [isSelected,setIsSelected] = useState(false)
    const {id} = useParams()


    useEffect(()=>{
        products.forEach(product =>{
            if(product.id === id){
                setProduct(product)
            }
        })
    },[])
    
    // this updates isSelected to if current product exists on cartlist
    useEffect(()=>{
        let itemFound = false
        cartList.forEach((cart)=>{
            if(cart.id === product.id){
                itemFound = true
            }
        })
        itemFound? setIsSelected(true) : setIsSelected(false)
    },[cartList, product])

    // if isSelected is false this will update cartlist
    const addToCartAction = (e,product) =>{
        let x = product
        x.quantity = document.getElementById('productQuantity').value
        // productQuantity
        isSelected?console.log("bypass"):setCartList([...cartList, x])
    }

    return (
        <div className='productArea'>
            <ProductDisc 
            product = {product}
            addToCart={addToCartAction}
            // has conditional text based on isSelected
            btnText={isSelected?"Selected":"Add to cart"}
            />
            <RelatedProducts
            products={products}
            product={product}
            />
        </div>
    )
}

export default ProductArea
