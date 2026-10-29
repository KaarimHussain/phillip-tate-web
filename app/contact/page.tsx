import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { PageTitle } from "@/components/site";
import { author } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${author.name} about book signings, talks, book clubs, and interviews.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <PageTitle
        eyebrow="Get in touch"
        title={`Contact ${author.name}`}
        intro="For book signings, talks, book clubs, or just to say hello. Every message is read personally."
        image="/scenes/writers-study.webp"
      />
      <Reveal className="mx-auto grid max-w-5xl gap-12 px-5 py-16 md:grid-cols-[1fr_1.5fr]">
        <div className="space-y-6 text-xl">
          <div>
            <h2 className="font-heading text-2xl font-semibold">Email</h2>
            <a href={`mailto:${author.email}`} className="mt-1 inline-block text-primary underline underline-offset-4">{author.email}</a>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold">Speaking & events</h2>
            <p className="mt-1 leading-relaxed">Philip is available for library talks, church groups, book clubs, and community events.</p>
          </div>
        </div>
        <ContactForm to={author.email} />
      </Reveal>
    </main>
  );
}
