"use client"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import React from 'react'

const EcomFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand / Intro */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black font-extrabold shadow">
                N
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Nike Clone</h3>
                <p className="text-sm text-gray-400">Curated products · Responsive support · Secure checkout</p>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              A lightweight demo store built for exploration. Discover quality goods and fast delivery.
            </p>

            <div className="flex items-center gap-3">
              <a
                aria-label="Instagram"
                className="group p-2 rounded-md bg-gray-800 hover:bg-gray-800/60 transition"
                href="#"
              >
                <Instagram className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
              </a>
              <a
                aria-label="Facebook"
                className="group p-2 rounded-md bg-gray-800 hover:bg-gray-800/60 transition"
                href="#"
              >
                <Facebook className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              </a>
              <a
                aria-label="Twitter"
                className="group p-2 rounded-md bg-gray-800 hover:bg-gray-800/60 transition"
                href="#"
              >
                <Twitter className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-white transition-colors cursor-pointer">Guides</li>
                <li className="hover:text-white transition-colors cursor-pointer">Developers</li>
                <li className="hover:text-white transition-colors cursor-pointer">Community</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Help</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Support</li>
                <li className="hover:text-white transition-colors cursor-pointer">FAQs</li>
                <li className="hover:text-white transition-colors cursor-pointer">Shipping</li>
                <li className="hover:text-white transition-colors cursor-pointer">Returns</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-white transition-colors cursor-pointer">Press</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Contact</h4>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-md bg-gray-800">
                <Mail className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <a className="text-sm font-medium text-white hover:text-yellow-400 transition" href="mailto:yogsthapa@gmail.com">yogsthapa@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-md bg-gray-800">
                <Phone className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Phone</div>
                <a className="text-sm font-medium text-white hover:text-green-400 transition" href="tel:+9779865119974">+977-9865119974</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-md bg-gray-800">
                <MapPin className="w-5 h-5 text-rose-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Location</div>
                <p className="text-sm font-medium text-white">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Nike Clone. All rights reserved.</p>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="hidden sm:inline">Payments secured by</span>
            <div className="flex items-center gap-2">
              <div className="w-8 h-5 bg-white/10 rounded-sm flex items-center justify-center text-xs">VISA</div>
              <div className="w-8 h-5 bg-white/10 rounded-sm flex items-center justify-center text-xs">MC</div>
              <div className="w-8 h-5 bg-white/10 rounded-sm flex items-center justify-center text-xs">PP</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default EcomFooter