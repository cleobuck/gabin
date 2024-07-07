import React from "react";

import styling from "./weddings.module.scss";
import PageLayout from "@/components/PageLayout/PageLayout";

import ImageSlider from "./image-slider/ImageSlider";
import CaracSlider from "./carac-slider/CaracSlider";
import ListItem from "@/components/listItem/listItem";
import SecondSlider from "@/components/second-slider/SecondSlider";
import ListSlider from "./list-slider/ListSlider";

const Weddings = () => {
  return (
    <div>
      <PageLayout title="Mariages" className={styling.weddings}>
        Weddings
        <ImageSlider />
        <CaracSlider />
        <ListSlider />
      </PageLayout>
    </div>
  );
};

export default Weddings;
