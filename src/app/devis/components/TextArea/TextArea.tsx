import React from "react";
import styles from "./TextArea.module.scss";
import { ErrorMessage, Field } from "formik";

type Props = {
  label: string;
  name: string;
  rows?: number;
  lineHeight?: number;
};

const TextArea: React.FC<Props> = ({ label, name, rows = 3 }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>

      <Field name={name} as="textarea" className={styles.field} rows={rows} />

      <ErrorMessage
        name={name}
        component="div"
        className={styles.errorMessage}
      />
    </div>
  );
};

export default TextArea;
