import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

import styling from "./weddings.module.scss";

const Weddings = () => {
  return (
    <div>
      <PageHeader title="Mariages" className={styling.weddings} />
    </div>
  );
};

export default Weddings;
