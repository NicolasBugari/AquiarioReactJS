import React from 'react';
import Navbar from "./componentes/header/header/Navbar"
import ItemListContainer from './componentes/containers/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './componentes/containers/Cart';


const App = () => {
  const userName = "";
  const greeting = "Bienvenidos a nuestra Tienda";

  return (
    <BrowserRouter>
      <Navbar name={userName} />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={greeting} />}/>

        <Route path="/categories/:name" element={<ItemListContainer greeting={greeting} />} />

        <Route path="/product/:id" element={<ItemListContainer greeting={greeting} />} />

        <Route path="/cart" element={<Cart />} />

        
      </Routes>
    </BrowserRouter>
  );
};
export default App;
