"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "@/components/ui/use-toast"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  })

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit message')
      }

      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
        className: "bg-green-600 text-white"
      })

      // Reset form
      reset()
    } catch (error) {
      console.error('Contact form submission error:', error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us directly at 07 5535 2112.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="min-h-screen bg-black">
        <div className="h-[400px] relative">
          <div
            className="absolute inset-0 bg-black"
            style={{
              backgroundImage: "url('/your-image.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.4)",
            }}
          />
          <Navbar />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
            >
              Contact Us
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-24 h-1 bg-wine-600 mx-auto"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="font-display text-2xl font-bold text-white mb-6 tracking-tight">Get in Touch</h2>

              <div className="flex flex-col space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-wine-200 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-wine-600" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Outrigger Resort, 2007 Gold Coast Hwy, Gold Coast, Queensland 4220, Australia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-wine-200 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-wine-600" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <p className="text-gray-400 leading-relaxed">07 5535 2112</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-wine-200 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-wine-600" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-400 leading-relaxed">info@miamirice.com.au</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-wine-200 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-wine-600" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Hours</h4>
                    <div className="text-gray-400 leading-relaxed">
                      <div className="mb-1 font-semibold">Monday to Sunday</div>
                      <div>Lunch: 11:30am – 2:30pm</div>
                      <div>Dinner: 4:30pm – 9:30pm</div>
                      <div className="text-xs italic text-yellow-400 mt-2">Subject to change on public holidays</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-2xl font-bold text-white mb-6 tracking-tight">Send Us a Message</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-white mb-1 block font-body">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-gray-800 border-gray-700 text-white" 
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="text-white mb-1 block font-body">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-gray-800 border-gray-700 text-white"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="text-white mb-1 block font-body">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    placeholder="Your phone number"
                    className="bg-gray-800 border-gray-700 text-white"
                    {...register("phone", { 
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9+\s-()]{8,}$/,
                        message: "Please enter a valid phone number"
                      }
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="text-white mb-1 block font-body">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Message subject"
                    className="bg-gray-800 border-gray-700 text-white"
                    {...register("subject", { required: "Subject is required" })}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="text-white mb-1 block font-body">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="bg-gray-800 border-gray-700 text-white"
                    rows={6}
                    {...register("message", { 
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters long"
                      }
                    })}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-wine-600 hover:bg-wine-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>

          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full h-[400px] rounded-lg overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps?q=Outrigger+Resort,+2007+Gold+Coast+Hwy,+Gold+Coast,+Queensland+4220,+Australia&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
