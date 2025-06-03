import React from 'react'

interface ApprochStepProps {
  number: string,
  title: string,
  description: string,
}

function ApprochStep({ number, title, description }: ApprochStepProps) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-smalt-primary rounded-full flex items-center justify-center">
          <span className="text-white font-helvetica font-bold text-xl">{number}</span>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-helvetica font-bold mb-2">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function ApprochSection() {
  const steps: ApprochStepProps[] = [
    {
      number: '01',
      title: 'Cadrage stratégique',
      description: 'On commence par un atelier pour comprendre vos objectifs, vos utilisateurs et vos contraintes. On définit ensemble les critères de succès et le planning.',
    },
    {
      number: '02',
      title: 'Recherche utilisateurs',
      description: 'Interviews, tests, analytics : on collecte des données concrètes sur les besoins et les points de friction de vos utilisateurs.',
    },
    {
      number: '03',
      title: 'Co-conception',
      description: 'En atelier avec vos équipes, on imagine des solutions qui répondent aux besoins identifiés. On priorise les idées selon leur impact et leur faisabilité.',
    },
    {
      number: '04',
      title: 'Prototypage',
      description: 'On concrétise rapidement les solutions retenues sous forme de maquettes interactives. On itère en fonction des retours utilisateurs.',
    },
    {
      number: '05',
      title: 'Design system',
      description: 'On crée ou on améliore votre système de design pour garantir cohérence et scalabilité. Documentation claire pour faciliter l\'implementation.',
    },
    {
      number: '06',
      title: 'Suivi & Optimisation',
      description: 'On suit les KPIs définis ensemble et on ajuste le design en fonction des retours. Formation des équipes pour une passation en douceur.',
    },
  ]

  return (
    <section className="py-24 bg-smalt-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <div className="p-2.5 inline-block -rotate-2 bg-smalt-primary rounded-md shadow-button mb-6">
            <span className="text-white font-bold font-helvetica text-xl">
              Méthodologie
            </span>
          </div>
          
          <h2 className="font-helvetica font-black text-display-md md:text-display-lg mb-6">
            Une approche <span className="text-smalt-primary">structurée</span>
            <br />
            et <span className="text-smalt-primary">collaborative</span>
          </h2>
          
          <p className="text-xl leading-relaxed">
            Pas de freestyle ni de solutions toutes faites : chaque projet suit une méthodologie éprouvée, 
            de l'atelier de cadrage jusqu'à la livraison prête à intégrer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
          {steps.map((step, index) => (
            <ApprochStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
} 