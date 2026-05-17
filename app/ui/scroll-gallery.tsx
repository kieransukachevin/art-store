"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import { useRef, useState } from "react";
import CloseButton from "./close-button";
import { cn } from "./cn";
import { PT_Serif } from "next/font/google";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  fullSrc?: string;
  title?: string;
  subTitle?: string;
  description?: string;
};

const ptSerif = PT_Serif({
  weight: ["400", "700"]
});

export default function ScrollGallery({ images }: { images: GalleryImage[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const selectedImageIndex = images.findIndex(
    (image) => image.id === selectedImage
  );

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop } = e.currentTarget;
    const newCurrentImage = Math.floor(
      scrollTop / e.currentTarget.clientHeight
    );
    const clampedImage = Math.min(newCurrentImage, images.length - 1);
    if (clampedImage !== currentImage) {
      setCurrentImage(clampedImage);
    }
  };

  const showPreviousImage = () => {
    if (selectedImageIndex < 0) return;
    const previousIndex =
      (selectedImageIndex - 1 + images.length) % images.length;
    setSelectedImage(images[previousIndex].id);
  };

  const showNextImage = () => {
    if (selectedImageIndex < 0) return;
    const nextIndex = (selectedImageIndex + 1) % images.length;
    setSelectedImage(images[nextIndex].id);
  };

  return (
    <main className="relative h-screen overflow-hidden">
      {!selectedImage &&
        images.map((image, index) => (
          <div
            className={cn(
              "fixed top-0 left-1/2 z-20 -translate-x-1/2 flex items-center justify-center h-full pointer-events-none",
              "opacity-0 data-[show=true]:opacity-100 data-[show=false]:invisible",
              "transition-all ease-in-out duration-300"
            )}
            key={image.id}
            data-show={currentImage === index}
          >
            <div className="pointer-events-auto relative flex flex-col items-center gap-4">
              <Image
                id={image.id}
                src={image.src}
                alt={image.alt}
                className={cn(
                  "cursor-pointer",
                  "h-auto max-w-[90vw] max-h-[65vh] md:max-h-[90vh] object-contain"
                )}
                width={image.width}
                height={image.height}
                tabIndex={-1}
                onClick={() => setSelectedImage(image.id)}
                onWheel={(e) => {
                  scrollContainerRef.current?.scrollBy({
                    top: e.deltaY,
                    left: e.deltaX
                  });
                }}
              />
              <div className="w-full max-w-[90vw] space-y-3 text-left md:absolute md:top-1/2 md:left-full md:ml-4 md:w-[22rem] md:max-w-none md:-translate-y-1/2 md:space-y-4">
                {image.title && (
                  <h3 className={`text-xl ${ptSerif.className}`}>
                    {image.title}
                  </h3>
                )}
                {image.subTitle && (
                  <h4 className={`text-sm text-gray-600 ${ptSerif.className}`}>
                    {image.subTitle}
                  </h4>
                )}
                {image.description && (
                  <p className={`text-base text-gray-600 ${ptSerif.className}`}>
                    {image.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}

      <div
        ref={scrollContainerRef}
        className="relative z-10 h-screen overflow-y-auto overscroll-contain"
        onScroll={handleScroll}
      >
        <div>
          {images.map((image, index) => (
            <section
              className="h-screen w-full"
              key={image.id}
              tabIndex={0}
              aria-label={`View ${image.alt}`}
              onFocus={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>

      <Overlay
        open={Boolean(selectedImage)}
        image={selectedImage}
        images={images}
        setSelectedImage={setSelectedImage}
        onPrevious={showPreviousImage}
        onNext={showNextImage}
      />
    </main>
  );
}

function Overlay({
  open,
  image,
  images,
  setSelectedImage,
  onPrevious,
  onNext
}: {
  open: boolean;
  image: string | null;
  images: GalleryImage[];
  setSelectedImage: (image: string | null) => void;
  onPrevious: () => void;
  onNext: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const currentImage = images.find((candidate) => candidate.id === image);
  const fullSrc =
    currentImage?.fullSrc ?? (image ? `/images/${image}.jpg` : undefined);

  return (
    <Dialog
      open={open}
      onClose={() => setSelectedImage(null)}
      initialFocus={closeButtonRef}
      className="relative z-50"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/50" />
      <DialogPanel
        className="fixed inset-0 flex items-center justify-center p-10"
        onClick={() => setSelectedImage(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            onPrevious();
          }
          if (e.key === "ArrowRight") {
            onNext();
          }
        }}
      >
        <button
          type="button"
          aria-label="Show previous image"
          className="fixed left-4 top-1/2 z-10 -translate-y-1/2 p-6 text-5xl text-white cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
        >
          ‹
        </button>

        <button
          type="button"
          aria-label="Show next image"
          className="fixed right-4 top-1/2 z-10 -translate-y-1/2 p-6 text-5xl text-white cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          ›
        </button>

        <CloseButton
          ref={closeButtonRef}
          type="button"
          aria-label="Close image overlay"
          className="fixed top-0 right-0 z-10 h-12"
          onClick={() => setSelectedImage(null)}
        />
        <div onClick={(e) => e.stopPropagation()}>
          {fullSrc && image && (
            <Image
              className="h-auto w-auto max-w-[90vw] max-h-[90vh] object-contain"
              src={fullSrc}
              alt={image}
              width={1400}
              height={1400}
            />
          )}
        </div>
      </DialogPanel>
    </Dialog>
  );
}
