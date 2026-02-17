export interface Event {
  id: string
  title: string
  description: string
  venue: string
  date: string
  time: string
  category: string
  price: number
  supply: number
  sold: number
  image: string
  organizer: string
  status: "active" | "cancelled" | "soldout"
}

export interface Ticket {
  id: string
  eventId: string
  eventTitle: string
  venue: string
  date: string
  time: string
  image: string
  tokenId: string
  used: boolean
  resalePrice?: number
  listedForResale: boolean
}

export const events: Event[] = [
  {
    id: "evt-001",
    title: "Ethereum Summit 2026",
    description:
      "The premier gathering for Ethereum developers, researchers, and enthusiasts. Three days of talks, workshops, and networking opportunities exploring the future of decentralized technology.",
    venue: "Moscone Center, San Francisco",
    date: "2026-04-15",
    time: "09:00",
    category: "Conference",
    price: 0.25,
    supply: 5000,
    sold: 3847,
    image: "/images/event-1.jpg",
    organizer: "0x1a2b...3c4d",
    status: "active",
  },
  {
    id: "evt-002",
    title: "Neon Nights Music Festival",
    description:
      "An immersive electronic music experience spanning two stages with world-class DJs and stunning visual productions. Each ticket is a unique generative art NFT.",
    venue: "Brooklyn Mirage, New York",
    date: "2026-05-22",
    time: "20:00",
    category: "Music",
    price: 0.15,
    supply: 3000,
    sold: 2991,
    image: "/images/event-2.jpg",
    organizer: "0x5e6f...7a8b",
    status: "active",
  },
  {
    id: "evt-003",
    title: "DeFi Builders Hackathon",
    description:
      "A 48-hour hackathon focused on building the next generation of decentralized finance protocols. Prizes totaling 50 ETH for the top teams.",
    venue: "TechHub, Austin",
    date: "2026-06-10",
    time: "10:00",
    category: "Hackathon",
    price: 0.05,
    supply: 500,
    sold: 312,
    image: "/images/event-3.jpg",
    organizer: "0x9c0d...1e2f",
    status: "active",
  },
  {
    id: "evt-004",
    title: "Crypto Art Basel",
    description:
      "A curated exhibition of the finest digital art minted on-chain. Meet the artists, participate in live auctions, and collect rare pieces.",
    venue: "Art District, Miami",
    date: "2026-07-05",
    time: "18:00",
    category: "Art",
    price: 0.3,
    supply: 1000,
    sold: 654,
    image: "/images/event-4.jpg",
    organizer: "0x3a4b...5c6d",
    status: "active",
  },
  {
    id: "evt-005",
    title: "Web3 Gaming Expo",
    description:
      "Play-to-earn gaming showcase featuring 50+ blockchain games. Try before you buy, meet developers, and win exclusive in-game NFTs.",
    venue: "Convention Center, Los Angeles",
    date: "2026-08-18",
    time: "11:00",
    category: "Gaming",
    price: 0.08,
    supply: 8000,
    sold: 4200,
    image: "/images/event-5.jpg",
    organizer: "0x7e8f...9a0b",
    status: "active",
  },
  {
    id: "evt-006",
    title: "DAO Governance Forum",
    description:
      "A deep dive into decentralized governance models. Learn from the DAOs that are shaping the future of organizational structures.",
    venue: "Senate Hall, Washington DC",
    date: "2026-09-03",
    time: "09:00",
    category: "Conference",
    price: 0.12,
    supply: 2000,
    sold: 890,
    image: "/images/event-6.jpg",
    organizer: "0x1a2b...3c4d",
    status: "active",
  },
]

export const myTickets: Ticket[] = [
  {
    id: "tkt-001",
    eventId: "evt-001",
    eventTitle: "Ethereum Summit 2026",
    venue: "Moscone Center, San Francisco",
    date: "2026-04-15",
    time: "09:00",
    image: "/images/event-1.jpg",
    tokenId: "#4821",
    used: false,
    listedForResale: false,
  },
  {
    id: "tkt-002",
    eventId: "evt-002",
    eventTitle: "Neon Nights Music Festival",
    venue: "Brooklyn Mirage, New York",
    date: "2026-05-22",
    time: "20:00",
    image: "/images/event-2.jpg",
    tokenId: "#1337",
    used: false,
    listedForResale: true,
    resalePrice: 0.22,
  },
  {
    id: "tkt-003",
    eventId: "evt-003",
    eventTitle: "DeFi Builders Hackathon",
    venue: "TechHub, Austin",
    date: "2026-06-10",
    time: "10:00",
    image: "/images/event-3.jpg",
    tokenId: "#0089",
    used: true,
    listedForResale: false,
  },
]

export const categories = [
  "All",
  "Conference",
  "Music",
  "Hackathon",
  "Art",
  "Gaming",
]
