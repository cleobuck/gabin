import React from "react";
import styling from "./collectives.module.scss";
import PageLayout from "@/components/PageLayout/PageLayout";

const Collectives = () => {
  return (
    <div>
      {" "}
      <PageLayout title="collecti- vités" className={styling.collectives}>
        {" "}
        Collectivités
      </PageLayout>
    </div>
  );
};

export default Collectives;
