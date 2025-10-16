import styles from "./FileUpload_UI.module.css";

const FileUpload_UI = ({ onFileLoad }) => {

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      onFileLoad(event.target.result);
    };
    reader.readAsText(file);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Загрузите .txt файл: 
      </label>
      <input  
        className={styles.input} 
        type="file" 
        accept=".txt" 
        onChange={handleFileUpload} 
      />
    </div>
  );
};

export default FileUpload_UI;