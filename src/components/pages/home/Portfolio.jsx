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
import ProfileSection from '../sections/ProfileSection'
import AboutSection from '../sections/AboutSection'
import SkillsSection from '../sections/SkillsSection'
import ProjectsSection from '../sections/ProjectsSection'



const Portfolio = ({ userDetails, currentUser, profilePic, visibleInPublic, displayName, publicEmail }) => {
    const { displayName: currentUserName, email } = currentUser || {}

    const details = userDetails[0] || []
    const { educations, projects, about, githubProfile, linkedin: linkedinProfile, skills, image: aboutPhoto, cvLink, position } = details

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
            <ProfileSection profilePic={profilePic} displayName={displayName || currentUserName} cvLink={cvLink} linkedinProfile={linkedinProfile} githubProfile={githubProfile} navigateTo={navigateTo} scrollTo={scrollTo} position={position} />
            <AboutSection aboutPhoto={aboutPhoto} aboutDescription={about} educations={educations} isMobile={isMobile} />
            <SkillsSection skills={skills} />
            <ProjectsSection projects={projects} navigateTo={navigateTo} projectClassName={projectClassName}/>
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
