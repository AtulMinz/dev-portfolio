import About from "@/components/about";
import { NavBar } from "@/components/navbar";
import { ModeToggle } from "@/components/theme-switch";
import Image from "next/image";

export default function Home() {
  return (
    <main className="scrollbar-thin">
      <NavBar />
      <About />
    </main>
  );
}
