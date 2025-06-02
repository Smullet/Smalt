"use client"

import { motion } from "framer-motion"
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
      <div className="absolute top-8 right-8 flex items-center gap-2 px-4 py-2 rounded-full bg-[#B6BFDE] cursor-pointer" onClick={onClose}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#123293]">
          <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-[#123293] text-[13px] font-bold font-inter leading-[15.6px]">ESC</span>
      </div>

      <div className="min-h-screen pt-24 pb-32 px-8">
        <div className="max-w-[980px] mx-auto">
          <div className="relative w-[980px] h-[552px] mb-6">
            {/* Image floutée en arrière-plan */}
            <div className="absolute inset-0 opacity-75 overflow-hidden rounded-[39.2px] shadow-[96px_96px_96px_rgba(0,0,0,0.1)] blur-[48px]">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Image principale */}
            <div className="absolute inset-0 overflow-hidden rounded-[39.2px]">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Miniatures */}
          <div className="flex gap-6 mb-12">
            {project.images.slice(1).map((image, index) => (
              <div
                key={index}
                className={`relative w-[128px] h-[96px] overflow-hidden rounded-xl ${
                  index === 0
                    ? 'shadow-[0px_8px_48px_rgba(195,76,255,0.24)] outline outline-[3px] outline-[#7B8CC3]'
                    : 'outline outline-[1px] outline-[#AFABB9] -outline-offset-[1px]'
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

          <div className="space-y-8 px-6">
            <h2 className="text-[49px] font-black leading-[58.8px] text-black font-inter">
              {project.title}
            </h2>

            <div className="space-y-4">
              <h3 className="text-[25px] font-bold uppercase leading-[30px] text-black font-['Helvetica_Neue']">
                CONTEXTE ET ENJEUX
              </h3>
              <p className="text-[20px] leading-[32px] text-black font-inter">
                {project.context}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-[25px] font-bold uppercase leading-[30px] text-black font-['Helvetica_Neue']">
                OBJECTIFS DU PROJET
              </h3>
              <div className="text-[20px] leading-[32px] text-black font-inter">
                {project.objectives.map((objective, index) => (
                  <p key={index} className="mb-2">{objective}</p>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[25px] font-bold uppercase leading-[30px] text-black font-['Helvetica_Neue']">
                CONTRIBUTION ET EXPERTISE
              </h3>
              <div className="text-[20px] leading-[32px] text-black font-inter space-y-6">
                <p>{project.contribution.analysis}</p>
                
                <div>
                  <p className="mb-4">📐 Conception UX détaillée :</p>
                  {project.contribution.uxDesign.map((item, index) => (
                    <p key={index} className="mb-2">{item}</p>
                  ))}
                </div>

                <div>
                  <p className="mb-4">🎨 Création d'une identité visuelle modernisée :</p>
                  {project.contribution.visualIdentity.map((item, index) => (
                    <p key={index} className="mb-2">{item}</p>
                  ))}
                </div>

                <div>
                  <p className="mb-4">📲 Conception responsive :</p>
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