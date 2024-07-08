import React from "react";
import styles from "./tentQuote.module.scss";

type Props = {};

const TentQuote: React.FC<Props> = ({}) => {
  return (
    <section className={styles.container}>
      <p>
        {`louer nos structures toute une saison ? C'est désormais possible avec la
        location longue durée.`}
      </p>

      <p>
        {`Vous louez une tente silhouette ou stretch toute la saison et nous nous
        occupons de son installation, de l'entretien et du démontage.`}
      </p>
    </section>
  );
};

export default TentQuote;
