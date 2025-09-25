'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky w-full top-0 z-50 bg-white text-black shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          MyCompany
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link href="/" className="hover:text-indigo-400 transition-colors">
            Home
          </Link>
          <Link href="/workers" className="hover:text-indigo-400 transition-colors">
            Workers
          </Link>
          <Link href="/about" className="hover:text-indigo-400 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-indigo-400 transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 font-medium">
          <Link
            href="/"
            className="block py-2 border-b border-gray-700 hover:text-indigo-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/workers"
            className="block py-2 border-b border-gray-700 hover:text-indigo-400"
            onClick={() => setIsOpen(false)}
          >
            Workers
          </Link>
          <Link
            href="/about"
            className="block py-2 border-b border-gray-700 hover:text-indigo-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block py-2 hover:text-indigo-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}
