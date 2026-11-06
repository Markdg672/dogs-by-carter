import { useState } from "react";
import homeContactRottweiler from "@/assets/home-contact-rottweiler.jpg";

const PHONE = "(949) 304-9888";
const EMAIL = "dogsbycarter@gmail.com";

export function SiteContact() {
  const [sent, setSent] = useState(false);
  return (
    <>
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
            <img
              src={homeContactRottweiler}
              alt="A Rottweiler leaping to catch an orange ball in the park"
              loading="lazy"
              className="mt-10 aspect-square w-full rounded-3xl object-cover object-center"
            />
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
    </>
  );
}
