import { useField } from "formik";
import React from "react";

const RadioButton = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <label>
      <input
        type="radio"
        {...field}
        {...props}
        checked={field.value === props.value}
      />
      {label}
    </label>
  );
};



export default RadioButton;