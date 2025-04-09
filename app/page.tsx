import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Heart, Leaf, MessageCircle, MessageSquare } from "lucide-react"

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
                src="/placeholder.svg?height=1000&width=800"
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
                  Therapy Practice
                </h1>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-gray-400"></div>
                  <p className="text-xl text-gray-500 font-cormorant">Ph.D. Clinical Psychotherapist</p>
                </div>
                <p className="text-gray-600 text-lg">
                  I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or
                  double click me to add your own content and make changes to the font. I'm a great place for you to
                  tell a story and let your users know a little more about you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat button */}
        <div className="fixed bottom-8 right-8 z-10">
          <Button
            variant="secondary"
            className="rounded-full px-6 py-6 h-auto bg-gray-400/80 hover:bg-gray-400 text-white"
          >
            <span className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Let's Chat!
            </span>
          </Button>
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
              src="/placeholder.svg?height=600&width=600"
              width={600}
              height={600}
              alt="Professional therapist portrait"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Your Therapist</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                With over 10 years of experience, I provide a warm, non-judgmental space where you can explore your
                thoughts and feelings freely. My approach is collaborative, empathetic, and tailored to your unique
                needs.
              </p>
              <p className="text-muted-foreground md:text-xl/relaxed">
                I believe in the innate capacity for growth and healing that exists within each of us, and I'm committed
                to helping you access your inner resources for positive change.
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
                Take the first step toward healing and personal growth today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/book">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  <Calendar className="mr-2 h-4 w-4" /> Book an Appointment
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
