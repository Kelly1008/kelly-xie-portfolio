export default function Hero() {
  return (
    <section className="relative overflow-hidden px-8 pt-24 pb-32 text-center">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 50% 0%, rgba(139,124,246,0.35), transparent 60%), radial-gradient(ellipse 700px 500px at 75% 20%, rgba(79,109,245,0.25), transparent 60%), radial-gradient(ellipse 600px 400px at 20% 30%, rgba(139,124,246,0.18), transparent 60%)",
        }}
      />
      <p className="mb-7 text-sm font-medium text-neutral-600">
        AI Application Engineer
      </p>
      <h1 className="mx-auto mb-7 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-neutral-950 sm:text-7xl">
        AI systems that solve business problems.
      </h1>
      <p className="mx-auto mb-10 max-w-xl text-lg text-neutral-600 sm:text-xl">
        MS in Business Analytics. I build production-grade RAG systems, LLM
        orchestration layers, and structured output pipelines — with the
        same care for UX as for the model underneath.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href="#projects"
          className="rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          View projects
        </a>
        <a
          href="/resume.pdf"
          className="rounded-full border border-neutral-200 bg-white px-7 py-3.5 text-sm font-medium text-neutral-950 transition hover:border-neutral-300"
        >
          Download resume
        </a>
      </div>
    </section>
  );
}
