import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteContact } from "@/components/site-contact";
import playImg from "@/assets/play.jpg";
import heroTanDog from "@/assets/home-hero-tan-dog.jpg";
import heroWhiteDog from "@/assets/home-hero-white-dog.jpg";
import heroSlidePaw from "@/assets/hero-slide-paw.jpg";
import heroSlideTug from "@/assets/hero-slide-tug.jpg";
import heroSlideJump from "@/assets/hero-slide-jump.jpg";
import coachingPark from "@/assets/home-coaching-park.jpg";
import boardingShepherd from "@/assets/home-boarding-shepherd.jpg";
import boardTrainResting from "@/assets/home-board-train-resting.jpg";

const SLIDES = [
  { src: heroTanDog, alt: "Carter kneeling beside a large tan dog", pos: "object-center" },
  { src: heroWhiteDog, alt: "Carter kneeling beside a white and tan dog in front of a whiteboard", pos: "object-center" },
  { src: heroSlidePaw, alt: "Carter kneeling as a white dog gives him its paw", pos: "object-center" },
  { src: heroSlideTug, alt: "A white dog tugging a toy on the turf", pos: "object-center" },
  { src: heroSlideJump, alt: "A brown dog leaping to catch a red ball in the backyard", pos: "object-[25%_center]" },
];

