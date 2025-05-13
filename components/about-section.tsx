"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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

  return (
    <section className="w-full py-20 bg-black" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-wine-600" />
            <img
              src="miamifront.png"
              alt="Restaurant interior"
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-wine-600" />
          </motion.div>

          <div className="flex flex-col space-y-6">
            <motion.div variants={itemVariants} className="text-sm text-yellow-400 font-medium tracking-wider uppercase">
              OUR STORY
            </motion.div>

            <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
              Authentic Malaysian & Chinese Cuisine in Miami
            </motion.h2>

            <motion.div variants={itemVariants} className="w-20 h-1 bg-wine-600" />

            <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed">
              Founded in 2005, Miami Rice brings the authentic flavors of Malaysia and China to the heart of Miami on the Gold Coast. Our
              chefs combine traditional cooking techniques with locally sourced ingredients to create an unforgettable
              dining experience.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed">
              Each dish tells a story of cultural heritage and culinary passion, passed down through generations and
              reimagined for the modern palate.
            </motion.p>

            <motion.div variants={itemVariants}>
              <div className="flex items-center space-x-4 mt-4">
                <div className="font-display text-4xl font-bold text-wine-600">20+</div>
                <div className="text-white font-body">Years of culinary excellence</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
