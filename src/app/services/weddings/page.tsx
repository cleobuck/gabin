import React from "react";

import styling from "./weddings.module.scss";
import PageLayout from "@/components/PageLayout/PageLayout";

import ImageSlider from "./image-slider/ImageSlider";
import CaracSlider from "./carac-slider/CaracSlider";

const Weddings = () => {
  return (
    <div>
      <PageLayout title="Mariages" className={styling.weddings}>
        Weddings
        <ImageSlider />
        <CaracSlider />
      </PageLayout>
    </div>
  );
};

export default Weddings;
