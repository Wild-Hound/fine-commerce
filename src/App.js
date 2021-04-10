import React,{createContext,useState,useEffect} from 'react'
import './App.scss';
import HomeArea from './components/HomePage/HomeArea';
import fakeData from './fakeData/fakeData.json'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductArea from './components/ProductPage/ProductArea';
import MainNav from './components/AppNav/MainNav';

export const GlobalContext = createContext()
function App() {

  const [cartList, setCartList] = useState([])
  const [products,setProducts] = useState([])
  useEffect(()=>{
        setProducts(fakeData)
    },[])

  return (
    <div className="App">
      <Router>
        <GlobalContext.Provider value={{products,setProducts,cartList, setCartList}}>
          <MainNav/>
          <Switch>
            <Route exact path="/">
              <HomeArea></HomeArea>
            </Route>
            <Route path="/product/:id">
              <ProductArea></ProductArea>
            </Route>
          </Switch>
        </GlobalContext.Provider>
      </Router>
    </div>
  );
}

export default App;
