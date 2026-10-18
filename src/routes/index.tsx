import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import playImg from "@/assets/play.jpg";
import coachingImg from "@/assets/coaching.jpg";
import boardingImg from "@/assets/boarding.jpg";

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
const EMAIL = "dogsbycarter@gmail.com";

const services = [
  {
    name: "Training by Carter",
    tag: "Board and Train",
    lines: ["Real training", "Real results", "Immersive lifestyle training"],
    img: null as string | null,
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
    img: coachingImg,
  },
  {
    name: "Boarding by Carter",
    tag: "Overnight / Day Boarding",
    lines: ["Your dog in my home", "Play · Exercise · Relax"],
    img: boardingImg,
  },
];

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <header className="bg-ink text-ink-foreground">
        <nav className="mx-auto grid max-w-6xl items-center gap-4 px-6 py-5 md:grid-cols-3">
          <span aria-hidden className="hidden md:block" />
          <span className="text-center font-display text-2xl font-semibold leading-none tracking-tight md:text-[2.6rem]">
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
              className="mt-8 inline-block rounded-full bg-highlight px-8 py-4 text-lg font-bold text-ink transition-transform hover:-translate-y-0.5"
            >
              Find your program
            </a>
          </div>
          <img
            src={coachingImg}
            alt="Carter training a dog in the park"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 text-center"><h2 className="font-display text-6xl font-semibold leading-none tracking-tight text-primary md:text-8xl">Our Services</h2><div className="mx-auto mt-6 h-2 w-32 rounded-full bg-accent" /></div>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.name} className="overflow-hidden rounded-3xl border bg-card text-center shadow-lg">
              {s.img ? (
                <img src={s.img} alt={s.name} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              ) : (
                <div className="flex aspect-[4/3] items-end bg-ink p-8 text-ink-foreground">
                  <span className="font-display text-5xl leading-none">
                    Live it.
                    <br />
                    Learn it.
                  </span>
                </div>
              )}
              <div className="p-8">
                <p className="text-base font-bold uppercase tracking-[0.12em] text-accent">{s.tag}</p>
                <h3 className="mt-2 text-3xl text-primary md:text-4xl">{s.name}</h3>
                <ul className="mt-5 space-y-2 text-2xl font-medium text-foreground">
                  {s.lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-4xl md:text-5xl">Let's talk about your dog.</h2>
            <p className="mt-5 text-lg">
              Call, text, or email to discuss your goals and find the program that best fits your
              lifestyle.
            </p>
            <div className="mt-8 space-y-2 text-xl font-semibold">
              <a href={`tel:${PHONE}`} className="block text-highlight">{PHONE}</a>
              <a href={`mailto:${EMAIL}`} className="block">{EMAIL}</a>
            </div>
          </div>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              const body = `Name: ${f.get("first")} ${f.get("last")}\nEmail: ${f.get("email")}\n\n${f.get("msg")}`;
              window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Dogs by Carter inquiry")}&body=${encodeURIComponent(body)}`;
              setSent(true);
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <input name="first" required placeholder="First name" className="rounded-xl border border-input bg-card px-4 py-4 text-lg text-card-foreground" />
              <input name="last" placeholder="Last name" className="rounded-xl border border-input bg-card px-4 py-4 text-lg text-card-foreground" />
            </div>
            <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border border-input bg-card px-4 py-4 text-lg text-card-foreground" />
            <textarea name="msg" rows={5} required placeholder="Your name, dog's name, age, and breed" className="w-full rounded-xl border border-input bg-card px-4 py-4 text-lg text-card-foreground" />
            <button className="w-full rounded-full bg-highlight px-6 py-4 text-lg font-bold text-ink">
              Send
            </button>
            {sent && <p className="text-highlight">Thanks for reaching out!</p>}
          </form>
        </div>
      </section>

      <footer className="bg-ink px-6 pb-12 pt-12 text-center text-ink-foreground">
        <p className="font-display text-3xl font-semibold leading-none tracking-tight md:text-4xl">
          Dogs <span className="font-normal italic text-ink-foreground/75">by</span>{" "}
          <span className="text-highlight">Carter</span>
        </p>
        <p className="mt-4 text-xl">© {new Date().getFullYear()} Dogs by Carter · {PHONE}</p>
      </footer>
    </main>
  );
}
