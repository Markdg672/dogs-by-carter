import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteContact } from "@/components/site-contact";
import boardingCorgi from "@/assets/boarding-corgi.jpg";
import boardingCouchDogs from "@/assets/boarding-couch-dogs.jpg";
import boardingGroupGrass from "@/assets/boarding-group-grass.jpg";
import boardingCaneCorso from "@/assets/boarding-cane-corso.jpg";
import boardingGsdBed from "@/assets/boarding-gsd-bed.jpg";
import boardingGsdBlueBed from "@/assets/boarding-gsd-blue-bed.jpg";
import groomingTub from "@/assets/grooming-tub.jpeg";

const INCLUDED = [
  { title: "Grooming services", detail: "Bath, trimming, and more in our grooming tub, so your dog comes home clean." },
  { title: "Fenced backyard", detail: "Turf, shade trees, and string lights for safe play day or night." },
  { title: "Small play groups", detail: "Supervised time with compatible dogs." },
  { title: "Daily outings", detail: "Park visits for fresh air and exercise." },
  { title: "Home, not a kennel", detail: "Dogs relax indoors as part of the family." },
];

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
          <div className="flex flex-wrap items-center justify-center gap-3 justify-self-center md:justify-self-end">
            <a href="#" className="whitespace-nowrap rounded-full bg-highlight px-4 py-2 text-base font-bold text-ink">Instagram</a>
            <a href="https://www.yelp.com/biz/dogs-by-carter-san-fernando-valley?osq=dogs+by+carter" target="_blank" rel="noreferrer" className="whitespace-nowrap rounded-full bg-highlight px-4 py-2 text-base font-bold text-ink">Yelp</a>
            <a href="tel:9493049888" className="whitespace-nowrap rounded-full bg-highlight px-5 py-2 text-lg font-bold text-ink">(949) 304-9888</a>
          </div>
        </nav>
      </header>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pt-16">
        <h1 className="text-center text-4xl leading-tight text-primary md:text-6xl">Boarding by Carter</h1>
        <p className="mx-auto mt-6 max-w-3xl text-center font-body text-2xl font-medium leading-relaxed">A safe, structured, and comfortable alternative to traditional kennel boarding.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <img src={boardingCorgi} alt="Corgi resting on the patio at Carter's home" className="aspect-[4/5] w-full rounded-3xl object-cover object-bottom" />
          <img src={boardingCouchDogs} alt="Three dogs relaxing together on a couch at Carter's home" className="aspect-[4/5] w-full rounded-3xl object-cover object-center" />
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-7 font-body text-xl leading-relaxed tracking-normal text-foreground/95 md:text-2xl">
          <p>Your dog stays in my home on a fully fenced property—not in a large facility—allowing them to relax in a more natural, low-stress environment. Dogs are treated like part of the family while maintaining clear structure and supervision.</p>
          <p>Each dog is thoughtfully integrated into small, compatible play groups and receives daily activity tailored to their energy level and temperament. This may include supervised social time with other dogs, as well as outings to parks for fresh air and exercise.</p>
          <p>To ensure safety and quality care, I only accept a limited number of dogs at a time.</p>
        </div>
        <section aria-labelledby="included-heading" className="mx-auto mt-16 max-w-4xl">
          <h2 id="included-heading" className="mb-8 text-center text-3xl leading-tight text-primary md:text-5xl">What&apos;s Included</h2>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <figure>
              <img src={groomingTub} alt="Stainless steel grooming tub with handheld sprayer and safety loops" loading="lazy" className="aspect-square w-full rounded-3xl object-cover shadow-lg" />
              <figcaption className="mt-3 text-center font-body text-lg text-foreground/80">Our professional grooming tub</figcaption>
            </figure>
            <ul className="space-y-5 font-body text-xl leading-relaxed text-foreground/95 md:text-2xl">
              {INCLUDED.map((item) => (
                <li key={item.title} className="border-l-4 border-primary pl-4">
                  <span className="block font-semibold">{item.title}</span>
                  <span className="block text-lg text-foreground/80 md:text-xl">{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
          <img src={boardingGroupGrass} alt="Five dogs resting together on the grass in the shade" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover object-center" />
          <img src={boardingCaneCorso} alt="A black Cane Corso resting on the turf" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover object-center" />
        </div>
        <div className="mx-auto mt-6 grid max-w-4xl gap-6 sm:grid-cols-2">
          <img src={boardingGsdBed} alt="A German Shepherd resting its head on a bed" loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover object-center" />
          <img src={boardingGsdBlueBed} alt="A German Shepherd relaxing on an elevated outdoor bed" loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover object-center" />
        </div>
      </section>
      <SiteContact />
    </main>
  );
}
