import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Kelly Xie — AI Application Engineer",
  description:
    "AI systems that solve business problems. RAG architecture, LLM orchestration, and structured output pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-neutral-950 font-sans">
        <Nav />
        {children}
      </body>
    </html>
  );
}
