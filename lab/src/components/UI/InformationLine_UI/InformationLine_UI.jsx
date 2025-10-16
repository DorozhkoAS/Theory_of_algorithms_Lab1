import styles from "./InformationLine_UI.module.css";

 const InformationLine_UI = ({ content }) => {
  return (
    <div className={styles.container}>
      {content}
    </div>
  );
};

export default InformationLine_UI;