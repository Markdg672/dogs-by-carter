import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteContact } from "@/components/site-contact";
import playImg from "@/assets/play.jpg";
import heroTanDog from "@/assets/home-hero-tan-dog.jpg";
import heroWhiteDog from "@/assets/home-hero-white-dog.jpg";
import coachingPark from "@/assets/home-coaching-park.jpg";
import boardingShepherd from "@/assets/home-boarding-shepherd.jpg";
import boardTrainResting from "@/assets/home-board-train-resting.jpg";

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
          <span className="text-center font-display text-2xl font-semibold leading-none underline decoration-highlight decoration-2 underline-offset-8 md:text-[2.6rem]">
            Dogs <span className="font-normal italic text-ink-foreground/75">by</span>{" "}
            <span className="text-highlight">Carter</span>
          </span>
          <a href={`tel:${PHONE}`} className="whitespace-nowrap rounded-full bg-highlight px-4 py-2 text-base font-bold text-ink justify-self-center md:justify-self-end md:px-5 md:text-lg">
            {PHONE}
          </a>
        </nav>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-10 md:grid-cols-2 md:items-center">
          <div>
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
          <div className="grid grid-cols-2 gap-4">
            <img
              src={heroTanDog}
              alt="Carter kneeling beside a large tan dog"
              className="aspect-[3/4] w-full rounded-3xl object-cover"
            />
            <img
              src={heroWhiteDog}
              alt="Carter kneeling beside a white and tan dog in front of a whiteboard"
              className="aspect-[3/4] w-full rounded-3xl object-cover"
            />
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

      <SiteContact />
    </main>
  );
}
