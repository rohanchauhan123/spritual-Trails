import { Trail } from './types';

export const HERO_IMAGES = [
  "https://picsum.photos/seed/mountain1/1920/1080",
  "https://picsum.photos/seed/lake2/1920/1080", 
  "https://picsum.photos/seed/forest3/1920/1080"
];

export const TRAILS: Trail[] = [
  {
    id: '1',
    title: "Monk's Path",
    location: "Kyoto, Japan",
    description: "A silent walk through ancient bamboo groves, ending at a secluded temple for meditation.",
    imageUrl: "https://picsum.photos/seed/kyoto/800/600",
    difficulty: "Easy",
    duration: "4 Hours",
    price: "$150"
  },
  {
    id: '2',
    title: "Andean Spirit",
    location: "Cusco, Peru",
    description: "High altitude trekking connecting with Pachamama, guided by local shamans.",
    imageUrl: "https://picsum.photos/seed/peru/800/600",
    difficulty: "Challenging",
    duration: "3 Days",
    price: "$850"
  },
  {
    id: '3',
    title: "Desert Silence",
    location: "Wadi Rum, Jordan",
    description: "Sleep under the stars and find clarity in the vast emptiness of the red desert.",
    imageUrl: "https://picsum.photos/seed/jordan/800/600",
    difficulty: "Moderate",
    duration: "2 Days",
    price: "$400"
  },
  {
    id: '4',
    title: "Nordic Zen",
    location: "Lofoten, Norway",
    description: "Cold exposure therapy and hiking amidst dramatic fjords and northern lights.",
    imageUrl: "https://picsum.photos/seed/norway/800/600",
    difficulty: "Moderate",
    duration: "5 Days",
    price: "$1200"
  }
];

export const EXPERIENCES = [
  {
    title: "Forest Bathing",
    description: "Shinrin-yoku guided sessions to reduce stress and boost immunity.",
    image: "https://picsum.photos/seed/forestbath/600/400"
  },
  {
    title: "Sound Healing",
    description: "Tibetan bowl vibrations to align your chakras in acoustic chambers.",
    image: "https://picsum.photos/seed/sound/600/400"
  },
  {
    title: "Monastic Stays",
    description: "Live with monks for a week. Silence, service, and simplicity.",
    image: "https://picsum.photos/seed/monk/600/400"
  }
];

export const PACKAGES = [
  {
    name: "The Seeker",
    price: "$900",
    period: "/ year",
    features: ["Access to all Day Trails", "1 Weekend Retreat", "Digital Guide Access", "Community Forum"],
    highlight: false
  },
  {
    name: "The Sage",
    price: "$2,400",
    period: "/ year",
    features: ["Unlimited Retreats", "Priority Booking", "Private Shaman Session", "Global Sanctuary Access", "Concierge Service"],
    highlight: true
  },
  {
    name: "The Mystic",
    price: "$5,000",
    period: "/ lifetime",
    features: ["Lifetime Access", "Custom Expedition Planning", "Exclusive Hidden Trails", "Equipment Included"],
    highlight: false
  }
];

export const TESTIMONIALS = [
  {
    quote: "The silence was deafening in the most beautiful way. I found pieces of myself I didn't know were missing.",
    author: "Elena R.",
    location: "Kyoto Expedition"
  },
  {
    quote: "Luxury isn't just about thread count. It's about the quality of the stillness. Spiritual Trails understands this perfectly.",
    author: "Marcus T.",
    location: "Nordic Zen"
  },
  {
    quote: "A profound reset. The guides were invisible yet always there when needed. Truly magical.",
    author: "Sarah L.",
    location: "Andean Spirit"
  }
];

export const SYSTEM_INSTRUCTION = `You are the 'Spirit Guide', an AI assistant for a luxury spiritual tourism website called 'Spiritual Trails'. 
Your tone is serene, wise, welcoming, and poetic. 
You help users find the perfect travel destination based on their current emotional state, spiritual goals, or desire for adventure.
Keep responses concise (under 100 words) but evocative. 
Suggest trails or types of environments (mountains for perspective, deserts for clarity, forests for grounding) based on user input.`;