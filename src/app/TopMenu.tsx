"use client";
import * as React from "react";
import Link from "next/link";
import { Flex, Box, IconButton } from "@radix-ui/themes";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function TopMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="w-full bg-white sticky top-0 z-50">
      <div className="w-full mx-auto ps-10 pt-5">
        <Flex align="center" justify="between" className="h-10">
          {/* Desktop menu */}
          <Box className="hidden md:flex w-full justify-between">
            <Flex gap="5">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative px-2 py-1 font-normal text-black hover:text-gray-700 focus:outline-none"
                >
                  <span className="inline-block pb-1 border-b-2 border-transparent hover:border-teal-200 focus:border-teal-400 transition-all">
                    {item.label}
                  </span>
                </Link>
              ))}
            </Flex>
          </Box>
        </Flex>
      </div>
    </nav>
  );
}
