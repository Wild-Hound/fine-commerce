import React,{useContext} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {useHistory,Link} from "react-router-dom";
import { GlobalContext } from '../../App';
import 'antd/dist/antd.css';
import { Badge } from 'antd';
import UserProfile from './UserProfile/UserProfile';


function MainNav() {

    const {isAuth,cartList,userRes} = useContext(GlobalContext)
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const history = useHistory()
    

    //this function is used for navigation of the appbar buttons
    const pushHistory = (whereTO) => {
        history.push(`/${whereTO}`)
    }

    

    return (
        <div className='NavRoot'>
            <AppBar position="sticky">
                <Toolbar>
                <Typography>
                    <Link to='/' 
                    className="siteHome"
                    >Fine Commerce</Link>
                </Typography>
                <div className="navControlsCon">
                    <Button id="cartBtn" onClick={(event)=>{pushHistory('checkout')}}>
                        {cartIcon}
                        <Badge count={cartList.length}></Badge>
                    </Button>
                    <UserProfile 
                    pushHistory={pushHistory}
                    isAuth={isAuth}
                    userRes={userRes}
                    />
                </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MainNav
