import React from 'react'

interface ServiceCardProps {
  title: string,
  description: string,
  type: 'product' | 'web' | 'facilitation',
  features: string[],
  price: string,
  priceDetail: string,
}

function ServiceCard({ title, description, type, features, price, priceDetail }: ServiceCardProps) {
  return (
    <div className="relative">
      <div className="p-2.5 absolute -top-6 left-2 origin-top-left -rotate-2 bg-smalt-primary rounded-md shadow-button z-10">
        <div className="text-white font-bold font-helvetica text-xl">
          {title}
        </div>
      </div>
      
      <div className="h-auto min-h-[980px] p-6 rounded-2xl border border-smalt-primary flex flex-col justify-start items-start gap-2.5 pt-12">
        <div className="w-full flex flex-col gap-16">
          <div className="min-h-[320px] flex flex-col justify-between">
            <div className="py-2 flex flex-col gap-4">
              <div className="text-left font-helvetica text-xl font-bold leading-relaxed">
                {description}
              </div>
            </div>
            
            <div className="flex items-baseline gap-2 font-helvetica">
              <span className="text-sm font-bold leading-relaxed">à partir de</span>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold">{price}</span>
                <span className="text-xl font-bold">€</span>
              </div>
              <span className="text-xl font-bold">{priceDetail}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-7 h-7 bg-smalt-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-sm" />
                </div>
                <p className="flex-1 text-base font-helvetica leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SolutionsSection() {
  const services: ServiceCardProps[] = [
    {
      type: 'product',
      title: 'PRODUCT DESIGN',
      description: 'Conception de produits numériques utiles, ergonomiques et désirables.',
      price: '380',
      priceDetail: '/ jour',
      features: [
        'Analyse des besoins utilisateurs et des objectifs métier pour poser des bases solides.',
        'Organisation de sessions de co-conception pour aligner les équipes et générer des idées.',
        'Conception de l\'architecture et des flux de navigation pour optimiser l\'expérience.',
        'Réalisation de maquettes cliquables pour tester rapidement les fonctionnalités clés.',
        'Mise en place ou amélioration d\'un système de composants pour assurer la cohérence et la scalabilité.',
        'Recueil de retours concrets pour ajuster le design avant la mise en production.',
      ],
    },
    {
      type: 'web',
      title: 'WEB DESIGN',
      description: 'Des sites web épurés, performants, pensés pour convertir.',
      price: '700',
      priceDetail: '',
      features: [
        'Un site clair, responsive et optimisé pour présenter votre activité avec impact.',
        'Une identité visuelle cohérente avec vos valeurs, vos couleurs, vos typographies et vos visuels.',
        'Un site rapide, léger et facile à maintenir, conçu sur un outil no-code selon vos besoins.',
        'Des balises, métadonnées et bonnes pratiques intégrées pour améliorer votre visibilité sur Google.',
        'Mentions légales, politique de confidentialité et gestion des cookies incluses.',
        'Une session pour vous apprendre à gérer votre site en toute autonomie, sans jargon technique.',
      ],
    },
    {
      type: 'facilitation',
      title: 'FACILITATION',
      description: 'Workshops, design sprints, ateliers d\'alignement ou d\'idéation.',
      price: '450',
      priceDetail: '/ jour',
      features: [
        'Un cadrage stratégique pour définir les objectifs, les parties prenantes et le périmètre.',
        'Création sur-mesure de formats collaboratifs adaptés à votre contexte et à vos enjeux.',
        'Conduite dynamique et bienveillante pour faire émerger les idées et l\'intelligence collective.',
        'Utilisation d\'outils comme le design thinking, le design sprint ou le co-développement.',
        'Restitution claire et actionnable de ce qui a été produit pendant l\'atelier.',
        'Faire émerger collectivement des pistes réalistes, utiles et alignées sur les objectifs.',
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <div className="p-2.5 inline-block -rotate-2 bg-smalt-primary rounded-md shadow-button mb-6">
            <span className="text-white font-bold font-helvetica text-xl">
              Tarifs
            </span>
          </div>
          
          <h2 className="font-helvetica font-black text-display-md md:text-display-lg">
            Des offres <span className="text-smalt-primary">claires</span>,
            <br />
            des tarifs <span className="text-smalt-primary">justes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
} 