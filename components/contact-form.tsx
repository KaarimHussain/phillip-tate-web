"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  message: z.string().trim().min(10, "Please write a short message (at least 10 characters)."),
});
type Values = z.infer<typeof schema>;

const field = "mt-2 h-auto px-4 py-3 text-lg";

// ponytail: opens the visitor's email app with the message filled in; swap for a server action + email service to deliver directly.
export function ContactForm({ to }: { to: string }) {
  const { register, handleSubmit, formState: { errors } } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = (v: Values) => {
    const subject = encodeURIComponent(`Message from ${v.name}`);
    const body = encodeURIComponent(`${v.message}\n\n${v.name}\n${v.email}`);
    window.location.assign(`mailto:${to}?subject=${subject}&body=${body}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6 rounded-lg border bg-card p-7">
      {([
        ["name", "Your name", "name"],
        ["email", "Your email", "email"],
      ] as const).map(([key, label, auto]) => (
        <label key={key} className="block text-lg font-medium">
          {label}
          <Input {...register(key)} type={key === "email" ? "email" : "text"} autoComplete={auto} aria-invalid={!!errors[key]} className={field} />
          {errors[key] && <span role="alert" className="mt-2 block text-base text-destructive">{errors[key].message}</span>}
        </label>
      ))}
      <label className="block text-lg font-medium">
        Message
        <textarea
          {...register("message")}
          rows={6}
          aria-invalid={!!errors.message}
          className="mt-2 w-full rounded-md border border-input bg-transparent px-4 py-3 text-lg outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
        {errors.message && <span role="alert" className="mt-2 block text-base text-destructive">{errors.message.message}</span>}
      </label>
      <button type="submit" className={cn(buttonVariants(), "h-auto rounded-md px-7 py-3 text-lg")}>Send message</button>
    </form>
  );
}
