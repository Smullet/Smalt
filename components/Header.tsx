import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-[1920px] h-[104px] bg-white shadow-[0_24px_48px_-12px_rgba(10,13,18,0.18)]">
      <div className="absolute left-[318px] top-[24px] w-[1284px] h-[56px] flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="w-[148px] h-[56px] relative">
          <Image
            src="/images/logo.svg"
            alt="Studio Smalt"
            width={148}
            height={56}
            className="object-contain"
          />
        </Link>

        {/* Menu de navigation */}
        <nav className="flex gap-4">
          <Link 
            href="#realisations" 
            className="px-4 py-1.5 rounded-lg text-[#121212] hover:bg-gray-50"
          >
            Réalisations
          </Link>
          <Link 
            href="#services" 
            className="px-4 py-1.5 rounded-lg text-[#121212] hover:bg-gray-50"
          >
            Services
          </Link>
          <Link 
            href="#approche" 
            className="px-4 py-1.5 rounded-lg text-[#121212] hover:bg-gray-50"
          >
            Approche
          </Link>
          <Link 
            href="#contact" 
            className="px-4 py-1.5 rounded-lg text-[#121212] hover:bg-gray-50"
          >
            Contact
          </Link>
        </nav>

        {/* Bouton CTA */}
        <Link 
          href="/contact"
          className="w-[233px] h-[51px] bg-[#102D85] border border-[#121212] rounded-[14px] flex items-center justify-center"
        >
          <span className="text-white">Discuter de votre projet</span>
        </Link>
      </div>
    </header>
  )
} 