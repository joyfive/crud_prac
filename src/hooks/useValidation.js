import { useEffect, useState } from "react";

const useValidation = (data) => {
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    const result = Object.values(data).some((value) => !value);

    setValidation(!result);
  }, [data]);

  return [validation];
};

export default useValidation;
