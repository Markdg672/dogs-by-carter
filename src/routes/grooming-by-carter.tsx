import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteContact } from "@/components/site-contact";
import groomingTub from "@/assets/grooming-tub.jpeg";
import contactMalinoisBall from "@/assets/contact-malinois-ball.jpg";

// Carter's Google Calendar grooming booking link.
const BOOKING_URL = "https://calendar.app.google/4ro5Tgas11opuxMD8";

const SERVICES = [
  {
    title: "Bath only",
    detail: "Wash, dry, and brush-out. About 45 minutes.",
    time: "~45 min",
  },
  {
    title: "Trimming & bath",
    detail: "Full trim plus a bath, so your dog comes home clean and tidy. At least 2 hours.",
    time: "2+ hours",
  },
  {
    title: "Shave & bath",
    detail: "Shave plus a bath for a fresh, clean cut. At least 1 hour.",
    time: "1+ hour",
  },
];

export const Route = createFileRoute("/grooming-by-carter")({
  head: () => ({
    meta: [
      { title: "Grooming by Carter — Dog Grooming in Northridge" },
      {
        name: "description",
        content:
          "Dog grooming by Carter in Northridge — bath, trimming, and shave & bath. Book online by date and time.",
      },
      { property: "og:title", content: "Grooming by Carter — Dog Grooming in Northridge" },
      {
        property: "og:description",
        content: "Bath, trimming, and shave & bath. Book your dog's grooming online.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GroomingPage,
});

function GroomingPage() {
  return (
    <main>
      <header className="bg-ink text-ink-foreground">
        <nav className="mx-auto grid max-w-6xl items-center gap-5 px-6 py-6 md:grid-cols-3">
          <Link to="/" className="order-3 justify-self-center text-xl font-semibold underline underline-offset-4 md:order-none md:justify-self-start">← Home</Link>
          <Link to="/" className="text-center font-display text-2xl font-semibold leading-none underline decoration-highlight decoration-2 underline-offset-8 md:text-[2.6rem]">Dogs <span className="font-normal italic text-ink-foreground/75">by</span> <span className="text-highlight">Carter</span></Link>
          <div className="flex flex-wrap items-center justify-center gap-3 justify-self-center md:justify-self-end">
            <a href="https://www.instagram.com/dogsbycarterllc/" target="_blank" rel="noreferrer" className="whitespace-nowrap rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] px-4 py-2 text-base font-bold text-white">Instagram</a>
            <a href="https://www.yelp.com/biz/dogs-by-carter-san-fernando-valley?osq=dogs+by+carter" target="_blank" rel="noreferrer" className="whitespace-nowrap rounded-full bg-highlight px-4 py-2 text-base font-bold text-ink">Yelp</a>
            <a href="tel:9493049888" className="whitespace-nowrap rounded-full bg-highlight px-5 py-2 text-lg font-bold text-ink">(949) 304-9888</a>
          </div>
        </nav>
      </header>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pt-16">
        <h1 className="text-center text-4xl leading-tight text-primary md:text-6xl">Grooming by Carter</h1>
        <p className="mx-auto mt-6 max-w-3xl text-center font-body text-2xl font-medium leading-relaxed">Bath, trimming, and shave &amp; bath — so your dog comes home clean, comfortable, and looking sharp.</p>
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-ink"
          >
            Book grooming online →
          </a>
          <p className="mt-4 font-body text-lg text-foreground/80">Pick your service, date, and time. Tuesdays 9am–5pm and Saturdays 10am–6pm.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <img src={groomingTub} alt="Stainless steel grooming tub with handheld sprayer and safety loops" className="aspect-[4/5] w-full rounded-3xl object-cover object-center" />
          <div className="flex flex-col justify-center space-y-7 font-body text-xl leading-relaxed tracking-normal text-foreground/95 md:text-2xl">
            <p>Grooming happens in our professional tub, with care for dogs who need a gentle touch — including rescues and dogs with sensitive skin.</p>
            <p>Every groom ends with a clean, dry, brushed-out dog. If you are not sure which service your dog needs, call or text and we will help you pick.</p>
            <p className="font-semibold">Prices: call or text (949) 304-9888 for pricing.</p>
          </div>
        </div>
        <section aria-labelledby="services-heading" className="mx-auto mt-16 max-w-4xl">
          <h2 id="services-heading" className="mb-8 text-center text-3xl leading-tight text-primary md:text-5xl">Grooming services</h2>
          <ul className="space-y-5 font-body text-xl leading-relaxed text-foreground/95 md:text-2xl">
            {SERVICES.map((item) => (
              <li key={item.title} className="border-l-4 border-primary pl-4">
                <span className="block font-semibold">{item.title} <span className="font-normal text-foreground/70">· {item.time}</span></span>
                <span className="block text-lg text-foreground/80 md:text-xl">{item.detail}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-ink"
            >
              Book grooming online →
            </a>
          </div>
        </section>
      </section>
      <SiteContact photo={contactMalinoisBall} photoAlt="A Malinois playing with a blue ball in the yard" />
    </main>
  );
}
