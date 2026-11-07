import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteContact } from "@/components/site-contact";

const YELP_URL =
  "https://www.yelp.com/biz/dogs-by-carter-san-fernando-valley?osq=dogs+by+carter";

const FAQS = [
  {
    q: "What services does Dogs by Carter offer?",
    a: "boarding/daycare, board and train, private coaching, play and train",
  },
  {
    q: "Where are you located?",
    a: "In Northridge, in the San Fernando Valley. Scroll down to see maps.",
  },
  {
    q: "How do I book or ask a question?",
    a: "Call or text (949) 304-9888, or email dogsbycarter@gmail.com.",
  },
  {
    q: "What is Board and Train?",
    a: "A highly personalized, immersive program. Your dog lives in Carter's home — not a kennel — with a customized training plan, training in real-world environments like cafés, restaurants, parks, and hiking trails, and direct owner coaching during and after training.",
  },
  {
    q: "What is Play and Train?",
    a: "A hybrid between daycare and training. Structured play groups, outings to parks, hiking trails, and other dog-friendly spots, with training woven naturally through the day. Every dog is matched by temperament, energy level, and play style.",
  },
  {
    q: "What is included with boarding?",
    a: "A fenced backyard, small play groups, daily outings, and a home — not a kennel — for your dog to relax in. Grooming services (bath, trimming, and more) are available upon request.",
  },
  {
    q: "How many dogs do you take at a time?",
    a: "Only a limited number of dogs at a time, so every dog gets real attention and care.",
  },
  {
    q: "Do you offer grooming?",
    a: "Yes — grooming services including bath and trimming, so your dog comes home clean.",
  },
  {
    q: "Where does training happen?",
    a: "At home and in real-world environments like neighborhoods, parks, and public spaces — where behavior truly matters.",
  },
  {
    q: "What should I bring for my dog's stay?",
    a: "Call or text (949) 304-9888 to confirm what to bring for your dog.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — Dogs by Carter" },
      {
        name: "description",
        content:
          "Answers about Dogs by Carter's training, boarding, daycare, coaching, grooming, and booking.",
      },
      { property: "og:title", content: "Frequently Asked Questions — Dogs by Carter" },
      {
        property: "og:description",
        content:
          "Answers about Dogs by Carter's training, boarding, daycare, coaching, grooming, and booking.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <main>
      <header className="bg-ink text-ink-foreground">
        <nav className="mx-auto grid max-w-6xl items-center gap-5 px-6 py-6 md:grid-cols-3">
          <Link to="/" className="order-3 justify-self-center text-xl font-semibold underline underline-offset-4 md:order-none md:justify-self-start">← Home</Link>
          <Link to="/" className="text-center font-display text-2xl font-semibold leading-none underline decoration-highlight decoration-2 underline-offset-8 md:text-[2.6rem]">Dogs <span className="font-normal italic text-ink-foreground/75">by</span> <span className="text-highlight">Carter</span></Link>
          <div className="flex flex-wrap items-center justify-center gap-3 justify-self-center md:justify-self-end">
            <a href="#" className="whitespace-nowrap rounded-full bg-highlight px-4 py-2 text-base font-bold text-ink">Instagram</a>
            <a href={YELP_URL} target="_blank" rel="noreferrer" className="whitespace-nowrap rounded-full bg-highlight px-4 py-2 text-base font-bold text-ink">Yelp</a>
            <a href="tel:9493049888" className="whitespace-nowrap rounded-full bg-highlight px-5 py-2 text-lg font-bold text-ink">(949) 304-9888</a>
          </div>
        </nav>
      </header>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pt-16">
        <h1 className="text-center text-4xl leading-tight text-primary md:text-6xl">Frequently Asked Questions</h1>
        <p className="mx-auto mt-6 max-w-3xl text-center font-body text-2xl font-medium leading-relaxed">
          Quick answers about training, boarding, and booking.
        </p>
        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          {FAQS.map((item) => (
            <div key={item.q} className="rounded-3xl border bg-card p-6 shadow-sm md:p-8">
              <h2 className="text-2xl text-primary">{item.q}</h2>
              <p className="mt-2 font-body text-lg leading-relaxed text-foreground/90 md:text-xl">{item.a}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-3xl text-center font-body text-xl leading-relaxed text-foreground/90">
          Still have a question? Reach out below — call or text (949) 304-9888.
        </p>
      </section>
      <SiteContact />
    </main>
  );
}
