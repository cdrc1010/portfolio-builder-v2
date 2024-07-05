import React from 'react'
import SectionMotion from '../../sharedComponents/SectionMotion'
import styles from '../home/Portfolio.module.css'
import { motion } from 'framer-motion'

const ProjectsSection = ({projects, navigateTo, projectClassName}) => {
  return (
    <SectionMotion id="projects" className={styles.projects} >
                <motion.p className={styles.sectionTextP1}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } }}
                    viewport={{ once: true, amount: 0.5, }}
                >Browse My Recent</motion.p>
                <motion.h1 className={styles.title}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } }}
                    viewport={{ once: true, amount: 0.5, }}
                >Projects</motion.h1>

                <div className={styles.projectList}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 } }}
                    viewport={{ once: true, amount: 0.5, }}
                >
                    {projects.map((project, idx) => (
                        <motion.div className={projectClassName} key={idx}
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1, border: '1px solid black', padding: 10, borderRadius: 15, transition: { delay: 0.2 * idx + .3, duration: .5 } }}
                            viewport={{ once: true, amount: .5, }}
                        >
                            <div className={styles.imageContainer} >
                                <img src={project.image} alt="project" />
                            </div>
                            <div className={styles.projectTitle}>{project.name}</div>
                            <div className={styles.projectDescription}>{project.description}</div>
                            <div className={styles.projectButtons}>
                                <button onClick={() => navigateTo(project.github)}>Github</button>
                                <button onClick={() => navigateTo(project.link)}>Live Demo</button>
                            </div>
                        </motion.div>
                    ))}

                </div>


            </SectionMotion>
  )
}

export default ProjectsSection