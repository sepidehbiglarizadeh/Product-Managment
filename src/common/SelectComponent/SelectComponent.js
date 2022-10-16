import Select from "react-select";
import styles from "./SelectComponent.module.css";

const SelectComponent = ({ title, ...rest }) => {
  return (
    <div className={styles.selectContainer}>
      <span>{title}</span>
      <Select
        {...rest}
        className={styles.select}
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,
          colors: {
            ...theme.colors,
            primary25: "#84cc16",
            primary: "#84cc16",
          },
        })}
      />
    </div>
  );
};

export default SelectComponent;
