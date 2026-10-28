// All site copy lives here. Placeholder text — swap in Phillip's real content.
// Section order mirrors the homepage, top to bottom.

export const author = {
  name: "Phillip Tate",
  roles: "Author · Speaker · Storyteller",
  email: "hello@philliptate.com",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/#author" },
  { label: "Books", href: "/books" },
  { label: "Blog", href: "/blog" },
  { label: "Press", href: "/#press" },
  { label: "Contact Us", href: "/contact" },
];

export type Book = {
  slug: string;
  title: string;
  subtitle: string;
  year: number;
  summary: string;
  description: string[];
  details: { label: string; value: string }[];
  buyLinks: { label: string; href: string }[];
};

export const books: Book[] = [
  {
    slug: "the-weight-of-small-hours",
    title: "The Weight of Small Hours",
    subtitle: "A Memoir",
    year: 2025,
    summary: "A true story of family, loss, and finding the courage to speak after years of silence.",
    description: [
      "The Weight of Small Hours is a journey through family secrets, old patterns, and the cost of pretending everything is fine.",
      "It follows one man's path from a difficult childhood into adulthood, where success on paper could not heal what was hidden.",
      "It is a book about breaking cycles, facing the truth, and finding the courage to finally speak.",
    ],
    details: [
      { label: "Published", value: "2025" },
      { label: "Pages", value: "312" },
      { label: "Genre", value: "Memoir" },
      { label: "Formats", value: "Paperback, eBook, Audiobook" },
      { label: "ISBN", value: "000-0-00-000000-0" },
    ],
    buyLinks: [
      { label: "Amazon", href: "#" },
      { label: "Barnes & Noble", href: "#" },
      { label: "Bookshop.org", href: "#" },
    ],
  },
  {
    slug: "letters-from-the-porch",
    title: "Letters from the Porch",
    subtitle: "Essays",
    year: 2022,
    summary: "Short, warm essays about small towns, old friends, and the lessons that arrive late.",
    description: [
      "Letters from the Porch gathers twenty essays written over a decade of quiet evenings.",
      "Funny, tender, and honest, they are about the people who shape us and the places we keep coming back to.",
    ],
    details: [
      { label: "Published", value: "2022" },
      { label: "Pages", value: "198" },
      { label: "Genre", value: "Essays" },
      { label: "Formats", value: "Paperback, eBook" },
      { label: "ISBN", value: "000-0-00-000000-1" },
    ],
    buyLinks: [{ label: "Amazon", href: "#" }],
  },
];

// The featured book on the homepage.
export const book = books[0];

export const welcome = {
  eyebrow: "Welcome",
  paragraphs: [
    "Some places look perfect from the outside.",
    "Quiet streets. Tidy gardens. Friendly waves across the fence.",
    "But what people rarely talk about is what can live beneath the surface of a life that looks fine to everyone else.",
    "My name is Phillip Tate, and The Weight of Small Hours is my true story. It is a memoir about family, loss, and finding my way back after years of keeping quiet.",
  ],
  closing: "This book is where the silence ends.",
};

export const aboutAuthor = {
  eyebrow: "From the author",
  paragraphs: [
    "I am Phillip Tate, a memoir author and longtime storyteller whose work explores resilience, recovery, and the realities that often sit beneath outward success. I was born in Placeholder Town, the youngest of five children.",
    "For more than thirty years I worked as a placeholder professional, an experience that gave me a rare view of the difference between how lives look and how they feel.",
    "My memoir, The Weight of Small Hours, reached #1 in its category on Amazon. It is an honest account of hardship and healing, written with warmth and a little humor.",
  ],
  href: "#",
};

export const media = {
  // Paste a YouTube embed URL here when there's a real video, e.g. https://www.youtube.com/embed/VIDEO_ID
  videoUrl: "",
};

