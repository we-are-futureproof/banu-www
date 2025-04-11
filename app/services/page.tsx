import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Sparkles, Clock } from "lucide-react"
import type { Metadata } from "next"

// Services page metadata and structured data
export const generateMetadata = async () => {
  // Create structured data for the services page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Therapy Services Offered by Banu Dalamanli",
    "description": "Specialized therapeutic approaches including individual therapy, integration therapy, and online therapy sessions.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Individual Therapy",
          "description": "Personalized 50-minute sessions either online or in-person, exploring areas in your life, relationships, and internal world.",
          "provider": {
            "@type": "Person",
            "name": "Banu Dalamanli",
            "jobTitle": "Psychologist"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Integration Therapy",
          "description": "Support for those exploring altered states of consciousness through psychedelic medicines, helping with preparation and integration.",
          "provider": {
            "@type": "Person",
            "name": "Banu Dalamanli",
            "jobTitle": "Psychologist"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Online Therapy",
          "description": "Secure, convenient therapy sessions via video conferencing for clients who prefer remote sessions.",
          "provider": {
            "@type": "Person",
            "name": "Banu Dalamanli",
            "jobTitle": "Psychologist"
          }
        }
      }
    ]
  }

  return {
    title: "Therapy Services | Banu Dalamanli, Psychologist",
    description: "Explore the range of therapeutic services offered by Banu Dalamanli, including individual therapy, integration therapy, and online sessions.",
    openGraph: {
      title: "Therapy Services | Banu Dalamanli, Psychologist",
      description: "Explore the range of therapeutic services offered by Banu Dalamanli, including individual therapy, integration therapy, and online sessions.",
      url: "/services",
      type: "website"
    },
    alternates: {
      canonical: "https://banudalamanli.com/services"
    },
    other: {
      "script:ld+json": JSON.stringify(jsonLd)
    }
  }
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-therapy-beige">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Services Offered</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Specialized therapeutic approaches tailored to your unique needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Therapy */}
      <section id="individual" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-therapy-green/30 px-3 py-1 text-sm">Core Service</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Individual Therapy</h2>
              <p className="text-muted-foreground">
                Individual therapy consists of personalized 50-minute sessions either online or in-person. Together, we explore areas in your life, relationships, and internal world that you wish to understand or heal, creating a tailored therapeutic journey based on your unique goals and needs.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">What to Expect:</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>50-minute sessions tailored to your specific needs</li>
                  <li>A collaborative approach to setting and achieving goals</li>
                  <li>Evidence-based therapeutic techniques</li>
                  <li>A non-judgmental, supportive environment</li>
                  <li>Regular progress assessments and adjustments</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/book">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    Book a Session
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Individual therapy session"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* Integration Therapy */}
      <section id="integration" className="w-full py-12 md:py-24 lg:py-32 bg-therapy-blue/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Integration therapy session"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-therapy-blue/30 px-3 py-1 text-sm">Specialized Approach</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Integration Therapy</h2>
              <p className="text-muted-foreground">
              Integration therapy supports clients exploring altered states of consciousness through psychedelics such as ayahuasca, psilocybin, MDMA, and ketamine. Sessions focus on pre-experience preparation, including intention setting, and post-experience integration to apply insights gained, promoting sustained growth and transformation.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Key Components:</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Customized combination of therapeutic techniques</li>
                  <li>Mind-body connection awareness and practices</li>
                  <li>Integration of past experiences with present awareness</li>
                  <li>Development of comprehensive coping strategies</li>
                  <li>Holistic approach to wellness and personal growth</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/book">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    Book a Session
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Partum Support */}
      <section id="postpartum" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-therapy-green/30 px-3 py-1 text-sm">Specialized Support</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Post-Partum Support</h2>
              <p className="text-muted-foreground">
                This specialized package provides essential emotional and psychological support during the critical transition into parenthood. Beginning one month before birth and continuing two months afterward, clients benefit from 10 flexible sessions. Support addresses the psychological shifts triggered by becoming a parent, including exploration and healing of personal childhood experiences, emotional resilience, and coping strategies to navigate this transformative time.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Support Includes:</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Assessment and treatment of post-partum mood disorders</li>
                  <li>Strategies for managing sleep deprivation and fatigue</li>
                  <li>Support for identity shifts and role transitions</li>
                  <li>Techniques for managing anxiety and intrusive thoughts</li>
                  <li>Guidance for strengthening the parent-child bond</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/book">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    Book a Session
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Post-partum support session"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-therapy-beige">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Additional Services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive support for various needs
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-therapy-blue/30 p-3 w-12 h-12 flex items-center justify-center">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Couples Therapy</h3>
                <p className="text-muted-foreground">
                  Strengthen your relationship through improved communication, conflict resolution, and deeper
                  connection.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-therapy-green/30 p-3 w-12 h-12 flex items-center justify-center">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Trauma Therapy</h3>
                <p className="text-muted-foreground">
                  Process and heal from past trauma using evidence-based approaches in a safe, supportive environment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-therapy-beige p-3 w-12 h-12 flex items-center justify-center">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Brief Therapy</h3>
                <p className="text-muted-foreground">
                  Solution-focused, short-term therapy for specific issues with practical strategies and clear goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Rates & Insurance</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Transparent pricing and payment options
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-12">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Session Rates</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-muted-foreground">Initial Consultation (60 min)</div>
                    <div className="font-medium text-right">$200</div>
                    <div className="text-muted-foreground">Individual Therapy (50 min)</div>
                    <div className="font-medium text-right">$175</div>
                    <div className="text-muted-foreground">Couples Therapy (75 min)</div>
                    <div className="font-medium text-right">$225</div>
                    <div className="text-muted-foreground">Group Session (90 min)</div>
                    <div className="font-medium text-right">$75</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Insurance</h3>
                  <p className="text-muted-foreground">
                    I am an in-network provider with several major insurance plans, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Blue Cross Blue Shield</li>
                    <li>Aetna</li>
                    <li>Cigna</li>
                    <li>United Healthcare</li>
                  </ul>
                  <p className="text-muted-foreground">
                    For out-of-network plans, I can provide a superbill for you to submit for potential reimbursement.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Payment Options</h3>
                  <p className="text-muted-foreground">
                    Payment is due at the time of service. I accept credit cards, HSA/FSA cards, and electronic
                    payments.
                  </p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Begin Your Healing Journey?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take the first step toward positive change today.
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
