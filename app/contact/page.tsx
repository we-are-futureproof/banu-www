import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-therapy-beige">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h1>
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
                <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Have questions about therapy or want to schedule an appointment? Fill out the form below, and I'll get
                  back to you as soon as possible.
                </p>
              </div>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Enter the subject" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" rows={6} />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
                <p className="text-muted-foreground">
                  You can also reach out directly using the contact information below.
                </p>
              </div>
              <div className="grid gap-6">
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div className="space-y-1">
                      <h3 className="font-medium">Office Location</h3>
                      <p className="text-sm text-muted-foreground">
                        123 Therapy Street
                        <br />
                        Suite 456
                        <br />
                        Wellness City, WC 12345
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div className="space-y-1">
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-muted-foreground">
                        <a href="tel:+1234567890" className="hover:text-primary">
                          (123) 456-7890
                        </a>
                      </p>
                      <p className="text-xs text-muted-foreground">Monday - Friday, 9:00 AM - 5:00 PM</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div className="space-y-1">
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        <a href="mailto:info@therapypractice.com" className="hover:text-primary">
                          info@therapypractice.com
                        </a>
                      </p>
                      <p className="text-xs text-muted-foreground">I typically respond within 24-48 hours.</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <div className="space-y-1">
                      <h3 className="font-medium">Office Hours</h3>
                      <div className="text-sm text-muted-foreground">
                        <div className="grid grid-cols-2 gap-2">
                          <div>Monday - Thursday</div>
                          <div>9:00 AM - 7:00 PM</div>
                          <div>Friday</div>
                          <div>9:00 AM - 5:00 PM</div>
                          <div>Saturday</div>
                          <div>10:00 AM - 2:00 PM</div>
                          <div>Sunday</div>
                          <div>Closed</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-therapy-beige">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Find My Office</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conveniently located in the heart of Wellness City
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-xl overflow-hidden h-[400px] w-full bg-muted">
            {/* Map would go here - placeholder for now */}
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <p className="text-muted-foreground">Interactive Map Would Be Displayed Here</p>
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
              <Link href="/book">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Book an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
