import React,{useContext} from 'react'
import { GlobalContext } from '../../App'

function CheckOutArea() {

    const {cartList,setCartList} = useContext(GlobalContext)

    return (
        <div>
            {cartList.map((item)=>{
                return(
                <div key={item.id}>
                    <img src={item.image}/>
                    <h2>{item.name}</h2>
                    <div>
                        <span>{item.price}</span>
                        <span>{item.category}</span>
                        <span>{item.quantity}</span>
                    </div>
                </div>
                )
                
            })}
        </div>
    )
}

export default CheckOutArea
