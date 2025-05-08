"use client";

import LayoutGroupWrapper from "../../UI/LayoutGroup";
import MainContent from "../../UI/MainContent/MainContent";
import GridSidebar from "./GridSideBar/GridSideBar";

function GridPage() {
  return (
    <MainContent>
      <LayoutGroupWrapper>
        <GridSidebar />
      </LayoutGroupWrapper>
    </MainContent>
  );
}

export default GridPage;
