import { About } from "@/components/main/about";
import { Services } from "@/components/main/services";
import { Contact } from "@/components/main/contact";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Tools } from "@/components/main/tools";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Tools />
        <Contact />
      </div>
    </main>
  );
}
