import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const useUpdateSearchParams = (key: string, value: string) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const current = new URLSearchParams(searchParams.toString());
  useEffect(() => {
    if (!value || value === "1") {
      current.delete(key);
    } else {
      current.set(key, String(value));
    }
    setSearchParams(current.toString());
  }, [value]);
};

export default useUpdateSearchParams;
