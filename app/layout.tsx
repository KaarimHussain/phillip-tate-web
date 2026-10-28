import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { author, book } from "@/lib/content";
import { SiteFooter, SiteHeader } from "@/components/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Lora({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: { default: `${author.name} | ${book.title}`, template: `%s | ${author.name}` },
  description: `${author.name}, author of ${book.title}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full antialiased font-sans", inter.variable, serif.variable)}>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
