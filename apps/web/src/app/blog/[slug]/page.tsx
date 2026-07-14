import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TableOfContents } from "@/components/TableOfContents";
import { BackToTop } from "@/components/BackToTop";
import { BYOKFlowDiagram } from "@/components/figures/BYOKFlowDiagram";
import { DeliveryModelsDiagram } from "@/components/figures/DeliveryModelsDiagram";
import { TelemetryStreamDiagram } from "@/components/figures/TelemetryStreamDiagram";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === params.slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const headings = extractHeadings(post.content);
  const htmlContent = markdownToHtml(post.content);

  return (
    <div className="relative">
      <article className="mx-auto max-w-4xl px-6 mt-16 mb-32">
        <header className="mb-16">
          <h1 className="font-serif text-4xl md:text-5xl leading-tight max-w-prose">
            {post.title}
          </h1>
        </header>

        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-16">
          <aside className="hidden lg:block">
            <TableOfContents headings={headings} />
          </aside>

          <div className="prose-blog">
            {renderContentWithFigures(htmlContent, params.slug)}
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-ink/10 flex items-center justify-between">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="text-sm text-ink/50 hover:text-ink transition-colors"
            >
              &larr; prev
            </Link>
          ) : (
            <span />
          )}
          <BackToTop />
        </footer>
      </article>
    </div>
  );
}

interface Heading {
  id: string;
  text: string;
  level: number;
}

function extractHeadings(md: string): Heading[] {
  const headings: Heading[] = [];
  const lines = md.split("\n");
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2];
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      headings.push({ id, text, level });
    }
  }
  return headings;
}

function markdownToHtml(md: string): string {
  const blocks = md.split("\n\n");
  return blocks
    .map((block) => {
      const trimmed = block.trim();
      if (trimmed.startsWith("# ")) {
        return "";
      }
      if (trimmed.startsWith("## ")) {
        const text = trimmed.slice(3);
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        return `<h2 id="${id}">${text}</h2>`;
      }
      if (trimmed.startsWith("### ")) {
        const text = trimmed.slice(4);
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        return `<h3 id="${id}">${text}</h3>`;
      }
      if (trimmed.startsWith("```")) {
        const codeContent = trimmed.replace(/^```\w*\n?/, "").replace(/\n?```$/, "");
        return `<pre><code>${escapeHtml(codeContent)}</code></pre>`;
      }
      if (trimmed.startsWith("- ")) {
        const items = trimmed.split("\n").map((l) => `<li>${l.replace(/^- /, "")}</li>`).join("\n");
        return `<ul>${items}</ul>`;
      }
      if (trimmed.startsWith("> ")) {
        const quote = trimmed.replace(/^> /gm, "");
        return `<blockquote><p>${quote}</p></blockquote>`;
      }
      const processed = trimmed
        .replace(/\n/g, " ")
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.+?)\*/g, "<em>$1</em>")
        .replace(/`(.+?)`/g, "<code>$1</code>")
        .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
      return `<p>${processed}</p>`;
    })
    .filter(Boolean)
    .join("\n");
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderContentWithFigures(html: string, slug: string) {
  if (slug !== "introducing-singuron") {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }

  const sections = html.split(/<h2/);
  const intro = sections[0];
  const rest = sections.slice(1).map((s) => "<h2" + s);

  const figureMap: Record<number, React.ReactNode> = {
    2: <BYOKFlowDiagram />,
    3: <DeliveryModelsDiagram />,
    4: <TelemetryStreamDiagram />,
  };

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: intro }} />
      {rest.map((section, i) => (
        <div key={i}>
          <div dangerouslySetInnerHTML={{ __html: section }} />
          {figureMap[i] && figureMap[i]}
        </div>
      ))}
    </>
  );
}
