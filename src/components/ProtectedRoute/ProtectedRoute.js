import React from 'react'
import { Redirect, Route } from 'react-router'
import MainNav from '../AppNav/MainNav'
import CheckOutArea from '../CheckOutPage/CheckOutArea'

function ProtectedRoute({isAuth, component:Component, ...rest}) {
    return (
        <Route {...rest} render={(props)=>{
            if(isAuth){
                return (
                    <>
                    <MainNav/>
                    <Component/>
                    </>
                )
            }else{
                return <Redirect to={{pathname:"/login", state:{from: props.location}}} />
            }
        }} />
    )
}

export default ProtectedRoute
