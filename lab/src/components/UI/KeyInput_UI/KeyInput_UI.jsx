import styles from "./KeyInput_UI.module.css";

const KeyInput_UI = ({ keyValue, onKeyChange }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Длина палки (число строк): 
      </label>
      <input
        className={styles.input}
        type="number"
        value={keyValue}
        onChange={(e) => onKeyChange(e.target.value)}
      />
    </div>
  );
};

export default KeyInput_UI;