import React from "react";
// import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header>
      <Link href="/">
        <Image
          src="https://links.papareact.com/xsi"
          alt="Logo"
          width={150}
          height={150}
        />
      </Link>
    </header>
  );
}

export default Header;
