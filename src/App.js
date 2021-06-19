import React, { createContext, useState, useEffect } from "react";
import "./App.scss";
import HomeArea from "./components/HomePage/HomeArea";
import fakeData from "./fakeData/fakeData.json";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductArea from "./components/ProductPage/ProductArea";
import MainNav from "./components/AppNav/MainNav";
import CheckOutArea from "./components/CheckOutPage/CheckOutArea";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import LoginArea from "./components/LoginPage/LoginArea";
import UserDashborad from "./components/UserDashborad/UserDashborad";

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
  useEffect(() => {
    fetch("http://localhost:5200/products", {
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
            {/* <Route path="/profile/:id">
              <MainNav />
              <UserDashborad />
            </Route> */}
            <ProtectedRoute
              path="/profile/:id"
              component={UserDashborad}
              isAuth={isAuth}
            />
          </Switch>
        </GlobalContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
