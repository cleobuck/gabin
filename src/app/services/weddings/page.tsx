import React from "react";

import styling from "./weddings.module.scss";
import PageLayout from "@/components/PageLayout/PageLayout";

import ImageSlider from "./image-slider/ImageSlider";
import CaracSlider from "./carac-slider/CaracSlider";
import ListItem from "@/components/listItem/listItem";
import SecondSlider from "@/components/second-slider/SecondSlider";
import ListSlider from "./list-slider/ListSlider";
import TentQuote from "@/components/tentQuote/tentQuote";

const Weddings = () => {
  return (
    <div>
      <PageLayout title="Mariages" className={styling.weddings}>
        Weddings
        <ImageSlider />
        <CaracSlider />
        <ListSlider />
        <TentQuote />
      </PageLayout>
    </div>
  );
};

export default Weddings;
