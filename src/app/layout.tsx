import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PARADOX — DataKthon 2026",
  description:
    "Every Data Has a Story. Find the Paradox.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}