"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Script from "next/script"
import { usePathname } from "next/navigation"

// Dropdown component for the About menu
function AboutDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle mouse enter - immediately show dropdown
  const handleMouseEnter = () => {
    // Clear any existing timeout that might be trying to close the menu
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  // Handle mouse leave - delay hiding dropdown
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 500); // 500ms delay
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative group"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="#"
        className="flex items-center text-sm font-medium text-gray-500 transition-colors hover:text-gray-800 font-cormorant"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        About
        <ChevronDown className="ml-1 h-4 w-4" />
      </Link>

      {/* Improved dropdown with larger hit area */}
      <div
        className={`absolute left-0 mt-1 min-w-[240px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transform transition-opacity duration-150 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Extra padding div to increase hoverable area */}
        <div className="py-2 px-1" role="menu" aria-orientation="vertical">
          <Link
            href="/about"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap"
          >
            About Me
          </Link>
          <Link
            href="/approach"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap"
          >
            My Approach to Therapy
          </Link>
          <Link
            href="/expertise"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap"
          >
            Areas of Expertise
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* Cal.com Script */}
      <Script id="cal-embed-script" strategy="afterInteractive">
        {`
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", "introductory-call", {origin:"https://cal.com"});
          Cal.ns["introductory-call"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        `}
      </Script>
      <div className="container flex h-24 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Banu Dalamanli Logo"
              width={70}
              height={70}
              className="h-auto object-contain"
              style={{
                filter: isHomePage ? 'invert(1) brightness(10) drop-shadow(0 0 3px white)' : 'none',
                transition: 'filter 0.3s'
              }}
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-800">
            Home
          </Link>

          <AboutDropdown />

          <Link href="/services" className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-800">
            Services
          </Link>

          <Link href="/book" className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-800">
            Booking
          </Link>

          <Link href="/contact" className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-800">
            Contact
          </Link>

          <Button
            size="default"
            className="w-full min-[400px]:w-auto"
            data-cal-link="bdalamanli/introductory-call"
            data-cal-namespace="introductory-call"
            data-cal-config='{"layout":"month_view","theme":"auto"}'
          >
            Book an Intro Call
          </Button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ?
            <X className="h-5 w-5" style={isHomePage ? {filter: 'invert(1) brightness(10)'} : {}} /> :
            <Menu className="h-5 w-5" style={isHomePage ? {filter: 'invert(1) brightness(10)'} : {}} />
          }
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

            {/* About section with toggle */}
            <div className="space-y-2">
              <button
                className="flex items-center justify-between w-full font-medium text-gray-500 transition-colors hover:text-gray-800 font-cormorant"
                style={{ fontSize: '1.1rem' }}
                onClick={() => setIsAboutOpen(!isAboutOpen)}
              >
                <span>About</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
              </button>

              {isAboutOpen && (
                <div className="pl-4 space-y-2 border-l-2 border-gray-100">
                  <Link
                    href="/about"
                    className="block text-sm font-medium text-gray-500 transition-colors hover:text-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Me
                  </Link>
                  <Link
                    href="/approach"
                    className="block text-sm font-medium text-gray-500 transition-colors hover:text-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Approach to Therapy
                  </Link>
                  <Link
                    href="/expertise"
                    className="block text-sm font-medium text-gray-500 transition-colors hover:text-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Areas of Expertise
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/services"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>

            <Link
              href="/book"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Booking
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <Button
              variant="default"
              className="w-full mt-2 bg-primary text-white hover:bg-primary/90"
              data-cal-link="bdalamanli/introductory-call"
              data-cal-namespace="introductory-call"
              data-cal-config='{"layout":"month_view","theme":"auto"}'
              onClick={() => setIsMenuOpen(false)}
            >
              Book an Intro Call
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
