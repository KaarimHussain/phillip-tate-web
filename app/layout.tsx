import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Person, WebSite, WithContext } from "schema-dts";
import "./globals.css";
import { cn } from "@/lib/utils";
import { env } from "@/env";
import { author } from "@/lib/content";
import { JsonLd, SiteFooter, SiteHeader } from "@/components/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Lora({ subsets: ["latin"], variable: "--font-serif" });

const description =
  "Philip Tate is a North Carolina author and Methodist minister writing Blue Ridge mountain tales, Civil War fiction, mysteries, adventures, and books on naval defense.";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: { default: `${author.name} | Author from the Blue Ridge Mountains`, template: `%s | ${author.name}` },
  description,
  authors: [{ name: author.name }],
  openGraph: {
    type: "website",
    siteName: author.name,
    locale: "en_US",
    description,
    images: [{ url: author.photo, width: 640, height: 600, alt: `Portrait of ${author.name}` }],
  },
  twitter: { card: "summary_large_image", description, images: [author.photo] },
};

const personLd: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: author.name,
  jobTitle: "Author",
  description,
  image: new URL(author.photo, env.NEXT_PUBLIC_SITE_URL).href,
  url: env.NEXT_PUBLIC_SITE_URL,
  homeLocation: { "@type": "Place", name: "Marion, North Carolina" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of North Carolina at Chapel Hill" },
};

const siteLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: author.name,
  url: env.NEXT_PUBLIC_SITE_URL,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full antialiased font-sans", inter.variable, serif.variable)}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={personLd} />
        <JsonLd data={siteLd} />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
      {env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_ID} />}
    </html>
  );
}
