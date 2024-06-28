import React from "react";
import styling from "./events.module.scss";
import PageLayout from "@/components/PageLayout/PageLayout";

const Events = () => {
  return (
    <div>
      <PageLayout
        title="organi-sateur
d’éven-ements /
planner"
        className={styling.events}
      >
        {" "}
        Evénements{" "}
      </PageLayout>
    </div>
  );
};

export default Events;
