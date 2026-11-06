import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteContact } from "@/components/site-contact";
import carterBeanie from "@/assets/carter-beanie.jpg";
import carterMotorcycle from "@/assets/carter-motorcycle.jpg";
import carterSkydiving from "@/assets/carter-skydiving.jpg";
import carterCity from "@/assets/carter-city.jpg";
import carterChildhood from "@/assets/carter-childhood.jpg";
import carterMonkeys from "@/assets/carter-monkeys.jpg";
import carterSunset from "@/assets/carter-sunset.jpg";

export const Route = createFileRoute("/about-carter")({
  head: () => ({
    meta: [
      { title: "About Carter — Dogs by Carter" },
      { name: "description", content: "A son, brother, uncle, friend, and dog trainer. Carter helps dog owners create better communication, structure, and trust with their dogs." },
      { property: "og:title", content: "About Carter — Dogs by Carter" },
      { property: "og:description", content: "Carter helps dog owners create better communication, structure, and trust with their dogs so they can experience more freedom together." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutCarterPage,
});

const PHOTOS = [
  // Same top-to-bottom order as https://www.dogsbycarter.com/about-1
  { src: carterMonkeys, alt: "Carter with monkeys on his shoulders while traveling" },
  { src: carterChildhood, alt: "Young Carter outdoors with family and a black dog" },
  { src: carterSunset, alt: "Carter with another person at sunset by a lake" },
  { src: carterCity, alt: "Carter overlooking a city skyline" },
  { src: carterSkydiving, alt: "Carter skydiving" },
  { src: carterBeanie, alt: "Carter in a beanie by the water" },
  { src: carterMotorcycle, alt: "Carter with his motorcycle" },
];

function AboutCarterPage() {
  return (
    <main>
      <header className="bg-ink text-ink-foreground">
        <nav className="mx-auto grid max-w-6xl items-center gap-5 px-6 py-6 md:grid-cols-3">
          <Link to="/" className="order-3 justify-self-center text-xl font-semibold underline underline-offset-4 md:order-none md:justify-self-start">← Home</Link>
          <Link to="/" className="text-center font-display text-2xl font-semibold leading-none underline decoration-highlight decoration-2 underline-offset-8 md:text-[2.6rem]">Dogs <span className="font-normal italic text-ink-foreground/75">by</span> <span className="text-highlight">Carter</span></Link>
          <div className="flex items-center gap-3 justify-self-center md:justify-self-end">
            <a href="https://www.yelp.com/biz/dogs-by-carter-san-fernando-valley?osq=dogs+by+carter" target="_blank" rel="noreferrer" className="whitespace-nowrap rounded-full bg-highlight px-4 py-2 text-base font-bold text-ink">Yelp</a>
            <a href="tel:9493049888" className="whitespace-nowrap rounded-full bg-highlight px-5 py-2 text-lg font-bold text-ink">(949) 304-9888</a>
          </div>
        </nav>
      </header>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pt-16">
        <h1 className="text-center text-4xl leading-tight text-gold md:text-6xl">About Carter</h1>
        <p className="mx-auto mt-6 max-w-3xl text-center font-body text-2xl font-medium leading-relaxed">A son, brother, uncle, friend, and dog trainer.</p>
        <div className="mx-auto mt-12 max-w-3xl space-y-7 font-body text-xl leading-relaxed tracking-normal text-foreground/95 md:text-2xl">
          <p>I grew up in Minneapolis, Minnesota, where my love for dogs started early—spending time exploring the outdoors with my childhood dog, Sadie.</p>
          <p>My path into dog training wasn’t traditional. In my early 20s, I traveled the country working in commercial construction and later worked as an EMT in the Emergency Department. Those experiences taught me discipline, patience, and how to stay steady in high-pressure situations—qualities that naturally carried over into working with dogs.</p>
          <p>What started as helping a roommate with their dogs quickly turned into something much bigger, and after gaining experience with a well-known training company in Los Angeles, I decided to build something of my own.</p>
          <p>Today, I help dog owners create better communication, structure, and trust with their dogs so they can experience more freedom together. I’m especially passionate about off-leash training and helping owners learn to PLAY and have FUN with their dogs!</p>
          <p>Outside of training, you’ll find me traveling, cooking, reading, playing violin, or continuing to learn more about dogs—something I’ll never stop doing.</p>
        </div>
        <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-2 md:gap-6">
          {PHOTOS.map((photo) => (
            <img key={photo.alt} src={photo.src} alt={photo.alt} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg" />
          ))}
        </div>
      </section>
      <SiteContact />
    </main>
  );
}
