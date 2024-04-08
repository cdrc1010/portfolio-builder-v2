import React, { useState } from 'react'
import styles from './About.module.css'
import { useFirestore } from '../../../hooks/useFirestore'

const About = ({ uid, setDisplayPortfolio }) => {

    const { addDocument, response } = useFirestore('userProfile');

    const [secondStep, setSecondStep] = useState(false)
    const [thirdStep, setThirdStep] = useState(false)
    const [educations, setEducations] = useState([
        { schoolName: '', year: '', level: '' }
    ])

    const [skills, setSkills] = useState(['']);

    const [projects, setProjects] = useState([
        { name: '', description: '', link: '' }
    ])

    // console.log('skills: ', skills)
    // console.log('projects: ', projects)
    // console.log('educations: ', educations)

    // SKILLS ADDING AND EVENT HANDLING
    const handleSkillChange = (index, value) => {
        const updatedSkills = [...skills]
        updatedSkills[index] = value;
        setSkills(updatedSkills)
    };

    const addSkillsHandler = (e) => {
        e.preventDefault()
        setSkills([...skills, ''])
    }
    // SKILLS ADDING AND EVENT HANDLING

    // PROJECTS ADDING AND EVENT HANDLING
    const handleProjectChange = (index, field, value) => {
        const updatedProjects = [...projects];
        updatedProjects[index][field] = value;
        setProjects(updatedProjects);
    };

    const addProjectHandler = (e) => {
        e.preventDefault()
        setProjects([...projects, { name: '', description: '', link: '' }]);
    }
    // PROJECTS ADDING AND EVENT HANDLING

    const secondStepHandler = () => {
        setSecondStep(prevState => !prevState)
    }

    const thirdStepHandler = () => {
        setSecondStep(prevState => !prevState)
        setThirdStep(prevState => !prevState)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('it works!!!')
        addDocument({ uid, educations, skills, projects })
        setDisplayPortfolio(true);
    }

    //EDUCATIONS ADDING AND EVENT HANDLING
    const addEducationHandler = (e) => {
        e.preventDefault()
        setEducations([...educations, { name: '', year: '', level: '' }]);
    }

    const handleEducationChange = (index, field, value) => {
        const updatedEducations = [...educations];
        updatedEducations[index][field] = value;
        setEducations(updatedEducations);
    };

    //EDUCATIONS ADDING AND EVENT HANDLING

    return (
        <form className={styles['about-form']}>
            {!secondStep && !thirdStep && <>
                <h2>Educational Background</h2>
                {/* <label>
                    <span>Primary: </span>
                    <input type="text" />
                    <input type="number" placeholder='year' />
                </label>
                <label>
                    <span>Secondary: </span>
                    <input type="text" placeholder='Junior High School' />
                    <input type="number" placeholder='year' />

                </label>
                <label>
                    <span>Secondary: </span>
                    <input type="text" placeholder='Senior High School' />
                    <input type="number" placeholder='year' />

                </label>
                <label>
                    <span>Tertiary: </span>
                    <input type="text" />
                    <input type="number" placeholder='year' />

                </label> */}
                {educations.map((education, index) => (
                    <label key={index}>
                        <span>{education.level}</span>
                        <input type="text" placeholder='Level' value={education.level} onChange={(e) => handleEducationChange(index, 'level', e.target.value)} />
                        <input type="text" placeholder='School' value={education.schoolName} onChange={(e) => handleEducationChange(index, 'schoolName', e.target.value)} />
                        <input type="text" placeholder='Year' value={education.year} onChange={(e) => handleEducationChange(index, 'year', e.target.value)} />
                    </label>
                ))}

                <div id="container-button" className={styles.btnContainer}>
                    <button className={`btn ${styles.next}`} onClick={addEducationHandler} >Add</button>
                    <button className={`btn ${styles.next}`} onClick={secondStepHandler}>Next</button>
                </div>

            </>}

            {secondStep && <div id="skills-container">
                <h2>Skills</h2>
                {skills.map((skill, index) => (
                    <label key={index}>
                        <span>{`Skill ${index + 1}`}</span>
                        <input type="text" value={skill.value} onChange={(e) => handleSkillChange(index, e.target.value)} />
                    </label>
                ))}
                <div id="container-button" className={styles.btnContainer}>
                    <button className={`btn ${styles.next}`} onClick={addSkillsHandler} >Add</button>
                    <button className={`btn ${styles.next}`} onClick={thirdStepHandler}>Next</button>
                </div>
            </div>}

            {thirdStep && <>
                <h2>Projects</h2>
                {projects.map((project, index) => (
                    <div key={index}>
                        <label>
                            <span>{`Project ${index + 1}`} </span>
                            <input
                                type="text"
                                value={project.name}
                                onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
                            />
                        </label>
                        <label>
                            <span>Project Description: </span>
                            <textarea
                                cols="48"
                                rows="10"
                                value={project.description}
                                onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                            ></textarea>
                        </label>
                        <label>
                            <span>Project Link: </span>
                            <input
                                type="text"
                                value={project.link}
                                onChange={(e) => handleProjectChange(index, 'link', e.target.value)}
                            />
                        </label>
                        <hr />
                    </div>
                ))}
                <div id="container-button" className={styles.btnContainer}>
                    <button className={`btn ${styles.next}`} onClick={addProjectHandler} >Add</button>
                    <button className={`btn ${styles.next}`} onClick={submitHandler}>Submit</button>
                </div>

            </>}
        </form>
    )
}

export default About
