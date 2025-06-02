"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

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
      <div className="absolute top-4 right-4 flex items-center gap-2 text-sm">
        <span>ESC</span>
        <button
          onClick={onClose}
          className="hover:opacity-70 transition-opacity"
        >
          <X size={24} />
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen p-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Image principale */}
          <div className="w-full aspect-[16/9] relative mb-8">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Miniatures */}
          <div className="flex gap-4 mb-12">
            {project.images.slice(1).map((image, index) => (
              <div key={index} className="w-32 aspect-[4/3] relative">
                <Image
                  src={image}
                  alt={`Image ${index + 2} du projet`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="space-y-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#102D84]">{project.title}</h2>

            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-[#102D84]">CONTEXTE ET ENJEUX</h3>
              <p className="text-lg leading-relaxed text-neutral-900">{project.context}</p>
            </section>

            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-[#102D84]">OBJECTIFS DU PROJET</h3>
              <ul className="space-y-2">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="text-lg leading-relaxed text-neutral-900">
                    {objective}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-[#102D84]">CONTRIBUTION ET EXPERTISE</h3>
              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-neutral-900">{project.contribution.analysis}</p>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-[#102D84]">🔍 Conception UX détaillée :</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    {project.contribution.uxDesign.map((item, index) => (
                      <li key={index} className="text-lg leading-relaxed text-neutral-900">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-[#102D84]">🎨 Création d'une identité visuelle modernisée :</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    {project.contribution.visualIdentity.map((item, index) => (
                      <li key={index} className="text-lg leading-relaxed text-neutral-900">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-[#102D84]">📱 Conception responsive :</h4>
                  <p className="text-lg leading-relaxed text-neutral-900">{project.contribution.responsive}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectModal 