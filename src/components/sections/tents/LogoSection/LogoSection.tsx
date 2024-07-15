import React from "react";
import styles from "./LogoSection.module.scss";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";

type Props = {};

const LogoSection: React.FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <figure className={styles.logoImage}>
        <Image src={Logo} alt="logo" fill={true} />
      </figure>
    </div>
  );
};

export default LogoSection;
