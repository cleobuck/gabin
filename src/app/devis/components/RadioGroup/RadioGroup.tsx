import React from "react";
import styles from "./RadioGroup.module.scss";
import { useField } from "formik";

type Props = {
  values: { label?: string; value: string }[];
  name: string;
  title?: string;
  noWrap?: boolean;
};

const RadioGroup: React.FC<Props> = ({ values, name, title, noWrap }) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (value: string) => {
    helpers.setValue(value);
  };

  return (
    <div className={`${noWrap ? styles.noWrap : ""} ${styles.radioGroup}`}>
      {title && <label className={styles.label}>{title}</label>}

      {values.map((value, index) => (
        <div key={index} className={styles.radioOption}>
          <label
            className={`${styles.radioLabel} ${
              field.value === value.value ? styles.active : ""
            }`}
          >
            <input
              type="radio"
              {...field}
              value={value.value}
              checked={field.value === value.value}
              onChange={() => handleChange(value.value)}
            />
            {value.label || value.value}
          </label>
        </div>
      ))}

      {meta.touched && meta.error && (
        <div className={styles.errorMessage}>{meta.error}</div>
      )}
    </div>
  );
};

export default RadioGroup;
