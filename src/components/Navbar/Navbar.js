import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1>Your Cart Demo</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div>Step 1</div>
          <div>Review Cart</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
