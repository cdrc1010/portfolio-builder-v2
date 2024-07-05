import React from 'react'
import { motion } from 'framer-motion'
import SectionMotion from '../../sharedComponents/SectionMotion'
import styles from '../home/Portfolio.module.css'
import checkMark from '../../../assets/checkmark.png'

const SkillsSection = ({skills}) => {
    return (
        <SectionMotion id="skills" className={styles.skills}>
            <motion.p className={styles.sectionTextP1}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } }}
                viewport={{ once: true, amount: 1, }}
            >Browse My</motion.p>
            <motion.h1 className={styles.title}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } }}
                viewport={{ once: true, amount: 0.5, }}
            >Skills</motion.h1>
            <div className={styles.skillsContainer}>

                <motion.div className={styles.skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { delay: 0, duration: 0.3 } }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2>Basic</h2>
                    <motion.div className={styles.col2}
                    >
                        {skills.filter(skill => skill.level === 'basic').map((skill, idx) => (
                            <motion.article key={idx}
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 * idx, duration: 0.5 } }}
                                viewport={{ once: true, amount: 0.5, }}
                            >
                                <img
                                    src={checkMark}
                                    alt="Experience icon"
                                    className={styles.icon}
                                />
                                <div>
                                    <h3>{skill.skill}</h3>
                                    <p>{skill.level}</p>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </motion.div>
                <motion.div className={styles.skill}
                    initial={{ opacity: 0, scale: .5 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: .5 } }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2>Intermediate</h2>
                    <div className={styles.col2}>
                        {skills.filter(skill => skill.level === 'intermediate').map((skill, idx) => (
                            <motion.article key={idx}
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 * idx, duration: 0.5 } }}
                                viewport={{ once: true, amount: 0.5, }}
                            >
                                <img
                                    src={checkMark}
                                    alt="Experience icon"
                                    className={styles.icon}
                                />
                                <div>
                                    <h3>{skill.skill}</h3>
                                    <p>{skill.level}</p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
                <motion.div className={styles.skill}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0, transition: { delay: 0, duration: 0.3 } }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2>Experienced</h2>
                    <div className={styles.col2}>
                        {skills.filter(skill => skill.level === 'experienced').map((skill, idx) => (
                            <motion.article key={idx}
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 * idx, duration: 0.5 } }}
                                viewport={{ once: true, amount: 0.5, }}
                            >
                                <div className={styles.imgContainer}>
                                    <img
                                        src={checkMark}
                                        alt="Experience icon"
                                        className={styles.icon}
                                    />
                                </div>
                                <div>
                                    <h3>{skill.skill}</h3>
                                    <p>{skill.level}</p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </SectionMotion >
    )
}

export default SkillsSection