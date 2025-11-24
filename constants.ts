import { Trail, TourPackage, Experience, MembershipPackage } from './types';

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

export const POPULAR_DESTINATIONS = [
  {
    id: 'd1',
    title: "Kyoto Groves",
    location: "Japan",
    image: "https://picsum.photos/seed/kyoto1/600/900",
    description: "Walk where emperors once tread. A timeless journey through bamboo and belief."
  },
  {
    id: 'd2',
    title: "Patagonian Peaks",
    location: "Chile",
    image: "https://picsum.photos/seed/patagonia1/600/900",
    description: "Raw, untamed wilderness that humbles the spirit and elevates the mind."
  },
  {
    id: 'd3',
    title: "Sahara Dunes",
    location: "Morocco",
    image: "https://picsum.photos/seed/sahara1/600/900",
    description: "Endless sands under an infinite sky. Find clarity in the void."
  },
  {
    id: 'd4',
    title: "Icelandic Fjords",
    location: "Iceland",
    image: "https://picsum.photos/seed/iceland1/600/900",
    description: "Fire and ice coexisting in perfect harmony. A lesson in balance."
  },
  {
    id: 'd5',
    title: "Bhutanese Hills",
    location: "Bhutan",
    image: "https://picsum.photos/seed/bhutan1/600/900",
    description: "The last Shangri-La. breathe the air of happiness and tradition."
  },
  {
    id: 'd6',
    title: "Sedona Vortex",
    location: "Arizona",
    image: "https://picsum.photos/seed/sedona1/600/900",
    description: "Red rocks charged with energy. A powerful center for healing."
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    title: "Forest Bathing",
    description: "Shinrin-yoku guided sessions to reduce stress and boost immunity.",
    fullDescription: "Originating in Japan, Shinrin-yoku is the practice of immersing oneself in nature with all five senses. Our guided sessions in the ancient Yakushima forests allow you to slow down, disconnect from technology, and reconnect with the organic rhythm of life. Scientific studies have shown this practice lowers cortisol, blood pressure, and improves mood.",
    image: "https://picsum.photos/seed/forestbath/600/400",
    benefits: ["Reduced Stress", "Improved Immunity", "Mental Clarity", "Better Sleep"]
  },
  {
    id: 'exp2',
    title: "Sound Healing",
    description: "Tibetan bowl vibrations to align your chakras in acoustic chambers.",
    fullDescription: "Experience the profound resonance of hand-hammered Tibetan singing bowls. In our acoustically perfected chambers, sound waves pass through your body, massaging cells and releasing energetic blockages. This journey takes you into a deep Theta state, where profound healing and insight can occur.",
    image: "https://picsum.photos/seed/sound/600/400",
    benefits: ["Deep Relaxation", "Chakra Alignment", "Pain Relief", "Emotional Release"]
  },
  {
    id: 'exp3',
    title: "Monastic Stays",
    description: "Live with monks for a week. Silence, service, and simplicity.",
    fullDescription: "Step out of your life and into a sanctuary of silence. You will live alongside monks in a working monastery, participating in morning chants, communal work, and silent meals. This is not a vacation, but a rigorous simplification of life designed to reveal what is truly essential.",
    image: "https://picsum.photos/seed/monk/600/400",
    benefits: ["Digital Detox", "Mindfulness", "Simplicity", "Community Connection"]
  }
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'pkg1',
    name: "Himalayan Ascent",
    price: "$5,400",
    duration: "14 Days",
    location: "Nepal & Tibet",
    image: "https://picsum.photos/seed/himalaya/800/1000",
    description: "A high-altitude pilgrimage to the roof of the world. Meditate in ancient caves and trek the sacred path.",
    features: ["Private Sherpa Guide", "Monastery Access", "Helicopter Transfers", "Luxury Camps"]
  },
  {
    id: 'pkg2',
    name: "Kyoto Eternal",
    price: "$8,200",
    duration: "10 Days",
    location: "Kyoto, Japan",
    image: "https://picsum.photos/seed/kyoto_t/800/1000",
    description: "Access the inaccessible. Private tea ceremonies, after-hours temple visits, and lodging in Ryokans.",
    features: ["Private Tea Master", "Exclusive Temple Entry", "Kaiseki Dining", "Zen Gardening Class"]
  },
  {
    id: 'pkg3',
    name: "Patagonia Wild",
    price: "$6,800",
    duration: "12 Days",
    location: "Chile & Argentina",
    image: "https://picsum.photos/seed/pata/800/1000",
    description: "Where the earth ends. Glaciers, pumas, and the profound silence of the untamed south.",
    features: ["Private Tracker", "Luxury Yurts", "Private Boat Tours", "Gourmet Wilderness Meals"]
  },
  {
    id: 'pkg4',
    name: "Sahara Void",
    price: "$4,500",
    duration: "7 Days",
    location: "Morocco",
    image: "https://picsum.photos/seed/sahara_t/800/1000",
    description: "A luxury caravan into the deep dunes. Silence, stars, and the endless golden sea.",
    features: ["Private Camp", "Astronomer Guide", "Camel Trek", "Berber Music"]
  }
];

export const PACKAGES: MembershipPackage[] = [
  {
    name: "Seeker",
    price: "$95",
    period: "/ month",
    features: ["Access to Global Lounges", "Monthly Group Meditation", "Digital Sanctuary App", "5% Off Expeditions"],
    highlight: false
  },
  {
    name: "Nomad",
    price: "$245",
    period: "/ month",
    features: ["All Seeker Benefits", "Priority Booking", "Quarterly Private Session", "10% Off Expeditions", "Exclusive Event Access"],
    highlight: true
  },
  {
    name: "Sage",
    price: "$495",
    period: "/ month",
    features: ["All Nomad Benefits", "Personal Spiritual Concierge", "Annual Retreat Credit ($500)", "15% Off Expeditions", "Gift Membership for Friend"],
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