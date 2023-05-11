import { useField } from "formik";
import React from "react";

export default function Input({ label, ...props }) {
    const [field, meta, helpers] = useField(props);
    
    // console.log(field);
    // console.log(meta);
    // console.log(helpers);

    return (
        <label>
        <div>{label}</div>
        <input {...field} {...props} />
{/* 
        {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>) : null} */}
        </label>
        
    );
}

