"use client";
import React, { useRef } from "react";
import styles from "./SecondSection.module.scss";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import TentImage from "@/assets/images/placeholder.jpeg";
import BulletPoint from "@/assets/images/bullet-point.svg?react";
import { IsItAPhone } from "@/utils";
import Sun from "@/assets/images/sun.svg?react";
import ImageWithCredit from "@/components/items/ImageWithCredit/ImageWithCredit";
import SideMenu from "@/components/structure/side-menu/SideMenu";
import BlockQuote from "../BlockQuote/BlockQuote";

type Props = {};

const SecondSection: React.FC<Props> = ({}) => {
  const isPhone = IsItAPhone();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <SideMenu
        className={styles.mobileSideMenu}
        scrollLimit={
          ref && ref.current
            ? ref.current.getBoundingClientRect().top
            : undefined
        }
      />

      <section className={styles.secondSection} ref={ref}>
        <div className={styles.blockquote}>
          <BlockQuote />
        </div>

        <div className={styles.subSection}>
          <ul>
            <li>
              <BulletPoint className={styles.bulletPoint} /> Mariage
            </li>
            <li>
              <BulletPoint className={styles.bulletPoint} /> Entreprise
            </li>
            <li>
              <BulletPoint className={styles.bulletPoint} /> Collectivité
            </li>
            <li>
              <BulletPoint className={styles.bulletPoint} /> Planner
            </li>
          </ul>

          <div className={styles.secondSectionImage}>
            {isPhone && (
              <figure className={styles.logoImage}>
                <Image src={Logo} alt="logo" fill={true} />
              </figure>
            )}

            <ImageWithCredit
              src={TentImage}
              alt="tent"
              className={styles.image}
            />
          </div>

          <p className={styles.text}>
            Parce que sous un chapiteau s’éveille toujours un soupçon de magie,
            Inouze vous propose ses structures haut de gamme pour donner une
            nouvelle dimension à votre événement.
            {!isPhone && <Sun className={styles.sun} />}
          </p>

          {!isPhone && (
            <div className={styles.desktopImages}>
              <ImageWithCredit
                src={TentImage}
                alt="tent"
                className={styles.desktopImage}
              />

              <ImageWithCredit
                src={TentImage}
                alt="tent"
                className={styles.desktopImage}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SecondSection;
