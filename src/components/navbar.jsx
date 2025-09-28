"use client"

import Link from "next/link"
import { ShoppingCart, User, Search, Menu } from "lucide-react"
import { useCartStore } from "@/store/cartStore"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  const totalItems = useCartStore((state) => state.totalItems())

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow border-b">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-emerald-700">
          BYZU
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 font-medium">
          <Link href="/men" className="hover:text-emerald-600">Men</Link>
          <Link href="/women" className="hover:text-emerald-600">Women</Link>
          <Link href="/accessories" className="hover:text-emerald-600">Accessories</Link>
          <Link href="/contact" className="hover:text-emerald-600">Contact</Link>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <button aria-label="Search">
            <Search className="w-5 h-5 cursor-pointer" />
          </button>

          <Link href="/cart" className="relative flex items-center gap-1" aria-label="Cart">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs rounded-full px-2">
                {totalItems}
              </span>
            )}
          </Link>

          <button aria-label="User account">
            <User className="w-5 h-5 cursor-pointer" />
          </button>

          {/* Hamburger menu (Mobile only) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Menu">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-6 font-medium">
                  <Link href="/men">Men</Link>
                  <Link href="/women">Women</Link>
                  <Link href="/accessories">Accessories</Link>
                  <Link href="/contact">Contact</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
