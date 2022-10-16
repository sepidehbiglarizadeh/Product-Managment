import "./App.css";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductsProvider from "./components/Provider/ProductsProvider";

const App = () => {
  return (
    <ProductsProvider>
      <Navbar />
      <Filter />
      <ProductsList />
    </ProductsProvider>
  );
};

export default App;
