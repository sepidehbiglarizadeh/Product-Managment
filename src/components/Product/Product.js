import styles from "./Product.module.css";
import { BiTrash } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

const Product = ({ product, onIncrement, onDecrement, onDelete }) => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productContent}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt="product" />
        </div>
        <div>
          <h4>{product.title}</h4>
          <p>
            {product.description.length > 30
              ? product.description.substring(0, 30) + "..."
              : product.description}
          </p>
        </div>
      </div>
      <div className={styles.quantity}>
        <button
          className={`${product.quantity === 1 && styles.red}`}
          onClick={onDecrement}
        >
          {product.quantity > 1 ? "-" : <BiTrash />}
        </button>
        <span>{product.quantity}</span>
        <button className={styles.incrementBtn} onClick={onIncrement}>
          +
        </button>
      </div>
      <span>${product.price}</span>
      <button className={styles.removeBtn} onClick={onDelete}>
        <IoIosClose size={30} />
      </button>
    </div>
  );
};

export default Product;
