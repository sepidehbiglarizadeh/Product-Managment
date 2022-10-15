import Product from "../Product/Product";
import { useProducts } from "../Provider/ProductsProvider";
import styles from "./ProductsList.module.css";

const ProductsList = () => {
  const products = useProducts();

  if (products.length === 0) return <div>Your Cart Is Empty</div>;

  return (
    <>
      <h2 className={styles.headerText}>
        You Have {products.filter((p) => p.quantity > 0).length} Item In Your
        Cart
      </h2>
      <section className={styles.productsList}>
        <ul className={styles.productsListTitle}>
            <li>Product</li>
            <li>Quantity</li>
            <li>Price</li>
        </ul>
        {products.map((product) => {
          return (
            <Product product={product} key={product.id}/>
          );
        })}
      </section>
    </>
  );
};

export default ProductsList;
