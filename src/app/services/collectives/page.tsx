import React from "react";
import styling from "./collectives.module.scss";
import PageLayout from "@/components/PageLayout/PageLayout";
import SideMenu from "@/components/side-menu/SideMenu";
import Trust from "@/components/Trust/Trust";

const Collectives = () => {
  return (
    <>
      <SideMenu />
      <PageLayout title="collecti- vités" className={styling.collectives}>
        <Trust />
      </PageLayout>
    </>
  );
};

export default Collectives;
