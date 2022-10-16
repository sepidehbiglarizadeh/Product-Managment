import { useState } from "react";
import { useProductsActions } from "../../components/Provider/ProductsProvider";
import styles from "./SearchBar.module.css";

const SearchBar = ({ filter }) => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useProductsActions();

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
    dispatch({ type: "filter", selectedOption: filter });
    dispatch({ type: "search", event: e });
  };

  return (
    <div className={styles.searchBar}>
    <label>Search : </label>
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
