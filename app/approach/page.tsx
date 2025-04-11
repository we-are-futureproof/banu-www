import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Brain, Sparkles, Leaf } from "lucide-react"
import type { Metadata } from "next"

// JSON-LD structured data and metadata for this page
export const generateMetadata = async () => {
  // Create structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Banu Dalamanli, Psychologist",
    "description": "A holistic, client-centered methodology focused on your unique needs",
    "url": "https://banudalamanli.com/approach",
    "serviceType": "Therapeutic Services",
    "serviceOutput": "Mental Health Support",
    "provider": {
      "@type": "Person",
      "name": "Banu Dalamanli",
      "jobTitle": "Psychologist"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 52.3873878,
        "longitude": 4.6462194
      },
      "geoRadius": "10km"
    }
  }

  // Return both the metadata and the structured data
  return {
    title: "Therapeutic Approach | Banu Dalamanli, Psychologist",
    description: "Learn about my holistic, client-centered therapeutic approach focused on compassionate presence, analytical clarity, and gentle guidance.",
    openGraph: {
      title: "Therapeutic Approach | Banu Dalamanli, Psychologist",
      description: "Learn about my holistic, client-centered therapeutic approach focused on compassionate presence, analytical clarity, and gentle guidance.",
      url: "/approach",
      type: "website"
    },
    alternates: {
      canonical: "https://banudalamanli.com/approach"
    },
    other: {
      "script:ld+json": JSON.stringify(jsonLd)
    }
  }
}

export default function ApproachPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-therapy-beige">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Therapeutic Approach</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A holistic, client-centered methodology focused on your unique needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Approach</h2>
              <p className="text-muted-foreground">
                My therapeutic practice integrates compassionate presence, analytical clarity, and gentle guidance.
              </p>
              <p className="text-muted-foreground">
                Grounded in non-judgmental acceptance, I deeply listen, fully see, and compassionately explore with clients the roots of their emotional pain, traumas, and challenges.
              </p>
              <p className="text-muted-foreground">
                Our therapeutic journey prioritizes present-moment awareness, mind-body connection, curiosity without judgment, and integration of fragmented parts of self, facilitating holistic healing and personal growth.
              </p>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Therapist office with comfortable seating"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* Therapeutic Modalities */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-therapy-blue/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Therapeutic Modalities</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Evidence-based approaches tailored to your unique needs
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-therapy-blue/30 p-3 w-12 h-12 flex items-center justify-center">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Compassionate Inquiry</h3>
                <p className="text-muted-foreground">
                  Developed by Dr. Gabor Maté, this approach gently explores unconscious emotional wounds and patterns, viewing psychological symptoms as protective adaptations rather than problems. It emphasizes present-moment awareness and compassionate curiosity.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-therapy-green/30 p-3 w-12 h-12 flex items-center justify-center">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Schema Therapy</h3>
                <p className="text-muted-foreground">
                  Addresses deeply entrenched emotional patterns and schemas formed early in life, combining cognitive, emotional, experiential, and interpersonal techniques to foster lasting change and healthier relationships.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-therapy-beige p-3 w-12 h-12 flex items-center justify-center">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Polyvagal Theory</h3>
                <p className="text-muted-foreground">
                  Utilizes an understanding of the autonomic nervous system to address emotional regulation, anxiety, trauma, and depression, employing practical exercises to foster feelings of safety, connection, and resilience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-therapy-blue/30 p-3 w-12 h-12 flex items-center justify-center">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Internal Family Systems (IFS)</h3>
                <p className="text-muted-foreground">
                Recognizes the multiple "parts" within individuals, helping clients identify, understand, and integrate these internal parts to achieve inner harmony and emotional balance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What to Expect in Therapy</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Understanding the therapeutic process
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-12 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Initial Consultation</h3>
              <p className="text-muted-foreground">
                Our first session focuses on getting to know each other and establishing a foundation for our work
                together. We'll discuss what brings you to therapy, your background, and your intensions. This is also an
                opportunity for you to ask questions and determine if we're a good fit.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Assessment and Goal Setting</h3>
              <p className="text-muted-foreground">
                We'll work collaboratively to identify and clarify therapy objectives based on initial insights. Together, we'll establish clear, path that aligns with your values and aspirations.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Ongoing Therapy</h3>
              <p className="text-muted-foreground">
                Regular sessions provide a consistent space for exploration, healing, and growth. We'll work
                together, adjusting our approach as needed. Sessions typically last 50 minutes and are scheduled weekly or biweekly.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Termination</h3>
              <p className="text-muted-foreground">
              Final sessions include reviewing therapeutic achievements, consolidating insights, and preparing clients to confidently navigate their path forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-therapy-blue/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Begin Your Therapeutic Journey?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take the first step toward healing and growth today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/book">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Book an Introductory Call
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
