import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject } from "@/data/projects";
import ProjectVisual from "@/components/ProjectVisual";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-8 py-20">
      <Link
        href="/#projects"
        className="mb-12 inline-block text-sm font-medium text-neutral-500 transition hover:text-neutral-950"
      >
        ← Back to projects
      </Link>

      <p className="mb-4 text-sm font-semibold text-indigo-600">{project.kicker}</p>
      <h1 className="mb-5 text-4xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-5xl">
        {project.title}
      </h1>
      <p className="mb-10 text-lg leading-relaxed text-neutral-600">
        {project.tagline}
      </p>

      <div className="mb-14">
        <ProjectVisual project={project} />
      </div>

      <div className="mb-12">
        <h2 className="mb-3 text-xl font-semibold tracking-tight text-neutral-950">
          Problem
        </h2>
        <p className="text-base leading-relaxed text-neutral-600">
          {project.problem}
        </p>
      </div>

      <div className="mb-12">
        <h2 className="mb-3 text-xl font-semibold tracking-tight text-neutral-950">
          Solution
        </h2>
        <p className="text-base leading-relaxed text-neutral-600">
          {project.solution}
        </p>
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight text-neutral-950">
          Highlights
        </h2>
        <ul className="space-y-3">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-base leading-relaxed text-neutral-600">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300" />
              {h}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight text-neutral-950">
          Tech stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-3.5 py-1.5 text-[13px] font-medium text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-neutral-50 p-7">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Impact
        </h2>
        <p className="text-base leading-relaxed text-neutral-800">
          {project.impact}
        </p>
      </div>
    </main>
  );
}
