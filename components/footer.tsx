"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center mb-4">
                <span className="text-2xl font-display font-bold text-white tracking-tight">
                  <span className="text-wine-600">Miami</span> Rice
                </span>
              </Link>
              <p className="text-gray-400 mb-4 font-body leading-relaxed">
                Authentic Malaysian & Chinese cuisine at Outrigger Resort, Gold Coast.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-wine-600 transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-wine-600 transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-wine-600 transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-white font-bold mb-4 tracking-tight">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-wine-600 transition-colors duration-300 font-body tracking-wide">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="text-gray-400 hover:text-wine-600 transition-colors duration-300 font-body tracking-wide">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-wine-600 transition-colors duration-300 font-body tracking-wide">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-wine-600 transition-colors duration-300 font-body tracking-wide">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-white font-bold mb-4 tracking-tight">Opening Hours</h3>
              <div className="space-y-2 text-gray-400 leading-relaxed font-body">
                <div className="mb-1 font-semibold">Monday to Sunday</div>
                <div>Lunch: 11:30am – 2:30pm</div>
                <div>Dinner: 4:30pm – 9:30pm</div>
                <div className="text-xs italic text-yellow-400 mt-2">Subject to change on public holidays</div>
              </div>
            </motion.div>
          </div>

          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-white font-bold mb-4 tracking-tight">Newsletter</h3>
              <p className="text-gray-400 mb-4 font-body leading-relaxed">Subscribe to our newsletter for special offers and updates.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-wine-600 font-body"
                />
                <button
                  type="submit"
                  className="bg-wine-600 text-white px-4 py-2 rounded-r-md hover:bg-wine-700 transition-colors duration-300 font-body tracking-wide"
                >
                  Join
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 font-body text-sm">
            © {new Date().getFullYear()} Miami Rice Malaysian & Chinese Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
