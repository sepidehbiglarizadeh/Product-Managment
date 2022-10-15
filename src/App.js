import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductsProvider from "./components/Provider/ProductsProvider";

const App = () => {
  return (
    <ProductsProvider>
      <Navbar />
    </ProductsProvider>
  );
};

export default App;
