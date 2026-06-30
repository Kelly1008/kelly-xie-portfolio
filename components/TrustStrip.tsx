const stack = ["LangChain", "OpenAI", "Pinecone", "PySpark", "FastAPI"];

export default function TrustStrip() {
  return (
    <div className="px-8 pb-24 text-center">
      <p className="mb-8 text-xs font-medium uppercase tracking-wider text-neutral-400">
        Built with
      </p>
      <div className="flex flex-wrap items-center justify-center gap-12">
        {stack.map((name) => (
          <span
            key={name}
            className="text-lg font-semibold tracking-tight text-neutral-400"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
