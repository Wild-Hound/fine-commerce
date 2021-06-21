import React, { useContext } from "react";
import styles from "./AdminLogin.module.scss";
import { firebaseConfig } from "../../firebaseConfig";
import firebase from "firebase/app";
import "firebase/auth";
import { GlobalContext } from "../../App";
import { useHistory } from "react-router-dom";

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

function AdminLogin() {
  const { setAdminAuth, setAdminEmail } = useContext(GlobalContext);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        handleAuth(user.email);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  function handleAuth(email) {
    if (email) {
      setAdminEmail(email);
      setAdminAuth(true);
      history.push(history.location.state.from.pathname);
    } else {
      setAdminEmail("");
      setAdminAuth(false);
    }
  }

  return (
    <div className={styles.formCon}>
      <form className={styles.formWrapper} onSubmit={(e) => handleSubmit(e)}>
        <p className={styles.heading}>Admin Login</p>
        <div className={styles.inputWrapper}>
          <input type="email" placeholder="Email" id="email" required />
          <input
            type="password"
            placeholder="Password"
            id="password"
            required
          />
          <input type="submit" value="Submit" className={styles.subBtn} />
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
