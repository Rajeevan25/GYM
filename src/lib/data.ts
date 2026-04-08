export interface Branch {
  name: string;
  slug: string;
  address: string;
  phone: string;
  image: string;
  description: string;
  tagline: string;
  hours: {
    morning: string;
    evening: string;
  };
  mapUrl?: string;
  specialties: string[];
  facilities: { name: string, icon: string }[];
  stats: { label: string, value: string }[];
}

export interface Trainer {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
  branches: string[]; // slugs
}

export interface ClassSchedule {
  name: string;
  branch: string; // slug
  trainer: string;
  time: string;
  duration: string;
  intensity: number; // 1-5
  category: "Strength" | "Cardio" | "HIIT" | "Recovery" | "Conditioning";
  days: string[];
}

export const BRANCHES: Branch[] = [
  {
    name: "Jaffna Town",
    slug: "jaffna-town",
    address: "Main Street, HQ Branch, Jaffna",
    phone: "+94 21 222 1000",
    image: "/images/branch-jaffna-new.png",
    tagline: "Elite Performance Hub",
    description: "Our flagship facility, engineered for maximum performance and elite athletic transformation in the heart of Jaffna.",
    hours: {
      morning: "06:00 AM - 10:00 AM",
      evening: "05:00 PM - 11:00 PM"
    },
    specialties: ["Bodybuilding", "Powerlifting", "Elite Physical Transformation"],
    facilities: [
      { name: "Olympic Grade Racks", icon: "fitness_center" },
      { name: "Hammer Strength Center", icon: "hardware" },
      { name: "High-Volume Cardio Zone", icon: "speed" },
      { name: "Posing & Aesthetics Lab", icon: "visibility" }
    ],
    stats: [
      { label: "Floor Area", value: "6,500 sqft" },
      { label: "Active Units", value: "85+" },
      { label: "Elite Personnel", value: "12 Coaches" }
    ]
  },
  {
    name: "Nallur",
    slug: "nallur",
    address: "Temple Road Plaza, Nallur",
    phone: "+94 21 222 2000",
    image: "/images/branch-nallur-new.png",
    tagline: "Kinetic Recovery Node",
    description: "Focusing on kinetic chain alignment and advanced recovery protocols in a serene environment near the temple complex.",
    hours: {
      morning: "06:00 AM - 10:00 AM",
      evening: "05:00 PM - 10:00 PM"
    },
    specialties: ["Yoga", "Mobility", "Scientific Endurance"],
    facilities: [
      { name: "Kinetic Alignment Studio", icon: "self_improvement" },
      { name: "Cryo-Recovery Cell", icon: "ac_unit" },
      { name: "Physio-Consultancy", icon: "medical_services" },
      { name: "Zen Atmosphere", icon: "spa" }
    ],
    stats: [
      { label: "Floor Area", value: "4,200 sqft" },
      { label: "Specialty Units", value: "20+" },
      { label: "Serenity Level", value: "Optimized" }
    ]
  },
  {
    name: "Kondavil",
    slug: "kondavil",
    address: "KKS Road Center, Kondavil",
    phone: "+94 21 222 3000",
    image: "/images/branch-kondavil-new.png",
    tagline: "Industrial Strength Unit",
    description: "Industrial-grade resistance equipment and specialized power tools for the modern urban athlete.",
    hours: {
      morning: "06:00 AM - 11:00 AM",
      evening: "04:00 PM - 11:00 PM"
    },
    specialties: ["Industrial Strength", "Metabolic Conditioning", "Heavy Resistance"],
    facilities: [
      { name: "Heavy Resistance Bay", icon: "weight" },
      { name: "Conditioning Track", icon: "directions_run" },
      { name: "Industrial Load Center", icon: "precision_manufacturing" },
      { name: "Metabolic Lab", icon: "biotech" }
    ],
    stats: [
      { label: "Floor Area", value: "5,800 sqft" },
      { label: "Heavy Units", value: "60+" },
      { label: "Load Capacity", value: "Industrial" }
    ]
  }
];

