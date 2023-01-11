import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const App = () => {
  //const user = false;
  //const [user, SetUser ]= useState(useSelector((state) => state.user.currentUser));
  const user = useSelector(state=>state.user.currentUser);
  //const user = null;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        <Route path="/product/:id">
          <Product/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        
        <Route path="/login">
          {user ? <Redirect to = "/"/> : <Login/>} 
        </Route>
        <Route path="/Register">
        {user ? <Redirect to = "/"/> : <Register/>}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
