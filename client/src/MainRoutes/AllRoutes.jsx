import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../Components/Cart/Cart";
import CartLogo from "../Components/Cart/CartLogo";
import Checkout from "../Components/Cart/Checkout";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SubNavbar from "../Components/SubNavbar";
import AddProduct from "../Dashboard/AddProduct";
import AdminCustomer from "../Dashboard/Customer";
import Dashboard from "../Dashboard/Dashboard";
import AdminStore from "../Dashboard/Store";
import ChangePw from "../Pages/ChangePw";
import CreatePw from "../Pages/CreatePw";
import ForgotPw from "../Pages/ForgotPw";
import Homepage from "../Pages/Homepage";
import KeyboardMouse from "../Pages/KeyboardMouse";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import ProductList from "../Pages/ProductList";
import SignUp from "../Pages/SignUp";
import SingleProductPage from "../Pages/SingleProductPage";

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
			<Route
				path="/products"
				element={
					<>
						<Navbar />
						<ProductList />
						<Footer />
					</>
				}
			></Route>
			<Route path="/dashboard" element={<Dashboard />}></Route>
			<Route path="/addproduct" element={<AddProduct />}></Route>
			<Route path="/adminstore" element={<AdminStore />}></Route>
			<Route path="/admincustomer" element={<AdminCustomer />}></Route>
			{/* <Route path="/signup" element={<SignUp />}></Route> */}
			<Route path="*" element={<NotFound />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/register" element={<SignUp />}></Route>
			<Route path="/changepassword" element={<ChangePw />}></Route>
			<Route path="/forgotpassword" element={<ForgotPw />}></Route>
			<Route path="/checkout" element={<Checkout />}></Route>
			<Route
				path="/users/saveforgotpassword/:id/:token"
				element={<CreatePw />}
			></Route>
			<Route
				path="/cart"
				element={
					<>
						<CartLogo /> <Cart />
					</>
				}
			></Route>
			<Route
				path="/keyboard&mouse"
				element={
					<>
						<Navbar />
						<KeyboardMouse />
						<Footer />
					</>
				}
			></Route>
			<Route
				path="/products/:id"
				element={
					<>
						<Navbar />
						<SingleProductPage />
						<Footer />
					</>
				}
			></Route>
		</Routes>
	);
};

export default AllRoutes;
