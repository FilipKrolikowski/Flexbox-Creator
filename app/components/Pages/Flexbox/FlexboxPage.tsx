"use client";

import MainContent from "../../UI/MainContent/MainContent";
import FlexboxSidebar from "./FlexboxSidebar/FlexboxSidebar";
import LayoutGroupWrapper from "../../UI/LayoutGroup";
import Playground from "../../Playground/Playground";
import { useFlexbox } from "../../../hooks/useFlexbox";
import FlexboxItem from "./FlexboxItem/FlexboxItem";

export default function FlexboxPage() {
  const { items, container, clearSelected } = useFlexbox();
  return (
    <MainContent>
      <LayoutGroupWrapper>
        <FlexboxSidebar />
        <Playground container={container}>
          {items.map((item) => (
            <FlexboxItem key={item.id} item={item} />
          ))}
        </Playground>
      </LayoutGroupWrapper>
    </MainContent>
  );
}
