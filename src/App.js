import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductsProvider from "./components/Provider/ProductsProvider";

const App = () => {
  return (
    <ProductsProvider>
      <Navbar />
      <ProductsList/>
    </ProductsProvider>
  );
};

export default App;
