"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The Nasi Lemak here is the most authentic I've had outside of Malaysia. The flavors transported me back to Kuala Lumpur!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      text: "As someone who grew up with Chinese cuisine, I can confidently say Miami Rice serves some of the most authentic dishes I've had in the States.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      text: "The fusion of Malaysian and Chinese flavors is executed perfectly. The Char Kway Teow is a must-try!",
      rating: 4,
    },
  ]

  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current])

  return (
    <section className="w-full py-20 bg-gray-900" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-yellow-400 font-medium mb-2 tracking-wider uppercase"
          >
            CUSTOMER REVIEWS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
          >
            What Our Customers Say
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-wine-600 mx-auto"
          />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 text-lg italic mb-6 text-center">"{testimonials[current].text}"</p>

              <p className="text-white font-semibold text-center">{testimonials[current].name}</p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-wine-600 rounded-full p-2 text-white hover:bg-wine-700 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-wine-600 rounded-full p-2 text-white hover:bg-wine-700 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
