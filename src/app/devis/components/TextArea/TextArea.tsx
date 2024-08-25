import React from "react";
import styles from "./TextArea.module.scss";
import { ErrorMessage, Field } from "formik";

type Props = {
  label: string;
  name: string;
  rows?: number;
  subLabel?: string;
};

const TextArea: React.FC<Props> = ({ label, name, rows = 3, subLabel }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>

      {subLabel && <label className={styles.subLabel}> {subLabel}</label>}

      <div className={styles.paper} style={{ height: rows * 30 + 5 }}>
        <div className={styles.paperContent}>
          <Field
            name={name}
            as="textarea"
            className={styles.textArea}
            rows={rows}
          />
        </div>
      </div>

      {/* <ErrorMessage
        name={name}
        component="div"
        className={styles.errorMessage}
      /> */}
    </div>
  );
};

export default TextArea;
