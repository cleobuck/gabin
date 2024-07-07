import React from "react";

import styling from "./weddings.module.scss";

import PageLayout from "@/components/structure/PageLayout/PageLayout";
import DevisButton from "@/components/items/Button/DevisButton";

const Weddings = () => {
  return (
    <div>
      <PageLayout title="Mariages" className={styling.weddings}>
        <DevisButton />
      </PageLayout>
    </div>
  );
};

export default Weddings;
