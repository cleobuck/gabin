"use client";
import React, { useRef } from "react";
import styles from "./SecondSection.module.scss";
import Image from "next/image";
import Logo from "@/assets/logos/logo.png";
import Photo2 from "@/assets/images/photo-2.jpg";
import BulletPoint from "@/assets/icons/bullet-point.svg?react";
import { IsItAPhone } from "@/utils";
import Sun from "@/assets/icons/sun.svg?react";
import ImageWithCredit from "@/components/items/ImageWithCredit/ImageWithCredit";
import SideMenu from "@/components/structure/side-menu/SideMenu";
import BlockQuote from "../BlockQuote/BlockQuote";
import Illu1 from "@/assets/icons/illu-1.svg?react";

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
            <ImageWithCredit
              src={Photo2}
              alt="tent"
              className={styles.image}
              Icon={<Illu1 />}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondSection;
