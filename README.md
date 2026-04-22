# LiftSetup

A home gym affiliate SEO website built with Next.js 14. The whole point of this site is to rank on Google, get people looking for home gym gear, and send them to Amazon links so we earn a cut of the sale.

---

## What This Thing Actually Is

It's a content website. People Google stuff like "best adjustable dumbbells under $300" and hopefully land on our pages. We give them honest info, they click a link to Amazon, they buy something, we get a commission. That's the whole business model.

No backend. No database. No login system. Just pages, content, and affiliate links.

---

## Tech Stack (in plain English)

| Thing | What it is |
|---|---|
| **Next.js 14** | The framework that builds the website |
| **TypeScript** | JavaScript but it yells at you when you make dumb mistakes |
| **Tailwind CSS** | CSS but you write it directly in the HTML as class names |
| **App Router** | Next.js's newer way of organizing pages (uses the `/app` folder) |

---

## How to Run It

```bash
# install everything
npm install

# run it locally (go to http://localhost:3000)
npm run dev

# build for production
npm run build
```

---

## Folder Structure (what's where and why)

```
liftsetup/
│
├── app/                         # Every page on the site lives here
│   ├── layout.tsx               # The wrapper around every page (header + footer)
│   ├── page.tsx                 # The homepage
│   ├── globals.css              # Global styles
│   ├── robots.ts                # Tells Google what it can/can't crawl
│   ├── sitemap.ts               # Auto-generates a sitemap.xml for Google
│   ├── not-found.tsx            # The 404 page
│   ├── categories/[slug]/       # e.g. /categories/adjustable-dumbbells
│   └── guides/[slug]/           # e.g. /guides/best-dumbbells-under-300
│
├── components/                  # Reusable building blocks
│   ├── layout/
│   │   ├── Header.tsx           # The nav bar at the top
│   │   └── Footer.tsx           # The footer at the bottom
│   ├── ui/
│   │   ├── ArticleCard.tsx      # The card you see on guide previews
│   │   ├── ProductCard.tsx      # The card for individual products with a buy button
│   │   └── SectionHeader.tsx    # The little labeled heading above each section
│   └── home/
│       ├── Hero.tsx             # The big dark hero section at the top of the homepage
│       ├── FeaturedCategories.tsx  # The 4 category cards
│       ├── PopularGuides.tsx    # The 4 guide preview cards
│       └── TrustSection.tsx     # The "why trust us" section
│
├── data/                        # The actual content data (no database needed)
│   ├── categories.ts            # List of equipment categories
│   └── guides.ts                # List of guides/articles
│
├── lib/
│   └── utils.ts                 # Small helper functions used across the site
│
├── next.config.mjs              # Next.js config
├── tailwind.config.ts           # Tailwind config (custom colors etc.)
├── tsconfig.json                # TypeScript config
└── package.json                 # Dependencies
```

---

## How to Add New Content

### Add a new equipment category

Open `data/categories.ts` and add a new object to the array:

```ts
{
  slug: 'resistance-bands',
  name: 'Resistance Bands',
  description: 'Lightweight and versatile for any space.',
  icon: '🔴',
  metaTitle: 'Best Resistance Bands – Reviews & Buyer Guide',
  metaDescription: 'Find the best resistance bands for home workouts...',
}
```

That's it. The page at `/categories/resistance-bands` gets created automatically, and it shows up in the sitemap automatically.

### Add a new guide

Open `data/guides.ts` and add a new object:

```ts
{
  slug: 'home-gym-under-500',
  title: 'Best Home Gym Setup Under $500',
  description: 'You don\'t need to spend a fortune to build a solid home gym.',
  category: 'Buyer Guide',
  readTime: '9 min read',
  metaTitle: 'Best Home Gym Under $500 (2025 Guide)',
  metaDescription: 'Build a complete home gym for under $500...',
}
```

Page at `/guides/home-gym-under-500` exists automatically.

---

## SEO Stuff That's Already Handled

- Every page has a proper `<title>` and `<meta description>`
- Canonical URLs so Google doesn't get confused about duplicate pages
- Open Graph tags so links look good when shared on social
- `robots.txt` tells Google it can crawl everything
- `sitemap.xml` gives Google a map of every page on the site
- Semantic HTML — one `<h1>` per page, proper heading hierarchy
- All pages are statically generated (fast load = good for rankings)

---

## The Business Model (again, simply)

1. Someone Googles "best squat rack for small garage"
2. They land on our page
3. We explain their options clearly and honestly
4. They click our Amazon link
5. They buy something
6. Amazon pays us 3-8% of the sale
7. We use that money to write more pages
8. Repeat at scale

The more pages that rank, the more money comes in. That's why the whole thing is built to scale — adding new content should take minutes, not days.

---

## Current Pages

| URL | What it is |
|---|---|
| `/` | Homepage |
| `/categories/adjustable-dumbbells` | Adjustable dumbbell category |
| `/categories/home-gym-systems` | Home gym systems category |
| `/categories/benches` | Weight benches category |
| `/categories/squat-racks` | Squat racks category |
| `/guides/best-adjustable-dumbbells-under-300` | Guide page |
| `/guides/best-home-gym-for-small-spaces` | Guide page |
| `/guides/dumbbells-vs-kettlebells` | Comparison guide |
| `/guides/best-weight-bench-for-beginners` | Guide page |
| `/sitemap.xml` | Auto-generated sitemap for Google |
| `/robots.txt` | Auto-generated robots file |
