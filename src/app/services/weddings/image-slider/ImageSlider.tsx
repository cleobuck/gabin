import React from "react";
import DraggableSlider from "@/components/Slider/Slider";

type Props = {};

export default function ImageSlider({}: Props) {
  const images = [
    "https://via.placeholder.com/500x300.png?text=Image+1",
    "https://via.placeholder.com/500x300.png?text=Image+2",
    "https://via.placeholder.com/500x300.png?text=Image+3",
  ];
  return <DraggableSlider elements={images} />;
}
