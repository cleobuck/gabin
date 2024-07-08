import React from "react";
import styles from "./TextArea.module.scss";
import { ErrorMessage, Field } from "formik";

type Props = { label: string; name: string };

const TextArea: React.FC<Props> = ({ label, name }) => {
  return (
    <>
      <label className={styles.label}>{label}</label>

      <Field name={name} as="textarea" className={styles.field} />
      <ErrorMessage
        name={name}
        component="div"
        className={styles.errorMessage}
      />
    </>
  );
};

export default TextArea;
