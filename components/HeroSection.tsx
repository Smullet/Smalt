import React from 'react'

export default function HeroSection() {
  return (
    <section className="relative w-[1920px] h-[1148px] bg-[#12327F]">
      {/* Élément vectoriel décoratif */}
      <div 
        className="absolute transform rotate-[76deg] w-[679.59px] h-[754.89px]"
        style={{
          left: '691.16px',
          top: '239px',
          background: 'rgba(255, 255, 255, 0.1)'
        }}
      />

      {/* Conteneur principal */}
      <div className="absolute left-[318px] top-[369px] w-[1284px] space-y-8">
        {/* Section titre */}
        <div className="space-y-6">
          {/* "Pourquoi Supermood ?" */}
          <h2 className="text-white text-lg">Pourquoi Supermood ?</h2>

          {/* Titre avec fond */}
          <div className="space-y-2.5">
            {/* "Smart" */}
            <div className="text-white text-[108px] font-bold text-center w-[359px] mx-auto">
              Smart
            </div>

            {/* Fond blanc avec texte bleu */}
            <div className="relative -rotate-1">
              <div className="bg-white rounded-md shadow-[2px_2px_0px_rgba(18,18,20,1)] w-[860.78px] h-[116px] flex items-center justify-center">
                <span className="text-[#12327F] text-[108px] font-bold">
                  Alternative
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sous-titre */}
        <p className="text-white text-[30px] w-[648px]">
          Design agile, centré utilisateurs, orienté livraison
        </p>

        {/* Bouton */}
        <button className="bg-[#F9D45C] text-black rounded-[14px] w-[233px] h-[51px] border border-[#121212] mx-auto block">
          Discuter de votre projet
        </button>
      </div>
    </section>
  )
} 