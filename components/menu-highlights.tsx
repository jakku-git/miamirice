"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MenuHighlights() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const menuItems = [
    {
      name: "Rendang Beef",
      description: "Slow-cooked beef in rich coconut rendang",
      price: "$30.90",
      image: "rendang beef.png",
      category: "Chef's Recommendations",
    },
    {
      name: "Spicy Malaysian Butter Chicken",
      description: "Butter sauce with home-grown curry leaves",
      price: "$30.90",
      image: "malaysian butter chicken.png",
      category: "Chef's Recommendations",
    },
    {
      name: "Creamy Garlic Butter Sizzling Prawns with Onions",
      description: "Sizzling prawns in creamy garlic butter",
      price: "$30.90",
      image: "creamy garlic butter sizzling prawns.png",
      category: "Chef's Recommendations",
    },
    {
      name: "Crispy Skin Roast Chicken (Canton Style)",
      description: "Cantonese-style crispy roast chicken",
      price: "$30.90",
      image: "crispy roast chicken.png",
      category: "Chef's Recommendations",
    },
  ]

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="w-full py-20 bg-gradient-to-b from-black to-gray-900" id="menu">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-yellow-400 font-medium mb-2"
          >
            OUR SPECIALTIES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Menu Highlights
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:shadow-wine-600/20 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 overflow-hidden">
                  <img
                    src={item.image || "/your-image.jpg"}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-yellow-400 mb-2">{item.category}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-wine-500 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 mb-4">{item.description}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold text-lg">{item.price}</span>
                    <Button variant="ghost" className="text-white hover:text-wine-500 p-0 hover:bg-transparent">
                      Order Now
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/menu">
            <Button className="bg-wine-600 hover:bg-wine-700 text-white px-8 py-6">View Full Menu</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
