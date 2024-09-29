"use client";

import { Product } from "@/lib/interfaces";
import { useCartStore } from "@/store";
import { Button } from "./ui/button";
import RemoveFromCart from "./RemoveFromCart";
import { useShallow } from "zustand/react/shallow";

function AddToCart({ product }: { product: Product }) {
    
  const [cart, addToCart] = useCartStore(useShallow((state) => [
    state.cart,
    state.addToCart,
  ]));


  const howManyInCart = cart.filter(
    (cartItem) => cartItem.meta.sku === product.meta.sku
  ).length;

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (howManyInCart > 0) {
    return (
      <div className="flex space-x-5 items-center">
        <RemoveFromCart product={product} />
        <span>{howManyInCart}</span>
        <Button
          className="bg-walmart hover:bg-walmart/50"
          onClick={handleAddToCart}
        >
          +
        </Button>
      </div>
    );
  }

  return (
    <Button
      className="bg-walmart hover:bg-walmart/50"
      onClick={handleAddToCart}
    >
      Add To Cart
    </Button>
  );
}

export default AddToCart;
