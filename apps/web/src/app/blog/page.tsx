import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-6 mt-16 mb-32">
      <h1 className="font-serif text-4xl md:text-5xl mb-16">Connectionism</h1>

      {posts.length === 0 && (
        <p className="text-body text-ink/60">No posts yet.</p>
      )}

      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              <time className="text-xs text-ink/40 uppercase tracking-wide">
                {post.date}
              </time>
              <h2 className="font-serif text-2xl mt-2 group-hover:text-accent transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-body text-ink/60 mt-3 max-w-prose">
                {post.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
