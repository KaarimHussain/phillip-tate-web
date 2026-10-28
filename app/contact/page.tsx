import type { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { PageTitle, btn } from "@/components/site";
import { author } from "@/lib/content";

export const metadata: Metadata = { title: "Contact Us" };

const field = "h-auto px-4 py-3 text-lg";

export default function ContactPage() {
  return (
    <main>
      <PageTitle
        eyebrow="Get in touch"
        title="Contact Us"
        intro="For events, interviews, book clubs, or just to say hello. Every message is read personally."
      />
      <div className="mx-auto grid max-w-5xl gap-12 px-5 py-16 md:grid-cols-[1fr_1.5fr]">
        <div className="space-y-6 text-xl">
          <div>
            <h2 className="font-heading text-2xl font-semibold">Email</h2>
            <a href={`mailto:${author.email}`} className="mt-1 inline-block text-primary underline underline-offset-4">{author.email}</a>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold">Speaking & events</h2>
            <p className="mt-1 leading-relaxed">Phillip is available for library talks, book clubs, and community events.</p>
          </div>
        </div>

        {/* ponytail: mailto form opens the visitor's email app; swap for a server action + email service if they want messages delivered directly. */}
        <form action={`mailto:${author.email}`} method="post" encType="text/plain" className="space-y-6 rounded-lg border bg-card p-7">
          <label className="block text-lg font-medium">
            Your name
            <Input name="name" required autoComplete="name" className={`mt-2 ${field}`} />
          </label>
          <label className="block text-lg font-medium">
            Your email
            <Input name="email" type="email" required autoComplete="email" className={`mt-2 ${field}`} />
          </label>
          <label className="block text-lg font-medium">
            Message
            <textarea
              name="message"
              required
              rows={6}
              className="mt-2 w-full rounded-md border border-input bg-transparent px-4 py-3 text-lg outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            />
          </label>
          <button type="submit" className={btn()}>Send message</button>
        </form>
      </div>
    </main>
  );
}
