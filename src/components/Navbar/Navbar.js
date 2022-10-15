import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <h1>
        Cart <span>(0 item)</span>
      </h1>
    </header>
  );
};

export default Navbar;
