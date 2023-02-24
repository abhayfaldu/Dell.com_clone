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
import AdminStore from "../Dashboard/Store";
import AdminCustomer from "../Dashboard/Customer";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ChangePw from "../Pages/ChangePw";
import ForgotPw from "../Pages/ForgotPw";
import CreatePw from "../Pages/CreatePw";

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
      <Route path="/adminstore" element={<AdminStore />}></Route>
      <Route path="/admincustomer" element={<AdminCustomer />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<SignUp />}></Route>
      <Route path="/changepassword" element={<ChangePw />}></Route>
      <Route path="/forgotpassword" element={<ForgotPw />}></Route>
      <Route path="/users/saveforgotpassword/:id/:token" element={<CreatePw />}></Route>
    </Routes>
  );
};

export default AllRoutes;
