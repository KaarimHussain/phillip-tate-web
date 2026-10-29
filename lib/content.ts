// All site copy lives here. Section order mirrors the homepage, top to bottom.
// Book facts come from Amazon/Goodreads listings (Oct 2026). Anything still marked TODO needs Philip's input.

export const author = {
  name: "Philip Tate",
  roles: "Author · Minister · Storyteller",
  email: "hello@philiptate.com", // TODO: real contact email
  photo: "/philip-tate.png",
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
  genre: string;
  cover?: string;
  summary: string;
  description: string[];
  details: { label: string; value: string }[];
  buyLinks: { label: string; href: string }[];
};

// Newest first.
export const books: Book[] = [
  {
    slug: "thwarted-enemy",
    title: "Thwarted Enemy",
    subtitle: "The Chosen's Atonement",
    genre: "Fiction",
    cover: "https://m.media-amazon.com/images/I/71MI+d2FALL._SL1500_.jpg",
    summary: "The newest book from Philip J. Tate, available now on Kindle.",
    description: [
      // TODO: Amazon blocked the product page; paste the official book description here.
      "Thwarted Enemy: The Chosen's Atonement is Philip's newest release. A full description is coming soon.",
    ],
    details: [
      { label: "Author", value: "Philip J. Tate" },
      { label: "Format", value: "Kindle eBook" },
    ],
    buyLinks: [{ label: "Kindle on Amazon", href: "https://www.amazon.com/dp/B0HMD6QWFD" }],
  },
  {
    slug: "rizzoes-landing",
    title: "Rizzoes' Landing",
    subtitle: "A Novel of Suspense",
    genre: "Mystery & Suspense",
    cover: "https://m.media-amazon.com/images/I/81VLIp1DnXL._SL1500_.jpg",
    summary: "In a small, close-knit community, a run of unsettling events brings long-hidden truths into the light.",
    description: [
      "Something is wrong in a small, close-knit community. One unsettling event follows another, and the secrets people have kept for years begin to surface.",
      "As relationships strain and the line between right and wrong blurs, Rizzoes' Landing becomes a story of suspense, betrayal, and redemption.",
    ],
    details: [
      { label: "Author", value: "Philip J. Tate" },
      { label: "Published", value: "April 1, 2026" },
      { label: "Publisher", value: "Prestige Author House" },
      { label: "Pages", value: "231" },
      { label: "Formats", value: "Paperback, Kindle eBook" },
      { label: "ISBN", value: "979-8995329121" },
    ],
    buyLinks: [
      { label: "Paperback on Amazon", href: "https://www.amazon.com/dp/B0GW14PCJR" },
      { label: "Kindle on Amazon", href: "https://www.amazon.com/dp/B0FHYR8SW9" },
    ],
  },
  {
    slug: "chinas-global-naval-ambitions",
    title: "China's Global Naval Ambitions",
    subtitle: "And Her Unstoppable Rise to Power",
    genre: "Nonfiction · Defense",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1790754985i/260016753.jpg",
    summary: "A look at China's growing navy: its ports, its economic strategy, and what its rise means for the world.",
    description: [
      "China's Global Naval Ambitions follows a nation reviving centuries-old seafaring traditions and building one of the largest navies in the world.",
      "Philip traces China's naval development, its network of ports, and the economic and political goals behind its expansion, and asks what that rise means for the United States and its allies.",
    ],
    details: [
      { label: "Author", value: "Philip Tate" },
      { label: "Published", value: "December 2025" },
      { label: "Pages", value: "247 (Kindle)" },
      { label: "Formats", value: "Paperback, Kindle eBook" },
      { label: "ISBN", value: "979-8277609934 (paperback)" },
    ],
    buyLinks: [
      { label: "Paperback on Amazon", href: "https://www.amazon.com/dp/B0G8GJFZLP" },
      { label: "Kindle on Amazon", href: "https://www.amazon.com/dp/B0G57Z73SN" },
    ],
  },
  {
    slug: "singing-reels-sunburn",
    title: "Singing Reels",
    subtitle: "Sunburn",
    genre: "Adventure",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1760017254i/242571388.jpg",
    summary: "A short fishing adventure from a lifelong angler.",
    description: [
      // TODO: Amazon blocked the product page; paste the official book description here.
      "Singing Reels: Sunburn is a short adventure story from a writer who grew up fishing the rivers and lakes of the Catawba River Valley. A full description is coming soon.",
    ],
    details: [
      { label: "Author", value: "Philip Tate" },
      { label: "Published", value: "October 8, 2025" },
      { label: "Pages", value: "46" },
      { label: "Formats", value: "Paperback, Kindle eBook" },
    ],
    buyLinks: [{ label: "Kindle on Amazon", href: "https://www.amazon.com/dp/B0FV5DXBY1" }],
  },
  {
    slug: "breach-of-trust",
    title: "Breach of Trust",
    subtitle: "A Tale of Asheville in the Civil War",
    genre: "Historical Fiction",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1752671609i/226744988.jpg",
    summary: "Asheville, 1860. On the eve of secession, a banker hides gold stolen from his own vault, and a mysterious death follows.",
    description: [
      "Asheville, North Carolina, 1860. The country is on the edge of war, and the mountain town is divided.",
      "When a respected banker steals gold from his own vault and hides it away, he sets off a chain of events that ends in a murder under mysterious circumstances.",
      "Rooted in the Blue Ridge Mountains Philip has known all his life, Breach of Trust is a story of greed, loyalty, and secrets in a community torn apart by the Civil War.",
    ],
    details: [
      { label: "Author", value: "Philip Tate" },
      { label: "Published", value: "February 2025" },
      { label: "Pages", value: "186" },
      { label: "Formats", value: "Hardcover, Paperback, Kindle eBook" },
      { label: "ISBN", value: "979-8895699744 (paperback)" },
    ],
    buyLinks: [
      { label: "Paperback on Amazon", href: "https://www.amazon.com/dp/B0DRPSG3H4" },
      { label: "Kindle on Amazon", href: "https://www.amazon.com/dp/B0DWK281L9" },
    ],
  },
];

