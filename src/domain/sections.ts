import { PropsWithChildren } from "react";

export type SectionsProps = PropsWithChildren<{
  icon: React.ReactElement;
  title: string;
}>;

export type CardProps = PropsWithChildren<{
  img: string;
  quote: string;
  slug: string;
  type?: 'image' | 'video';
}>;

export const cards: CardProps[] = [
  {
    quote: "Cada día me enamoro más de ti, mi amor.",
    img: "/wedding1.jpg",
    slug: "Love",
  },
  {
    quote: "Eres el regalo más hermoso que la vida me ha dado.",
    img: "/6.jpeg",
    slug: "Together",
  },
  {
    quote: "Contigo, cada día es San Valentín.",
    img: "/video.mp4",
    slug: "Gift",
    type: 'video',
  },
  {
    quote: "Mi corazón late al ritmo de tu amor.",
    img: "/2.jpeg",
    slug: "Music",
  },
  {
    quote: "Eres mi presente y mi futuro, mi amor eterno.",
    img: "/wedding2.jpg",
    slug: "Moments",
  },
  {
    quote: "En tus ojos encuentro mi felicidad.",
    img: "/wedding3.jpg",
    slug: "Story",
  },
  {
    quote: "Nuestro amor crece más fuerte cada día.",
    img: "/4.jpeg",
    slug: "Special",
  },
  {
    quote: "Eres la melodía más dulce de mi vida.",
    img: "/1.jpeg",
    slug: "Future",
  },
];