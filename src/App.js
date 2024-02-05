import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/Layouts";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<ProductList/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
