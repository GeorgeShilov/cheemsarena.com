export const site = {
  name: "Cheems Arena",
  domain: "cheemsarena.com",
  url: import.meta.env.SITE_URL || "https://cheemsarena.com",
  email: "hello@cheemsarena.com",
  description:
    "Cheems Arena is a meme-powered gaming and crypto arena where communities clash, meme coins moon, and players earn rewards for being based.",
  launchContext: [
    "Built for meme coin communities that need a home base for tournaments, leaderboards, and culture-driven events.",
    "Turn community hype into real gameplay: bracket tournaments, prediction markets, and on-chain reward drops.",
    "Connect your wallet, bring your memes, and compete in the arena where crypto culture meets competitive gaming."
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
