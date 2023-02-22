import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProductList from "../Components/Product_list/ProductList";
import Homepage from "../Pages/Homepage";
import NotFound from "../Pages/NotFound";

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
			<Route path="/products" element={<ProductList />}></Route>
			<Route path="*" element={<NotFound />}></Route>
		</Routes>
	);
};

export default AllRoutes;
