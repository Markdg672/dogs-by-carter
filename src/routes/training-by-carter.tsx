import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteContact } from "@/components/site-contact";
import trainingOne from "@/assets/training-one.jpg.asset.json";
import trainingTwo from "@/assets/training-two.jpg.asset.json";
import yardNight from "@/assets/yard-night.jpeg";

export const Route = createFileRoute("/training-by-carter")({
  head: () => ({
    meta: [
      { title: "Training by Carter — Personalized In-Home Board and Train" },
      { name: "description", content: "Personalized, immersive dog training in Carter’s home and real-world environments, with direct owner coaching during and after training." },
      { property: "og:title", content: "Training by Carter — Personalized Board and Train" },
      { property: "og:description", content: "Your dog lives in Carter’s home, with a customized training plan and owner involvement for lasting results." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TrainingPage,
});

function TrainingPage() {
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
        <h1 className="text-center text-4xl leading-tight text-gold md:text-6xl">Training by Carter</h1>
        <p className="mx-auto mt-6 max-w-3xl text-center font-body text-2xl font-medium leading-relaxed">Training by Carter is a highly personalized, immersive program designed to create real, lasting results.</p>
        <div className="mt-12 grid items-start gap-8 md:grid-cols-2">
          <img src={trainingOne.url} alt="Training by Carter program photo" className="max-h-[620px] w-full object-contain" />
          <img src={trainingTwo.url} alt="Dogs in Carter’s training program" className="max-h-[620px] w-full object-contain" />
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-7 font-body text-xl leading-relaxed tracking-normal text-foreground/95 md:text-2xl">
          <p>Your dog lives in my home—not a kennel—becoming part of a structured daily routine alongside me and my dogs. Training takes place both at home and in real-world environments like cafés, restaurants, parks, and hiking trails—so your dog learns to perform where it actually matters.</p>
          <p>Each dog receives a customized training plan based on their behavior and your goals.</p>
          <p>To maintain a high level of care and quality, I only take a limited number of dogs at a time.</p>
          <p>Owner involvement is a key part of this program. You’ll work directly with me during and after training so you know exactly how to maintain and build on your dog’s progress.</p>
        </div>
        <figure className="mx-auto mt-14 max-w-4xl">
          <h2 className="mb-6 text-center text-3xl leading-tight text-gold md:text-5xl">The Backyard</h2>
          <img src={yardNight} alt="Spacious fenced backyard with turf, shade trees, and string lights at dusk" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg" />
          <figcaption className="mt-4 text-center font-body text-lg text-foreground/80 md:text-xl">A fully fenced, turf-covered yard with plenty of shade for play and training, plus string lights so dogs can play safely after dark.</figcaption>
        </figure>
      </section>
      <SiteContact />
    </main>
  );
}
