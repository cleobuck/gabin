import React from "react";
import styles from "./RadioGroup.module.scss";
import { useField } from "formik";

type Props = {
  values: { label?: string; value: string }[];
  name: string;
  title?: string;
  noWrap?: boolean;
  className?: string;
  radioStyle?: boolean;
};

const RadioGroup: React.FC<Props> = ({
  values,
  name,
  title,
  noWrap,
  className,
  radioStyle,
}) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (value: string) => {
    helpers.setValue(value);
  };

  return (
    <div
      className={`${noWrap ? styles.noWrap : ""} ${styles.radioGroup}  ${
        className ? className : ""
      }`}
    >
      {title && <label className={styles.label}>{title}</label>}

      {values.map((value, index) => (
        <div key={index} className={styles.radioOption}>
          <label
            className={`${styles.radioLabel} ${
              field.value === value.value && !radioStyle ? styles.active : ""
            } ${radioStyle ? styles.labelRadioStyle : ""}`}
          >
            <div
              className={`${
                field.value === value.value && radioStyle ? styles.active : ""
              } ${radioStyle ? styles.radioCheckBox : ""}`}
            ></div>
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
