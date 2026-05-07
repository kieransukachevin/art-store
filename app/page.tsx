"use client";
import Image from "next/image";
import { useState } from "react";
import CloseButton from "./ui/close-button";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-2 w-full">
        <div className="flex flex-col gap-20 items-center">
          <Image
            id="car-ride"
            src="/thumbnails/car-ride.jpg"
            alt="Car Ride"
            className="cursor-pointer"
            width={750}
            height={750}
            tabIndex={0}
            onClick={(e) => setSelectedImage(e.currentTarget.id)}
          />
          <Image
            id="aquarium"
            src="/thumbnails/aquarium.jpg"
            alt="Aquarium"
            className="cursor-pointer"
            width={550}
            height={550}
            tabIndex={0}
            onClick={(e) => setSelectedImage(e.currentTarget.id)}
          />
          <Image
            id="I-10"
            src="/thumbnails/I-10.jpg"
            alt="I-10"
            className="cursor-pointer"
            width={550}
            height={550}
            tabIndex={0}
            onClick={(e) => setSelectedImage(e.currentTarget.id)}
          />
          <Image
            id="person-1"
            src="/thumbnails/person-1.jpg"
            alt="Person 1"
            className="cursor-pointer"
            width={250}
            height={250}
            tabIndex={0}
            onClick={(e) => setSelectedImage(e.currentTarget.id)}
          />

          <Image
            id="grandma-with-walker"
            src="/thumbnails/grandma-with-walker.jpg"
            alt="Grandma with Walker"
            className="cursor-pointer"
            width={500}
            height={500}
            tabIndex={0}
            onClick={(e) => setSelectedImage(e.currentTarget.id)}
          />
          <Image
            id="pool-hall"
            src="/thumbnails/pool-hall.jpg"
            alt="Pool Hall"
            className="cursor-pointer"
            width={500}
            height={500}
            tabIndex={0}
            onClick={(e) => setSelectedImage(e.currentTarget.id)}
          />
          <Image
            id="campfire"
            src="/thumbnails/campfire.jpg"
            alt="Campfire"
            className="cursor-pointer"
            width={350}
            height={350}
            tabIndex={0}
            onClick={(e) => setSelectedImage(e.currentTarget.id)}
          />
        </div>

        <div className="flex flex-col gap-20 items-center">
          <Image
            id="sunset-kitchen"
            src="/thumbnails/sunset-kitchen.jpg"
            alt="Sunset Kitchen"
            className="cursor-pointer"
            width={550}
            height={550}
            tabIndex={0}
            onClick={(e) => setSelectedImage(e.currentTarget.id)}
          />
          <Image
            id="glass-house"
            src="/thumbnails/glass-house.jpg"
            alt="Glass House"
            className="cursor-pointer"
            width={550}
            height={550}
            tabIndex={0}
            onClick={(e) => setSelectedImage(e.currentTarget.id)}
          />
          <Image
            id="tent"
            src="/thumbnails/tent.jpg"
            alt="Tent"
            className="cursor-pointer"
            width={400}
            height={400}
            tabIndex={0}
            onClick={(e) => setSelectedImage(e.currentTarget.id)}
          />
          <Image
            id="sunset-hike"
            src="/thumbnails/sunset-hike.jpg"
            alt="Sunset Hike"
            className="cursor-pointer"
            width={750}
            height={750}
            tabIndex={0}
            onClick={(e) => setSelectedImage(e.currentTarget.id)}
          />

          <Image
            id="clothes"
            src="/thumbnails/clothes.jpg"
            alt="Clothes"
            className="cursor-pointer"
            width={550}
            height={550}
            tabIndex={0}
            onClick={(e) => setSelectedImage(e.currentTarget.id)}
          />
          <Image
            id="brownie"
            src="/thumbnails/brownie.jpg"
            alt="Brownie"
            className="cursor-pointer"
            width={450}
            height={450}
            tabIndex={0}
            onClick={(e) => setSelectedImage(e.currentTarget.id)}
          />
          <Image
            id="surfing-guy"
            src="/thumbnails/surfing-guy.jpg"
            alt="Surfing Guy"
            className="cursor-pointer"
            width={500}
            height={500}
            tabIndex={0}
            onClick={(e) => setSelectedImage(e.currentTarget.id)}
          />
        </div>
      </div>

      {selectedImage && (
        <Overlay image={selectedImage} setSelectedImage={setSelectedImage} />
      )}
    </>
  );
}

function Overlay({
  image,
  setSelectedImage
}: {
  image: string;
  setSelectedImage: (image: string | null) => void;
}) {
  return (
    <dialog
      open={true}
      onKeyDown={(e) => {
        e.key === "Escape" && setSelectedImage(null);
      }}
    >
      <div
        className="p-10 w-screen h-screen fixed top-0 inset-0 bg-black/50 flex justify-center items-center"
        onClick={() => setSelectedImage(null)}
      >
        <CloseButton className="h-12 fixed top-0 right-0" />
        <img
          className="max-w-full max-h-full object-contain"
          src={`/images/${image}.jpg`}
          alt={image}
        />
      </div>
    </dialog>
  );
}
