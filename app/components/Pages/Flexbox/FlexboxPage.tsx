"use client";

import MainContent from "../../UI/MainContent/MainContent";
import FlexboxSidebar from "./FlexboxSidebar/FlexboxSidebar";
import LayoutGroupWrapper from "../../UI/LayoutGroup";
import Playground from "../../Playground/Playground";
import { useFlexbox } from "../../../hooks/useFlexbox";
import FlexboxItem from "./FlexboxItem/FlexboxItem";
import FlexboxToolbar from "./FlexboxToolbar/FlexboxToolbar";
import FlexboxSnackbar from "./FlexboxSnackbar/FlexboxSnackbar";

export default function FlexboxPage() {
  const { items, container } = useFlexbox();

  const playgroundTools = [
    { component: <FlexboxToolbar />, id: "toolbar" },
    { component: <FlexboxSnackbar />, id: "snackbar" },
  ];

  return (
    <MainContent>
      <LayoutGroupWrapper>
        <FlexboxSidebar />
        <Playground container={container} playgroundTools={playgroundTools}>
          {items.map((item) => (
            <FlexboxItem key={item.id} item={item} />
          ))}
        </Playground>
      </LayoutGroupWrapper>
    </MainContent>
  );
}
