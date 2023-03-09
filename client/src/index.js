import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = extendTheme({
	colors: {
		brand: "#0076ce",
		customGray: "#636363"
	},
});

root.render(
	<BrowserRouter>
		<ChakraProvider theme={theme}>
			<Provider store={store}>
				<App />
			</Provider>
		</ChakraProvider>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
