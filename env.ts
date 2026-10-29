import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},
  client: {
    // Public site address, used for canonical URLs, sitemap and social cards. Set it in production.
    NEXT_PUBLIC_SITE_URL: z.url().default("http://localhost:3000"),
    // Google Analytics measurement ID (G-XXXXXXX). Analytics stays off while unset.
    NEXT_PUBLIC_GA_ID: z.string().startsWith("G-").optional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
  emptyStringAsUndefined: true,
});
