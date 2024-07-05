import React from 'react'
import SectionMotion from '../../sharedComponents/SectionMotion'
import styles from '../home/Portfolio.module.css'
import { motion } from 'framer-motion'
import educationImg from '../../../assets/education.png'

const AboutSection = ({aboutPhoto, aboutDescription, educations, isMobile}) => {
  return (
    <SectionMotion id="about" className={styles.about}>
                <motion.p className={styles.sectionTextP1}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } }}
                    viewport={{ once: true, amount: 0.5, }}
                >Get To Know More</motion.p>
                <motion.h1 className={styles.title}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } }}
                    viewport={{ once: true, amount: 0.5, }}
                >About Me</motion.h1>

                <div className={styles.introduction}>
                    <motion.div className={styles.leftProfile}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 30, duration: .5 } }}
                        viewport={{ once: true, amount: 0.5, }}
                    >
                        <img src={aboutPhoto} alt="cdrc" />
                    </motion.div>
                    <motion.div className={styles.rightDescription}
                        initial={{ opacity: 0, x: isMobile ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 30, duration: .5 } }}
                        viewport={{ once: true, amount: 0.5, }}
                    >{aboutDescription}</motion.div>
                </div>

                <div className={styles.educations}>
                    {educations.map((education, idx) => (
                        <motion.div className={styles.education} key={idx}
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 * idx, duration: 0.5 } }}
                            viewport={{ once: true, amount: 0.75, }}
                        >
                            <img
                                src={educationImg}
                                alt="Education icon"
                                className={styles.icon}
                            />
                            <h3>{education.schoolName}</h3>
                            <p className={styles.level}>{education.level}</p>
                            {education.course && <p className={styles.course}>({education.course})</p>}
                            <p className={styles.year}>{education.year}</p>
                        </motion.div>
                    ))}

                </div>


            </SectionMotion>
  )
}

export default AboutSection