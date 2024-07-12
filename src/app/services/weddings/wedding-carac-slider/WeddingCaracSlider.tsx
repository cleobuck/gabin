"use client";

import React, { useEffect, useState } from "react";
import SecondSlider from "@/components/blocks/second-slider/SecondSlider";
import imageTest2 from "@/assets/images/linkedin.svg?react";

import ImageTest1 from "@/assets/images/sun.svg?react";

import Drops from "@/assets/images/drops.svg?react";
import styling from "./WeddingCaracSlider.module.scss";
import { createClassNameString } from "@/utils";
import CaracSlider from "@/components/sections/carac-slider/CaracSlider";
type Props = {};

//https://stackoverflow.com/questions/76614923/how-to-pass-a-component-as-a-prop-using-next-13

export default function WeddingCaracSlider({}: Props) {
  const sliderData = [
    { title: "imperméable", Icon: Drops },
    { title: "deuxieme", Icon: imageTest2 },
    { title: "troisieme", Icon: ImageTest1 },
  ];

  return <CaracSlider style="weddings" sliderData={sliderData} />;
}
