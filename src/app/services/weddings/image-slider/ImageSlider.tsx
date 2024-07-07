import React from "react";
import DraggableSlider from "@/components/blocks/Slider/Slider";
import TentImage from "@/assets/images/placeholder.jpeg";

type Props = {};

export default function ImageSlider({}: Props) {
  const images = [
    { image: TentImage, alt: "tent" },
    { image: TentImage, alt: "tent" },
    { image: TentImage, alt: "tent" },
  ];
  return <DraggableSlider elements={images} />;
}
