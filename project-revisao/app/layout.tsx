import type { Metadata } from "next";
import { Unica_One } from "next/font/google";

import "./globals.css";

const unica = Unica_One({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Markin Blog",
  description: "Meu blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={unica.className}>
        {children}
      </body>
    </html>
  );
}