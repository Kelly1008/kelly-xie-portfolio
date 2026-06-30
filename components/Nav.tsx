import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-8 py-7 sm:px-16">
      <Link href="/" className="text-lg font-semibold tracking-tight text-neutral-950">
        Kelly Xie
      </Link>
      <ul className="hidden gap-10 sm:flex">
        <li>
          <a href="/#projects" className="text-[15px] text-neutral-600 transition hover:text-neutral-950">
            Projects
          </a>
        </li>
        <li>
          <a href="/about" className="text-[15px] text-neutral-600 transition hover:text-neutral-950">
            About
          </a>
        </li>
        <li>
          <a href="/how-i-work" className="text-[15px] text-neutral-600 transition hover:text-neutral-950">
            How I work
          </a>
        </li>
      </ul>
      <a
        href="mailto:Tingyuxie66@gmail.com"
        className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
      >
        Contact
      </a>
    </nav>
  );
}
