import React from "react";

import styling from "./weddings.module.scss";
import PageLayout from "@/components/PageLayout/PageLayout";

const Weddings = () => {
  return (
    <div>
      <PageLayout title="Mariages" className={styling.weddings}>
        Weddings
      </PageLayout>
    </div>
  );
};

export default Weddings;
