import { useState } from "react";
import { useScytaleCipher } from "../../../Utils/useScytaleCipher";

import Controls_UI from "../../UI/Controls_UI/Controls_UI";
import FileUpload_UI from "../../UI/FileUpload_UI/FileUpload_UI";
import KeyInput_UI from "../../UI/KeyInput_UI/KeyInput_UI";
import InformationLine_UI from "../../UI/InformationLine_UI/InformationLine_UI";

import styles from "./Main_Section.module.css";

const Main_Section = () => {
  const [fileContent, setFileContent] = useState("");
  const [key, setKey] = useState(3);
  const [result, setResult] = useState("");
  const { encrypt, decrypt } = useScytaleCipher();

  const downloadFile = (content, filename) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleEncrypt = () => {
    const res = encrypt(fileContent, key);
    setResult(res); 
    downloadFile(res, "encrypted.txt");
  };

  const handleDecrypt = () => {
    const res = decrypt(fileContent, key);
    setResult(res); 
    downloadFile(res, "decrypted.txt");
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        Шифр лентой (Шестовой шифр)
      </h2>

      <h3>
        Содержимое файла:
      </h3>
      <InformationLine_UI content={fileContent} />

      <FileUpload_UI onFileLoad={setFileContent} />
      <KeyInput_UI keyValue={key} onKeyChange={setKey} />
      <Controls_UI
        onEncrypt={handleEncrypt}
        onDecrypt={handleDecrypt}
      />


      <h3>
        Результат:
      </h3>
      <InformationLine_UI content={result} />
    </section>
  );
};

export default Main_Section;
