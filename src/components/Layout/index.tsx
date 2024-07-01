import "../../app/globals.css";
import { Inter } from "next/font/google";
import { Header } from "../Header";

const inter = Inter({ subsets: ["latin"] });

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <Header />

      <main className="container mx-auto pl-1 pr-1">{children}</main>
    </div>
  );
}
