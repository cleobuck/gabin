import React from "react";

import styling from "./business.module.scss";

import PageLayout from "@/components/structure/PageLayout/PageLayout";

import FirstServiceMobileSection from "../sections/FirstServiceMobileSection/FirstServiceMobileSection";
import { businessData } from "./business.data";
import BusinessTabletSection from "./BusinessTabletSection/BusinessTabletSection";

const Weddings = () => {
  const style = "business";
  return (
    <div className={styling.pageWrapper}>
      <PageLayout
        title="Entre-prise"
        className={styling.business}
        style={style}
        removeDashes
      >
        <FirstServiceMobileSection style={style} data={businessData} />
        <BusinessTabletSection data={businessData} />
      </PageLayout>
    </div>
  );
};

export default Weddings;
