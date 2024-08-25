import React from "react";
import styles from "./Input.module.scss";
import { ErrorMessage, Field } from "formik";

type Props = { name: string; label: string; subLabel?: string };

const Input: React.FC<Props> = ({ name, label, subLabel }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {label}{" "}
        {subLabel && <span className={styles.subLabel}> {subLabel} </span>}
      </label>

      <Field name={name} className={styles.field} />
      <ErrorMessage
        name={name}
        component="div"
        className={styles.errorMessage}
      />
    </div>
  );
};

export default Input;
