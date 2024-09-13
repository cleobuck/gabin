import React from "react";

import styling from "./events.module.scss";

import PageLayout from "@/components/structure/PageLayout/PageLayout";
import FirstServiceMobileSection from "../sections/FirstServiceMobileSection/FirstServiceMobileSection";
import { eventsData } from "./events.data";
import EventsTabletSection from "./EventsTabletSection/EventsTabletSection";

const Events = () => {
  const style = "events";
  return (
    <div className={styling.pageWrapper}>
      <PageLayout
        style={style}
        title="organi-sateur
d’éven-ements /
planner"
        className={styling.events}
        removeDashes
      >
        <FirstServiceMobileSection style={style} data={eventsData} />
        <EventsTabletSection data={eventsData} />
      </PageLayout>
    </div>
  );
};

export default Events;
