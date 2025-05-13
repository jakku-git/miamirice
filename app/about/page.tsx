"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { number: "20+", text: "Years of Experience" },
    { number: "2", text: "Culinary Traditions" },
    { number: "100+", text: "Authentic Dishes" },
    { number: "1000s", text: "Happy Customers" },
  ]

  return (
    <>
      <div className="min-h-screen bg-black">
        <div className="h-[500px] relative">
          <div
            className="absolute inset-0 bg-black"
            style={{
              backgroundImage: "url('/miamifrontzoomed.png')",
              backgroundSize: "cover",
              backgroundPosition: "center 20%",
              filter: "brightness(0.5) contrast(1.1)",
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
              Our Story
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="text-sm text-yellow-400 font-medium mb-2 tracking-wider uppercase">OUR JOURNEY</div>
              <h2 className="font-display text-3xl font-bold text-white mb-6 tracking-tight">A Taste of Tradition, Reinvented on the Gold Coast</h2>
              <div className="w-20 h-1 bg-wine-600 mb-6" />
              <p className="text-gray-300 mb-4 leading-relaxed">
                Since opening our doors, Miami Rice has become a local favorite for those craving bold, authentic flavors from across Malaysia and China. Tucked away on the Gold Coast, we're more than just a restaurant—we're a celebration of vibrant Southeast Asian cuisine.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Our menu brings together the best of both worlds: the spice-rich traditions of Malaysian street food and the timeless comfort of classic Chinese dishes. Every plate is crafted with quality ingredients, attention to balance, and a deep respect for culinary heritage.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Our chefs bring decades of experience from both Malaysian and Chinese kitchens, ensuring that every dish tells a story of tradition while embracing modern culinary techniques. From our signature Rendang Beef to our authentic Sweet & Sour Pork, each recipe has been perfected over generations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Whether you're dining in, grabbing takeaway, or hosting a special celebration, we invite you to experience the color, warmth, and generosity of Asian dining. Right here in the heart of the Gold Coast.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="miami rice interior.png"
                  alt="Miami Rice Restaurant Interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="text-center my-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-yellow-400 font-medium mb-2 tracking-wider uppercase"
            >
              OUR ACHIEVEMENTS
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
            >
              By the Numbers
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-wine-600 mx-auto mb-12"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800/70 transition-colors duration-300"
                >
                  <div className="font-display text-4xl font-bold text-wine-600 mb-2">{stat.number}</div>
                  <div className="text-white font-body">{stat.text}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="text-sm text-yellow-400 font-medium mb-2 tracking-wider uppercase">OUR PROMISE</div>
            <h2 className="font-display text-3xl font-bold text-white mb-6 tracking-tight">Quality & Authenticity in Every Dish</h2>
            <div className="w-24 h-1 bg-wine-600 mx-auto mb-8" />
            <p className="text-gray-300 leading-relaxed">
              At Miami Rice, we're committed to bringing you the most authentic flavors of Malaysia and China. Our dishes are prepared with the finest ingredients, traditional techniques, and a passion for culinary excellence. Join us for an unforgettable dining experience that celebrates the rich heritage of Asian cuisine.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
