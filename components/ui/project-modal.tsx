"use client"

import Image from "next/image"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    context: string
    objectives: string[]
    contribution: {
      analysis: string
      uxDesign: string[]
      visualIdentity: string[]
      responsive: string
    }
    images: string[]
  }
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 flex items-center gap-2 px-4 py-2 rounded-full bg-[#B6BFDE]"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M6 18L18 6M6 6L18 18" 
            stroke="#123293" 
            strokeWidth="0.75" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[#123293] text-[13px] font-bold">ESC</span>
      </button>

      <div className="container mx-auto px-8 py-24">
        <div className="max-w-[980px] mx-auto">
          {/* Image principale */}
          <div className="relative w-full aspect-[16/9] mb-6 rounded-[39.2px] overflow-hidden">
            <div className="absolute inset-0 opacity-75 blur-[48px]">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover relative z-10"
              priority
            />
          </div>

          {/* Miniatures */}
          <div className="flex gap-6 mb-12">
            {project.images.slice(1).map((image, index) => (
              <div
                key={index}
                className={`relative w-[128px] h-[96px] rounded-xl overflow-hidden ${
                  index === 0 
                    ? 'shadow-lg outline outline-[3px] outline-[#7B8CC3]' 
                    : 'outline outline-[1px] outline-[#AFABB9]'
                }`}
              >
                <Image
                  src={image}
                  alt={`Image ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h2 className="text-[49px] font-black leading-[58.8px] text-black">
              {project.title}
            </h2>

            <div className="space-y-4">
              <h3 className="text-[25px] font-bold uppercase leading-[30px] text-black">
                CONTEXTE ET ENJEUX
              </h3>
              <p className="text-[20px] leading-[32px] text-black">
                {project.context}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-[25px] font-bold uppercase leading-[30px] text-black">
                OBJECTIFS DU PROJET
              </h3>
              <div className="space-y-2">
                {project.objectives.map((objective, index) => (
                  <p key={index} className="text-[20px] leading-[32px] text-black">
                    {objective}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[25px] font-bold uppercase leading-[30px] text-black">
                CONTRIBUTION ET EXPERTISE
              </h3>
              <div className="space-y-6 text-[20px] leading-[32px] text-black">
                <p>{project.contribution.analysis}</p>
                
                <div className="space-y-2">
                  <p>📐 Conception UX détaillée :</p>
                  {project.contribution.uxDesign.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>

                <div className="space-y-2">
                  <p>🎨 Création d'une identité visuelle modernisée :</p>
                  {project.contribution.visualIdentity.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>

                <div className="space-y-2">
                  <p>📲 Conception responsive :</p>
                  <p>{project.contribution.responsive}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal 