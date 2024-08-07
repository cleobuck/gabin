import React from "react";
import styling from "./collectives.module.scss";
import PageLayout from "@/components/structure/PageLayout/PageLayout";
import FirstServiceMobileSection from "../sections/FirstServiceMobileSection/FirstServiceMobileSection";
import { collectivesData } from "./collectives.data";
import CollectivesTabletSection from "./CollectivesTabletSection/CollectivesTabletSection";

const Collectives = () => {
  const style = "collectives";
  return (
    <div className={styling.pageWrapper}>
      <PageLayout
        title="collecti- vités"
        className={styling.collectives}
        style={style}
      >
        <FirstServiceMobileSection style={style} data={collectivesData} />
        <CollectivesTabletSection data={collectivesData} />
      </PageLayout>
    </div>
  );
};

export default Collectives;
