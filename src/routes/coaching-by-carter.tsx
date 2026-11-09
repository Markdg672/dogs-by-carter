import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteContact } from "@/components/site-contact";
import coachingPark from "@/assets/home-coaching-park.jpg";
import coachingMalinois from "@/assets/malinois-hug.jpg";

export const Route = createFileRoute("/coaching-by-carter")({
  head: () => ({
    meta: [
      { title: "Coaching by Carter — Private Training & Owner Coaching" },
      {
        name: "description",
        content:
          "Hands-on private coaching that teaches you to communicate clearly with your dog and build reliable behavior at home and in real life.",
      },
      { property: "og:title", content: "Coaching by Carter — Private Training & Owner Coaching" },
      {
        property: "og:description",
        content:
          "Rather than training your dog for you, Carter coaches you — custom sessions, plus phone, video, and Zoom support between visits.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoachingPage,
});

function CoachingPage() {
  return (
    <main>
      <header className="bg-ink text-ink-foreground">
        <nav className="mx-auto grid max-w-6xl items-center gap-5 px-6 py-6 md:grid-cols-3">
          <Link to="/" className="order-3 justify-self-center text-xl font-semibold underline underline-offset-4 md:order-none md:justify-self-start">← Home</Link>
          <Link to="/" className="text-center font-display text-2xl font-semibold leading-none underline decoration-highlight decoration-2 underline-offset-8 md:text-[2.6rem]">Dogs <span className="font-normal italic text-ink-foreground/75">by</span> <span className="text-highlight">Carter</span></Link>
          <div className="flex flex-wrap items-center justify-center gap-3 justify-self-center md:justify-self-end">
            <a href="https://www.instagram.com/dogsbycarterllc/" target="_blank" rel="noreferrer" className="whitespace-nowrap rounded-full bg-highlight px-4 py-2 text-base font-bold text-ink">Instagram</a>
            <a href="https://www.yelp.com/biz/dogs-by-carter-san-fernando-valley?osq=dogs+by+carter" target="_blank" rel="noreferrer" className="whitespace-nowrap rounded-full bg-highlight px-4 py-2 text-base font-bold text-ink">Yelp</a>
            <a href="tel:9493049888" className="whitespace-nowrap rounded-full bg-highlight px-5 py-2 text-lg font-bold text-ink">(949) 304-9888</a>
          </div>
        </nav>
      </header>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pt-16">
        <h1 className="text-center text-4xl leading-tight text-primary md:text-6xl">Coaching by Carter</h1>
        <p className="mx-auto mt-4 max-w-3xl text-center font-body text-2xl font-medium leading-relaxed">Private Training &amp; Owner Coaching</p>
        <div className="mx-auto mt-12 max-w-3xl space-y-7 font-body text-xl leading-relaxed tracking-normal text-foreground/95 md:text-2xl">
          <p>Coaching by Carter is designed for owners who want to be directly involved in their dog’s training and learn how to create lasting results themselves.</p>
          <p>Having worked with many coaches and teachers throughout my life—from athletics to music and public speaking—I’ve experienced firsthand how much the quality of coaching can shape results. That perspective directly influences how I work with my clients today.</p>
          <p>Rather than simply training your dog for you, I coach you on how to communicate clearly, handle your dog effectively, and build reliable behavior in real-life situations. The focus is on giving you the skills and understanding needed to confidently lead your dog day-to-day.</p>
          <p>This is a hands-on, results-focused coaching experience—not a one-size-fits-all lesson plan.</p>
          <p>Sessions are fully customized based on your dog, your goals, and your lifestyle. Training can take place in your home or in real-world environments like neighborhoods, parks, and public spaces—where behavior truly matters.</p>
          <p>Ongoing support is built into the process. Between sessions, you’ll have access to guidance through phone calls, video sharing, and Zoom check-ins to make sure you’re practicing correctly and continuing to make progress.</p>
          <p>This service is ideal for building foundational obedience, improving leash manners, and addressing common behavioral issues.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <img src={coachingPark} alt="Carter training a light-colored dog in the park" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover object-center" />
          <img src={coachingMalinois} alt="Carter hugging a Belgian Malinois in the yard" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover object-top" />
        </div>
      </section>
      <SiteContact />
    </main>
  );
}
