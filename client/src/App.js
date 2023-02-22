import "./App.css";
import AllRoutes from "./MainRoutes/AllRoutes";
import Reset from "./Pages/Reset";
// import Login from "./Pages/Login"

function App() {
  return (
    <div className="App">
      <AllRoutes />
      {/* <Login /> */}
      <Reset />
    </div>
  );
}

export default App;
