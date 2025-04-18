import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"
import type { Metadata } from "next"

// About page metadata and structured data
export const generateMetadata = async () => {
  // Create structured data for the about page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "About Banu Dalamanli",
    "description": "Learn about Banu Dalamanli's qualifications, experience, and approach to therapy and psychological treatment.",
    "mainEntity": {
      "@type": "Person",
      "name": "Banu Dalamanli",
      "jobTitle": "Psychologist",
      "description": "With over a decade of experience in the field of mental health, passionate about helping individuals navigate life's challenges and discover their inner strength.",
      "knowsAbout": ["Individual Therapy", "Integration Therapy", "Compassionate Inquiry", "Trauma-Informed Care"],
      "hasCredential": [{
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Degree",
        "educationalLevel": "Bachelor",
        "recognizedBy": "University of Wisconsin-Milwaukee"
      }, {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Certificate",
        "name": "Compassionate Inquiry Professional Training"
      }]
    }
  }

  return {
    title: "About Banu Dalamanli | Professional Psychologist Background",
    description: "Learn about Banu Dalamanli's qualifications, therapeutic approach, and professional background in psychology and mental health counseling.",
    openGraph: {
      title: "About Banu Dalamanli | Professional Psychologist Background",
      description: "Learn about Banu Dalamanli's qualifications, therapeutic approach, and professional background in psychology and mental health counseling.",
      url: "/about",
      type: "profile"
    },
    alternates: {
      canonical: "https://banudalamanli.com/about"
    },
    other: {
      "script:ld+json": JSON.stringify(jsonLd)
    }
  }
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-therapy-beige">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dedicated to providing compassionate and effective therapy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Therapist Bio */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <Image
              src="/placeholder.svg?height=600&width=600"
              width={600}
              height={600}
              alt="Professional therapist portrait"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Story</h2>
              <p className="text-muted-foreground">
                With over a decade of experience in the field of mental health, I am passionate about helping
                individuals navigate life's challenges and discover their inner strength. My journey into therapy began
                with my own experiences of growth and healing, which inspired me to support others on their paths.
              </p>
              <p className="text-muted-foreground">
                I believe that therapy is a collaborative process, and I work alongside my clients to create a safe,
                non-judgmental space where exploration and transformation can occur. My approach is warm, empathetic,
                and tailored to each individual's unique needs and goals.
              </p>
              <p className="text-muted-foreground">
                When I'm not in the therapy room, you might find me hiking in nature, practicing mindfulness meditation,
                or enjoying time with my family and pets. These activities help me maintain balance and bring my whole
                self to my work with clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-therapy-beige">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Credentials & Training</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional qualifications and specialized education
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-therapy-blue/30 p-3 w-12 h-12 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>BA in Psychology, University of Wisconsin-Milwaukee</li>
                  <li>Sociology, Bogazici University</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-therapy-beige p-3 w-12 h-12 flex items-center justify-center">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Specialized Training</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Compassionate Inquiry Professional Training (completed)</li>
                  <li>Schema Therapy (ongoing)</li>
                  <li>Polyvagal Theory (informed)</li>
                  <li>Internal Family Systems (IFS) Therapy (informed)</li>
                  <li>Psychedelic Integration Therapy Training (ongoing)</li>
                </ul>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Work Together?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I look forward to supporting you on your journey to wellness.
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
