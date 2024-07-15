import React from "react";
import DraggableSlider from "@/components/blocks/Slider/Slider";
import TentImage from "@/assets/images/placeholder.jpeg";

type Props = { style: string };

export default function ImageSlider({ style }: Props) {
  const images = [
    { image: TentImage, alt: "tent" },
    { image: TentImage, alt: "tent" },
    { image: TentImage, alt: "tent" },
  ];
  return <DraggableSlider style={style} elements={images} />;
}
