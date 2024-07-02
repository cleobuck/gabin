import React from "react";

import styling from "./weddings.module.scss";
import PageLayout from "@/components/PageLayout/PageLayout";
import DraggableSlider from "@/components/Slider/Slider";

const Weddings = () => {
  const images = [
    "https://via.placeholder.com/500x300.png?text=Image+1",
    "https://via.placeholder.com/500x300.png?text=Image+2",
    "https://via.placeholder.com/500x300.png?text=Image+3",
  ];
  return (
    <div>
      <PageLayout title="Mariages" className={styling.weddings}>
        Weddings
        <DraggableSlider images={images} />
      </PageLayout>
    </div>
  );
};

export default Weddings;
