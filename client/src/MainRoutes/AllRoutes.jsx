import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProductList from "../Components/Product_list/ProductList";
import Dashboard from "../Dashboard/Dashboard";
import SubNavbar from "../Components/SubNavbar";
import Homepage from "../Pages/Homepage";
import NotFound from "../Pages/NotFound";
import AddProduct from "../Dashboard/AddProduct";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar /> <SubNavbar /> <Homepage /> <Footer />
          </>
        }
      ></Route>
      <Route path="/products" element={<ProductList />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/addproduct" element={<AddProduct />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AllRoutes;
