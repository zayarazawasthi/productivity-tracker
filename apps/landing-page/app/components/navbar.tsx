"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


export default function Navbar() {
  const links = [
    { id: 1, title: "How It Works", href: "/guide" },
    { id: 2, title: "Log In", href: "/login" },
    { id: 3, title: "Get Started", href: "/Signup" },
  ];

  const [hamburgerMenu, setHamburgerMenu] = useState(false)

  return (
    <div className="sticky top-0 w-full border-b border-neutral-900/25 p-2.25">
      <div className="mx-auto flex max-w-5xl justify-between">
        <div>
          <Link href="/">
            <Image
              src="/file-text.svg"
              alt="Logo Image"
              height={24}
              width={24}
            />
          </Link>
        </div>

        <div className="flex gap-6  text-neutral-600 items-center">
          {links.map((link) => (
            <Link className="text-xs font-mono font-semibold" key={link.id} href={link.href}>
              {link.id === 3 ? (
                <button className="px-4 py-1.5 bg-neutral-900 text-amber-50 rounded-md "> {link.title} </button>
              ) : (
                <p  className="font-mono font-semibold">{link.title}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
