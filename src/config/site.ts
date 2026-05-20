export const site = {
  name: "Cheems Arena",
  domain: "cheemsarena.com",
  url: import.meta.env.SITE_URL || "https://cheemsarena.com",
  email: "hello@cheemsarena.com",
  description:
    "Cheems Arena is the first trading card game ruled by Shiba. Built on Solana with 350+ collectible cards, NFT ownership, and play-to-earn mechanics. Have fun, collect, earn.",
  launchContext: [
    "Built for players who want real ownership of their cards. Every card is an NFT on Solana, tradable on the Cheems Arena marketplace.",
    "Four rarities, five elements, four qualities — plus 350+ cards to collect, battle, and trade across the Cheemsrealm.",
    "Powered by Solana blockchain for fast, low-cost transactions. Buy Cheemy packs, build your deck, and battle in the arena."
  ]
};

export const navItems = [
  { label: "Arena Hub", href: "/gateway/" },
  { label: "Guide", href: "/docs/" },
  { label: "Rewards", href: "/pricing/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" }
];
