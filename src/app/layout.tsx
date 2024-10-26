import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header/Header";




export const metadata: Metadata = {
  title: "Tech Guard",
  description: "Challenge Porto Seguros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body >
        <Header />
        {children}
      </body>
    </html>
  );
}