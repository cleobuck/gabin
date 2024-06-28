import React from "react";
import styling from "./business.module.scss";
import PageHeader from "@/components/PageHeader/PageHeader";

const Business = () => {
  return (
    <div>
      <PageHeader title="Entre- prise" className={styling.business} />
    </div>
  );
};

export default Business;
