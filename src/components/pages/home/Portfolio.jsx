import React from 'react'
import styles from './Portfolio.module.css'
import github from '../../../assets/github.png'
import linkedin from '../../../assets/linkedin.png'

const Portfolio = ({ userDetails, currentUser }) => {
    const { displayName, photoURL } = currentUser || {}
    const details = userDetails[0] || []
    return (
        <>
            {/* <section>

                <div className={styles.profile}>
                    <div className={styles.leftSide}>
                        <p className= {styles.greetings}>Kumusta!👋 Ako nga pala si <span className={styles.glitch}>{displayName}</span> </p>
                        <p>I am experienced Frontend Developer.</p>
                    </div>
                    <div className={styles.imgProfile}><img src={photoURL} alt="" /></div>
                </div>
            </section>
            <section>
                <h2>About</h2>
            </section>
            <section>
                <h2>Projects</h2>
            </section> */}
            <section id="profile" className={styles.profile}>
                <div className= {styles.sectionPicContainer}>
                    <img src={photoURL} alt="cdrc" />
                </div>
                <div className={styles.sectionText}>
                    <p className={styles.sectionTextP1}>Hello, I'm</p>
                    <h1 className={styles.title}>{displayName}</h1>
                    <p className={styles.sectionTextP2}>Frontend Developer</p>
                    <div className={styles.btnContainer}>
                        <button
                            className = {styles.btnColor2}
                            onclick="window.open('./assets/resume-example.pdf')"
                        >
                            Download CV
                        </button>
                        <button className = {styles.btnColor1}onclick="location.href='./#contact'">
                            Contact Info
                        </button>
                    </div>
                    <div id="socials-container" className={styles.socialsContainer}>
                        <img
                            src= {linkedin}
                            alt="My LinkedIn profile"
                            className={styles.icon}
                            onclick="location.href='https://linkedin.com/'"
                        />
                        <img
                            src={github}
                            alt="My Github profile"
                            className={styles.icon}
                            onclick="location.href='https://github.com/'"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
