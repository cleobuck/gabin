import React from "react";
import styles from "./BlockQuote.module.scss";

type Props = {};

const BlockQuote: React.FC<Props> = ({}) => {
  return (
    <figure className={styles.container}>
      <blockquote>
        “C’est sous un chapiteau que j’ai vu se créer les plus beaux moments
        d’harmonie”
      </blockquote>

      <figcaption> Gabin, fondateur d’Inouze</figcaption>
    </figure>
  );
};

export default BlockQuote;
