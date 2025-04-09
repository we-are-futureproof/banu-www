import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Sparkles, Clock } from "lucide-react"

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
                Individual therapy provides a safe, confidential space for you to explore your thoughts, feelings, and
                behaviors with professional guidance. Through our one-on-one sessions, we'll work together to address
                your specific concerns, develop coping strategies, and foster personal growth.
              </p>
              <p className="text-muted-foreground">
                This therapeutic approach is highly personalized, allowing us to focus exclusively on your unique needs
                and goals. Whether you're dealing with anxiety, depression, life transitions, relationship issues, or
                simply seeking greater self-awareness, individual therapy offers the support and tools you need to
                navigate life's challenges.
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
                Integration therapy is a holistic approach that combines multiple therapeutic modalities to address the
                whole person—mind, body, and spirit. This comprehensive method recognizes that healing often requires
                attention to various aspects of our experience and draws from different therapeutic traditions to create
                a personalized treatment plan.
              </p>
              <p className="text-muted-foreground">
                By integrating techniques from cognitive-behavioral therapy, mindfulness practices, somatic
                experiencing, and other evidence-based approaches, we can address complex issues more effectively. This
                approach is particularly beneficial for those who have tried traditional therapy but feel they need a
                more multifaceted approach to healing.
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
                The transition to parenthood brings profound joy but can also involve unexpected challenges. Post-partum
                support therapy provides specialized care for new parents navigating the emotional and psychological
                adjustments of the post-partum period, including post-partum depression, anxiety, and adjustment
                difficulties.
              </p>
              <p className="text-muted-foreground">
                This therapeutic approach acknowledges the unique stressors of new parenthood and offers evidence-based
                strategies for managing emotions, building confidence in parenting skills, and nurturing your
                relationship with your baby and partner. You don't have to navigate this transformative time alone.
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
