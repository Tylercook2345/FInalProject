import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/ProductList' element={<ProductList />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    
      </AuthContextProvider>
    </div>
  );
}
export default App;