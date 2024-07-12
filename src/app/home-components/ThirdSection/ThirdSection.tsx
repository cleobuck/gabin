import React from "react";
import styles from "./ThirdSection.module.scss";
import Image from "next/image";
import TentImage from "@/assets/images/placeholder.jpeg";

type Props = {};

const ThirdSection: React.FC<Props> = ({}) => {
  return (
    <section className={styles.thirdSection}>
      <div className={styles.images}>
        <figure className={styles.image}>
          <Image src={TentImage} alt="tent" fill={true} />
        </figure>
        <figure className={styles.image}>
          <Image src={TentImage} alt="tent" fill={true} />
        </figure>
      </div>

      <p>
        Quel que soit votre événement, nos structures haut de gamme apportent
        une atmosphère unique et élégante à votre lieu.
      </p>

      <p>
        Quel que soit votre événement, nos structures haut de gamme apportent
        une atmosphère unique et élégante à votre lieu.
      </p>
    </section>
  );
};

export default ThirdSection;
