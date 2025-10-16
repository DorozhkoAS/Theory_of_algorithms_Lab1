import { useCallback } from "react";

export const useScytaleCipher = () => {
  const encrypt = useCallback((text, key) => 
    {
    const rows = parseInt(key);
    
    if (!text || rows <= 0) return "";
    
    let result = "";
    const cols = Math.ceil(text.length / rows);

    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {
        const idx = row * cols + col;
        if (text[idx]) result += text[idx];
      }
    }
    return result;
  }, []);

  const decrypt = useCallback((text, key) => {

    const rows = parseInt(key);

    if (!text || rows <= 0) return "";

    const cols = Math.ceil(text.length / rows);
    let result = Array(text.length);
    let idx = 0;

    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {
        const pos = row * cols + col;
        if (pos < text.length) {
          result[pos] = text[idx];
          idx++;
        }
      }
    }
    return result.join("");
  }, []);

  return { encrypt, decrypt };
};
