import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Banu Dalamanli, Psychologist</h3>
            <p className="text-sm text-muted-foreground">
              A professional therapy practice where you'll find compassionate care, meaningful support, and a safe space where healing begins.
            </p>
            <div className="flex space-x-3">
              {/* <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link> */}
            </div>
          </div>
          <div className="space-y-3 footer-pages">
            <h3 className="text-sm font-medium">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-sm">
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li className="text-sm">
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Me
                </Link>
              </li>
              <li className="text-sm">
                <Link href="/approach" className="text-muted-foreground hover:text-primary">
                  My Approach to Therapy
                </Link>
              </li>
              <li className="text-sm">
                <Link href="/expertise" className="text-muted-foreground hover:text-primary">
                  Areas of Expertise
                </Link>
              </li>
              <li className="text-sm">
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li className="text-sm">
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
          {/* Resources section temporarily hidden
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
          */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p className="font-bold">Haarlem Office</p>
              <p>Wagenweg 252</p>
              <p>Haarlem 2012 NP</p>
              <p>Netherlands</p>
            </address>
            <address className="not-italic text-sm text-muted-foreground">
              <p className="font-bold">Amsterdam Office</p>
              <p>Satphatistraat 14</p>
              <p>Amsterdam 1017 WS</p>
              <p>Netherlands</p>
            </address>
          </div>
        </div>
        <div className="mt-10 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Banu Dalamanli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
