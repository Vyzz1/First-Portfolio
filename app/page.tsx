import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";

import Grid from "@/components/Grid";
import { navItems } from "@/data";
import RecentProject from "@/components/RecentProject";
import Experiences from "@/components/Experiences";
import Learning from "@/components/Learning";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="relative overflow-clip bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Experiences />
        <Learning />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
