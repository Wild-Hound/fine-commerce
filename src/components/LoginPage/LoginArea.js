import React,{useContext} from 'react'
import { GlobalContext } from '../../App';
import Login from './Login/Login';




function LoginArea() {

    //this is mainly used in login component 
    const {setIsAuth} = useContext(GlobalContext)

    return (
        <div>
            <div className='loginBox'>
                <Login setIsAuth={setIsAuth}/>
            </div>
            
        </div>
    )
}

export default LoginArea
