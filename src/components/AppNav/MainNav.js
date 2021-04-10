import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";


function MainNav() {

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

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
                    <Button id="cartBtn">{cartIcon}</Button>
                    <Button id='LoginBtn'>Login</Button>
                </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MainNav
