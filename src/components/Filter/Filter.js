import SearchBar from "../../common/SearchBar/SearchBar";
import styles from "./Filter.module.css";
import { useState } from "react";
import { useProductsActions } from "../Provider/ProductsProvider";
import SelectComponent from "../../common/SelectComponent/SelectComponent";

const filterOptions = [
  { value: "", label: "All" },
  { value: "Clothes", label: "Clothes" },
  { value: "Jewelery", label: "Jewelery" },
  { value: "Electronics", label: "Electronics" },
];

const Filter = () => {
  const [filter, setFilter] = useState("");

  const dispatch = useProductsActions();

  const filterHandler = (selectedOption) => {
    setFilter(selectedOption);
    dispatch({ type: "filter", selectedOption });
  };

  return (
    <section className={styles.filterContainer}>
      <SearchBar />
      <SelectComponent title="Filter by :" value={filter} options={filterOptions} onChange={filterHandler} />
    </section>
  );
};

export default Filter;
