import React from "react";
import { getTextError } from "../../helpers/validate-text/validate-text";
import './text-input.css'

export const TextInput = ({
  initialValue = null,
  register,
  name,
  errors = [],
  label,
  validate = {},
  type='text',
  changevalue

}) => {
  return (
    <div >
      <input className={errors[name] ? "input_error" : "input_components"}
        type={type}
        placeholder={label}
        {...register(name, validate)}
        defaultValue={initialValue}
        onChange={(e) => changevalue(e.target.value)}
        style={{ minWidth: 300, borderRadius: 4, minHeight: 30, padding: 4 }}
        
      />
      <div style={{ color: "red" }}>
        {errors[name] && getTextError(errors[name]?.type)}

      </div>
    </div>
  );
};

