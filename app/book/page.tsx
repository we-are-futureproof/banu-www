"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, ChevronRight, Calendar, Clock, Info } from "lucide-react"

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const nextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  return (
    <div className="flex flex-col min-h-screen bg-therapy-beige/30">
      <div className="container px-4 py-12 md:py-24 lg:py-32 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>
          </div>

          {/* Step 1: Select Service */}
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Schedule Your Appointment</CardTitle>
                <CardDescription>Step 1 of 3: Select a Service</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="service">Service Type</Label>
                  <RadioGroup value={selectedService} onValueChange={setSelectedService}>
                    <div className="flex items-center space-x-2 border rounded-md p-4 mb-2">
                      <RadioGroupItem value="individual" id="individual" />
                      <Label htmlFor="individual" className="flex-1 cursor-pointer">
                        <div className="font-medium">Individual Therapy</div>
                        <div className="text-sm text-muted-foreground">50 minutes • $175</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-4 mb-2">
                      <RadioGroupItem value="integration" id="integration" />
                      <Label htmlFor="integration" className="flex-1 cursor-pointer">
                        <div className="font-medium">Integration Therapy</div>
                        <div className="text-sm text-muted-foreground">75 minutes • $225</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-4 mb-2">
                      <RadioGroupItem value="postpartum" id="postpartum" />
                      <Label htmlFor="postpartum" className="flex-1 cursor-pointer">
                        <div className="font-medium">Post-Partum Support</div>
                        <div className="text-sm text-muted-foreground">60 minutes • $200</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-4">
                      <RadioGroupItem value="consultation" id="consultation" />
                      <Label htmlFor="consultation" className="flex-1 cursor-pointer">
                        <div className="font-medium">Initial Consultation</div>
                        <div className="text-sm text-muted-foreground">60 minutes • $200</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="flex justify-end">
                  <Button onClick={nextStep} disabled={!selectedService}>
                    Next <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Select Date and Time */}
          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Schedule Your Appointment</CardTitle>
                <CardDescription>Step 2 of 3: Select Date and Time</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> Select a Date
                    </Label>
                    <div className="border rounded-md p-4">
                      {/* Calendar would go here - simplified for this example */}
                      <div className="grid grid-cols-7 gap-1 text-center text-sm">
                        <div className="text-muted-foreground">Su</div>
                        <div className="text-muted-foreground">Mo</div>
                        <div className="text-muted-foreground">Tu</div>
                        <div className="text-muted-foreground">We</div>
                        <div className="text-muted-foreground">Th</div>
                        <div className="text-muted-foreground">Fr</div>
                        <div className="text-muted-foreground">Sa</div>
                        {/* Example calendar days */}
                        {Array.from({ length: 30 }, (_, i) => (
                          <div
                            key={i}
                            className={`p-2 rounded-md cursor-pointer hover:bg-muted ${
                              selectedDate === `2023-04-${i + 1}` ? "bg-primary text-primary-foreground" : ""
                            }`}
                            onClick={() => setSelectedDate(`2023-04-${i + 1}`)}
                          >
                            {i + 1}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1">
                      <Clock className="h-4 w-4" /> Available Times
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"].map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          className="w-full"
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    <ChevronLeft className="mr-1 h-4 w-4" /> Back
                  </Button>
                  <Button onClick={nextStep} disabled={!selectedDate || !selectedTime}>
                    Next <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Client Information */}
          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Schedule Your Appointment</CardTitle>
                <CardDescription>Step 3 of 3: Your Information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="insurance">Insurance Provider (if applicable)</Label>
                  <Select>
                    <SelectTrigger id="insurance">
                      <SelectValue placeholder="Select your insurance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None / Self-Pay</SelectItem>
                      <SelectItem value="bcbs">Blue Cross Blue Shield</SelectItem>
                      <SelectItem value="aetna">Aetna</SelectItem>
                      <SelectItem value="cigna">Cigna</SelectItem>
                      <SelectItem value="united">United Healthcare</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    placeholder="Please share any information that would be helpful for your therapist to know before your first appointment."
                    rows={4}
                  />
                </div>
                <div className="flex items-start space-x-2 text-sm">
                  <Info className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    By booking this appointment, you agree to our{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      terms and conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      privacy policy
                    </Link>
                    .
                  </p>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    <ChevronLeft className="mr-1 h-4 w-4" /> Back
                  </Button>
                  <Button>Confirm Booking</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