// The featured book on the homepage. Change the slug to feature a different one.
export const book = books.find((b) => b.slug === "breach-of-trust")!;

export const welcome = {
  eyebrow: "Welcome",
  paragraphs: [
    "I grew up in the foothills of the Blue Ridge Mountains, in the countryside of the Catawba River Valley.",
    "Woodlands, trout streams, and the waters that feed Lake James. Front porches and long stories.",
    "Those hills taught me that every place has its secrets, and every person carries a story worth telling.",
    "My name is Philip Tate. I write mountain tales, mysteries, adventures, and serious books about the world we live in.",
  ],
  closing: "Pull up a chair. There's a story waiting.",
};

export const aboutAuthor = {
  eyebrow: "From the author",
  paragraphs: [
    "I was born in Atlanta, Georgia, and lived in Sandy Springs until I was five, when my family moved to Marion, North Carolina, 45 miles east of Asheville. I grew up hunting and fishing the woods and waters of the Catawba River Valley, and I was active in Boy Scouts and all things high school.",
    "At UNC Chapel Hill I was introduced to literature, law, geology, history, and politics, and I served in Navy ROTC as a Midshipman. After graduating I joined my family's insurance business.",
    "Over the years I served with the Red Cross, EMS, and as a paramedic, and on hospital, school, and church boards. Later in my career I was called to ministry, and I am now in my ninth year as a Methodist minister.",
    "My wife Kay and I live between Marion and Land Harbor in Linville. When I'm not writing, you'll find me trout fishing, playing golf, tennis, or pickleball, taking photographs, studying rocks, picking bluegrass guitar, or on the ham radio.",
  ],
  href: "/books",
};

export const aboutBook = {
  eyebrow: "About the book",
  paragraphs: book.description,
};

export const life = {
  title: "A Life of Service, Faith, and Story",
  paragraphs: [
    "Before I was a writer, I was an insurance agent, a paramedic, a school board member, and a neighbor. Those years put me beside people on their best days and their hardest ones.",
    "Today I serve as a Methodist minister, and I write books of all kinds: mountain tales, mysteries, adventures, books for young readers, and serious books on defense and world affairs.",
    "Every story comes back to the people and places of these mountains.",
  ],
};

// TODO: add real reader reviews (with permission). The reviews section stays hidden while this is empty.
export const reviews: { title: string; text: string; name?: string }[] = [];

export const press = {
  eyebrow: "In the news",
  source: "The McDowell News",
  paragraphs: [
    "The McDowell News featured Marion author Philip Tate ahead of a book signing for Breach of Trust, his novel set in Asheville during the Civil War.",
    "The article describes Philip's years as an independent insurance agent, a paramedic, and a member of the McDowell County Board of Education, and his ministry at East Marion United Methodist Church.",
  ],
  href: "https://mcdowellnews.com/life-entertainment/local/events/article_c04fca73-27b9-4968-8a88-211559940265.html",
};

export const closing = {
  eyebrow: "Explore the site",
  paragraphs: [
    "This website is a home for my books and the stories behind them.",
    "Here you can learn about each book, read reflections on the blog, and find out about signings and events.",
    "Thank you for stopping by.",
  ],
  closing: "Some stories are meant to be told.",
};

export type Post = { slug: string; title: string; date: string; excerpt: string; body: string[] };

// TODO: sample posts. Replace with Philip's own writing before launch.
export const posts: Post[] = [
  {
    slug: "writing-breach-of-trust",
    title: "Writing Breach of Trust",
    date: "October 12, 2026",
    excerpt: "How the history of Asheville on the eve of the Civil War became the setting for a mystery.",
    body: [
      "Sample post. Philip can share here how Breach of Trust began, and what drew him to Asheville in 1860.",
    ],
  },
  {
    slug: "stories-from-the-river",
    title: "Stories from the River",
    date: "September 3, 2026",
    excerpt: "Trout streams, singing reels, and the stories that come from a life spent on the water.",
    body: [
      "Sample post. A place for fishing stories and the background to Singing Reels.",
    ],
  },
  {
    slug: "a-note-for-book-clubs",
    title: "A Note for Book Clubs",
    date: "August 18, 2026",
    excerpt: "Questions to guide your group's conversation, and how to invite Philip to join.",
    body: [
      "Sample post. Discussion questions for book clubs, and an invitation to get in touch through the contact page.",
    ],
  },
];
