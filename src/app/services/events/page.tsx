import React from "react";
import styling from "./events.module.scss";
import PageHeader from "@/components/PageHeader/PageHeader";

const Events = () => {
  return (
    <div>
      <PageHeader
        title="organi-sateur
d’éven-ements /
planner"
        className={styling.events}
      />
    </div>
  );
};

export default Events;
