"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Link from "next/link"

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollValue = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrollValue * 0.5}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Navbar />

      {/* Video Background with Parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-black overflow-hidden"
        style={{
          height: "120%",
          top: "-10%",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "brightness(0.4)",
          }}
        >
          <source src="/0514.webm" type="video/webm" />
          {/* Fallback image in case video doesn't load */}
          <img
            src="/0514.png"
            alt="Restaurant background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: "brightness(0.4)",
            }}
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base text-yellow-400 font-medium mb-2 tracking-wider uppercase"
        >
          AUTHENTIC FLAVORS
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          <span className="text-wine-600">Miami</span> Rice
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-display text-xl md:text-2xl text-white mb-8 tracking-wide"
        >
          Malaysian & Chinese Restaurant
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/menu">
            <Button className="bg-wine-600 hover:bg-wine-700 text-white px-8 py-6 text-lg">View Menu</Button>
          </Link>
          <a href="tel:0755352112">
            <Button className="bg-wine-600 hover:bg-wine-700 text-white px-8 py-6 text-lg">Book a Table</Button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
