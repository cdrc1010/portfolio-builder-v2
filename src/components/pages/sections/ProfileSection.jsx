import React from 'react'
import SectionMotion from '../../sharedComponents/SectionMotion'
import { motion } from 'framer-motion';
import styles from '../home/Portfolio.module.css';
import github from '../../../assets/github.png'
import linkedin from '../../../assets/linkedin.png'


const ProfileSection = ({
    profilePic,
    displayName,
    cvLink,
    linkedinProfile,
    githubProfile,
    navigateTo,
    position,
    scrollTo }) => {
    return (
        <SectionMotion id="profile" className={styles.profile}>
            <motion.div
                className={styles.sectionPicContainer}
                initial={{ x: -100 }}
                animate={{ x: 0 }}
            >
                <img src={profilePic} alt="Profile" />
            </motion.div>
            <div className={styles.sectionText}>
                <motion.p
                    className={styles.sectionTextP1}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Hello, kumusta!👋
                </motion.p>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    I'm {displayName}
                </motion.h1>
                <motion.p
                    className={styles.sectionTextP2}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    {position}
                </motion.p>
                <motion.div
                    className={styles.btnContainer}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: 0.5, delay: 1 }}
                >
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
                        transition={{ type: 'spring', duration: 1, delay: 1.2 }}
                    />
                    <motion.img
                        src={github}
                        alt="My Github profile"
                        className={styles.icon}
                        onClick={() => navigateTo(githubProfile)}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', duration: 1, delay: 1.2 }}
                    />
                </div>
            </div>
        </SectionMotion>
    )
}

export default ProfileSection