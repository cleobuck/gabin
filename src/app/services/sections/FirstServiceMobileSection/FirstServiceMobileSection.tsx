import React from "react";
import styles from "./FirstServiceMobileSection.module.scss";
import LargeImage from "@/components/blocks/LargeImage/LargeImage";

import Text from "@/components/blocks/Text/Text";
import { ServiceData } from "../../Services.types";
import DraggableSlider from "@/components/blocks/Slider/Slider";

type Props = { style: string; data: ServiceData };

const FirstServiceMobileSection: React.FC<Props> = ({ style, data }) => {
  return (
    <div className={styles.container}>
      <Text title={data.firstParagraph.title}>
        {data.firstParagraph.text.map((paragraph) => (
          <p> {paragraph}</p>
        ))}
      </Text>
      <DraggableSlider style={style} elements={data.sliderImages} />
      <Text title={data.secondParagraph.title}>
        {data.secondParagraph.text.map((paragraph) => (
          <p> {paragraph}</p>
        ))}
      </Text>
      <LargeImage image={data.bottomImage} style={style} />
    </div>
  );
};

export default FirstServiceMobileSection;
