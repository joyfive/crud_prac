import { useState } from "react";

const useInputForm = (init) => {
  const [form, setForm] = useState(init);

  const setValue = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return [form, setValue, setForm];
};

export default useInputForm;
