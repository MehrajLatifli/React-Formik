import { useField } from "formik";
import React from "react";

const Checkbox = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <label>
      <input
        type="checkbox"
        {...field}
        {...props}
        checked={field.value}
      />
      {label}
    </label>
  );
};

export default Checkbox;