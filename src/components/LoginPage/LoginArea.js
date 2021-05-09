import React,{useContext} from 'react'
import { GlobalContext } from '../../App';
import {useHistory} from 'react-router-dom'
import Login from './Login/Login';
import {firebaseConfig} from './Config'
import firebase from "firebase/app"
import "firebase/auth"

function LoginArea() {

    //this is mainly used in login component 
    const {setIsAuth,setUserRes} = useContext(GlobalContext)
    const history = useHistory()
    

    !firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app()

    const googleSignIn = e =>{
        const provider = new firebase.auth.GoogleAuthProvider()

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                // This gives you a Google Access Token. You can use it to access the Google API.
                var user = result.user;
                handleLogin(user)
            }).catch((error) => {
               console.log(error)
        });                                                                                            
    }

    const githubSignIn = e =>{
        const provider = new firebase.auth.GithubAuthProvider()

        firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            // The signed-in user info.
            var user = result.user;
            handleLogin(user)
        }).catch((error) => {
            console.log(error)
        })
    }

    function handleLogin(userInfo) {
        console.log(userInfo)
        let x = {
            userImg:userInfo.photoURL,
            userName:userInfo.displayName,
            userEmail:userInfo.email
        }
        setUserRes(x)
        setIsAuth(true)
        history.push(history.location.state.from.pathname)
    }

    return (
        <div>
            <div className='loginBox'>
                <Login setIsAuth={setIsAuth} googleSignin={googleSignIn} githubSignIn={githubSignIn}/>
            </div>
            
        </div>
    )
}

export default LoginArea
