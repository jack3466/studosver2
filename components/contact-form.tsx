"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/MagneticButton"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2, Loader2 } from "lucide-react"

const services = [
  { id: "resume", label: "Resume / CV Preparation" },
  { id: "applications", label: "Application Filling Support" },
  { id: "career", label: "Career / Internship Assistance" },
  { id: "academic", label: "Academic Support" },
  { id: "skills", label: "Skill Support" },
  { id: "digital", label: "Digital & Practical Support" },
]

interface ContactFormProps {
  preselectedService?: string
}

export function ContactForm({ preselectedService }: ContactFormProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(preselectedService ? [preselectedService] : [])
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, serviceId])
    } else {
      setSelectedServices(selectedServices.filter((id) => id !== serviceId))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    // --- YOUR API KEY IS HERE NOW ---
    formData.append("access_key", "e4d74324-58a2-4380-a067-5128dcee11f9")
    // --------------------------------

    formData.append("services_required", selectedServices.join(", "))

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        console.error("Form Error:", data)
        alert("Something went wrong: " + data.message);
      }
    } catch (error) {
      alert("Error submitting form. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
        <p className="text-muted-foreground">We have received your request and will get back to you soon.</p>
        <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
          Send another response
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" placeholder="Enter your email" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required />
      </div>

      <div className="space-y-3">
        <Label>Services Required</Label>
        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.id} className="flex items-center space-x-2">
              <Checkbox
                id={service.id}
                checked={selectedServices.includes(service.id)}
                onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
              />
              <label htmlFor={service.id} className="text-sm text-muted-foreground cursor-pointer">
                {service.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea id="message" name="message" placeholder="Tell us about your requirements..." rows={4} />
      </div>

      <MagneticButton type="submit" size="lg" className="w-full" disabled={isSubmitting} strength={0.2}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Request Support"
        )}
      </MagneticButton>
    </form>
  )
}