import { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello NextJS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <Header />
        <main className="flex justify-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
