import React from "react";

import styling from "./weddings.module.scss";

import PageLayout from "@/components/structure/PageLayout/PageLayout";

import FirstServiceMobileSection from "../sections/FirstServiceMobileSection/FirstServiceMobileSection";
import { weddingData } from "./wedding.data";
import FirstServiceTabletSection from "../sections/FirstServiceTabletSection/FirstServiceTabletSection";
import { ResizeScript } from "@/components/ResizeScript";

const Weddings = () => {
  const style = "weddings";
  return (
    <div className={styling.pageWrapper}>
      <ResizeScript />
      <PageLayout
        title="Mariages"
        className={styling.weddings}
        style="weddings"
      >
        <FirstServiceMobileSection style={style} data={weddingData} />

        <FirstServiceTabletSection style={style} data={weddingData} />
      </PageLayout>
    </div>
  );
};

export default Weddings;
