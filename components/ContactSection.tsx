import React from 'react'
import Link from 'next/link'

export default function ContactSection() {
  return (
    <section className="py-24 bg-smalt-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[url('/images/grid.svg')] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-smalt-primary/50 to-transparent transform rotate-45 opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-2.5 inline-block -rotate-2 bg-white rounded-md shadow-button mb-6">
            <span className="text-smalt-primary font-bold font-helvetica text-xl">
              Contact
            </span>
          </div>
          
          <h2 className="font-helvetica font-black text-white text-display-md md:text-display-lg mb-8">
            Prêt·e à lancer
            <br />
            votre projet ?
          </h2>
          
          <p className="text-white/90 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Parlons de votre projet autour d'un café ! Je vous aide à clarifier vos besoins 
            et à définir la meilleure approche pour votre contexte.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="mailto:hello@studio-smalt.fr"
              className="bg-smalt-secondary text-smalt-primary px-8 py-4 rounded-full font-medium text-lg hover:bg-smalt-secondary/90 transition-colors shadow-button transform -rotate-1"
            >
              Prendre rendez-vous
            </Link>
            
            <Link 
              href="https://calendly.com/studio-smalt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-smalt-secondary transition-colors font-medium text-lg flex items-center gap-2"
            >
              Voir le calendrier
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transform -rotate-45"
              >
                <path 
                  d="M7 17L17 7M17 7H7M17 7V17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 