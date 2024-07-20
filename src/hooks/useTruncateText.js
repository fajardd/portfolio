import { useCallback } from "react";

const useTruncatetext = () => {
  const truncateText = useCallback((text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }, []);
  return { truncateText };
};
export default useTruncatetext;
