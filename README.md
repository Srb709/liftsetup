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
  overview: 'Resistance bands are one of the cheapest and most space-efficient tools you can add...',
  useCases: [
    'People who want to train without any heavy equipment',
    'Anyone adding mobility or warm-up work to their routine',
  ],
  relatedGuideSlugs: [],
  metaTitle: 'Best Resistance Bands – Reviews & Buyer Guide',
  metaDescription: 'Find the best resistance bands for home workouts...',
}
```

That's it. The page at `/categories/resistance-bands` gets created automatically and shows up in the sitemap.

### Add a new guide

Open `data/guides.ts` and add a new object. The guide needs all the content fields now — this is what makes the full article page render:

```ts
{
  slug: 'home-gym-under-500',
  title: 'Best Home Gym Setup Under $500',
  description: 'You don\'t need to spend a fortune to build a solid home gym.',
  category: 'Buyer Guide',
  categorySlug: 'adjustable-dumbbells',
  readTime: '9 min read',
  metaTitle: 'Best Home Gym Under $500 (2025 Guide)',
  metaDescription: 'Build a complete home gym for under $500...',
  intro: 'Opening paragraph that explains what this guide covers...',
  whoItIsFor: [
    'People with a $500 total budget',
    'First-time home gym builders',
  ],
  whatMatters: [
    { title: 'Budget allocation', description: 'Spend most of it on the thing you use most.' },
  ],
  relatedProductIds: ['bowflex-selecttech-552', 'flybird-adjustable-bench'],
  faqs: [
    { question: 'Can you build a real gym for $500?', answer: 'Yes, if you prioritize...' },
  ],
  conclusion: 'Closing paragraph summarizing the recommendation...',
}
```

Page at `/guides/home-gym-under-500` exists automatically with the full article layout.

### Add a new product

Open `data/products.ts` and add a new object:

```ts
{
  id: 'some-unique-id',
  name: 'Product Name',
  brand: 'Brand Name',
  categorySlug: 'adjustable-dumbbells',
  shortDescription: 'One sentence describing what this thing is.',
  bestFor: 'Who this product is the right pick for',
  pros: [
    'First good thing about it',
    'Second good thing about it',
    'Third good thing about it',
  ],
  cons: [
    'One honest downside',
    'Another honest downside',
  ],
  affiliateUrl: 'https://www.amazon.com/s?k=Product+Name',
  badge: 'Best Overall', // optional — leave it out if no badge
}
```

The product shows up on its category page automatically. To show it in a guide, add its `id` to the `relatedProductIds` array of the relevant guide.

---

## The Affiliate Link System

All Amazon links go through `lib/affiliate.ts`. You never hardcode an affiliate tag directly in a component.

**To set your Amazon Associate tag:**

Create a `.env.local` file in the root of the project:

```
NEXT_PUBLIC_AMAZON_TAG=yourtag-20
```

That's it. Every single Amazon link on the site will automatically use your tag. You don't have to touch any other file.

The default tag is `liftsetup-20` and is used as a fallback if the env var isn't set.

---

## Updated Folder Structure

```
liftsetup/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx                       # Homepage
│   ├── globals.css
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── not-found.tsx
│   ├── about/page.tsx                 # NEW: About page
│   ├── privacy/page.tsx               # NEW: Privacy policy
│   ├── affiliate-disclosure/page.tsx  # NEW: Affiliate disclosure
│   ├── categories/
│   │   ├── page.tsx                   # NEW: All categories index
│   │   └── [slug]/page.tsx            # Category page (now has real content)
│   └── guides/
│       ├── page.tsx                   # NEW: All guides index
│       └── [slug]/page.tsx            # Guide page (now a full article)
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx                 # Fixed: Equipment link now goes to /categories
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── ArticleCard.tsx
│   │   ├── ProductCard.tsx            # Updated: shows bestFor, pros, brand
│   │   └── SectionHeader.tsx
│   └── home/
│       ├── Hero.tsx
│       ├── FeaturedCategories.tsx
│       ├── PopularGuides.tsx
│       └── TrustSection.tsx
│
├── data/
│   ├── categories.ts                  # Updated: overview, useCases, relatedGuideSlugs
│   ├── guides.ts                      # Updated: full article content per guide
│   └── products.ts                    # NEW: 13 products across 4 categories
│
├── lib/
│   ├── affiliate.ts                   # NEW: centralized Amazon tag logic
│   └── utils.ts
│
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## SEO Stuff That's Already Handled

- Every page has a proper `<title>` and `<meta description>`
- Canonical URLs so Google doesn't get confused about duplicate pages
- Open Graph tags so links look good when shared on social
- `robots.txt` tells Google it can crawl everything
- `sitemap.xml` gives Google a map of every page on the site — updates automatically when you add content
- Semantic HTML — one `<h1>` per page, proper heading hierarchy
- All pages are statically generated (fast load = good for rankings)
- Privacy and affiliate-disclosure pages are set to `noindex` so they don't waste crawl budget

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

## Current Pages (19 total)

| URL | What it is |
|---|---|
| `/` | Homepage |
| `/categories` | All categories index |
| `/categories/adjustable-dumbbells` | Adjustable dumbbells — overview, guides, 5 products |
| `/categories/home-gym-systems` | Home gym systems — overview, guides, 3 products |
| `/categories/benches` | Weight benches — overview, guides, 3 products |
| `/categories/squat-racks` | Squat racks — overview, 3 products |
| `/guides` | All guides index |
| `/guides/best-adjustable-dumbbells-under-300` | Full buyer guide — 4 products |
| `/guides/best-home-gym-for-small-spaces` | Full setup guide — 4 products |
| `/guides/dumbbells-vs-kettlebells` | Full comparison guide — 3 products |
| `/guides/best-weight-bench-for-beginners` | Full buyer guide — 3 products |
| `/about` | About page |
| `/privacy` | Privacy policy |
| `/affiliate-disclosure` | Affiliate disclosure |
| `/sitemap.xml` | Auto-generated sitemap for Google |
| `/robots.txt` | Auto-generated robots file |
