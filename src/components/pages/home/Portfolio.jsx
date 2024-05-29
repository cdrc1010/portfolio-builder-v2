import React from 'react'
import styles from './Portfolio.module.css'
import github from '../../../assets/github.png'
import linkedin from '../../../assets/linkedin.png'
import educationImg from '../../../assets/education.png'
import checkMark from '../../../assets/checkmark.png'
import emailIcon from '../../../assets/email.png'
import Navbar from '../../navbar/Navbar'
import { motion } from 'framer-motion';
import { useScreenSize } from '../../../hooks/useScreenSize'



const Portfolio = ({ userDetails, currentUser, profilePic, visibleInPublic, displayName, publicEmail }) => {
    const { displayName: currentUserName, email } = currentUser || {}

    const details = userDetails[0] || []
    const { educations, projects, about, githubProfile, linkedin: linkedinProfile, skills, image: aboutPhoto, cvLink } = details

    const emailTo = `mailto:${email}`

    const projectClassName = projects.length > 3 ? styles.projectMarginized : styles.project
    const screenSize = useScreenSize();
    const isMobile = screenSize.width <= 768

    const navigateTo = (link) => {
        window.open(link, '_blank');
    }

    const scrollTo = (id) => {
        const sectionId = document.getElementById(id)
        sectionId.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <motion.section id="profile" className={styles.profile} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, type: 'spring' }}>
                <motion.div className={styles.sectionPicContainer} initial={{ x: -100 }} animate={{ x: 0 }}>
                    <img src={profilePic} alt="cdrc" />
                </motion.div>
                <div className={styles.sectionText}>
                    <motion.p className={styles.sectionTextP1} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}>Hello, kumusta!👋 </motion.p>
                    <motion.h1 className={styles.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 }}>I'm {displayName || currentUserName}</motion.h1>
                    <motion.p className={styles.sectionTextP2} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>Frontend Developer</motion.p>
                    <motion.div className={styles.btnContainer}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', duration: .5, delay: 1, }}>
                        <button
                            className={styles.btnColor2}
                            onClick={() => navigateTo(cvLink)}
                        >
                            Download CV
                        </button>
                        <button className={styles.btnColor1} onClick={() => scrollTo('contact')}>
                            Contact Info
                        </button>
                    </motion.div>
                    <div id="socials-container" className={styles.socialsContainer}>
                        <motion.img
                            src={linkedin}
                            alt="My LinkedIn profile"
                            className={styles.icon}
                            onClick={() => navigateTo(linkedinProfile)}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: 'spring', duration: 1, delay: 1.2, }}
                        />
                        <motion.img
                            src={github}
                            alt="My Github profile"
                            className={styles.icon}
                            onClick={() => navigateTo(githubProfile)}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: 'spring', duration: 1, delay: 1.2, }}
                        />
                    </div>
                </div>
            </motion.section>

            <motion.section id="about" className={styles.about}>
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
                    >{about}</motion.div>
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


            </motion.section>

            <section id="skills" className={styles.skills}>
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
            </section >

            <motion.section id="projects" className={styles.projects} >
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


            </motion.section>
            <section id="contact" className={styles.contact}>
                <motion.p className={styles.sectionTextP1}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.5 } }}
                    viewport={{ once: true, amount: 0.5, }}
                >Get in Touch</motion.p>
                <motion.h1 className={styles.title}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.5 } }}
                    viewport={{ once: true, amount: 0.5, }}
                >Contact Me</motion.h1>
                <motion.div className={styles.contactContainer}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, duration: 0.5, } }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.div className={styles.twoColumn}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, duration: .5, delay: .5 } }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <img src={emailIcon} alt="" />
                        <p><a href={emailTo}>{email || publicEmail}</a></p>
                    </motion.div>
                    <motion.div className={styles.twoColumn}
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, duration: .5, delay: .5 } }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <img src={linkedin} alt="" />
                        <p><a href={linkedinProfile} target='_blank'>LinkedIn</a></p>
                    </motion.div>
                </motion.div>
                <Navbar visibleInPublic={visibleInPublic} />
            </section>

        </>
    )
}

export default Portfolio
