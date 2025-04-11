import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, Headphones, ArrowRight } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-therapy-beige">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resources</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Educational materials to support your mental health journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Tabs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="blog" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="blog" className="text-sm sm:text-base">
                <BookOpen className="h-4 w-4 mr-2" /> Blog
              </TabsTrigger>
              <TabsTrigger value="podcast" className="text-sm sm:text-base">
                <Headphones className="h-4 w-4 mr-2" /> Podcast
              </TabsTrigger>
              <TabsTrigger value="downloads" className="text-sm sm:text-base">
                <FileText className="h-4 w-4 mr-2" /> Downloads
              </TabsTrigger>
            </TabsList>

            {/* Blog Tab */}
            <TabsContent value="blog" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Blog post featured image"
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6 space-y-2">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Understanding PTSD</h3>
                      <p className="text-sm text-muted-foreground">June 8, 2023 • 5 min read</p>
                    </div>
                    <p className="text-muted-foreground">
                      Learn about the symptoms, causes, and treatment options for Post-Traumatic Stress Disorder.
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Link
                      href="/resources/blog/understanding-ptsd"
                      className="text-primary flex items-center gap-1 text-sm font-medium"
                    >
                      Read more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Blog post featured image"
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6 space-y-2">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Why It's Okay to Argue</h3>
                      <p className="text-sm text-muted-foreground">May 15, 2023 • 4 min read</p>
                    </div>
                    <p className="text-muted-foreground">
                      Healthy conflict is a normal part of relationships. Learn how to argue effectively and
                      respectfully.
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Link
                      href="/resources/blog/healthy-arguments"
                      className="text-primary flex items-center gap-1 text-sm font-medium"
                    >
                      Read more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Blog post featured image"
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6 space-y-2">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">10 Ways to De-Stress</h3>
                      <p className="text-sm text-muted-foreground">April 22, 2023 • 3 min read</p>
                    </div>
                    <p className="text-muted-foreground">
                      Simple, effective techniques to reduce stress and anxiety in your daily life.
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Link
                      href="/resources/blog/destress-techniques"
                      className="text-primary flex items-center gap-1 text-sm font-medium"
                    >
                      Read more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center">
                <Link href="/resources/blog">
                  <Button variant="outline">View All Articles</Button>
                </Link>
              </div>
            </TabsContent>

            {/* Podcast Tab */}
            <TabsContent value="podcast" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        width={80}
                        height={80}
                        alt="Podcast episode thumbnail"
                        className="rounded-md"
                      />
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold">Episode 12: Managing Anxiety</h3>
                        <p className="text-sm text-muted-foreground">May 30, 2023 • 45 min</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      In this episode, we discuss practical strategies for managing anxiety in everyday situations.
                    </p>
                    <audio controls className="w-full">
                      <source src="#" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        width={80}
                        height={80}
                        alt="Podcast episode thumbnail"
                        className="rounded-md"
                      />
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold">Episode 11: Self-Compassion</h3>
                        <p className="text-sm text-muted-foreground">May 16, 2023 • 38 min</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Learn how to cultivate self-compassion and why it's essential for mental well-being.
                    </p>
                    <audio controls className="w-full">
                      <source src="#" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        width={80}
                        height={80}
                        alt="Podcast episode thumbnail"
                        className="rounded-md"
                      />
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold">Episode 10: Navigating Grief</h3>
                        <p className="text-sm text-muted-foreground">May 2, 2023 • 52 min</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      A compassionate exploration of grief and loss, with guidance for the healing journey.
                    </p>
                    <audio controls className="w-full">
                      <source src="#" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        width={80}
                        height={80}
                        alt="Podcast episode thumbnail"
                        className="rounded-md"
                      />
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold">Episode 9: Healthy Boundaries</h3>
                        <p className="text-sm text-muted-foreground">April 18, 2023 • 41 min</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Discover how to set and maintain healthy boundaries in all your relationships.
                    </p>
                    <audio controls className="w-full">
                      <source src="#" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center">
                <Link href="/resources/podcast">
                  <Button variant="outline">View All Episodes</Button>
                </Link>
              </div>
            </TabsContent>

            {/* Downloads Tab */}
            <TabsContent value="downloads" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-therapy-blue/30 p-3 w-12 h-12 flex items-center justify-center">
                        <FileText className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">Anxiety Workbook</h3>
                    </div>
                    <p className="text-muted-foreground">
                      A comprehensive workbook with exercises and tools for managing anxiety.
                    </p>
                    <Link href="/downloads/anxiety-workbook.pdf">
                      <Button variant="outline" className="w-full">
                        Download PDF
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-therapy-green/30 p-3 w-12 h-12 flex items-center justify-center">
                        <FileText className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">Mindfulness Guide</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Simple mindfulness practices to incorporate into your daily routine.
                    </p>
                    <Link href="/downloads/mindfulness-guide.pdf">
                      <Button variant="outline" className="w-full">
                        Download PDF
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-therapy-beige p-3 w-12 h-12 flex items-center justify-center">
                        <FileText className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">Sleep Hygiene Checklist</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Practical tips and strategies for improving your sleep quality.
                    </p>
                    <Link href="/downloads/sleep-hygiene.pdf">
                      <Button variant="outline" className="w-full">
                        Download PDF
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-therapy-blue/30 p-3 w-12 h-12 flex items-center justify-center">
                        <FileText className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">Self-Care Assessment</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Evaluate your current self-care practices and identify areas for improvement.
                    </p>
                    <Link href="/downloads/self-care-assessment.pdf">
                      <Button variant="outline" className="w-full">
                        Download PDF
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-therapy-green/30 p-3 w-12 h-12 flex items-center justify-center">
                        <FileText className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">Communication Worksheet</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Tools and exercises for improving communication in relationships.
                    </p>
                    <Link href="/downloads/communication-worksheet.pdf">
                      <Button variant="outline" className="w-full">
                        Download PDF
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-therapy-beige p-3 w-12 h-12 flex items-center justify-center">
                        <FileText className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">Grounding Techniques</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Quick exercises to help you stay present during moments of anxiety or distress.
                    </p>
                    <Link href="/downloads/grounding-techniques.pdf">
                      <Button variant="outline" className="w-full">
                        Download PDF
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center">
                <Link href="/resources/downloads">
                  <Button variant="outline">View All Resources</Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-therapy-blue/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Receive monthly mental health tips, resources, and updates.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit" className="w-full sm:w-auto">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
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
