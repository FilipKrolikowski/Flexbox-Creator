import { Metadata } from "next";
import type { ReactNode } from "react";
import { SettingsProvider } from "./context/SettingsContext";
import StoreProvider from "./StoreProvider";
import "./styles/globals.scss";

export const metadata: Metadata = {
  title: "Flexbox Creator",
  description: "A visual tool for experimenting with flexbox layouts",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <SettingsProvider>
          <StoreProvider>{children}</StoreProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
