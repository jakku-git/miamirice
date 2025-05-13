"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form"
import { toast } from "@/components/ui/use-toast"

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    defaultValues: {
      name: "",
      email: "",
      date: "",
      time: "",
      guests: "",
      message: ""
    }
  })

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit reservation')
      }

      toast({
        title: "Reservation Request Sent",
        description: "We'll contact you shortly to confirm your reservation.",
        className: "bg-green-600 text-white"
      })

      // Reset form
      setValue("name", "")
      setValue("email", "")
      setValue("date", "")
      setValue("time", "")
      setValue("guests", "")
      setValue("message", "")
    } catch (error) {
      console.error('Reservation submission error:', error)
      toast({
        title: "Error",
        description: "Failed to submit reservation. Please try again or call us directly at 07 5535 2112.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const timeSlots = [
    // Lunch service
    "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    // Dinner service
    "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
  ]

  return (
    <section className="w-full py-20 bg-black" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-yellow-400 font-medium mb-2 tracking-wider uppercase"
          >
            GET IN TOUCH
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
          >
            Contact & Reservations
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-wine-600 mx-auto"
          />
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div className="flex flex-col space-y-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-white mb-6">Restaurant Information</h3>

              <div className="flex flex-col space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-wine-200 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-wine-600" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-gray-400">
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
                    <p className="text-gray-400">07 5535 2112</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-wine-200 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-wine-600" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-400">info@miamirice.com.au</p>
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
          </div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-6">Make a Reservation</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-white mb-1 block">
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
                  <label htmlFor="email" className="text-white mb-1 block">
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="text-white mb-1 block">
                    Date
                  </label>
                  <Input 
                    id="date" 
                    type="date" 
                    className="bg-gray-800 border-gray-700 text-white"
                    {...register("date", { required: "Date is required" })}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="time" className="text-white mb-1 block">
                    Time
                  </label>
                  <Select onValueChange={(value) => setValue("time", value)}>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time} className="text-white hover:bg-gray-700">
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.time && (
                    <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="text-white mb-1 block">
                  Number of Guests
                </label>
                <Input
                  id="guests"
                  type="number"
                  placeholder="Number of guests"
                  className="bg-gray-800 border-gray-700 text-white"
                  {...register("guests", { 
                    required: "Number of guests is required",
                    min: { value: 1, message: "Minimum 1 guest" },
                    max: { value: 20, message: "Maximum 20 guests" }
                  })}
                />
                {errors.guests && (
                  <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="text-white mb-1 block">
                  Special Requests
                </label>
                <Textarea
                  id="message"
                  placeholder="Any special requests or dietary requirements"
                  className="bg-gray-800 border-gray-700 text-white"
                  {...register("message")}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-wine-600 hover:bg-wine-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Book Table"}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
