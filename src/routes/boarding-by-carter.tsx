import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteContact } from "@/components/site-contact";
import boardingAsset from "@/assets/boarding.jpg.asset.json";

export const Route = createFileRoute("/boarding-by-carter")({
  head: () => ({
    meta: [
      { title: "Boarding by Carter — In-Home Dog Boarding" },
      { name: "description", content: "Safe, structured in-home boarding on a fully fenced property. Small play groups, daily activity, and a low-stress alternative to kennels." },
      { property: "og:title", content: "Boarding by Carter — In-Home Dog Boarding" },
      { property: "og:description", content: "Your dog stays in Carter's home, not a kennel — with structure, play groups, and daily exercise." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BoardingPage,
});

function BoardingPage() {
  return (
    <main>
      <header className="bg-ink text-ink-foreground">
        <nav className="mx-auto grid max-w-6xl items-center gap-5 px-6 py-6 md:grid-cols-3">
          <Link to="/" className="order-3 justify-self-center text-xl font-semibold underline underline-offset-4 md:order-none md:justify-self-start">← Home</Link>
          <Link to="/" className="text-center font-display text-2xl font-semibold leading-none underline decoration-highlight decoration-2 underline-offset-8 md:text-[2.6rem]">Dogs <span className="font-normal italic text-ink-foreground/75">by</span> <span className="text-highlight">Carter</span></Link>
          <a href="tel:9493049888" className="justify-self-center whitespace-nowrap rounded-full bg-highlight px-5 py-2 text-lg font-bold text-ink md:justify-self-end">(949) 304-9888</a>
        </nav>
      </header>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pt-16">
        <h1 className="text-center text-4xl leading-tight text-primary md:text-6xl">Boarding by Carter</h1>
        <p className="mx-auto mt-6 max-w-3xl text-center font-body text-2xl font-medium leading-relaxed">A safe, structured, and comfortable alternative to traditional kennel boarding.</p>
        <div className="mt-12 grid justify-items-center">
          <img src={boardingAsset.url} alt="Dog resting in the yard at Carter's home" className="mx-auto block max-h-[620px] w-auto max-w-full rounded-3xl object-contain" />
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-7 font-body text-xl leading-relaxed tracking-normal text-foreground/95 md:text-2xl">
          <p>Your dog stays in my home on a fully fenced property—not in a large facility—allowing them to relax in a more natural, low-stress environment. Dogs are treated like part of the family while maintaining clear structure and supervision.</p>
          <p>Each dog is thoughtfully integrated into small, compatible play groups and receives daily activity tailored to their energy level and temperament. This may include supervised social time with other dogs, as well as outings to parks for fresh air and exercise.</p>
          <p>To ensure safety and quality care, I only accept a limited number of dogs at a time.</p>
        </div>
      </section>
      <SiteContact />
    </main>
  );
}
