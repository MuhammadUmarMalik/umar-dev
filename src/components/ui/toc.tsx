"use client";

import React from "react";

type TocItem = {
  id: string;
  text: string;
  level: 2 | 3 | 4;
};

type TocProps = {
  className?: string;
  containerSelector?: string;
  collapsible?: boolean;
  initialOpen?: boolean;
};

export default function TOC({
  className,
  containerSelector = ".blog-content",
  collapsible = false,
  initialOpen = true,
}: TocProps) {
  const [items, setItems] = React.useState<TocItem[]>([]);
  const [activeId, setActiveId] = React.useState<string>("");
  const [open, setOpen] = React.useState<boolean>(initialOpen);

  React.useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const getHeadings = (): TocItem[] => {
      const headingNodes = Array.from(
        container.querySelectorAll<HTMLElement>("h2, h3, h4")
      );
      return headingNodes
        .filter((h) => (h.textContent || "").trim().length > 0)
        .map((h) => ({
          id: h.id,
          text: (h.textContent || "").trim(),
          level: Number(h.tagName.substring(1)) as 2 | 3 | 4,
        }));
    };

    const rebuild = () => {
      setItems(getHeadings());
    };

    // Initial build
    rebuild();

    // Observe mutations to rebuild TOC when content changes
    let scheduled = false;
    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        rebuild();
      });
    };

    const observer = new MutationObserver(schedule);
    observer.observe(container, { childList: true, subtree: true, characterData: true });

    return () => observer.disconnect();
  }, [containerSelector]);

  React.useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const headings = Array.from(container.querySelectorAll<HTMLElement>("h2, h3, h4"));
    if (headings.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId((entry.target as HTMLElement).id);
          }
        });
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0.1 }
    );

    headings.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, [containerSelector, items.length]);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    const headerOffset = 100;
    const y = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const content = (
    <ul className="toc-list">
      {items.map((item) => (
        <li
          key={item.id}
          className={
            item.level === 2 ? "toc-item" : item.level === 3 ? "toc-subitem" : "toc-subsubitem"
          }
        >
          <a
            href={`#${item.id}`}
            onClick={handleClick(item.id)}
            className={`toc-link ${activeId === item.id ? "active" : ""}`}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-medium text-white flex items-center gap-2 m-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
          Contents
        </h3>
        {collapsible && (
          <button
            className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-toc-content"
          >
            {open ? "Hide" : "Show"}
          </button>
        )}
      </div>
      {!collapsible || open ? (
        <div id="mobile-toc-content">{content}</div>
      ) : null}
    </div>
  );
}


