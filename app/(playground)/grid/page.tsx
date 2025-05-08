import GridPage from "../../components/Pages/Grid/GridPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flexbox Creator | Grid",
  description: "A visual tool for experimenting with grid layouts",
};

function Page() {
  return <GridPage />;
}

export default Page;
