import React, { ReactNode } from "react";
import styles from "./Question.module.scss";
import DevisButton from "@/components/items/Button/DevisButton";
import SilhouetteTentButton from "@/components/items/Button/SilhouetteTentButton";
import StretchTentButton from "@/components/items/Button/StretchTentButton";

type Props = { children: ReactNode; question: string; buttons?: string };

const Question: React.FC<Props> = ({
  children,
  question,
  buttons = "devis",
}) => {
  return (
    <div className={styles.container}>
      <h2> {question} </h2>
      {children}

      <div
        className={`${styles.button} ${
          buttons === "devis" ? "" : styles.twoButtons
        }`}
      >
        {buttons === "devis" ? (
          <DevisButton />
        ) : (
          <>
            <StretchTentButton />
            <SilhouetteTentButton />
          </>
        )}
      </div>
    </div>
  );
};

export default Question;
