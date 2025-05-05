"use client";

import MainContent from "../../UI/MainContent/MainContent";
import FlexboxSidebar from "./FlexboxSidebar/FlexboxSidebar";
import LayoutGroupWrapper from "../../UI/LayoutGroup";

export default function FlexboxPage() {
  return (
    <MainContent>
      <LayoutGroupWrapper>
        <FlexboxSidebar />
      </LayoutGroupWrapper>
    </MainContent>
  );
}
