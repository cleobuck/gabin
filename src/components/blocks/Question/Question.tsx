import React, { ReactNode } from "react";
import styles from "./Question.module.scss";
import DevisButton from "@/components/items/Button/DevisButton";
import SilhouetteTentButton from "@/components/items/Button/SilhouetteTentButton";
import StretchTentButton from "@/components/items/Button/StretchTentButton";

type Props = {
  children: ReactNode;
  question: string;
  buttons?: string;
  order?: number;
};

const Question: React.FC<Props> = ({
  children,
  question,
  buttons = "devis",
  order,
}) => {
  return (
    <div className={styles.container} style={{ order }}>
      <h2> {question} </h2>
      {children}

      {buttons !== "none" && <Buttons type={buttons} />}
    </div>
  );
};

export default Question;

const Buttons = ({ type }: { type: string }) => {
  return (
    <>
      {type === "devis" ? (
        <p> Faire une demande de devis</p>
      ) : (
        <p> Pour plus de détails</p>
      )}

      <div
        className={`${styles.button} ${
          type === "devis" ? "" : styles.twoButtons
        }`}
      >
        {type === "devis" ? (
          <>
            <DevisButton />
          </>
        ) : (
          <>
            <StretchTentButton />
            <SilhouetteTentButton />
          </>
        )}
      </div>
    </>
  );
};
