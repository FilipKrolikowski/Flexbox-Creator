import Image from "next/image";
import type { ReactNode } from "react";
// import { StoreProvider } from "./StoreProvider";

import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{/* <StoreProvider>{children}</StoreProvider> */}</body>
    </html>
  );
}
