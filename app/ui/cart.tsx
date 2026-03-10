"use client";
import { useState } from "react";
import CloseButton from "./close-button";
import { cn } from "./cn";
import { PT_Serif } from "next/font/google";
import Divider from "./divider";
import { useCartItems } from "../controller/cart-store";

const ptSerif = PT_Serif({
  weight: ["400", "700"]
});

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  const cartItems = useCartItems();

  return (
    <>
      <button
        className="fixed bottom-0 right-0 p-6 cursor-pointer z-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {cartItems.length > 0 && cartItems.length}
        <CartIcon />
      </button>

      <div
        className={cn(
          "border-ring relative bg-background bottom-0 right-0 top-0 z-50 max-h-screen w-[1000px] shrink-0 flex-col border-l shadow-sm transition-all duration-200 md:w-80 fixed p-4 space-y-4",
          isOpen ? "flex" : "hidden"
        )}
      >
        <CloseButton
          className="absolute top-0 right-0"
          onClick={() => setIsOpen(false)}
        />
        <h1 className={cn("text-2xl mt-4", ptSerif.className)}>Cart</h1>

        <Divider />

        {cartItems.length === 0 && <p>No items in cart.</p>}

        {cartItems.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

function CartIcon() {
  return (
    <svg
      width="32"
      height="32"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M3.71 5.4h15.214c1.378 0 2.373 1.27 1.995 2.548l-1.654 5.6C19.01 14.408 18.196 15 17.27 15H8.112c-.927 0-1.742-.593-1.996-1.452zm0 0L3 3" />
    </svg>
  );
}
