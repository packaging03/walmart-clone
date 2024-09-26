import { Organic } from "@/lib/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Product({ product }: { product: Organic }) {
  return (
    <Link href={{ pathname: "/product", query: { url: product.url } }}>
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="mx-auto"
      />
      <p className="text-xl font-bold">
        {product.price?.currency}
        {product.price.price}
      </p>
    </Link>
  );
}

export default Product;
