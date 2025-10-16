import styles from "./Controls_UI.module.css";

const Controls_UI = ({ onEncrypt, onDecrypt }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onEncrypt}>
        Зашифровать
      </button>
      <button className={styles.button} onClick={onDecrypt}>
        Расшифровать
      </button>
    </div>
  );
};

export default Controls_UI;