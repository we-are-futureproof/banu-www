import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Therapy Practice</h3>
            <p className="text-sm text-muted-foreground">
              Providing compassionate therapy services to help you navigate life's challenges.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/approach" className="text-sm text-muted-foreground hover:text-primary">
                  My Approach
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-sm text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/podcast" className="text-sm text-muted-foreground hover:text-primary">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/resources/downloads" className="text-sm text-muted-foreground hover:text-primary">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p>123 Therapy Street</p>
              <p>Suite 456</p>
              <p>Wellness City, WC 12345</p>
            </address>
            <p className="text-sm text-muted-foreground">
              <a href="tel:+1234567890" className="hover:text-primary">
                (123) 456-7890
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:info@therapypractice.com" className="hover:text-primary">
                info@therapypractice.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-10 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Therapy Practice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
