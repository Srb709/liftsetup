export interface WhatMattersItem {
  title: string
  description: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface QuickSummary {
  forWho: string
  bestPick: string
  skipIf?: string
  bullets: string[]
}

export interface Guide {
  slug: string
  title: string
  description: string
  category: string
  categorySlug: string
  readTime: string
  metaTitle: string
  metaDescription: string
  intro: string
  whoItIsFor: string[]
  whatMatters: WhatMattersItem[]
  relatedProductIds: string[]
  featuredPickId?: string
  quickSummary: QuickSummary
  methodology: string[]
  relatedGuideSlugs: string[]
  relatedCategorySlugs: string[]
  faqs: FAQ[]
  conclusion: string
}

export const guides: Guide[] = [
  {
    slug: 'best-adjustable-dumbbells-under-300',
    title: 'Best Adjustable Dumbbells Under $300',
    description:
      'Our top picks for adjustable dumbbells that deliver real performance without breaking the bank.',
    category: 'Buyer Guide',
    categorySlug: 'adjustable-dumbbells',
    readTime: '8 min read',
    metaTitle: 'Best Adjustable Dumbbells Under $300 (2026 Guide)',
    metaDescription:
      'Find the best adjustable dumbbells under $300. We compare weight range, adjustment speed, build quality, and value to help you pick the right set.',
    intro:
      'Adjustable dumbbells are one of the most efficient investments you can make for a home gym. A single pair replaces an entire rack of fixed weights — saving significant floor space and cost. But not every set is built the same. Weight range, adjustment mechanism, build quality, and how the mechanism holds up over years of daily use all vary significantly between models. This guide covers the best options available under $300 and explains what actually separates a good set from a frustrating one.',
    whoItIsFor: [
      'People setting up a home gym for the first time',
      'Anyone who wants free weights without dedicating a full wall to a dumbbell rack',
      'Intermediate lifters who need a range from light to moderately heavy weights',
      'Anyone training in a smaller space like an apartment, garage, or spare room',
    ],
    whatMatters: [
      {
        title: 'Weight Range',
        description:
          'Look for a set that starts light enough for warm-ups and goes heavy enough to challenge you as you progress. A range of 5–52 lb covers most users well for upper body work. If you plan to train legs with dumbbells, look for sets reaching 70–90 lb.',
      },
      {
        title: 'Adjustment Speed',
        description:
          'Dial-based systems change weight in under 3 seconds. Pin-based systems take longer but tend to feel more solid. If you train with frequent weight changes between sets, dial speed matters more than you might expect.',
      },
      {
        title: 'Build Quality',
        description:
          'Plastic housings and loose selectors wear out. Metal-heavy construction and tight tolerances last longer. For daily use over several years, this difference becomes significant.',
      },
      {
        title: 'Footprint',
        description:
          'Adjustable dumbbells require a tray or cradle. Factor the tray dimensions into your space planning. Most sets are compact, but the tray needs a floor or shelf surface.',
      },
      {
        title: 'Weight Increments',
        description:
          'Smaller increments (2.5 lb steps) give you more control over progression, especially for isolation exercises. Some sets jump in larger increments which can make progression harder for lighter movements.',
      },
    ],
    relatedProductIds: [
      'bowflex-selecttech-552',
      'powerblock-elite-exp',
      'nordictrack-select-a-weight',
      'yes4all-adjustable',
    ],
    featuredPickId: 'bowflex-selecttech-552',
    quickSummary: {
      forWho: 'Home gym buyers who want one set of dumbbells that works for most training programs.',
      bestPick: 'Bowflex SelectTech 552 for the fastest adjustments and strongest overall value under $300.',
      skipIf:
        'Skip this category if you plan to drop dumbbells from overhead often — fixed cast iron dumbbells are safer for that use.',
      bullets: [
        'Best overall: Bowflex SelectTech 552.',
        'Best budget: Yes4All spin-lock set.',
        'Best compact durable pick: PowerBlock Elite EXP.',
        'Most buyers should prioritize adjustment speed over max weight specs.',
      ],
    },
    methodology: [
      'We prioritize picks that keep pace with real sessions, not just static spec-sheet wins.',
      'Every recommendation balances weight range, adjustment reliability, and long-term value.',
      'We bias toward models with clear use-case fit so buyers can pick faster with fewer regrets.',
    ],
    relatedGuideSlugs: ['dumbbells-vs-kettlebells', 'best-home-gym-for-small-spaces', 'best-weight-bench-for-beginners'],
    relatedCategorySlugs: ['adjustable-dumbbells', 'benches', 'home-gym-systems'],
    faqs: [
      {
        question: 'Are adjustable dumbbells worth it compared to fixed dumbbells?',
        answer:
          'For home gyms, almost always yes. A fixed set from 5–50 lb in 5 lb increments requires around ten pairs and significant floor space. Adjustable dumbbells cover the same range in two compact trays. The main trade-off is adjustment time — fixed dumbbells are faster to pick up and put down.',
      },
      {
        question: 'What weight range do most beginners need?',
        answer:
          'A set that goes from 5–52 lb covers most beginner to intermediate upper body needs. If you want to train legs with dumbbells — lunges, Romanian deadlifts, goblet squats — going up to 70–90 lb is more useful as you progress.',
      },
      {
        question: 'Can I drop adjustable dumbbells?',
        answer:
          'Most are not designed to be dropped. Dropping them can crack the housing or break the adjustment mechanism. Always lower them with control when finishing a set. If you need to drop weights from overhead, fixed cast iron dumbbells are the safer choice.',
      },
      {
        question: 'Do I need a stand with adjustable dumbbells?',
        answer:
          'A stand is not required, but it puts the dumbbells at picking height so you do not have to bend down to the floor every set. It also protects the floor. Most sets sell a compatible stand separately — worth considering for regular use.',
      },
    ],
    conclusion:
      'For most people setting up a home gym, a quality adjustable dumbbell set under $300 is one of the best starting points available. Focus on weight range and adjustment speed for your specific training style, and do not over-optimize for specs you do not need yet. The Bowflex SelectTech 552 is the easiest recommendation for most users — fast, proven, and broadly available. If durability is the priority, the PowerBlock or Ironmaster sets are worth the extra investment.',
  },
  {
    slug: 'best-home-gym-for-small-spaces',
    title: 'Best Home Gym Setup for Small Spaces',
    description:
      'How to build an effective home gym even with limited square footage. The right gear makes all the difference.',
    category: 'Setup Guide',
    categorySlug: 'home-gym-systems',
    readTime: '10 min read',
    metaTitle: 'Best Home Gym for Small Spaces (2026 Guide)',
    metaDescription:
      'Build a complete home gym in a small space. Our picks for compact, versatile gear that maximizes a limited footprint without sacrificing training quality.',
    intro:
      'A small room, garage corner, or section of a bedroom can become a genuinely functional training space with the right equipment choices. The biggest mistake people make is buying bulky gear that works in a commercial gym but creates a cramped, barely-usable mess at home. This guide covers the smartest equipment picks for spaces under 100–150 sq ft and explains what to prioritize, what to skip, and in what order to build.',
    whoItIsFor: [
      'People in apartments, condos, or homes without a dedicated gym room',
      'Anyone setting up in a section of a garage, basement, or spare room',
      'People who want a full-body training option in a compact footprint',
      'Anyone trying to avoid a cluttered, hard-to-use setup',
    ],
    whatMatters: [
      {
        title: 'Floor Footprint Per Exercise',
        description:
          'Every piece of gear should justify its square footage. Multi-use items earn their space. A single adjustable dumbbell set covers dozens of exercises. A dedicated leg press machine does one.',
      },
      {
        title: 'Vertical Storage',
        description:
          'Compact racks, wall-mounted storage, and stackable equipment use vertical space that floor plans do not account for. A dumbbell stand, for example, keeps trays off the floor and at picking height.',
      },
      {
        title: 'Multi-Functionality',
        description:
          'An adjustable bench and a dumbbell set together cover more movements than most large machines. Before buying a machine, ask how many exercises it covers versus a more versatile alternative.',
      },
      {
        title: 'Ease of Setup and Breakdown',
        description:
          'If equipment is hard to move or set up, it gets used less. Folding benches, stackable weights, and modular racks that can be broken down encourage more frequent use in smaller spaces.',
      },
      {
        title: 'Build Priority Order',
        description:
          'Build around the equipment you will actually use most. For most people that means: adjustable dumbbells first, then an adjustable bench, then resistance bands or a compact rack if space allows.',
      },
    ],
    relatedProductIds: ['bowflex-selecttech-552', 'flybird-adjustable-bench', 'rep-fitness-pr-4000', 'bowflex-pr3000'],
    featuredPickId: 'bowflex-selecttech-552',
    quickSummary: {
      forWho: 'Anyone building a useful home gym in apartments, garages, or spare-room footprints.',
      bestPick: 'Start with adjustable dumbbells + an adjustable bench before adding bigger machines.',
      skipIf: 'Skip full multi-station systems if you cannot dedicate permanent floor space.',
      bullets: [
        'Most compact high-impact stack: dumbbells + bench + floor mat.',
        'Add a rack only if barbell training is a real priority.',
        'Multi-use gear beats single-purpose machines in tight spaces.',
      ],
    },
    methodology: [
      'We score every recommendation by exercise coverage per square foot.',
      'We favor setups that still feel usable day-to-day, not just possible on paper.',
      'We prioritize expansion paths so first purchases stay useful later.',
    ],
    relatedGuideSlugs: ['best-adjustable-dumbbells-under-300', 'best-weight-bench-for-beginners'],
    relatedCategorySlugs: ['home-gym-systems', 'adjustable-dumbbells', 'benches'],
    faqs: [
      {
        question: 'What is the minimum space needed for a functional home gym?',
        answer:
          'You can build a solid setup in 50–80 sq ft. A 6x8 foot area handles adjustable dumbbells, an adjustable bench, and floor work comfortably. Adding a compact rack requires another 4x4 feet minimum.',
      },
      {
        question: 'Is a power rack possible in a small space?',
        answer:
          'Half racks and wall-mounted folding racks exist specifically for smaller spaces. A half rack can work in roughly a 4x4 foot footprint, though you need ceiling height of 8 feet or more for safe use. Folding wall-mounted racks collapse flat when not in use.',
      },
      {
        question: 'Should I prioritize cardio or weights for a small space?',
        answer:
          'Weights generally deliver more versatility per square foot. A dumbbell setup covers both strength and conditioning work. Cardio machines tend to be large and single-purpose. If you need cardio, a jump rope or a compact folding rower is a better space trade-off than a treadmill.',
      },
      {
        question: 'What flooring should I use for a home gym?',
        answer:
          'Rubber gym tiles at 3/8 to 3/4 inch thickness protect your floor, reduce noise, and make the space more comfortable to train in. A 10x10 area can be covered for well under $100 with interlocking tiles.',
      },
    ],
    conclusion:
      'Building an effective home gym in a small space is mostly a prioritization exercise. Resist the urge to buy everything at once. Start with a quality adjustable dumbbell set and an adjustable bench — together they cover the majority of useful training movements in under 20 sq ft. Add from there as your training demands it. Compact, multi-use gear consistently outperforms large single-purpose machines in a limited footprint.',
  },
  {
    slug: 'dumbbells-vs-kettlebells',
    title: 'Dumbbells vs Kettlebells: Which Should You Buy?',
    description: 'An honest comparison of both tools — when each makes sense and how to choose for your goals.',
    category: 'Comparison',
    categorySlug: 'adjustable-dumbbells',
    readTime: '7 min read',
    metaTitle: 'Dumbbells vs Kettlebells: Which Is Better for Home Gyms?',
    metaDescription:
      'Dumbbells or kettlebells — which is the smarter buy for your home gym? A direct comparison covering training style, exercise variety, progression, and cost.',
    intro:
      'Both dumbbells and kettlebells are legitimate, effective training tools. The question is not which one is better in the abstract — it is which one is better for the way you actually train. This guide breaks down the real differences so you can make the right call for your goals, your training style, and your budget. If you are deciding what to buy first, this comparison should make the answer clear.',
    whoItIsFor: [
      'People deciding between the two tools for their first home gym purchase',
      'Lifters who want to understand which fits their training style better',
      'Anyone working with a limited budget who needs to make one smart decision',
      'People already using one and considering whether to add the other',
    ],
    whatMatters: [
      {
        title: 'Training Style',
        description:
          'Dumbbells excel at traditional strength exercises: bench press, rows, curls, lunges, shoulder press. Kettlebells are optimized for dynamic ballistic movements: swings, cleans, snatches, Turkish get-ups. If your training is primarily strength-based, dumbbells cover more ground.',
      },
      {
        title: 'Exercise Variety',
        description:
          'Dumbbells support a much wider range of exercises across every muscle group, including isolation work. Kettlebells cover a specific, focused set of movements extremely well — but that set is smaller.',
      },
      {
        title: 'Progressive Overload',
        description:
          'Dumbbells come in incremental steps which suits gradual strength progression. Kettlebell training typically involves fewer, larger weight jumps — you move from a 16 kg to a 24 kg when ready, which is a significant jump.',
      },
      {
        title: 'Cost and Space',
        description:
          'A single kettlebell costs less and takes up almost no floor space. But an adjustable dumbbell set provides far more total weight range in a still-compact footprint. The comparison shifts depending on how many kettlebells you would need to match that range.',
      },
      {
        title: 'Learning Curve',
        description:
          'Dumbbell exercises are intuitive for most beginners. Kettlebell technique — especially swings, cleans, and snatches — takes time to learn properly and should not be rushed. Poor technique on ballistic movements increases injury risk.',
      },
    ],
    relatedProductIds: ['bowflex-selecttech-552', 'powerblock-elite-exp', 'ironmaster-quick-lock'],
    featuredPickId: 'bowflex-selecttech-552',
    quickSummary: {
      forWho: 'Buyers deciding what to buy first when they cannot purchase both tools yet.',
      bestPick: 'Most people should start with adjustable dumbbells for versatility and progression.',
      skipIf: 'Skip dumbbells-first only if your goal is primarily kettlebell conditioning circuits.',
      bullets: [
        'Dumbbells: better for structured strength and hypertrophy plans.',
        'Kettlebells: better for ballistic conditioning and power-endurance circuits.',
        'If budget is tight, buy the one that matches how you train today.',
      ],
    },
    methodology: [
      'We compare tools by training outcomes, not internet hype.',
      'We weight progression and exercise coverage heavily for first-time buyers.',
      'Recommendations focus on what gets used consistently in home setups.',
    ],
    relatedGuideSlugs: ['best-adjustable-dumbbells-under-300', 'best-home-gym-for-small-spaces'],
    relatedCategorySlugs: ['adjustable-dumbbells', 'home-gym-systems'],
    faqs: [
      {
        question: 'Which is better for building muscle?',
        answer:
          'Dumbbells are generally more effective for hypertrophy. They allow precise progressive overload in small increments, support more isolation exercises, and fit into standard strength training programs more directly. Kettlebells build functional strength and conditioning but are not optimized for traditional muscle-building programming.',
      },
      {
        question: 'Which is better for fat loss and conditioning?',
        answer:
          'Kettlebell complexes and circuits — swings, cleans, presses, snatches — are exceptionally effective for conditioning and metabolic work. Dumbbell circuits work too, but the ballistic nature of kettlebell movements generates higher cardiovascular demand per unit of time for many people.',
      },
      {
        question: 'Can I build a complete program with just one kettlebell?',
        answer:
          'A single moderately heavy kettlebell — around 24 kg for men, 16 kg for women — supports a legitimate training program on its own. Swings, goblet squats, Turkish get-ups, single-arm presses, and carries cover a broad range of movement patterns. It will not replace a full dumbbell set, but it delivers genuine value at minimal cost and near-zero footprint.',
      },
      {
        question: 'Do I need both dumbbells and kettlebells?',
        answer:
          'Eventually, many home gym users add both. Start with whichever better matches your primary training goal. If you follow a strength program with progressive overload, start with dumbbells. If you are primarily interested in conditioning, circuits, and functional training, start with a kettlebell.',
      },
    ],
    conclusion:
      'For most people setting up a home gym, adjustable dumbbells are the more versatile first purchase. They cover more exercises, fit more training styles, and make progressive overload easier to manage over time. Kettlebells are an excellent complement once your basics are covered — or a strong starting point if ballistic conditioning training is specifically what you want. The two tools are not competitors; they serve different purposes well.',
  },
  {
    slug: 'best-weight-bench-for-beginners',
    title: 'Best Weight Bench for Beginners',
    description:
      'New to training at home? These benches offer the best combination of safety, stability, and value.',
    category: 'Buyer Guide',
    categorySlug: 'benches',
    readTime: '6 min read',
    metaTitle: 'Best Weight Bench for Beginners (2026 Guide)',
    metaDescription:
      'Find the best weight bench for beginners. Stable, adjustable options that pair well with dumbbells for a complete home gym starting point.',
    intro:
      'A weight bench is one of the most useful pieces of equipment in any home gym. It opens up pressing movements for chest, shoulders, and triceps — and supports rows, step-ups, and dozens of dumbbell exercises that are awkward or impossible on the floor. But not all benches are built the same. A poor-quality bench wobbles under load, compresses too much under a heavy dumbbell press, or limits your range of motion. This guide covers what beginners should prioritize and which options give you the best combination of stability, adjustability, and value.',
    whoItIsFor: [
      'People setting up their first home gym',
      'Lifters who currently train on the floor and want to add pressing and row movements',
      'Anyone who needs a bench that handles both flat and incline positions',
      'People with a mid-range budget who want to buy once and not replace it quickly',
    ],
    whatMatters: [
      {
        title: 'Stability Under Load',
        description:
          'A bench that wobbles or flexes under load is both limiting and unsafe. Look for a wide base, quality welds, and a weight rating well above your expected total load — your body weight plus the dumbbells you are pressing.',
      },
      {
        title: 'Pad Quality',
        description:
          'Dense foam that holds its shape under pressure matters for pressing mechanics. Thin or soft pads compress significantly under heavy weight, changing your body angle and reducing range of motion.',
      },
      {
        title: 'Adjustability Range',
        description:
          'A flat bench is useful, but an adjustable bench in flat, incline, and decline positions covers significantly more exercises in the same footprint. For most beginners, the extra cost for an adjustable bench is worth it.',
      },
      {
        title: 'Weight Capacity',
        description:
          'Add your body weight to the total weight you will be pressing and look for a bench rated at least 50–100 lb above that combined number. Higher-rated benches also tend to use heavier-gauge steel, which translates directly to a more solid feel.',
      },
      {
        title: 'Footprint and Storage',
        description:
          'Folding benches save space when not in use but tend to be less stable than fixed benches. Fixed benches are sturdier but stay where they are. Choose based on whether storage space matters in your setup.',
      },
    ],
    relatedProductIds: ['rep-fitness-ab-3000', 'flybird-adjustable-bench', 'marcy-sb-261w'],
    featuredPickId: 'rep-fitness-ab-3000',
    quickSummary: {
      forWho: 'First-time buyers who want a safe, stable bench that still fits home spaces.',
      bestPick: 'REP Fitness AB-3000 for long-term stability and versatile incline options.',
      skipIf: 'Skip premium fixed benches if you must fold and store after every workout.',
      bullets: [
        'Start with stability and pad quality before fancy extras.',
        'Most beginners should choose adjustable over flat-only benches.',
        'Weight rating should cover your bodyweight + load with headroom.',
      ],
    },
    methodology: [
      'We score benches on stability first because movement under load is a safety issue.',
      'We prioritize adjustability and long-term comfort over flashy features.',
      'We include budget options that still meet minimum durability standards.',
    ],
    relatedGuideSlugs: ['best-home-gym-for-small-spaces', 'best-adjustable-dumbbells-under-300'],
    relatedCategorySlugs: ['benches', 'adjustable-dumbbells', 'home-gym-systems'],
    faqs: [
      {
        question: 'Do I need an adjustable bench or is a flat bench enough?',
        answer:
          'For most beginners, an adjustable bench is worth the modest extra cost. Incline pressing is one of the most effective upper chest exercises, and an adjustable bench also enables incline dumbbell rows, shoulder pressing in a supported position, and decline work. A flat-only bench is a fine starting point if budget is tight, but you will likely want incline capability eventually.',
      },
      {
        question: 'What weight capacity do I need?',
        answer:
          'Add your body weight to the total load you expect to be pressing — including both dumbbells. Then look for a bench rated at least 50 lb above that number. A 600 lb rated bench at 200 lb body weight pressing 100 lb total gives you real margin. Higher capacity benches also tend to use heavier gauge steel, which improves overall solidity.',
      },
      {
        question: 'Can I use a bench without a rack or barbell?',
        answer:
          'Absolutely. Most beginners using dumbbells do not need a rack at all. A bench and a pair of dumbbells covers pressing, rows, flyes, shoulder work, and dozens of other movements without any barbell equipment. A rack becomes relevant when you want to barbell bench press or squat.',
      },
      {
        question: 'How much should I budget for a beginners bench?',
        answer:
          'Benches under $100 can work but often wobble or wear out within a year of regular use. The $150–$300 range is where quality improves significantly. A solid adjustable bench from a known brand in this range will last years and support most training goals a beginner will encounter.',
      },
    ],
    conclusion:
      'For a beginner, a well-built adjustable bench is one of the most valuable pieces of equipment you can add to a home gym. It dramatically expands what you can do with a dumbbell set, takes up minimal space, and lasts years with normal care. The REP Fitness AB-3000 is the best all-around option if budget allows — solid, stable, and built to last. If space or budget is the constraint, the Flybird is a legitimate foldable alternative that covers the bases without a permanent floor commitment.',
  },
]

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}

export function getGuidesByCategorySlug(categorySlug: string): Guide[] {
  return guides.filter((g) => g.categorySlug === categorySlug)
}

export function getGuidesBySlugs(slugs: string[]): Guide[] {
  return slugs.map((slug) => guides.find((g) => g.slug === slug)).filter((g): g is Guide => g !== undefined)
}
