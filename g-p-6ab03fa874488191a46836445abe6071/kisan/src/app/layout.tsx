import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kisan | Growing farms, growing livelihoods",
  description: "A farm-work network for farmers and workers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
