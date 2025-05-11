"use client";

import { useGrid } from "../../../hooks/useGrid";
import Playground from "../../Playground/Playground";
import LayoutGroupWrapper from "../../UI/LayoutGroup";
import MainContent from "../../UI/MainContent/MainContent";
import GridSidebar from "./GridSideBar/GridSideBar";
import GridArea from "./GridArea/GridArea";
import GridToolbar from "./GridToolbar/GridToolbar";

function GridPage() {
  const { container } = useGrid();

  const playgroundTools = [{ component: <GridToolbar />, id: "toolbar" }];
  return (
    <MainContent>
      <LayoutGroupWrapper>
        <GridSidebar />
        <Playground playgroundTools={playgroundTools} container={container}>
          <GridArea />
        </Playground>
      </LayoutGroupWrapper>
    </MainContent>
  );
}

export default GridPage;