export const TRAINERS: Trainer[] = [
  { 
    name: "Kumar J.", 
    role: "Head Architect", 
    specialty: "Bodybuilding", 
    bio: "Former national bodybuilding champion with 15+ years experience in structural physique transformation. Specializes in mechanical advantage and high-intensity volume.",
    image: "/images/trainer.jpg",
    branches: ["jaffna-town", "kondavil"]
  },
  { 
    name: "Sarah L.", 
    role: "Kinetic Specialist", 
    specialty: "Yoga & Recovery", 
    bio: "Internationally certified yoga instructor and mobility expert. Focuses on kinetic chain alignment and advanced recovery protocols for elite athletes.",
    image: "/images/trainer.jpg",
    branches: ["nallur"]
  },
  { 
    name: "Arunan S.", 
    role: "Performance Coach", 
    specialty: "HIIT & Cardio", 
    bio: "Scientific approach to metropolitan endurance. Specializes in metabolic conditioning and explosive power development for urban athletes.",
    image: "/images/trainer.jpg",
    branches: ["jaffna-town", "nallur"]
  },
  { 
    name: "Vane M.", 
    role: "Elite Architect", 
    specialty: "Powerlifting", 
    bio: "Industrial strength specialist. Master of the big three—Squat, Bench, and Deadlift. Building foundational power for the next generation.",
    image: "/images/trainer.jpg",
    branches: ["kondavil"]
  }
];

export const SCHEDULE: ClassSchedule[] = [
  { 
    name: "Heavy Structural", 
    branch: "jaffna-town", 
    trainer: "Kumar J.", 
    time: "06:30 AM", 
    duration: "60m", 
    intensity: 5, 
    category: "Strength", 
    days: ["Mon", "Wed", "Fri"] 
  },
  { 
    name: "Kinetic Yoga", 
    branch: "nallur", 
    trainer: "Sarah L.", 
    time: "07:00 AM", 
    duration: "45m", 
    intensity: 2, 
    category: "Recovery", 
    days: ["Tue", "Thu", "Sat"] 
  },
  { 
    name: "Metabolic Circuit", 
    branch: "jaffna-town", 
    trainer: "Arunan S.", 
    time: "06:00 PM", 
    duration: "30m", 
    intensity: 5, 
    category: "HIIT", 
    days: ["Mon", "Wed", "Fri"] 
  },
  { 
    name: "Powerlift Block", 
    branch: "kondavil", 
    trainer: "Vane M.", 
    time: "05:30 PM", 
    duration: "90m", 
    intensity: 4, 
    category: "Strength", 
    days: ["Mon", "Tue", "Thu", "Fri"] 
  },
  { 
    name: "Endurance Protocol", 
    branch: "nallur", 
    trainer: "Arunan S.", 
    time: "06:30 PM", 
    duration: "60m", 
    intensity: 4, 
    category: "Cardio", 
    days: ["Wed", "Sat"] 
  },
  { 
    name: "Iron Core", 
    branch: "jaffna-town", 
    trainer: "Kumar J.", 
    time: "05:00 PM", 
    duration: "45m", 
    intensity: 3, 
    category: "Conditioning", 
    days: ["Tue", "Thu"] 
  },
  { 
    name: "Mobility Flow", 
    branch: "nallur", 
    trainer: "Sarah L.", 
    time: "08:15 AM", 
    duration: "45m", 
    intensity: 1, 
    category: "Recovery", 
    days: ["Mon", "Fri"] 
  },
  { 
    name: "Velocity HIIT", 
    branch: "kondavil", 
    trainer: "Arunan S.", 
    time: "06:45 PM", 
    duration: "30m", 
    intensity: 5, 
    category: "HIIT", 
    days: ["Tue", "Thu"] 
  }
];

export type UserRole = 'SUPER_ADMIN' | 'BRANCH_ADMIN' | 'TRAINER' | 'MEMBER';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  homeBranch?: string; // slug
  assignedBranches?: string[]; // slugs for trainers/branch admins
}

export const MOCK_USERS: User[] = [
  {
    id: "u1",
    name: "Admin User",
    email: "admin@jkgym.com",
    role: "SUPER_ADMIN"
  },
  {
    id: "u2",
    name: "Jaffna Manager",
    email: "manager.jaffna@jkgym.com",
    role: "BRANCH_ADMIN",
    assignedBranches: ["jaffna-town"]
  },
  {
    id: "u3",
    name: "Kumar J.",
    email: "kumar@jkgym.com",
    role: "TRAINER",
    assignedBranches: ["jaffna-town", "kondavil"]
  },
  {
    id: "u4",
    name: "Athlete One",
    email: "athlete1@gmail.com",
    role: "MEMBER",
    homeBranch: "jaffna-town"
  },
  {
    id: "u5",
    name: "Suresh K.",
    email: "suresh@gmail.com",
    role: "MEMBER",
    homeBranch: "jaffna-town"
  },
  {
    id: "u6",
    name: "Priyantha R.",
    email: "priyantha@gmail.com",
    role: "MEMBER",
    homeBranch: "kondavil"
  },
  {
    id: "u7",
    name: "Meera J.",
    email: "meera@gmail.com",
    role: "MEMBER",
    homeBranch: "jaffna-town"
  },
  {
    id: "u8",
    name: "Kamal D.",
    email: "kamal@gmail.com",
    role: "MEMBER",
    homeBranch: "nallur"
  }
];
