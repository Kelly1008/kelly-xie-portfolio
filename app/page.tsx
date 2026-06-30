import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ProjectRow from "@/components/ProjectRow";
import FooterCta from "@/components/FooterCta";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />

      <div id="projects" className="px-8">
        <p className="mb-4 text-center text-sm font-medium uppercase tracking-wider text-neutral-400">
          Selected work
        </p>
        <h2 className="mx-auto mb-24 max-w-2xl text-center text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
          Three systems, three capabilities
        </h2>
      </div>

      {projects.map((project, i) => (
        <ProjectRow key={project.slug} project={project} reverse={i % 2 === 1} />
      ))}

      <FooterCta />
    </main>
  );
}
