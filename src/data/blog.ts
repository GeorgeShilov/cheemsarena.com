export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  pubDate: string;
  author: string;
  category: string;
  tags: string[];
  featured?: boolean;
  heroImage: string;
  inlineImages: string[];
  referenceUrl?: string;
  articleText: string;
};

export const fallbackPosts: BlogPost[] = [
  {
    slug: "how-meme-coins-build-gaming-communities",
    title: "How Meme Coins Build Gaming Communities",
    description:
      "Why the best gaming ecosystems today start with a meme, a token, and a community that actually shows up.",
    pubDate: "2026-05-16",
    author: "Cheems Arena Team",
    category: "Culture",
    tags: ["Meme Coins", "Community", "Gaming"],
    featured: true,
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>The most resilient gaming communities are not born from whitepapers or venture backing. They start with a meme that people want to belong to, a token that gives them skin in the game, and a platform where that energy can collide in real competition.</p>
      <p>Cheems Arena was built around this idea: that meme coin holders are already a community, and what they need is a place to prove who is the most based. Tournaments, prediction markets, and leaderboard rewards turn holders into players and spectators into participants.</p>
      <p>The next wave of crypto-native games will not look like traditional esports. They will look like meme culture with stakes: chaotic, community-driven, and impossible to fake.</p>
    `
  },
  {
    slug: "community-tournaments-and-on-chain-rewards",
    title: "Community Tournaments and On-Chain Rewards",
    description:
      "A practical framework for running community tournaments where participation, skill, and culture all earn on-chain rewards.",
    pubDate: "2026-05-15",
    author: "Cheems Arena Team",
    category: "Gaming",
    tags: ["Tournaments", "Rewards", "Crypto"],
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>Running a tournament for a meme coin community is different from traditional esports. The prize pool might be a token airdrop. The qualification criteria might include meme creation, wallet holdings, or social engagement alongside pure skill.</p>
      <p>Cheems Arena supports this hybrid model by letting organizers define entry rules that mix on-chain verification with gameplay results. Winners can receive tokens, NFT badges, or exclusive roles, all distributed transparently on-chain.</p>
      <p>The key is keeping the tournament loop tight: announce, compete, reward, and celebrate publicly. Communities that close this loop quickly build momentum that lasts far beyond a single event.</p>
    `
  },
  {
    slug: "crypto-culture-why-memes-are-the-new-marketing",
    title: "Crypto Culture: Why Memes Are the New Marketing",
    description:
      "How meme-driven marketing outperforms traditional campaigns in crypto, and how projects can ride the wave without getting rekt.",
    pubDate: "2026-05-14",
    author: "Cheems Arena Team",
    category: "Marketing",
    tags: ["Memes", "Crypto", "Marketing"],
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>In crypto, the best marketing does not look like marketing at all. It looks like a meme that makes holders laugh, share, and feel like insiders. The most successful token launches of the past year had one thing in common: a meme that the community could remix endlessly.</p>
      <p>Cheems Arena embraces this by turning meme culture into competitive content. Meme contests, community-voted brackets, and culture-driven events give communities a reason to create and share beyond simple price speculation.</p>
      <p>Projects that treat memes as a serious engagement layer, rather than a gimmick, build organic reach that no paid campaign can replicate. The arena is where that engagement turns into gameplay.</p>
    `
  }
];