function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent((v) => (v + 1) % SLIDES.length), 5000);
    return () => clearInterval(timer);
  }, []);
  const prev = () => setCurrent((v) => (v - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent((v) => (v + 1) % SLIDES.length);
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
      {SLIDES.map((s, i) => (
        <img
          key={s.alt}
          src={s.src}
          alt={s.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${s.pos} ${i === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <button type="button" onClick={prev} aria-label="Previous photo" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-ink/60 px-3 py-2 text-xl font-bold text-white hover:bg-ink">‹</button>
      <button type="button" onClick={next} aria-label="Next photo" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-ink/60 px-3 py-2 text-xl font-bold text-white hover:bg-ink">›</button>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.alt}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full ${i === current ? "bg-highlight" : "bg-white/70"}`}
          />
        ))}
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dogs by Carter — Dog Training, Daycare & Boarding" },
      {
        name: "description",
        content:
          "Board and train, play and train daycare, private coaching, and in-home boarding by Carter. Real training, real results.",
      },
      { property: "og:title", content: "Dogs by Carter — Real Training, Real Results" },
      {
        property: "og:description",
        content: "Board and train, daycare, private lessons, and boarding. Call (949) 304-9888.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "(949) 304-9888";

const CTA =
  "mt-8 inline-block rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg ring-1 ring-primary/25 transition-all hover:-translate-y-0.5 hover:bg-ink hover:shadow-xl";

const services = [
  {
    name: "Board and Train",
    tag: "Training by Carter",
    lines: ["Real training", "Real results", "Immersive lifestyle training"],
    img: boardTrainResting,
  },
  {
    name: "Play and Train",
    tag: "Daycare & Training Hybrid",
    lines: ["Social play", "Structured training", "A tired, happy dog"],
    img: playImg,
  },
  {
    name: "Coaching by Carter",
    tag: "Private Lessons",
    lines: ["Custom coaching", "Designed for your goals", "Simple, clear, effective, and fun"],
    img: coachingPark,
  },
  {
    name: "Boarding by Carter",
    tag: "Overnight / Day Boarding",
    lines: ["Your dog in my home", "Play · Exercise · Relax"],
    img: boardingShepherd,
  },
];

function Index() {
  return (
    <main>
      <header className="bg-ink text-ink-foreground">
        <nav className="mx-auto grid max-w-6xl items-center gap-4 px-6 py-5 md:grid-cols-3">
          <Link to="/training-by-carter" className="order-3 justify-self-center whitespace-nowrap rounded-full bg-highlight px-5 py-2 text-base font-bold uppercase tracking-[0.08em] text-ink shadow-md ring-1 ring-ink/10 transition-all hover:-translate-y-0.5 hover:shadow-lg md:order-none md:justify-self-start md:px-6 md:text-lg">Training by Carter</Link>
          <span className="text-center font-display text-2xl font-semibold leading-none whitespace-nowrap underline decoration-highlight decoration-2 underline-offset-8 md:text-[2.6rem]">
            DOGS <span className="font-normal italic text-ink-foreground/75">BY</span>{" "}
            <span className="text-highlight">CARTER</span>
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 justify-self-center md:justify-self-end">
            <a href="#" className="whitespace-nowrap rounded-full bg-highlight px-4 py-2 text-base font-bold text-ink">Instagram</a>
            <a href="https://www.yelp.com/biz/dogs-by-carter-san-fernando-valley?osq=dogs+by+carter" target="_blank" rel="noreferrer" className="whitespace-nowrap rounded-full bg-highlight px-4 py-2 text-base font-bold text-ink">Yelp</a>
            <a href={`tel:${PHONE}`} className="whitespace-nowrap rounded-full bg-highlight px-4 py-2 text-base font-bold text-ink md:px-5 md:text-lg">
              {PHONE}
            </a>
          </div>
        </nav>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-10 md:grid-cols-5 md:items-center">
          <div className="md:col-span-2">
            <p className="mb-4 text-lg font-bold uppercase tracking-[0.18em] text-highlight">
              Training · Daycare · Boarding
            </p>
            <h1 className="text-5xl leading-[1.05] md:text-7xl">
              Real training.
              <br />
              <em className="text-highlight">Real results.</em>
            </h1>
            <p className="mt-6 max-w-md text-xl">
              Programs built around your dog and your lifestyle — from immersive board and train
              to private lessons.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-highlight px-8 py-4 text-lg font-bold uppercase tracking-[0.08em] text-ink transition-transform hover:-translate-y-0.5"
            >
              Find your program
            </a>
          </div>
          <div className="md:col-span-3">
            <HeroSlideshow />
            <Link
              to="/about-carter"
              className="mt-4 block rounded-full bg-highlight px-8 py-4 text-center text-lg font-bold uppercase tracking-[0.08em] text-ink shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Meet Carter <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 text-center"><h2 className="font-services text-5xl font-semibold italic leading-tight tracking-normal text-primary md:text-7xl">Our Services</h2><div className="mx-auto mt-6 h-2 w-32 rounded-full bg-accent" /></div>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.name} className="flex flex-col overflow-hidden rounded-3xl border bg-card text-center shadow-lg">
              {s.img ? (
                <img src={s.img} alt={s.name} loading="lazy" className={"aspect-[4/3] w-full object-cover " + (s.name === "Board and Train" ? "object-bottom" : "object-center")} />
              ) : (
                <div className="flex aspect-[4/3] items-end bg-ink p-8 text-ink-foreground">
                  <span className="font-display text-5xl leading-none">
                    Live it.
                    <br />
                    Learn it.
                  </span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-3xl text-primary md:text-4xl">{s.name}</h3>
                <p className="mt-3 text-base font-bold uppercase tracking-[0.18em] text-accent">{s.tag}</p>
                <div className="mx-auto mt-5 h-1.5 w-16 rounded-full bg-accent/40" />
                <ul className="mt-6 grid flex-1 content-start grid-cols-[auto_auto] justify-center gap-x-3 gap-y-3 text-left font-body text-2xl font-medium leading-relaxed text-foreground md:text-[1.65rem]">
                  {s.lines.map((l) => (
                    <li key={l} className="contents">
                      <span aria-hidden="true" className="self-center size-1.5 shrink-0 rotate-45 rounded-[2px] bg-gold/60" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
                {s.name === "Play and Train" && (
                  <Link to="/play-and-train" className={CTA}>
                    Explore Play &amp; Train <span aria-hidden="true">→</span>
                  </Link>
                )}
                {s.name === "Board and Train" && (
                  <Link to="/training-by-carter" className={CTA}>
                    Explore Training by Carter <span aria-hidden="true">→</span>
                  </Link>
                )}
                {s.name === "Boarding by Carter" && (
                  <Link to="/boarding-by-carter" className={CTA}>
                    Explore Boarding by Carter <span aria-hidden="true">→</span>
                  </Link>
                )}
                {s.name === "Coaching by Carter" && (
                  <Link to="/coaching-by-carter" className={CTA}>
                    Explore Coaching by Carter <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border bg-card p-8 text-center shadow-lg">
          <h2 className="text-3xl text-primary md:text-4xl">Find Dogs by Carter online</h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-foreground/80">
            Check out reviews and see what we&apos;re up to.
          </p>
          <div className="mt-6 flex flex-col flex-wrap items-center gap-4">
            <a
              href="https://www.yelp.com/biz/dogs-by-carter-san-fernando-valley?osq=dogs+by+carter"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-ink"
            >
              Yelp — Dogs by Carter <span aria-hidden="true">→</span>
            </a>
            <a
              href="#"
              className="inline-block rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-ink"
            >
              Instagram <span aria-hidden="true">→</span>
            </a>
            <a
              href="#"
              className="inline-block rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-ink"
            >
              Facebook <span aria-hidden="true">→</span>
            </a>
            <a
              href="#"
              className="inline-block rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-ink"
            >
              TikTok <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-center text-3xl text-primary md:text-4xl">Frequently Asked Questions</h2>
        <div className="mx-auto mt-8 max-w-3xl space-y-6">
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h3 className="text-2xl text-primary">What services does Dogs by Carter offer?</h3>
            <p className="mt-2 font-body text-lg leading-relaxed text-foreground/90">boarding/daycare, board and train, private coaching, play and train</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h3 className="text-2xl text-primary">Where are you located?</h3>
            <p className="mt-2 font-body text-lg leading-relaxed text-foreground/90">In Northridge, in the San Fernando Valley. Scroll down to see maps.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h3 className="text-2xl text-primary">How do I book?</h3>
            <p className="mt-2 font-body text-lg leading-relaxed text-foreground/90">Call or text (949) 304-9888, or email dogsbycarter@gmail.com.</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link to="/faq" className="inline-block rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-ink">
            See all frequently asked questions <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border bg-card p-8 text-center shadow-lg">
          <h2 className="text-3xl text-primary md:text-4xl">From the Blog</h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-foreground/80">
            Training tips, behind-the-scenes stories, and updates from Dogs by Carter — coming soon.
          </p>
          <div className="mt-6">
            <Link to="/blog" className="inline-block rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-ink">
              Visit the Blog <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteContact />
    </main>
  );
}
