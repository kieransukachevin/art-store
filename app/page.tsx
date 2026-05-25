import ScrollGallery, { type GalleryImage } from "./ui/scroll-gallery";

const images: GalleryImage[] = [
  {
    id: "car-ride",
    src: "/thumbnails/car-ride.jpg",
    alt: "Car Ride",
    width: 800,
    height: 800
  },
  {
    id: "hiking-glow",
    src: "/thumbnails/hiking-glow.jpg",
    alt: "Hiking Glow",
    width: 1000,
    height: 1000
  },
  {
    id: "aquarium",
    src: "/thumbnails/aquarium.jpg",
    alt: "Aquarium",
    width: 800,
    height: 800
  },
  {
    id: "koda",
    src: "/thumbnails/koda.jpg",
    alt: "Koda",
    width: 400,
    height: 400
  },
  {
    id: "sunset-kitchen",
    src: "/thumbnails/sunset-kitchen.jpg",
    alt: "Sunset Kitchen",
    width: 550,
    height: 550
  },
  {
    id: "sunset-hike",
    src: "/thumbnails/sunset-hike.jpg",
    alt: "Sunset Hike",
    width: 900,
    height: 900
  },
  {
    id: "I-10",
    src: "/thumbnails/I-10.jpg",
    alt: "I-10",
    width: 600,
    height: 600
  },
  {
    id: "person-1",
    src: "/thumbnails/person-1.jpg",
    alt: "Person 1",
    width: 300,
    height: 300
  },

  {
    id: "pool-hall",
    src: "/thumbnails/pool-hall.jpg",
    alt: "Pool Hall",
    width: 500,
    height: 500
  },
  {
    id: "campfire",
    src: "/thumbnails/campfire.jpg",
    alt: "Campfire",
    width: 400,
    height: 400
  },

  {
    id: "glass-house",
    src: "/thumbnails/glass-house.jpg",
    alt: "Glass House",
    width: 700,
    height: 700
  },
  {
    id: "tent",
    src: "/thumbnails/tent.jpg",
    alt: "Tent",
    width: 400,
    height: 400
  },

  {
    id: "clothes",
    src: "/thumbnails/clothes.jpg",
    alt: "Clothes",
    width: 600,
    height: 600
  },
  {
    id: "brownie",
    src: "/thumbnails/brownie.jpg",
    alt: "Brownie",
    width: 500,
    height: 500
  },
  {
    id: "surfing-guy",
    src: "/thumbnails/surfing-guy.jpg",
    alt: "Surfing Guy",
    width: 600,
    height: 600
  },
  {
    id: "grandma-with-walker",
    src: "/thumbnails/grandma-with-walker.jpg",
    alt: "Grandma with Walker",
    width: 600,
    height: 600
  }
];

export default function Home() {
  return <ScrollGallery images={images} />;
}
