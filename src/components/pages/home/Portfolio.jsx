import React from 'react'
import styles from './Portfolio.module.css'
import github from '../../../assets/github.png'
import linkedin from '../../../assets/linkedin.png'
import educationImg from '../../../assets/education.png'
import checkMark from '../../../assets/checkmark.png'
import emailIcon from '../../../assets/email.png'
import Navbar from '../../navbar/Navbar'
const Portfolio = ({ userDetails, currentUser }) => {
    const { displayName, photoURL, email } = currentUser || {}
    console.log('userDetails', userDetails)
    const details = userDetails[0] || []
    console.log('currentUser: ', currentUser)
    const { educations, projects, about, githubProfile, linkedin: linkedinProfile, skills, image: aboutPhoto, cvLink } = details
    console.log('details: ', details)

    const emailTo = `mailto:${email}`

    const projectClassName = projects.length > 3 ? styles.projectMarginized : styles.project

    const navigateTo = (link) => {
        window.open(link, '_blank');
    }

    const scrollTo = (id) => {
        const sectionId = document.getElementById(id)
        sectionId.scrollIntoView({ behavior: 'smooth' });
    }

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
                <div className={styles.sectionPicContainer}>
                    <img src={photoURL} alt="cdrc" />
                </div>
                <div className={styles.sectionText}>
                    <p className={styles.sectionTextP1}>Hello, kumusta!👋 </p>
                    <h1 className={styles.title}>I'm {displayName}</h1>
                    <p className={styles.sectionTextP2}>Frontend Developer</p>
                    <div className={styles.btnContainer}>
                        <button
                            className={styles.btnColor2}
                            onClick={() => navigateTo(cvLink)}
                        >
                            Download CV
                        </button>
                        <button className={styles.btnColor1} onClick={() => scrollTo('contact')}>
                            Contact Info
                        </button>
                    </div>
                    <div id="socials-container" className={styles.socialsContainer}>
                        <img
                            src={linkedin}
                            alt="My LinkedIn profile"
                            className={styles.icon}
                            onClick={() => navigateTo(linkedinProfile)}
                        />
                        <img
                            src={github}
                            alt="My Github profile"
                            className={styles.icon}
                            onClick={() => navigateTo(githubProfile)}
                        />
                    </div>
                </div>
            </section>

            <section id="about" className={styles.about}>
                <p className={styles.sectionTextP1}>Get To Know More</p>
                <h1 className={styles.title}>About Me</h1>

                <div className={styles.introduction}>
                    <div className={styles.leftProfile}>
                        <img src={aboutPhoto} alt="cdrc" />
                    </div>
                    <div className={styles.rightDescription}>{about}</div>
                </div>

                <div className={styles.educations}>
                    {educations.map((education, idx) => (<>
                        <div className={styles.education} key={idx}>
                            <img
                                src={educationImg}
                                alt="Education icon"
                                className={styles.icon}
                            />
                            <h3>{education.schoolName}</h3>
                            <p className={styles.level}>{education.level}</p>
                            {education.course && <p className={styles.course}>({education.course})</p>}
                            <p className={styles.year}>{education.year}</p>
                        </div>
                    </>))}

                    {/* <div className={styles.education}>
                        <img
                            src={education}
                            alt="Education icon"
                            className={styles.icon}
                        />
                        <h3>University of Caloocan City</h3>
                        <p>Bachelor of Science in Computer Science</p><br />
                        <span>2000-Present</span>
                    </div>

                    <div className={styles.education}>
                        <img
                            src={education}
                            alt="Education icon"
                            className={styles.icon}
                        />
                        <h3>University of Caloocan City</h3>
                        <p>Bachelor of Science in Computer Science</p><br />
                        <span>2000-Present</span>
                    </div>

                    <div className={styles.education}>
                        <img
                            src={education}
                            alt="Education icon"
                            className={styles.icon}
                        />
                        <h3>University of Caloocan City</h3>
                        <p>Bachelor of Science in Computer Science</p><br />
                        <span>2000-Present</span>
                    </div>

                    <div className={styles.education}>
                        <img
                            src={education}
                            alt="Education icon"
                            className={styles.icon}
                        />
                        <h3>University of Caloocan City</h3>
                        <p>Bachelor of Science in Computer Science</p><br />
                        <span>2000-Present</span>
                    </div> */}

                </div>


            </section>
            <section id="skills" className={styles.skills}>
                <p className={styles.sectionTextP1}>Browse My</p>
                <h1 className={styles.title}>Skills</h1>
                <div className={styles.skillsContainer}>

                    <div className={styles.skill}>
                        <h2>Basic</h2>
                        <div className={styles.col2}>
                            {skills.filter(skill => skill.level === 'basic').map(skill => (
                                <>
                                    <article>
                                        <img
                                            src={checkMark}
                                            alt="Experience icon"
                                            className={styles.icon}
                                        />
                                        <div>
                                            <h3>{skill.skill}</h3>
                                            <p>{skill.level}</p>
                                        </div>
                                    </article>
                                </>
                            ))}
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <h2>Intermediate</h2>
                        <div className={styles.col2}>
                            {skills.filter(skill => skill.level === 'intermediate').map(skill => (
                                <>
                                    <article>
                                        <img
                                            src={checkMark}
                                            alt="Experience icon"
                                            className={styles.icon}
                                        />
                                        <div>
                                            <h3>{skill.skill}</h3>
                                            <p>{skill.level}</p>
                                        </div>
                                    </article>
                                </>
                            ))}
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <h2>Experienced</h2>
                        <div className={styles.col2}>
                            {skills.filter(skill => skill.level === 'experienced').map(skill => (
                                <>
                                    <article>
                                        <img
                                            src={checkMark}
                                            alt="Experience icon"
                                            className={styles.icon}
                                        />
                                        <div>
                                            <h3>{skill.skill}</h3>
                                            <p>{skill.level}</p>
                                        </div>
                                    </article>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            <section id="projects" className={styles.projects}>
                <p className={styles.sectionTextP1}>Browse My Recent</p>
                <h1 className={styles.title}>Projects</h1>

                <div className={styles.projectList}>
                    {projects.map((project, idx) => (<>
                        <div className={projectClassName} key={idx}>
                            <div className={styles.imageContainer} >
                                <img src={project.image} alt="project" />
                            </div>
                            <div className={styles.projectTitle}>{project.name}</div>
                            <div className={styles.projectDescription}>{project.description}</div>
                            <div className={styles.projectButtons}>
                                <button onClick={() => navigateTo(project.github)}>Github</button>
                                <button onClick={() => navigateTo(project.link)}>Live Demo</button>
                            </div>
                        </div>
                    </>))}
                    {/* <div className={projectClassName}>
                        <div className={styles.imageContainer}>
                            <img src={project} alt="project" />
                        </div>
                        <div className={styles.projectTitle}>Project 1</div>
                        <div className={styles.projectDescription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit tempore totam quas ex numquam quod debitis non, cum minus illo!</div>
                        <div className={styles.projectButtons}>
                            <button>Github</button>
                            <button>Live Demo</button>
                        </div>
                    </div>
                    <div className={projectClassName}>
                        <div className={styles.imageContainer}>
                            <img src={project} alt="project" />
                        </div>
                        <div className={styles.projectTitle}>Project 1</div>
                        <div className={styles.projectDescription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit tempore totam quas ex numquam quod debitis non, cum minus illo!</div>
                        <div className={styles.projectButtons}>
                            <button>Github</button>
                            <button>Live Demo</button>
                        </div>
                    </div>
                    <div className={projectClassName}>
                        <div className={styles.imageContainer}>
                            <img src={project} alt="project" />
                        </div>
                        <div className={styles.projectTitle}>Project 1</div>
                        <div className={styles.projectDescription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit tempore totam quas ex numquam quod debitis non, cum minus illo!</div>
                        <div className={styles.projectButtons}>
                            <button>Github</button>
                            <button>Live Demo</button>
                        </div>
                    </div>
                    <div className={projectClassName}>
                        <div className={styles.imageContainer}>
                            <img src={project} alt="project" />
                        </div>
                        <div className={styles.projectTitle}>Project 1</div>
                        <div className={styles.projectDescription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit tempore totam quas ex numquam quod debitis non, cum minus illo!</div>
                        <div className={styles.projectButtons}>
                            <button>Github</button>
                            <button>Live Demo</button>
                        </div>
                    </div>
                    <div className={projectClassName}>
                        <div className={styles.imageContainer}>
                            <img src={project} alt="project" />
                        </div>
                        <div className={styles.projectTitle}>Project 1</div>
                        <div className={styles.projectDescription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit tempore totam quas ex numquam quod debitis non, cum minus illo!</div>
                        <div className={styles.projectButtons}>
                            <button>Github</button>
                            <button>Live Demo</button>
                        </div>
                    </div>
                    <div className={projectClassName}>
                        <div className={styles.imageContainer}>
                            <img src={project} alt="project" />
                        </div>
                        <div className={styles.projectTitle}>Project 1</div>
                        <div className={styles.projectDescription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit tempore totam quas ex numquam quod debitis non, cum minus illo!</div>
                        <div className={styles.projectButtons}>
                            <button>Github</button>
                            <button>Live Demo</button>
                        </div>
                    </div> */}
                </div>


            </section>
            <section id="contact" className={styles.contact}>
                <p className={styles.sectionTextP1}>Get in Touch</p>
                <h1 className={styles.title}>Contact Me</h1>
                <div className={styles.contactContainer}>
                    <div className={styles.twoColumn}>
                        <img src={emailIcon} alt="" />
                        <p><a href={emailTo}>{email}</a></p>
                    </div>
                    <div className={styles.twoColumn}>
                        <img src={linkedin} alt="" />
                        <p><a href={linkedinProfile} target='_blank'>LinkedIn</a></p>
                    </div>
                </div>
                <div className={styles.navbarSection}>
                    <Navbar />
                </div>
            </section>

        </>
    )
}

export default Portfolio
