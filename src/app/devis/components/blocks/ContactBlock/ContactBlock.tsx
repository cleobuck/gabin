import React from "react";
import styles from "./ContactBlock.module.scss";
import Title from "../../Title/Title";

type Props = {};

const ContactBlock: React.FC<Props> = ({}) => {
  return (
    <div className={styles.contactBlock}>
      <Title title="Contact" className={styles.vous} />
      <div className={styles.section}>
        Une question ? Contactez nous au 06 21 87 26 78 ou par mail juste{" "}
        <a href="mailto:gabinregnier88@gmail.com"> ici</a>
      </div>
    </div>
  );
};

export default ContactBlock;
