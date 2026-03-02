"use client";
import Image from "next/image";
import { useAddCartItem } from "../controller/cart-store";

export default function Store() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4 items-end justify-items-center">
      <Item
        image="/store/observations.jpg"
        title="Observations"
        description="20 pages, 5.5x8.5 inches"
        price="$10"
        id={3}
      />
      <Item
        image="/store/people.jpg"
        title="People"
        description="8 pages, 5.5x8.5 inches"
        price="$8"
        id={2}
      />
      <Item
        image="/store/lake-hemet.jpg"
        title="Lake Hemet"
        description="8 pages, 5.5x8.5 inches"
        price="$8"
        id={1}
      />
    </div>
  );
}

function Item({
  id,
  image,
  title,
  description,
  price
}: {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
}) {
  const addItem = useAddCartItem();

  return (
    <div>
      <Image src={image} alt="Item" width={300} height={300} />
      <div className="mt-4 max-w-[300px]">
        <h3 className="text-lg font-bold text-start">{title}</h3>
        <p className="text-start">
          <i>{description}</i>
        </p>
        <div className="flex justify-between items-center mt-4">
          <p className="font-bold text-lg">{price}</p>
          <button
            className="cursor-pointer border-2 hover:border-gray-500/60 hover:text-gray-500 transition-all duration-100 border-gray-500 rounded-md p-2"
            onClick={() => addItem({ id, name: title })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
