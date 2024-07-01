import "../../app/globals.css";
import { Inter } from "next/font/google";
import { Header } from "../Header";
import { Footer } from "../Footer";

const inter = Inter({ subsets: ["latin"] });

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.className} h-screen flex flex-col`}>
      <Header />

      <main className="container mx-auto pl-1 pr-1 flex-grow">{children}</main>

      <Footer />
    </div>
  );
}
