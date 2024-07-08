import React from "react";
import styles from "./Input.module.scss";
import { ErrorMessage, Field } from "formik";

type Props = { name: string; label: string };

const Input: React.FC<Props> = ({ name, label }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
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
