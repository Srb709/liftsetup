export interface Product {
  id: string
  name: string
  brand: string
  categorySlug: string
  shortDescription: string
  bestFor: string
  pros: string[]
  cons: string[]
  affiliateUrl: string
  badge?: string
}

// affiliateUrl stores the base Amazon URL without a tag.
// The tag is appended at render time via lib/affiliate.ts.
export const products: Product[] = [
  // ─── Adjustable Dumbbells ────────────────────────────────────────────────
  {
    id: 'bowflex-selecttech-552',
    name: 'Bowflex SelectTech 552',
    brand: 'Bowflex',
    categorySlug: 'adjustable-dumbbells',
    shortDescription:
      'Dial-select adjustable dumbbells ranging from 5 to 52.5 lb per hand, replacing 15 sets of fixed weights in a single compact tray.',
    bestFor: 'Most home gym users — fast adjustment, proven design, wide weight range',
    pros: [
      'Dial adjustment takes under 3 seconds per change',
      'Replaces 15 sets of fixed dumbbells',
      'Compact tray fits under most benches',
    ],
    cons: [
      'Plastic housing requires careful handling — not for dropping',
      'Max 52.5 lb may not be enough for advanced pressing work',
    ],
    affiliateUrl: 'https://www.amazon.com/s?k=Bowflex+SelectTech+552',
    badge: 'Best Overall',
  },
  {
    id: 'powerblock-elite-exp',
    name: 'PowerBlock Elite EXP',
    brand: 'PowerBlock',
    categorySlug: 'adjustable-dumbbells',
    shortDescription:
      'Expandable block-style adjustable dumbbells with a compact square design, available in multiple starting weight stages that expand over time.',
    bestFor: 'Lifters who want a modular system they can expand as strength increases',
    pros: [
      'Expandable to heavier weight stages with add-on kits',
      'Metal-heavy construction is more durable than dial alternatives',
      'Extremely compact footprint compared to the weight range covered',
    ],
    cons: [
      'Block shape feels different from traditional round dumbbells',
      'Higher upfront cost per stage than some competitors',
    ],
    affiliateUrl: 'https://www.amazon.com/s?k=PowerBlock+Elite+EXP',
    badge: 'Best Build Quality',
  },
  {
    id: 'nordictrack-select-a-weight',
    name: 'NordicTrack Select-A-Weight Dumbbells',
    brand: 'NordicTrack',
    categorySlug: 'adjustable-dumbbells',
    shortDescription:
      'Dumbbell-shaped adjustable weights with a traditional feel and selector pin mechanism, reaching up to 55 lb per hand with included storage tray.',
    bestFor: 'People who prefer the look and ergonomics of traditional dumbbells',
    pros: [
      'Traditional dumbbell shape — familiar and comfortable to grip',
      'Comes with a storage tray included',
      'Good weight range covering most beginner to intermediate needs',
    ],
    cons: [
      'Pin selector is slower to adjust than dial systems',
      'Heavier and less compact than block-style options',
    ],
    affiliateUrl: 'https://www.amazon.com/s?k=NordicTrack+Select-A-Weight+Dumbbells',
    badge: 'Best Value',
  },
  {
    id: 'ironmaster-quick-lock',
    name: 'Ironmaster Quick-Lock Adjustable Dumbbells',
    brand: 'Ironmaster',
    categorySlug: 'adjustable-dumbbells',
    shortDescription:
      'All-metal adjustable dumbbells with a screw-lock collar system, available up to 75 lb per hand and expandable to 120 lb with add-on kits.',
    bestFor: 'Serious lifters who prioritize maximum durability and heavy weight capacity',
    pros: [
      'All-metal construction — built to last decades with normal use',
      'Expandable to 120 lb per hand with optional add-on kits',
      'Feels and handles identically to fixed dumbbells',
    ],
    cons: [
      'Collar adjustment takes 15–30 seconds compared to 3 seconds for dial systems',
      'Significantly higher price point than alternatives',
    ],
    affiliateUrl: 'https://www.amazon.com/s?k=Ironmaster+Quick-Lock+Adjustable+Dumbbells',
    badge: 'Best for Heavy Lifting',
  },
  {
    id: 'yes4all-adjustable',
    name: 'Yes4All Adjustable Dumbbells',
    brand: 'Yes4All',
    categorySlug: 'adjustable-dumbbells',
    shortDescription:
      'Cast iron adjustable dumbbells with a standard spin-lock collar, available in multiple weight configurations and compatible with standard weight plates.',
    bestFor: 'Budget-conscious buyers who need basic, reliable adjustable weights',
    pros: [
      'Very affordable entry point — lowest cost per pound of the category',
      'Cast iron plates are durable and long-lasting',
      'Standard collar accepts additional plates from other sets',
    ],
    cons: [
      'Collar tightening and loosening is slower than modern selector systems',
      'Less polished ergonomics compared to premium options',
    ],
    affiliateUrl: 'https://www.amazon.com/s?k=Yes4All+Adjustable+Dumbbells',
    badge: 'Budget Pick',
  },

  // ─── Weight Benches ──────────────────────────────────────────────────────
  {
    id: 'rep-fitness-ab-3000',
    name: 'REP Fitness AB-3000 FID Bench',
    brand: 'REP Fitness',
    categorySlug: 'benches',
    shortDescription:
      'Heavy-duty adjustable bench with flat, incline, and decline positions, a thick high-density pad, and a wide base rated for over 1,000 lb.',
    bestFor: 'Home gym users who want a long-term, commercial-quality bench that will not wobble',
    pros: [
      'Extremely solid and stable — no lateral movement under load',
      'Multiple back and seat pad positions for exercise variety',
      'Thick pad holds its shape and does not compress under heavy use',
    ],
    cons: [
      'Heavier than folding alternatives — less portable',
      'Higher price point than budget benches',
    ],
    affiliateUrl: 'https://www.amazon.com/s?k=REP+Fitness+AB-3000+FID+Bench',
    badge: 'Best Overall',
  },
  {
    id: 'flybird-adjustable-bench',
    name: 'Flybird Adjustable Weight Bench',
    brand: 'Flybird',
    categorySlug: 'benches',
    shortDescription:
      'Compact, foldable adjustable bench with seven back positions and a space-saving folded footprint suited for apartment and small-space gyms.',
    bestFor: 'People in small spaces who need a storable, functional adjustable bench',
    pros: [
      'Folds flat for storage against a wall or under a bed',
      'Lightweight and easy to reposition between exercises',
      'Good range of back adjustment positions for the price',
    ],
    cons: [
      'Lower weight capacity than commercial alternatives',
      'Pad density is softer than premium benches — compresses under heavy loads',
    ],
    affiliateUrl: 'https://www.amazon.com/s?k=Flybird+Adjustable+Weight+Bench',
    badge: 'Best for Small Spaces',
  },
  {
    id: 'marcy-sb-261w',
    name: 'Marcy Flat Utility Bench',
    brand: 'Marcy',
    categorySlug: 'benches',
    shortDescription:
      'Simple flat bench with a sturdy steel frame and vinyl-padded surface, designed for dumbbell and barbell pressing work.',
    bestFor: 'Beginners who primarily need a stable flat pressing surface at a low cost',
    pros: [
      'Very affordable — accessible entry price for beginners',
      'Stable flat pressing surface with no moving parts to wear out',
      'Straightforward, no-fuss design',
    ],
    cons: [
      'No incline adjustment — limits exercise variety',
      'Minimal padding compared to FID benches',
    ],
    affiliateUrl: 'https://www.amazon.com/s?k=Marcy+Flat+Utility+Bench',
  },

  // ─── Squat Racks ─────────────────────────────────────────────────────────
  {
    id: 'rogue-r3',
    name: 'Rogue R-3 Power Rack',
    brand: 'Rogue',
    categorySlug: 'squat-racks',
    shortDescription:
      'Commercial-grade steel power rack with a 3x3 inch frame, laser-cut hole pattern, and broad compatibility with Rogue\'s extensive accessory ecosystem.',
    bestFor: 'Serious lifters who want a permanent, expandable home gym centerpiece',
    pros: [
      'Extremely robust construction — commercial quality built to last decades',
      'Huge accessory ecosystem: lat pulldown, dip belt, band pegs, and more',
      'High resale value — holds up well over time',
    ],
    cons: [
      'Significant upfront investment compared to budget racks',
      'Requires dedicated space and sufficient ceiling height',
    ],
    affiliateUrl: 'https://www.amazon.com/s?k=Rogue+R-3+Power+Rack',
    badge: 'Best Overall',
  },
  {
    id: 'rep-fitness-pr-4000',
    name: 'REP Fitness PR-4000 Power Rack',
    brand: 'REP Fitness',
    categorySlug: 'squat-racks',
    shortDescription:
      'Heavy-duty power rack with 3x3 inch uprights, 1-inch hole spacing in the bench zone, and broad compatibility with REP\'s growing accessory line.',
    bestFor: 'Home gym builders who want near-commercial quality without the Rogue price',
    pros: [
      'Excellent build quality relative to cost',
      'Modular attachment system for future expansion',
      '1-inch hole spacing in the bench zone for precise bar placement',
    ],
    cons: [
      'Heavier and more complex to assemble than budget racks',
      'Most accessories sold separately',
    ],
    affiliateUrl: 'https://www.amazon.com/s?k=REP+Fitness+PR-4000+Power+Rack',
    badge: 'Best Value',
  },
  {
    id: 'titan-t2-short',
    name: 'Titan Fitness T-2 Short Power Rack',
    brand: 'Titan Fitness',
    categorySlug: 'squat-racks',
    shortDescription:
      'A compact power rack with a lower profile designed specifically for garages and basements with 7–8 foot ceiling heights.',
    bestFor: 'People with low ceilings who still want a full power rack experience',
    pros: [
      'Designed to work in 7–8 foot ceiling environments',
      'Solid construction at a reasonable price point',
      'Good safety pin and J-hook adjustment range',
    ],
    cons: [
      'Less accessory compatibility than Rogue or REP premium racks',
      'Pull-up bar sits lower than on full-height racks',
    ],
    affiliateUrl: 'https://www.amazon.com/s?k=Titan+Fitness+T-2+Short+Power+Rack',
    badge: 'Best for Low Ceilings',
  },

  // ─── Home Gym Systems ────────────────────────────────────────────────────
  {
    id: 'bowflex-pr3000',
    name: 'Bowflex PR3000 Home Gym',
    brand: 'Bowflex',
    categorySlug: 'home-gym-systems',
    shortDescription:
      'Cable-based home gym with over 50 exercise options using Power Rod resistance technology, in a relatively compact and manageable footprint.',
    bestFor: 'People who want broad exercise variety without free weights or a large cage',
    pros: [
      'Over 50 exercises from a single machine',
      'Smooth, joint-friendly resistance — easier on joints than free weights',
      'Upgradeable resistance with optional add-on power rods',
    ],
    cons: [
      'Power Rod resistance has a different feel than free weights or weight stacks',
      'Requires dedicated floor space that cannot be repurposed',
    ],
    affiliateUrl: 'https://www.amazon.com/s?k=Bowflex+PR3000+Home+Gym',
    badge: 'Best for Beginners',
  },
  {
    id: 'body-solid-g6b',
    name: 'Body-Solid G6B Bi-Angular Home Gym',
    brand: 'Body-Solid',
    categorySlug: 'home-gym-systems',
    shortDescription:
      'Dual-station cable machine with bi-angular press arms, allowing two users to train simultaneously with weight stack resistance.',
    bestFor: 'Households where two people train and want weight stack feel',
    pros: [
      'Dual station for two simultaneous users',
      'Weight stack resistance is consistent, smooth, and easy to adjust',
      'Durable commercial-grade build quality',
    ],
    cons: [
      'Large footprint — requires significant dedicated space',
      'Higher price point than single-station alternatives',
    ],
    affiliateUrl: 'https://www.amazon.com/s?k=Body-Solid+G6B+Home+Gym',
  },
  {
    id: 'marcy-mk-735',
    name: 'Marcy MK-735 Smith Machine Home Gym',
    brand: 'Marcy',
    categorySlug: 'home-gym-systems',
    shortDescription:
      'Multi-function home gym with an integrated Smith machine, cable pulley system, and pec deck station combined into one unit.',
    bestFor: 'People who want Smith machine capability alongside cable and machine work',
    pros: [
      'Smith machine included for guided barbell movements without a spotter',
      'Multi-station design covers a broad exercise range in one footprint',
      'Good overall value for the equipment included',
    ],
    cons: [
      'Very large footprint — requires a dedicated garage or basement space',
      'Assembly is complex and time-consuming',
    ],
    affiliateUrl: 'https://www.amazon.com/s?k=Marcy+MK-735+Smith+Machine+Home+Gym',
    badge: 'Best Smith Machine Option',
  },
]

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug)
}

export function getProductsByIds(ids: string[]): Product[] {
  return ids.map((id) => products.find((p) => p.id === id)).filter((p): p is Product => p !== undefined)
}
