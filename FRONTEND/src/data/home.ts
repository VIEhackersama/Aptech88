// src/data/home.ts
import type { PetCard } from "../components/home/FeaturedPets";
import type { TipItem } from "../components/home/CareTipsTeaser"; // ✅ đúng đường dẫn

export const HERO_IMG ="https://nativespeaker.vn/uploaded/page_1600_1712215630_1713753920.jpg";
export const CARD_IMG ="https://www.pngkit.com/png/detail/22-223560_png-puppy-paw-clipart-pet-door.png";

export const FEATURED_PETS: PetCard[] = [
  { id: "1", name: "Bella", age: "2 years", sex: "Female", badge: "Vaccinated", img: CARD_IMG },
  { id: "2", name: "Max", age: "1 year", sex: "Male", badge: "Neutered", img: CARD_IMG },
  { id: "3", name: "Luna", age: "3 years", sex: "Female", badge: "Calm", img: CARD_IMG },
];

export const TIPS: TipItem[] = [
  { title: "Daily checklist for new adopters", tag: "Beginner", href: "/care-tips" },
  { title: "Vaccination timeline explained", tag: "Health", href: "/care-tips" },
  { title: "Socializing your pet safely", tag: "Behavior", href: "/care-tips" },
];

export const PRODUCTS = [
  { name: "Premium Dry Food", note: "All breeds", img: CARD_IMG },
  { name: "Grooming Kit", note: "Brush + Shampoo", img: CARD_IMG },
  { name: "Comfort Bed", note: "M size", img: CARD_IMG },
  { name: "Play Toys", note: "3-in-1 combo", img: CARD_IMG },
];

export const FAQS = [
  { q: "Is adoption free?", a: "Most shelters charge a small fee to cover vaccinations and care. Check details per shelter." },
  { q: "Can I meet the pet first?", a: "Yes. Book an appointment with the shelter or foster family before adopting." },
  { q: "Do you support medical records?", a: "You can attach vaccination and vet visit info to a pet profile (planned feature)." },
  { q: "How do I donate supplies?", a: "Visit the Donate page for instructions on shipping or dropping off items." },
];

export const PARTNER_LOGOS = [
  "https://w7.pngwing.com/pngs/502/150/png-transparent-havanese-dog-pet-sitting-labrador-retriever-puppy-cat-pet-dog-animals-carnivoran-pet-thumbnail.png",
  "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?semt=ais_hybrid&w=740&q=80",
  "/assets/bidv_logo.jpg",
  "/assets/bidv_logo.jpg",
  "/assets/bidv_logo.jpg",
  "/assets/bidv_logo.jpg",
];
