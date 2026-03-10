import { create } from "zustand";

interface CartItem {
  id: number;
  name: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
}

const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item: CartItem) =>
    set((state) => ({ items: [...state.items, item] })),
  removeItem: (id: number) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) }))
}));

export function useAddCartItem() {
  return useCartStore.getState().addItem;
}

export function useCartItems() {
  return useCartStore((state) => state.items);
}

export function useRemoveCartItem(id: number) {
  return useCartStore((state) => state.removeItem(id));
}
