import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ReactNode } from "react";

import "@/src/styles/globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Todoro",
    template: "Todoro | %s", // dnamic title
  },
  description: "TODORO home page",
};

export type SharedLayout = {
  readonly children: ReactNode;
};

export default function RootLayout({ children }: SharedLayout) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased`}>{children}</body>
    </html>
  );
}
