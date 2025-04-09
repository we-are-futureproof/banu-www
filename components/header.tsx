"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container flex h-24 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-cormorant font-medium tracking-tight text-gray-800">Therapy Practice</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-800">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-800">
            Services
          </Link>
          <Link href="/expertise" className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-800">
            Areas of Expertise
          </Link>
          <Link href="/approach" className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-800">
            My Approach
          </Link>
          <Link
            href="/resources"
            className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-800"
          >
            Resources
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-800">
            Contact
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container flex flex-col space-y-3 py-4">
            <Link
              href="/"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/expertise"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Areas of Expertise
            </Link>
            <Link
              href="/approach"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              My Approach
            </Link>
            <Link
              href="/resources/podcast"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Podcast
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
