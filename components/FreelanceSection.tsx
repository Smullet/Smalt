import React from 'react'

export default function FreelanceSection() {
  return (
    <section className="bg-smalt-dark py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Badge Studio Smalt */}
          <div className="inline-block -rotate-2 bg-white px-4 py-2 rounded-lg shadow-button mb-8">
            <span className="text-smalt-primary font-bold font-helvetica text-xl">
              Studio Smalt
            </span>
          </div>
          
          <h2 className="text-white font-helvetica font-black text-display-md md:text-display-lg mb-8">
            Freelance oui,
            <br />
            freestyle non
          </h2>
          
          <div className="text-white/90 text-body-lg space-y-6 mb-12">
            <p>
              Chez Studio Smalt, je ne fais pas de design "au feeling".
              Je suis <span className="font-bold">Salomé Mullet</span>, freelance en product design, 
              et j'accompagne les équipes produit, tech et marketing dans la création 
              d'interfaces claires, utiles et testées.
            </p>
            <p>
              Pas de blabla ni de refontes uniquement cosmétiques : 
              chaque mission suit une méthodologie éprouvée, de l'atelier de cadrage 
              jusqu'à la livraison prête à intégrer.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-white font-helvetica font-bold text-xl">Mes approches :</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-white text-body-lg">Une relation qui dure avec vos utilisateurs</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-white text-body-lg">Des objectifs clairs, hyper ciblés</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-white text-body-lg">Livrer des parcours cohérents, simples pour tous</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 