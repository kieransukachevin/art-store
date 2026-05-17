import ScrollGallery, { type GalleryImage } from "../ui/scroll-gallery";

const images: GalleryImage[] = [
  {
    id: "observations-zine",
    src: "/images/observations-zine.jpg",
    alt: "Observations Zine",
    width: 750,
    height: 750,
    title: "Observations",
    subTitle: "28 pages, 5.5x8 inches",
    description: "Colored pencil sketches from 2025."
  },
  {
    id: "people-zine",
    src: "/images/people-zine.jpg",
    alt: "People Zine",
    width: 700,
    height: 700,
    title: "People",
    subTitle: "8 pages, 5.5x8.5 inches",
    description: "Many different people."
  },
  {
    id: "lake-hemet-zine",
    src: "/images/lake-hemet-zine.jpg",
    alt: "Lake Hemet Zine",
    width: 550,
    height: 550,
    title: "Lake Hemet",
    subTitle: "6 pages, 5.5x8.25 inches",
    description: "Camping trip to Lake Hemet."
  },
  {
    id: "internet-world-zine",
    src: "/images/internet-world-zine.jpg",
    alt: "Internet World Zine",
    width: 600,
    height: 600,
    title: "Internet World",
    subTitle: "10 pages, 5.5x7.25 inches",
    description: "A look at places outside of my internet world."
  }
];

export default function Zines() {
  return <ScrollGallery images={images} />;
}
