import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
import styling from "./collectives.module.scss";

const Collectives = () => {
  return (
    <div>
      {" "}
      <PageHeader title="collecti- vités" className={styling.collectives} />
    </div>
  );
};

export default Collectives;
