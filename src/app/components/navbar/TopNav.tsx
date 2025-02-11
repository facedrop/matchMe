import { Button, Navbar, NavbarBrand, NavbarContent, } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { GiSelfLove } from "react-icons/gi";
import NavLink from "./NavLink";

export default function TopNav() {
  return (
    <Navbar
      maxWidth="full"
      className="bg-gradient-to-r from-orange-200 from-20% via-pink-500 via-30% to-red-600 to-60%"
      classNames={{
        item: [
          "text-xl",
          "text-whtite",
          "uppercase",
          "data-[active=true]:text-yellow-200"
        ],
      }}
      >
        <NavbarBrand as={Link} href="/">
          <GiSelfLove
            size={40}
            className="text-gray-200"
            />
            <div className="font-bold text-3xl flex">
              <span className="text-gray-200">
                MatchMe
              </span>
            </div>
          </NavbarBrand>
            <NavbarContent justify="center">
              <NavLink
                href="/members"
                label="Matches"
                />
              <NavLink 
                href="/messages"
                label="Messages"/>
            </NavbarContent>
            <NavbarContent justify="end">
              <Button
                as={Link}
                href="/login"
                variant="bordered"
                className="text-whtie"
              >
                Login
              </Button>
              <Button
                as={Link}
                href="/register"
                variant="bordered"
                className="text-white"
                >
                  Register
                </Button>
            </NavbarContent>
    </Navbar>
  )
}