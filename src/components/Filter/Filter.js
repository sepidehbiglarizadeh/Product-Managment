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

const sortOptions = [
  { value: "Highest", label: "Highest" },
  { value: "Lowest", label: "lowest" },
];

const Filter = () => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const dispatch = useProductsActions();

  const filterHandler = (selectedOption) => {
    setFilter(selectedOption);
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption });
  };

  const sortHandler = (selectedOption) => {
    setSort(selectedOption);
    dispatch({ type: "sort", selectedOption });
  };

  return (
    <section className={styles.filterContainer}>
      <SearchBar filter={filter}/>
      <SelectComponent
        title="Filter by :"
        value={filter}
        options={filterOptions}
        onChange={filterHandler}
      />
      <SelectComponent
        title="Sort by :"
        value={sort}
        options={sortOptions}
        onChange={sortHandler}
      />
    </section>
  );
};

export default Filter;
