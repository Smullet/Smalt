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
    <div className="Slide1" style={{width: 1920, height: 1979, position: 'relative', overflow: 'hidden'}}>
      <div className="Container" style={{height: 900, paddingTop: 96, paddingBottom: 128, left: 470, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 96, display: 'inline-flex'}}>
        <div className="Image" style={{width: 980, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
          <div className="Image" style={{width: 980, height: 552, position: 'relative'}}>
            <div className="ImageBlurred" style={{width: 980, height: 551.25, left: 0, top: 0, position: 'absolute', opacity: 0.75, boxShadow: '96px 96px 96px', overflow: 'hidden', borderRadius: 39.20, filter: 'blur(48px)'}}>
              <Image
                src={project.images[0]}
                alt={project.title}
                width={980}
                height={551}
                style={{left: 0, top: -0.23, position: 'absolute'}}
                priority
              />
            </div>
            <div className="Image" style={{width: 980, height: 551.25, left: 0, top: 0, position: 'absolute', overflow: 'hidden', borderRadius: 39.20}}>
              <Image
                src={project.images[0]}
                alt={project.title}
                width={980}
                height={551}
                style={{left: 0, top: -0.23, position: 'absolute'}}
                priority
              />
            </div>
          </div>
          <div className="Miniatures" style={{left: 24, top: 503, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
            {project.images.slice(1).map((image, index) => (
              <div
                key={index}
                className="Image"
                style={{
                  width: 128,
                  height: 96,
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 12,
                  ...(index === 0
                    ? {
                        boxShadow: '0px 8px 48px rgba(195.82, 76.50, 255, 0.24)',
                        outline: '3px var(--Gradiant, #7B8CC3) solid'
                      }
                    : {
                        outline: '1px var(--text-neutral-soft, #AFABB9) solid',
                        outlineOffset: '-1px'
                      }
                  )
                }}
              >
                <Image
                  src={image}
                  alt={`Image ${index + 2}`}
                  width={128}
                  height={96}
                  style={{left: 0, top: 0.08, position: 'absolute'}}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="Content" style={{width: 980, paddingLeft: 24, paddingRight: 24, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
          <div className="ContentText" style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--text-neutral-dim, black)', fontSize: 49, fontFamily: 'Inter', fontWeight: '900', lineHeight: '58.80px', wordWrap: 'break-word'}}>
              {project.title}
            </div>
            <div className="Paraph" style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
              <div style={{alignSelf: 'stretch', color: 'var(--text-neutral-dim, black)', fontSize: 25, fontFamily: 'Helvetica Neue', fontWeight: '700', textTransform: 'uppercase', lineHeight: '30px', wordWrap: 'break-word'}}>
                CONTEXTE ET ENJEUX
              </div>
              <div style={{alignSelf: 'stretch', color: 'var(--text-neutral-dim, black)', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', lineHeight: '32px', wordWrap: 'break-word'}}>
                {project.context}
              </div>
            </div>
            <div className="Paraph" style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
              <div style={{alignSelf: 'stretch', color: 'var(--text-neutral-dim, black)', fontSize: 25, fontFamily: 'Helvetica Neue', fontWeight: '700', textTransform: 'uppercase', lineHeight: '30px', wordWrap: 'break-word'}}>
                OBJECTIFS DU PROJET
              </div>
              <div style={{alignSelf: 'stretch', color: 'var(--text-neutral-dim, black)', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', lineHeight: '32px', wordWrap: 'break-word'}}>
                {project.objectives.map((objective, index) => (
                  <div key={index}>{objective}<br/></div>
                ))}
              </div>
            </div>
            <div className="Paraph" style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
              <div style={{alignSelf: 'stretch', color: 'var(--text-neutral-dim, black)', fontSize: 25, fontFamily: 'Helvetica Neue', fontWeight: '700', textTransform: 'uppercase', lineHeight: '30px', wordWrap: 'break-word'}}>
                CONTRIBUTION ET EXPERTISE
              </div>
              <div style={{alignSelf: 'stretch', color: 'var(--text-neutral-dim, black)', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', lineHeight: '32px', wordWrap: 'break-word'}}>
                {project.contribution.analysis}
                <br/><br/>
                📐 Conception UX détaillée :<br/>
                {project.contribution.uxDesign.map((item, index) => (
                  <div key={index}>{item}<br/></div>
                ))}
                <br/>
                🎨 Création d'une identité visuelle modernisée :<br/>
                {project.contribution.visualIdentity.map((item, index) => (
                  <div key={index}>{item}<br/></div>
                ))}
                <br/>
                📲 Conception responsive :<br/>
                {project.contribution.responsive}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Close" style={{paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 1797, top: 32, position: 'absolute', background: 'var(--Primairy-300, #B6BFDE)', borderRadius: 100, outline: '1px var(--Primairy-300, #B6BFDE) solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}} onClick={onClose}>
        <div className="IconRight" style={{position: 'relative'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="var(--Primairy-400, #123293)" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{color: 'var(--Primairy-400, #123293)', fontSize: 13, fontFamily: 'Inter', fontWeight: '700', lineHeight: '15.60px', wordWrap: 'break-word'}}>
          ESC
        </div>
      </div>
    </div>
  )
}

export default ProjectModal 