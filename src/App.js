import React, { createContext, useState, useEffect } from "react";
import "./App.scss";
import HomeArea from "./components/HomePage/HomeArea";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductArea from "./components/ProductPage/ProductArea";
import MainNav from "./components/AppNav/MainNav";
import CheckOutArea from "./components/CheckOutPage/CheckOutArea";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import LoginArea from "./components/LoginPage/LoginArea";
import UserDashborad from "./components/UserDashborad/UserDashborad";
import AdmidDashborad from "./components/AdminDashborad/AdmidDashborad";
import AdminLogin from "./components/AdminLogin/AdminLogin";

export const GlobalContext = createContext();
function App() {
  const [cartList, setCartList] = useState([]);
  const [products, setProducts] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [userRes, setUserRes] = useState({
    userImg: null,
    userName: null,
    userEmail: null,
  });
  const [adminAuth, setAdminAuth] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");

  useEffect(() => {
    fetch("https://fine-commerce.herokuapp.com/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <GlobalContext.Provider
          value={{
            isAuth,
            setIsAuth,
            products,
            setProducts,
            cartList,
            setCartList,
            userRes,
            setUserRes,
            adminAuth,
            setAdminAuth,
            adminEmail,
            setAdminEmail,
          }}
        >
          <Switch>
            <Route exact path="/">
              <MainNav />
              <HomeArea></HomeArea>
            </Route>
            <Route path="/product/:id">
              <MainNav />
              <ProductArea></ProductArea>
            </Route>
            <ProtectedRoute
              path="/checkout"
              component={CheckOutArea}
              isAuth={isAuth}
            />
            <Route path="/login">
              <MainNav />
              <LoginArea />
            </Route>
            <Route path="/admin_login">
              <MainNav />
              <AdminLogin />
            </Route>
            <ProtectedRoute
              path="/profile/:id"
              component={UserDashborad}
              isAuth={isAuth}
            />
            <ProtectedRoute
              path="/admin/:id"
              component={AdmidDashborad}
              isAuth={adminAuth}
              admin={true}
            />
          </Switch>
        </GlobalContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
