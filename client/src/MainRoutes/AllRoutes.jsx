import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Dashboard from "../Dashboard/Dashboard";
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
            <Navbar /> <Homepage /> <Footer />
          </>
        }
      ></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/addproduct" element={<AddProduct />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AllRoutes;
