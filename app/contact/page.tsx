import type { Metadata } from "next"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "./contact-form"

// Contact page metadata and structured data
export const generateMetadata = async () => {
  // Create structured data for the contact page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Banu Dalamanli",
    "description": "Contact information and appointment booking for Banu Dalamanli's psychology practice in Haarlem.",
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "Banu Dalamanli, Psychologist",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Haarlem",
        "postalCode": "2023 CP",
        "addressCountry": "Netherlands"
      },
      "telephone": "+90 545 737 4405",
      "email": "info@banudalamanli.com",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:00"
        }
      ],
      "availableService": [
        {
          "@type": "Service",
          "name": "Therapy Sessions"
        },
        {
          "@type": "Service",
          "name": "Online Consultations"
        }
      ]
    }
  }

  return {
    title: "Contact Banu Dalamanli | Book a Therapy Session",
    description: "Reach out to schedule a therapy session with Banu Dalamanli. Located in Haarlem, offering in-person and online appointments.",
    openGraph: {
      title: "Contact Banu Dalamanli | Book a Therapy Session",
      description: "Reach out to schedule a therapy session with Banu Dalamanli. Located in Haarlem, offering in-person and online appointments.",
      url: "/contact",
      type: "website"
    },
    alternates: {
      canonical: "https://banudalamanli.com/contact"
    },
    other: {
      "script:ld+json": JSON.stringify(jsonLd)
    }
  }
}



export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-therapy-beige">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm here to answer your questions and support your journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Let's Connect</h2>
                <p className="text-muted-foreground">
                  For any questions, please fill out the form below, and I'll get back to you within 1 business day.
                </p>
              </div>
              <ContactForm />
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
                <p className="text-muted-foreground">
                  You can also reach out directly using the contact information below.
                </p>
              </div>
              <div className="space-y-6">
                <div className="border border-border rounded-lg p-6 shadow-sm contact-info-section">
                  <div className="space-y-6">

                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold">Haarlem Office</h4>
                        <p className="text-muted-foreground text-sm mt-1">
                          Wagenweg 252<br />
                          Haarlem 2012 NP<br />
                          Netherlands
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold">Amsterdam Office</h4>
                        <p className="text-muted-foreground text-sm mt-1">
                          Satphatistraat 14<br />
                          Amsterdam 1017 WS<br />
                          Netherlands
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold">Whatsapp Messaging</h4>
                        <p className="text-muted-foreground text-sm mt-1">
                          <a href="https://wa.me/905457374405?text=Hello%2C+I+just+saw+your+website" className="hover:text-primary">
                            +90 545 737 4405
                          </a>
                        </p>
                        <p className="text-muted-foreground text-sm">Monday - Friday, 9:00 AM - 5:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold">Office Hours</h4>
                        <div className="grid grid-cols-2 gap-x-6 mt-1">
                          <div>
                            <p className="text-muted-foreground text-sm">Monday - Thursday</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">9:00 AM - 7:00 PM</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">Friday</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">9:00 AM - 5:00 PM</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">Saturday</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">10:00 AM - 2:00 PM</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">Sunday</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">Closed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-therapy-blue/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Begin Your Healing Journey?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take the first step toward positive change today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="w-full min-[400px]:w-auto"
                data-cal-link="bdalamanli/introductory-call"
                data-cal-namespace="introductory-call"
                data-cal-config='{"layout":"month_view","theme":"auto"}'
              >
                Book an Introductory Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
