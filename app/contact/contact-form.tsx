"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useForm, ValidationError } from "@formspree/react"

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnnpleoj");
  
  if (state.succeeded) {
    return (
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="text-center space-y-3">
            <h3 className="text-xl font-bold tracking-tighter">Message Sent Successfully!</h3>
            <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you within 1 business day.</p>
            <Button className="mt-4" onClick={() => window.location.reload()}>Send Another Message</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">
                <p className="text-lg font-medium">Name</p>
              </Label>
              <Input id="name" name="name" placeholder="Enter your name" className="placeholder:text-gray-300" required />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">
                <p className="text-lg font-medium">Email</p>
              </Label>
              <Input id="email" name="email" type="email" placeholder="Enter your email" className="placeholder:text-gray-300" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm" />
            </div>
          </div>
          <div className="space-y-2 mt-4">
            <Label htmlFor="subject">
              <p className="text-lg font-medium">Subject</p>
            </Label>
            <Input id="subject" name="subject" placeholder="Enter the subject" className="placeholder:text-gray-300" required />
            <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-sm" />
          </div>
          <div className="space-y-2 mt-4">
            <Label htmlFor="message">
              <p className="text-lg font-medium">Message</p>
            </Label>
            <Textarea id="message" name="message" placeholder="Enter your message" rows={6} className="placeholder:text-gray-300" required />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm" />
          </div>
          <Button type="submit" className="w-full mt-4" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
