import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
