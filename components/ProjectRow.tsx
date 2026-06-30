"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";

export default function ProjectRow({
  project,
  reverse,
}: {
  project: Project;
  reverse: boolean;
}) {
  return (
    <div
      className={`mx-auto mb-40 grid max-w-6xl grid-cols-1 items-center gap-10 px-8 md:grid-cols-2 md:gap-20 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4 text-sm font-semibold text-indigo-600">
          {project.kicker}
        </p>
        <h2 className="mb-5 text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          {project.title}
        </h2>
        <p className="mb-7 text-base leading-relaxed text-neutral-600 sm:text-lg">
          {project.tagline}
        </p>
        <div className="mb-7 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-3.5 py-1.5 text-[13px] font-medium text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex w-fit items-center gap-1.5 border-b border-neutral-950 pb-0.5 text-[15px] font-medium text-neutral-950"
        >
          View case study →
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ProjectVisual project={project} />
      </motion.div>
    </div>
  );
}
