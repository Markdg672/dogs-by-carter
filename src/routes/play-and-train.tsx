import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteContact } from "@/components/site-contact";
import playTrain1 from "@/assets/play-train-1.jpg";
import playTrain2 from "@/assets/play-train-2.jpg";
import playTrain3 from "@/assets/play-train-3.jpg";
import playTrain4Asset from "@/assets/play-train-4.jpg.asset.json";

export const Route = createFileRoute("/play-and-train")({
  head: () => ({
    meta: [
      { title: "Play & Train — Daycare & Training Hybrid" },
      {
        name: "description",
        content:
          "A hybrid between daycare and training: structured play groups, real-world outings, and training woven naturally through the day.",
      },
      { property: "og:title", content: "Play & Train — Daycare & Training Hybrid" },
      {
        property: "og:description",
        content:
          "Fun and socialization of daycare combined with the structure and purpose of professional training.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlayTrainPage,
});

function PlayTrainPage() {
  return (
    <main>
      <header className="bg-ink text-ink-foreground">
        <nav className="mx-auto grid max-w-6xl items-center gap-4 px-6 py-4 md:grid-cols-3">
          <Link to="/" className="order-3 justify-self-center text-xl font-semibold underline underline-offset-4 md:order-none md:justify-self-start">← Home</Link>
          <Link to="/" className="text-center font-display text-2xl font-semibold leading-none underline decoration-highlight decoration-2 underline-offset-8 md:text-[2.6rem]">Dogs <span className="font-normal italic text-ink-foreground/75">by</span> <span className="text-highlight">Carter</span></Link>
          <div className="flex flex-wrap items-center justify-center gap-3 justify-self-center md:justify-self-end">
            <a href="#" className="whitespace-nowrap rounded-full bg-highlight px-4 py-2 text-base font-bold text-ink">Instagram</a>
            <a href="https://www.yelp.com/biz/dogs-by-carter-san-fernando-valley?osq=dogs+by+carter" target="_blank" rel="noreferrer" className="whitespace-nowrap rounded-full bg-highlight px-4 py-2 text-base font-bold text-ink">Yelp</a>
            <a href="tel:9493049888" className="whitespace-nowrap rounded-full bg-highlight px-5 py-2 text-lg font-bold text-ink">(949) 304-9888</a>
          </div>
        </nav>
      </header>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-8">
        <h1 className="text-center text-4xl leading-tight text-primary md:text-6xl">Play & Train</h1>
        <p className="mx-auto mt-4 max-w-3xl text-center font-body text-2xl font-medium leading-relaxed">A Hybrid Between Daycare and Training</p>
        <div className="mx-auto mt-6 max-w-3xl space-y-4 font-body text-lg leading-relaxed tracking-normal text-foreground/95 md:text-xl">
          <p>Play & Train combines the fun and socialization of daycare with the structure and purpose of professional training.</p>
          <p>Unlike traditional daycare, your dog gets out and about — enjoying outings to parks, hiking trails, and other dog-friendly spots while practicing good manners and social skills in new settings.</p>
          <p>Structured play groups build healthy socialization, and training is woven naturally through the day to reinforce calm behavior, confidence, and responsiveness. Every dog is matched by temperament, energy level, and play style for a safe, enjoyable, and productive environment.</p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <img src={playTrain1} alt="Dogs playing together in a play and train group" className="aspect-[4/3] w-full rounded-3xl object-cover object-center" />
          <img src={playTrain2} alt="Dogs practicing good manners on an outing" className="aspect-[4/3] w-full rounded-3xl object-cover object-center" />
          <img src={playTrain3} alt="A happy, tired dog after a day of play and training" className="aspect-[4/3] w-full rounded-3xl object-cover object-center" />
          <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <img src={playTrain4Asset.url} alt="A German Shepherd leaping to catch a ball during a play and train session" className="h-full w-full object-cover object-bottom" style={{ transform: "scale(1.2)", transformOrigin: "72% 100%" }} />
          </div>
        </div>
      </section>
      <SiteContact />
    </main>
  );
}
