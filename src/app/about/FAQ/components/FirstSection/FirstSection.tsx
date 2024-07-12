import React from "react";
import styles from "./FirstSection.module.scss";
import TentImage from "@/assets/images/placeholder.jpeg";
import Image from "next/image";

type Props = {};

const FirstSection: React.FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <figure className={styles.image}>
        <Image src={TentImage} alt="tent" fill={true} />
      </figure>

      <div className={styles.text}>
        <p>
          Impossible de raconter l’histoire d’Inouze sans commencer par celle de
          Gabin, son fondateur!
        </p>

        <p>
          Gabin a toujours travaillé dans l’événementiel. Il l’intègre dès ses
          premiers petits boulots auprès de festivals, cirques ou foires, et,
          amoureux de cette effervescence unique, finit par ne plus le quitter.
        </p>

        <p>
          Est-ce que c’est lui qui découvre cet univers ou est-ce que c’est
          l’univers du spectacle qui l’a trouvé, on ne saurait dire, mais une
          passion naît au fur et à mesure des festivals, cirques et autres
          incroyables événements qu’il accompagne. Les événements défilent et
          Gabin réalise à quel point cette ambiance l’anime.
        </p>

        <p>
          En France et en Europe, jamais au même endroit, mais toujours porté
          par la magie du spectacle, Gabin passe sa vie sous les chapiteaux et
          réalisent que c’est sous ces toiles tendues entre réalité et illusion
          qu’il trouve l’harmonie. Sous ces tentes spectaculaires, tout devient
          possible !
        </p>

        <p>
          C’est alors que naît un rêve : celui de faire partager cet instant de
          magie au plus grand nombre ! Inouze commençait à germer.
        </p>

        <p>
          Après quelques années de réflexions, mais surtout de rencontres,
          l’idée s’affine et Inouze est alors officiellement créé en 2024.
        </p>
      </div>
    </div>
  );
};

export default FirstSection;
