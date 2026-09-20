import type { Metadata } from "next";
import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";

const bricolageSans = Bricolage_Grotesque({
  variable: "--font-custom-sans",
  subsets: ['latin']
})
const bricolageMono = Bricolage_Grotesque({
  variable: "--font-custom-mono",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "E-com Hompage",
  description: "This is the platform where you will get all kind oof services and goods you are looking for.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolageSans.variable} ${bricolageMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><Header/>{children}<Footer/></body>
    </html>
    
  );
}
