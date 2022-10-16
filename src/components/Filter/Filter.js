import SearchBar from "../../common/SearchBar/SearchBar";
import styles from "./Filter.module.css"

const Filter = () => {
    return ( 
        <section className={styles.filterContainer}>
            <SearchBar/>
        </section>
     );
}
 
export default Filter;