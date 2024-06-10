import type { Metadata } from "next";
import { Inter } from "next/font/google";
// Supports weights 200-900
import '@fontsource-variable/nunito';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cherry",
  description: "Cherry's Personal Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
