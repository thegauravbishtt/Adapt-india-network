import React from "react";
import Link from "next/link";

/**
 * Renders article text written in a small, safe subset of Markdown:
 *   ## Heading      -> <h2>
 *   ### Heading     -> <h3>
 *   - item          -> bullet list
 *   1. item         -> numbered list
 *   [text](url)     -> link (internal links use next/link; external open in a new tab)
 *   **bold**        -> <strong>
 * Blocks are separated by a blank line. Older articles without "##" markers
 * keep working: a short line with no full stop is still shown as an <h2>.
 */
export default function ArticleBody({ content }: { content: string }) {
  const blocks = content
    .split("\n\n")
    .map((b) => b.trim())
    .filter(Boolean);
  const usesMarkdownHeadings = blocks.some((b) => b.startsWith("## "));

  return (
    <>
      {blocks.map((block, i) => {
        if (block.startsWith("### ")) {
          return (
            <h3 key={i} className="text-lg sm:text-xl font-bold text-zinc-950 font-display tracking-tight mt-7 mb-2">
              {renderInline(block.slice(4))}
            </h3>
          );
        }
        if (block.startsWith("## ")) {
          return (
            <h2 key={i} className="text-xl sm:text-2xl font-bold text-zinc-950 font-display tracking-tight mt-10 mb-3">
              {renderInline(block.slice(3))}
            </h2>
          );
        }

        const lines = block.split("\n").map((l) => l.trim());
        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul key={i} className="list-disc pl-5 mb-5 space-y-2 text-sm sm:text-base text-zinc-700 leading-relaxed">
              {lines.map((l, j) => (
                <li key={j}>{renderInline(l.slice(2))}</li>
              ))}
            </ul>
          );
        }
        if (lines.every((l) => /^\d+\.\s/.test(l))) {
          return (
            <ol key={i} className="list-decimal pl-5 mb-5 space-y-2 text-sm sm:text-base text-zinc-700 leading-relaxed">
              {lines.map((l, j) => (
                <li key={j}>{renderInline(l.replace(/^\d+\.\s/, ""))}</li>
              ))}
            </ol>
          );
        }

        // Legacy heading detection for older articles written without "##"
        if (!usesMarkdownHeadings && i > 0 && block.length < 80 && !block.endsWith(".") && !block.includes("\n")) {
          return (
            <h2 key={i} className="text-xl sm:text-2xl font-bold text-zinc-950 font-display uppercase tracking-tight mt-8 mb-3">
              {block}
            </h2>
          );
        }

        return (
          <p key={i} className="text-sm sm:text-base text-zinc-700 leading-relaxed sm:leading-loose mb-5 font-normal whitespace-pre-line">
            {renderInline(block)}
          </p>
        );
      })}
    </>
  );
}

/** Turns [text](url) and **bold** inside a line into elements. */
function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[1] !== undefined) {
      const [label, href] = [match[1], match[2]];
      const linkClass = "text-[#E31E24] font-medium underline underline-offset-2 hover:text-red-800";
      if (href.startsWith("/") || href.startsWith("#")) {
        parts.push(
          <Link key={key++} href={href} className={linkClass}>
            {label}
          </Link>
        );
      } else {
        parts.push(
          <a key={key++} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {label}
          </a>
        );
      }
    } else {
      parts.push(
        <strong key={key++} className="font-semibold text-zinc-900">
          {match[3]}
        </strong>
      );
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
