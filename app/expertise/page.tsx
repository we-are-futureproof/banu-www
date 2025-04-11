import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Heart, Sparkles, Users, Clock, Leaf } from "lucide-react"

export default function ExpertisePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-therapy-beige">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Areas of Expertise</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Specialized knowledge and experience to address your unique concerns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            <Card className="bg-therapy-blue/10 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-therapy-green/30 p-3 w-12 h-12 flex items-center justify-center">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Trauma & PTSD</h3>
                </div>
                <p className="text-muted-foreground">
                  Trained in trauma-informed care and specialized treatments for PTSD and complex trauma. I provide a
                  safe environment for processing traumatic experiences and developing resilience. My approach
                  acknowledges the profound impact of trauma while focusing on healing and growth.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>EMDR therapy for processing traumatic memories</li>
                  <li>Somatic experiencing techniques</li>
                  <li>Trauma-focused cognitive behavioral therapy</li>
                  <li>Skills for managing trauma triggers and symptoms</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-therapy-green/20 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-therapy-blue/30 p-3 w-12 h-12 flex items-center justify-center">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Anxiety & Depression</h3>
                </div>
                <p className="text-muted-foreground">
                  Specialized in evidence-based approaches for treating anxiety disorders and depression, including
                  generalized anxiety, social anxiety, panic disorder, and major depressive disorder.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>...</li>
                  <li>...</li>
                  <li>...</li>
                  <li>...</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-therapy-beige border-0">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-therapy-green/30 p-3 w-12 h-12 flex items-center justify-center">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Life Transitions</h3>
                </div>
                <p className="text-muted-foreground">
                  Skilled in supporting clients through major life changes such as career shifts, relocation,
                  relationship changes, and other significant transitions. I help clients navigate uncertainty and find
                  meaning and purpose during times of change.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Coping strategies for managing uncertainty</li>
                  <li>Identity exploration during transitions</li>
                  <li>Decision-making support</li>
                  <li>Building resilience and adaptability</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-therapy-blue/10 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-therapy-gray p-3 w-12 h-12 flex items-center justify-center">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Self-Esteem & Personal Growth</h3>
                </div>
                <p className="text-muted-foreground">
                  Dedicated to helping clients develop a stronger sense of self, overcome self-criticism, and cultivate
                  self-compassion. I support individuals in identifying their values and strengths to create a more
                  fulfilling life aligned with their authentic selves.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Self-compassion practices</li>
                  <li>Values clarification and alignment</li>
                  <li>Challenging negative core beliefs</li>
                  <li>Building confidence and assertiveness</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-therapy-green/20 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-therapy-blue/30 p-3 w-12 h-12 flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Relationship Issues</h3>
                </div>
                <p className="text-muted-foreground">
                  Experienced in helping individuals and couples navigate relationship challenges, improve
                  communication, and build healthier connections. I work with various relationship structures and am
                  LGBTQ+ affirming in my approach.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Communication skills development</li>
                  <li>Conflict resolution strategies</li>
                  <li>Attachment pattern exploration</li>
                  <li>Building emotional intimacy and trust</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-therapy-beige border-0">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-therapy-gray p-3 w-12 h-12 flex items-center justify-center">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Perinatal Mental Health</h3>
                </div>
                <p className="text-muted-foreground">
                  Specialized training in supporting individuals throughout the perinatal period, including pregnancy,
                  postpartum adjustment, and pregnancy loss. I understand the unique challenges of this life stage and
                  provide compassionate care for new and expecting parents.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Treatment for postpartum depression and anxiety</li>
                  <li>Support for pregnancy and infant loss</li>
                  <li>Guidance for identity shifts and role transitions</li>
                  <li>Strategies for managing relationship changes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialized Training */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-therapy-blue/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Specialized Training & Certifications</h2>
              <p className="text-muted-foreground">
                My expertise is supported by extensive training and ongoing professional development in evidence-based
                therapeutic approaches. I am committed to staying current with the latest research and best practices in
                the field of mental health.
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Degrees</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Psychology, University of Wisconsin-Milwaukee</li>
                    <li>Sociology, Boğaziçi University</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Specialized Continuing Education & Training</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Compassionate Inquiry Professional Training (completed)</li>
                    <li>Internal Family Systems (IFS) Therapy (informed)</li>
                    <li>Schema Therapy (ongoing)</li>
                    <li>Polyvagal Theory (ongoing)</li>
                    <li>Psychedelic Integration Therapy Training (ongoing)</li>
                  </ul>
                </div>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Professional certifications and training materials"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Let's Work Together</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm here to support you on your journey to healing and growth.
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
