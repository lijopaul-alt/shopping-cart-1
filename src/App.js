import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import AuthProvider from "./context/AuthContext";
import { AnimatePresence } from "framer-motion";
import ProductProvider from "./context/ProductContext";
import reducer, { init } from "./reducers/reducer";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <AnimatePresence>
        <AuthProvider>
          <ProductProvider init={init} reducer={reducer}>
            <Switch>
              <Route path='/' exact component={Login} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/cart' component={Cart} />
              <Route path='/product/:id' component={ProductDetail} />
            </Switch>
          </ProductProvider>
        </AuthProvider>
      </AnimatePresence>
    </Router>
  );
}

export default App;
