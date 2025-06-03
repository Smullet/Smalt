"use client"

import React from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FreelanceSection from '@/components/FreelanceSection'
import SolutionsSection from '@/components/SolutionsSection'
import ApprochSection from '@/components/ApprochSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FreelanceSection />
      <SolutionsSection />
      <ApprochSection />
      <ContactSection />
    </main>
  )
}
