import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Heart, Leaf, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

// Homepage metadata and structured data
export const generateMetadata = async () => {
  // Create structured data for psychologist profile
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Banu Dalamanli",
    "jobTitle": "Psychologist",
    "description": "A professional therapy practice where you'll find compassionate care, meaningful support, and a safe space where healing begins.",
    "url": "https://banudalamanli.com",
    "image": "https://banudalamanli.com/banu-dalamanli.jpg",
    "knowsLanguage": ["English", "Dutch"],
    "workLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Haarlem",
        "postalCode": "2023 CP",
        "addressCountry": "Netherlands"
      }
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Individual Therapy"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Integration Therapy"
        }
      }
    ]
  }

  return {
    title: "Banu Dalamanli | Psychologist & Therapist in Haarlem",
    description: "Professional therapy practice offering compassionate care, meaningful support, and a safe space where healing begins.",
    openGraph: {
      title: "Banu Dalamanli | Psychologist & Therapist in Haarlem",
      description: "Professional therapy practice offering compassionate care, meaningful support, and a safe space where healing begins.",
      url: "/",
      type: "website"
    },
    alternates: {
      canonical: "https://banudalamanli.com"
    },
    other: {
      "script:ld+json": JSON.stringify(jsonLd)
    }
  }
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full min-h-screen bg-white">
        <div className="container mx-auto px-4 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            {/* Left side - Image */}
            <div className="relative h-[50vh] lg:h-screen">
              <Image
                src="/banu-dalamanli.jpg"
                alt="Therapist portrait"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Right side - Text */}
            <div className="flex flex-col justify-center px-4 lg:px-12 py-12 lg:py-0">
              <div className="space-y-6 max-w-xl">
                <h1 className="text-[4rem] lg:text-[5.5rem] font-cormorant font-normal leading-[1.1] text-gray-800">
                  Banu Dalamanli
                </h1>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-gray-400"></div>
                  <p className="text-xl text-gray-500 font-cormorant">Psychologist</p>
                </div>
                <p className="text-gray-600 text-lg">
                  I am a mental health counselor and psychologist with extensive training, including the year-long Compassionate Inquiry professional training and a psychology degree from the University of Wisconsin-Milwaukee.
                </p>
                <p className="text-gray-600 text-lg">
                  My practice offers individual therapy sessions both in-person and online, as well as integration therapy to support clients who explore altered states of consciousness through psychedelic medicines. I help clients prepare, set intentions, and integrate insights from these profound experiences.
                </p>
                <p className="text-gray-600 text-lg">
                  My therapeutic approach blends compassion, non-judgmental support, analytical insights, and gentle guidance. I hold space for every emotion, thought, or experience clients bring into therapy, providing an environment of complete acceptance and understanding.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Featured Services */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Services Offered</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Specialized therapeutic approaches tailored to your unique needs
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <Card className="bg-therapy-green/30 border-0">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-therapy-green p-3 w-12 h-12 flex items-center justify-center">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Individual Therapy</h3>
                <p className="text-muted-foreground">
                  One-on-one sessions focused on personal growth, healing, and developing coping strategies.
                </p>
                <Link href="/services#individual" className="text-primary flex items-center gap-1 text-sm font-medium">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-therapy-blue/30 border-0">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-therapy-blue p-3 w-12 h-12 flex items-center justify-center">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Integration Therapy</h3>
                <p className="text-muted-foreground">
                  Holistic approach combining multiple therapeutic modalities for comprehensive healing.
                </p>
                <Link href="/services#integration" className="text-primary flex items-center gap-1 text-sm font-medium">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-therapy-beige border-0">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-therapy-gray p-3 w-12 h-12 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Post-Partum Support</h3>
                <p className="text-muted-foreground">
                  Specialized care for new parents navigating the emotional challenges of the post-partum period.
                </p>
                <Link href="/services#postpartum" className="text-primary flex items-center gap-1 text-sm font-medium">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-therapy-beige">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <Image
              src="/banu-dalamanli-2.jpg"
              width={600}
              height={600}
              alt="Professional therapist portrait"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Your Therapist</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                My therapeutic approach blends compassion, non-judgmental support, analytical insights, and gentle guidance. I hold space for every emotion, thought, or experience clients bring into therapy, providing an environment of complete acceptance and understanding.
              </p>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Clients frequently share that therapy helps them feel more connected and empowered, expressing that they discover a stronger, more authentic version of themselves. Many appreciate the deeply accepting, judgment-free environment that allows them to feel completely seen and heard. Clients also express newfound clarity, autonomy, and a deeper sense of ownership over their lives through our work together.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/about">
                  <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto">
                    Learn More About Me
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Client Experiences</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from those who have embarked on their healing journey
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="italic text-muted-foreground">
                    "Working with this practice has been transformative. I've gained valuable insights and developed
                    coping strategies that have significantly improved my quality of life."
                  </p>
                  <p className="font-medium">— Sarah K.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="italic text-muted-foreground">
                    "I was hesitant to start therapy, but the warm, non-judgmental approach made me feel comfortable
                    from the first session. I'm grateful for the support and guidance."
                  </p>
                  <p className="font-medium">— Michael T.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-therapy-blue/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Begin Your Journey?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Schedule an introductory call to discuss your needs and how we might work together. Please click the provided link to book your initial session.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/book">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  <Calendar className="mr-2 h-4 w-4" /> Book an Introductory Call
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
