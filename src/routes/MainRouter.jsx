import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import Home from "../pages/Home";
import NavBarComponent from "../Components/NavBarComponent/NavBarComponent";
import Category from "../pages/Category";
import Item from "../pages/Item";

const MainRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <NavBarComponent/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Category/:categoryId" element={<Category/>}/>
            <Route path="/item/:id" element={<Item/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default MainRouter;