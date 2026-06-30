import { Project } from "@/data/projects";

const gradients: Record<Project["visualTheme"], string> = {
  purple: "linear-gradient(135deg, #9b8cf9 0%, #6f6df0 45%, #3a3fd9 100%)",
  blue: "linear-gradient(135deg, #6fa8f5 0%, #4f6df5 50%, #2f3fc9 100%)",
  coral: "linear-gradient(135deg, #f5a96f 0%, #e8714f 50%, #c93a3f 100%)",
};

function TerminalCard({ project }: { project: Project }) {
  return (
    <div className="w-full rounded-2xl bg-neutral-900/95 p-5 font-mono text-[13px] leading-7 text-neutral-300 shadow-2xl">
      <div className="mb-4 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      </div>
      <div>
        query:{" "}
        <span className="text-indigo-300">
          &quot;Compare Scope 3 emissions, 2022 vs 2024&quot;
        </span>
      </div>
      <div className="mt-2">
        retrieving across 1M+ sections <span className="text-emerald-400">✓</span>
      </div>
      <div>cross-referencing multi-company filings</div>
      <div className="mt-2">
        research time reduced 45% <span className="text-emerald-400">✓</span>
      </div>
    </div>
  );
}

function CardsVisual() {
  return (
    <>
      <div className="absolute left-[8%] top-[14%] flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 text-sm font-medium shadow-xl">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Flight + hotel APIs · synced
      </div>
      <div className="absolute bottom-[18%] right-[6%] flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 text-sm font-medium shadow-xl">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Context persisted across turns
      </div>
      <div className="mt-16 w-full rounded-2xl bg-neutral-900/95 p-5 font-mono text-[13px] leading-7 text-neutral-300 shadow-2xl">
        <div>
          routing intent across <span className="text-indigo-300">5+ APIs</span>
        </div>
        <div className="mt-2">normalizing response schemas</div>
        <div className="mt-2">
          unnecessary calls reduced ~40% <span className="text-emerald-400">✓</span>
        </div>
      </div>
    </>
  );
}

function JsonCard() {
  return (
    <div className="w-full rounded-2xl bg-neutral-900/95 p-5 font-mono text-[13px] leading-7 text-neutral-300 shadow-2xl">
      <div className="mb-4 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      </div>
      <div>{"{"}</div>
      <div>
        &nbsp;&nbsp;&quot;fund_name&quot;:{" "}
        <span className="text-indigo-300">&quot;Impact Fund III&quot;</span>,
      </div>
      <div>
        &nbsp;&nbsp;&quot;esg_metric&quot;:{" "}
        <span className="text-indigo-300">&quot;scope_3_emissions&quot;</span>,
      </div>
      <div>
        &nbsp;&nbsp;&quot;confidence&quot;: <span className="text-indigo-300">0.94</span>,
      </div>
      <div>
        &nbsp;&nbsp;&quot;schema_valid&quot;: <span className="text-emerald-400">true</span>
      </div>
      <div>{"}"}</div>
    </div>
  );
}

export default function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className="relative flex aspect-[4/3.1] items-center justify-center overflow-hidden rounded-3xl p-9"
      style={{ background: gradients[project.visualTheme] }}
    >
      {project.visualKind === "terminal" && <TerminalCard project={project} />}
      {project.visualKind === "cards" && <CardsVisual />}
      {project.visualKind === "json" && <JsonCard />}
    </div>
  );
}
