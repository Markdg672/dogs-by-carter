import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteContact } from "@/components/site-contact";

const YELP_URL =
  "https://www.yelp.com/biz/dogs-by-carter-san-fernando-valley?osq=dogs+by+carter";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Dogs by Carter" },
      {
        name: "description",
        content:
          "Training tips, behind-the-scenes stories, and updates from Dogs by Carter.",
      },
      { property: "og:title", content: "Blog — Dogs by Carter" },
      {
        property: "og:description",
        content:
          "Training tips, behind-the-scenes stories, and updates from Dogs by Carter.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <main>
      <header className="bg-ink text-ink-foreground">
        <nav className="mx-auto grid max-w-6xl items-center gap-5 px-6 py-6 md:grid-cols-3">
          <Link to="/" className="order-3 justify-self-center text-xl font-semibold underline underline-offset-4 md:order-none md:justify-self-start">← Home</Link>
          <Link to="/" className="text-center font-display text-2xl font-semibold leading-none underline decoration-highlight decoration-2 underline-offset-8 md:text-[2.6rem]">Dogs <span className="font-normal italic text-ink-foreground/75">by</span> <span className="text-highlight">Carter</span></Link>
          <div className="flex items-center gap-3 justify-self-center md:justify-self-end">
            <a href={YELP_URL} target="_blank" rel="noreferrer" className="whitespace-nowrap rounded-full bg-highlight px-4 py-2 text-base font-bold text-ink">Yelp</a>
            <a href="tel:9493049888" className="whitespace-nowrap rounded-full bg-highlight px-5 py-2 text-lg font-bold text-ink">(949) 304-9888</a>
          </div>
        </nav>
      </header>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pt-16">
        <h1 className="text-center text-4xl leading-tight text-primary md:text-6xl">Blog</h1>
        <p className="mx-auto mt-6 max-w-3xl text-center font-body text-2xl font-medium leading-relaxed">
          Training tips, behind-the-scenes stories, and updates from Dogs by Carter.
        </p>
        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border bg-card p-8 text-center shadow-sm">
          <p className="font-body text-xl leading-relaxed text-foreground/90">
            First posts are coming soon — check back here for new articles.
          </p>
        </div>
      </section>
      <SiteContact />
    </main>
  );
}