export const aboutBook = {
  eyebrow: "About the memoir",
  paragraphs: [
    "The Weight of Small Hours is a journey through family secrets, old patterns, and the cost of pretending everything is fine.",
    "It is a story of survival, and a story of reckoning.",
    "If you have ever carried pain behind a smile, or wondered why the past still echoes, this story was written with you in mind.",
  ],
  href: "#",
};

export const bookAvailable = {
  eyebrow: "Book available now",
  paragraphs: [
    "The Weight of Small Hours follows one man's journey from a difficult childhood into adulthood, where success on paper could not heal what was hidden.",
    "It is a book about breaking cycles, facing the truth, and finding the courage to finally speak.",
  ],
  href: "#",
};

export const life = {
  title: "A Life of Creativity, Recovery, and Purpose",
  paragraphs: [
    "For decades my work has been about people, about listening to what isn't said out loud.",
    "Beyond writing, I speak to community groups, support local libraries, and volunteer with recovery programs across the region.",
    "Everything I do comes back to the same purpose: giving voice to what is too often left unspoken.",
  ],
  href: "#",
};

export const reviews = [
  { title: "Honest and Unforgettable", text: "A quietly powerful book that stayed with me for weeks. Tate writes about family and grief with rare grace and honesty." },
  { title: "I Couldn't Put It Down", text: "Funny, heartbreaking, and true. I recognized my own family in these pages and finished it in two evenings." },
  { title: "A Book to Share", text: "The kind of memoir you press into a friend's hands and say: read this. Our book club talked about it for hours." },
];

export const press = {
  eyebrow: "Press release",
  paragraphs: [
    "PLACEHOLDER TOWN — Local author Phillip Tate has announced the release of his memoir, The Weight of Small Hours, now available in local bookstores.",
    "Tate opens his memoir by describing how hurt and silence can pass quietly from one generation to the next, until someone finally decides to break the cycle.",
    "His writing is straightforward, emotional, and humorous in a warm, self-aware way.",
  ],
  href: "#",
};

export const closing = {
  eyebrow: "Explore the site",
  paragraphs: [
    "This website is a home for my life's work.",
    "A place for readers, survivors, and anyone looking for honesty and healing.",
    "Here you can learn more about the book, watch interviews, and read news and articles.",
    "Thank you for being here.",
  ],
  closing: "Some stories are meant to be heard.",
};

export type Post = { slug: string; title: string; date: string; excerpt: string; body: string[] };

export const posts: Post[] = [
  {
    slug: "why-i-finally-wrote-it-down",
    title: "Why I Finally Wrote It Down",
    date: "October 12, 2026",
    excerpt: "For thirty years I told myself the past was better left alone. Here is what changed my mind.",
    body: [
      "For thirty years I told myself the past was better left alone. Talking about it felt like reopening a door I had worked hard to close.",
      "Then one morning, a letter arrived. It was short, and it changed everything.",
      "Writing this book was not easy. But I have learned that the stories we keep to ourselves still shape us, whether we tell them or not.",
    ],
  },
  {
    slug: "what-readers-taught-me",
    title: "What Readers Have Taught Me",
    date: "September 3, 2026",
    excerpt: "The letters I've received since the book came out have been the greatest gift of all.",
    body: [
      "Since the book came out, I have received hundreds of letters from readers.",
      "Many begin the same way: \"I thought I was the only one.\"",
      "Those words remind me why stories matter. They help us feel less alone.",
    ],
  },
  {
    slug: "a-note-on-book-clubs",
    title: "A Note for Book Clubs",
    date: "August 18, 2026",
    excerpt: "A few questions to guide your group's conversation, and how to invite me to join.",
    body: [
      "I love hearing from book clubs. If your group is reading the book, here are a few questions to start the conversation.",
      "What did silence protect in this family, and what did it cost? Which moment stayed with you the most?",
      "If you would like me to join your meeting in person or by video call, please get in touch through the contact page.",
    ],
  },
];
