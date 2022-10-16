import { useState } from "react";
import { useProductsActions } from "../../components/Provider/ProductsProvider";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useProductsActions();

  const changeHandler = (e) => {
    dispatch({ type: "search", event: e });
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="search"
        placeholder="Search for ..."
        onChange={changeHandler}
        value={searchValue}
      />
    </div>
  );
};

export default SearchBar;
