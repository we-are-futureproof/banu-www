import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Brain, Sparkles, Leaf } from "lucide-react"

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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Philosophy</h2>
              <p className="text-muted-foreground">
                My therapeutic approach is grounded in the belief that each person has an innate capacity for growth,
                healing, and transformation. I view therapy as a collaborative journey where we work together to explore
                your challenges, uncover your strengths, and develop practical strategies for positive change.
              </p>
              <p className="text-muted-foreground">
                I recognize that you are the expert on your own life, and my role is to provide guidance, support, and
                evidence-based tools that empower you to navigate your unique path. Rather than offering a
                one-size-fits-all approach, I integrate various therapeutic modalities to create a personalized
                treatment plan that addresses your specific needs and goals.
              </p>
              <p className="text-muted-foreground">
                Throughout our work together, I maintain a stance of cultural humility, recognizing the importance of
                your unique background, values, and experiences. My practice is inclusive and affirming of all
                identities, and I am committed to creating a safe, non-judgmental space where you can explore your
                authentic self.
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
                <h3 className="text-xl font-bold">Cognitive-Behavioral Therapy (CBT)</h3>
                <p className="text-muted-foreground">
                  CBT focuses on identifying and changing unhelpful thought patterns and behaviors that contribute to
                  emotional distress. This structured approach helps you develop practical skills to manage symptoms and
                  improve your quality of life.
                </p>
                <ul className="list-disc pl-5 text-left space-y-1 text-muted-foreground">
                  <li>Identify and challenge negative thought patterns</li>
                  <li>Develop healthier coping strategies</li>
                  <li>Practice new behaviors in a supportive environment</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-therapy-green/30 p-3 w-12 h-12 flex items-center justify-center">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Person-Centered Therapy</h3>
                <p className="text-muted-foreground">
                  This humanistic approach emphasizes empathy, unconditional positive regard, and authenticity in the
                  therapeutic relationship. By creating a safe, non-judgmental space, person-centered therapy
                  facilitates self-discovery and personal growth.
                </p>
                <ul className="list-disc pl-5 text-left space-y-1 text-muted-foreground">
                  <li>Focus on your unique experiences and perspective</li>
                  <li>Develop greater self-awareness and self-acceptance</li>
                  <li>Empower you to trust your inner wisdom</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-therapy-beige p-3 w-12 h-12 flex items-center justify-center">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">EMDR Therapy</h3>
                <p className="text-muted-foreground">
                  Eye Movement Desensitization and Reprocessing (EMDR) is an evidence-based approach for treating trauma
                  and other distressing life experiences. This structured therapy helps you process difficult memories
                  and develop new, adaptive beliefs.
                </p>
                <ul className="list-disc pl-5 text-left space-y-1 text-muted-foreground">
                  <li>Process traumatic memories safely</li>
                  <li>Reduce emotional distress related to past experiences</li>
                  <li>Develop more adaptive beliefs about yourself</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-therapy-blue/30 p-3 w-12 h-12 flex items-center justify-center">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Mindfulness-Based Approaches</h3>
                <p className="text-muted-foreground">
                  Mindfulness practices help you develop present-moment awareness without judgment. These approaches
                  enhance your ability to respond thoughtfully to challenges rather than reacting automatically.
                </p>
                <ul className="list-disc pl-5 text-left space-y-1 text-muted-foreground">
                  <li>Cultivate present-moment awareness</li>
                  <li>Develop greater emotional regulation skills</li>
                  <li>Reduce stress and enhance overall well-being</li>
                </ul>
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
                together. We'll discuss what brings you to therapy, your background, and your goals. This is also an
                opportunity for you to ask questions and determine if we're a good fit.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Assessment and Goal Setting</h3>
              <p className="text-muted-foreground">
                In the early sessions, we'll conduct a thorough assessment to understand your concerns, strengths, and
                needs. Together, we'll establish clear, meaningful goals for therapy that align with your values and
                aspirations.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Ongoing Therapy</h3>
              <p className="text-muted-foreground">
                Regular sessions provide a consistent space for exploration, skill-building, and growth. We'll work
                collaboratively, adjusting our approach as needed to ensure you're making progress toward your goals.
                Sessions typically last 50 minutes and are scheduled weekly or biweekly.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Progress Monitoring</h3>
              <p className="text-muted-foreground">
                Throughout our work together, we'll regularly review your progress and adjust our approach as needed.
                This collaborative process ensures that therapy remains relevant and effective for your evolving needs.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Termination</h3>
              <p className="text-muted-foreground">
                As you achieve your goals and develop the skills to navigate challenges independently, we'll work toward
                a thoughtful conclusion of therapy. This phase includes consolidating your gains, planning for continued
                growth, and discussing strategies for maintaining your progress.
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
                  Book an Appointment
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
