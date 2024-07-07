import React from "react";
import styling from "./business.module.scss";
import PageLayout from "@/components/structure/PageLayout/PageLayout";

const Business = () => {
  return (
    <div>
      <PageLayout title="Entre- prise" className={styling.business}>
        Business
      </PageLayout>
    </div>
  );
};

export default Business;
