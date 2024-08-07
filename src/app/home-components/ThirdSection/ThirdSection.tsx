import React from "react";
import styles from "./ThirdSection.module.scss";
import Image from "next/image";
import TentImage from "@/assets/images/placeholder.jpeg";
import ImageWithCredit from "@/components/items/ImageWithCredit/ImageWithCredit";

type Props = {};

const ThirdSection: React.FC<Props> = ({}) => {
  return (
    <section className={styles.thirdSection}>
      <div className={styles.images}>
        <ImageWithCredit src={TentImage} alt="tent" className={styles.image} />
        <ImageWithCredit src={TentImage} alt="tent" className={styles.image} />
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
