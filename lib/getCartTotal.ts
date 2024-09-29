import { Product } from "./interfaces";

export function getCartTotal(products: Product[]): string {
  const total = products.reduce(
    (accumulator: number, currentProduct: Product) =>
      accumulator + currentProduct.price,
    0
  );

  return `${
    products[0]?.currenncy ? products[0]?.currenncy : "$"
  } ${total.toFixed(2)}`;
}
