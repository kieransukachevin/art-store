"use client";
import Image from "next/image";
import { ButtonHTMLAttributes, useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-6 w-full">
        <div className="flex flex-col gap-6  items-center">
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
            id="person-1"
            src="/thumbnails/person-1.jpg"
            alt="Person 1"
            className="cursor-pointer"
            width={300}
            height={300}
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
            id="campfire"
            src="/thumbnails/campfire.jpg"
            alt="Campfire"
            className="cursor-pointer"
            width={500}
            height={500}
            tabIndex={0}
            onClick={(e) => setSelectedImage(e.currentTarget.id)}
          />
          <Image
            id="drip"
            src="/thumbnails/drip.jpg"
            alt="Drip"
            className="cursor-pointer"
            width={500}
            height={500}
            tabIndex={0}
            onClick={(e) => setSelectedImage(e.currentTarget.id)}
          />
        </div>

        <div className="flex flex-col gap-4  items-center">
          <Image
            id="tent"
            src="/thumbnails/tent.jpg"
            alt="Tent"
            className="cursor-pointer"
            width={500}
            height={500}
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

          <Image
            id="city"
            src="/thumbnails/city.jpg"
            alt="City"
            className="cursor-pointer"
            width={500}
            height={500}
            tabIndex={0}
            onClick={(e) => setSelectedImage(e.currentTarget.id)}
          />
          <Image
            id="chickadee"
            src="/thumbnails/chickadee.jpg"
            alt="Chickadee"
            className="cursor-pointer"
            width={300}
            height={300}
            tabIndex={0}
            onClick={(e) => setSelectedImage(e.currentTarget.id)}
          />
          <Image
            id="brownie"
            src="/thumbnails/brownie.jpg"
            alt="Brownie"
            className="cursor-pointer"
            width={500}
            height={500}
            tabIndex={0}
            onClick={(e) => setSelectedImage(e.currentTarget.id)}
          />
          <Image
            id="running"
            src="/thumbnails/running.jpg"
            alt="Running"
            className="cursor-pointer"
            width={300}
            height={300}
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
        <CloseButton />
        <img
          className="max-w-full max-h-full object-contain"
          src={`/images/${image}.jpg`}
          alt={image}
        />
      </div>
    </dialog>
  );
}

function CloseButton(buttonProps: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="h-12 fixed top-0 right-0">
      <button
        id="close-button"
        className="bg-transparent cursor-pointer z-100 w-12 h-12  rounded-full"
        {...buttonProps}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#383838"
          height="20px"
          width="20px"
          version="1.1"
          viewBox="0 0 512 512"
        >
          <g>
            <g>
              <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256   " />
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
}
