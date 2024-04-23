import React, { useState } from 'react'
import styles from './About.module.css'
import { useFirestore } from '../../../hooks/useFirestore'
import { projectStorage } from '../../../firebaseConfig/config'

const About = ({ uid }) => {

    const { addDocument, response } = useFirestore('userProfile');

    const [secondStep, setSecondStep] = useState(false)
    const [thirdStep, setThirdStep] = useState(false)
    const [lastStep, setlastStep] = useState(false)

    const [educations, setEducations] = useState([
        { schoolName: '', year: '', level: '', course: '' }
    ])

    const [skills, setSkills] = useState([{ skill: '', level: '' }]);

    const [projects, setProjects] = useState([
        { name: '', description: '', link: '', image: '', github: '' }
    ])

    const [additionalDetails, setAdditionalDetails] = useState([
        { githubProfile: "", linkedin: "", about: "", image: "", cvLink: '' }
    ])

    console.log('projects: ', projects)
    console.log('additionalDetails: ', additionalDetails)
    console.log('skills: ', skills)



    // console.log('skills: ', skills)
    // console.log('projects: ', projects)
    // console.log('educations: ', educations)

    // SKILLS ADDING AND EVENT HANDLING
    const handleSkillChange = (index, field, value) => {
        console.log('skill value: ', value)
        const updatedSkills = [...skills];
        updatedSkills[index][field] = value;
        setSkills(updatedSkills);
    };

    const addSkillsHandler = (e) => {
        e.preventDefault()
        setSkills([...skills, { skill: '', level: '' }])
    }

    // SKILLS ADDING AND EVENT HANDLING

    // PROJECTS ADDING AND EVENT HANDLING
    const handleProjectChange = async (index, field, value) => {
        if (field === 'image' && value) {
            const imageURL = await fileUpload(value, 'images')
            value = imageURL
        }
        const updatedProjects = [...projects];
        updatedProjects[index][field] = value;
        setProjects(updatedProjects);
    };


    const fileUpload = async (photoFile, type) => {
        console.log('photiFIle: ', photoFile)

        const storageRef = projectStorage.ref();
        const fileRef = storageRef.child(`${uid}/${type}/${photoFile.name}`);
        await fileRef.put(photoFile);
        const photoUrl = await fileRef.getDownloadURL();
        return photoUrl
    }

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

    const lastStepHandler = () => {
        setThirdStep(prevState => !prevState)
        setlastStep(prevState => !prevState)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('it works!!!')
        const { about, githubProfile, linkedin, image, cvLink } = additionalDetails[0] || {}

        addDocument({ uid, educations, skills, projects, about, githubProfile, linkedin, image, cvLink })
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

    const handleAdditionalDetailsChange = async (index, field, value) => {
        if (field === 'image' && value) {
            const imageURL = await fileUpload(value, 'images')
            value = imageURL
        }
        if (field === 'cvLink' && value) {
            const fileURL = await fileUpload(value, 'file')
            value = fileURL
        }
        const updatedAdditionalInfo = [...additionalDetails];
        updatedAdditionalInfo[index][field] = value;
        setAdditionalDetails(updatedAdditionalInfo);
        console.log('additionalDetails: ', additionalDetails)
    }

    //EDUCATIONS ADDING AND EVENT HANDLING

    return (
        <form className={styles['about-form']}>
            {!secondStep && !thirdStep && !lastStep && <>
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
                        <input type="text" placeholder='Course' value={education.course} onChange={(e) => handleEducationChange(index, 'course', e.target.value)} />

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
                    <>
                        <label key={index}>
                            <span>{`Skill ${index + 1}`}:</span>
                            <input type="text" value={skill.value} onChange={(e) => handleSkillChange(index, 'skill', e.target.value)} />
                        </label>
                        <label key={index}>
                            <span>Level: </span>
                            <select value={skill.value} onChange={(e) => handleSkillChange(index, 'level', e.target.value)}>
                                <option value="basic">Basic</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="experienced">Experienced</option>
                            </select>
                        </label>
                    </>
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
                        <label>
                            <span>Github Link: </span>
                            <input
                                type="text"
                                value={project.github}
                                onChange={(e) => handleProjectChange(index, 'github', e.target.value)}
                            />
                        </label>
                        <label>
                            Thumbnail:
                            <input type="file" onChange={(e) => handleProjectChange(index, 'image', e.target.files[0])} />
                        </label>
                        <hr />
                    </div>
                ))}
                <div id="container-button" className={styles.btnContainer}>
                    <button className={`btn ${styles.next}`} onClick={addProjectHandler} >Add</button>
                    <button className={`btn ${styles.next}`} onClick={lastStepHandler}>Next</button>
                </div>


            </>}
            {lastStep && <>
                <h2>Additional Information</h2>
                {additionalDetails.map((detail, index) => (
                    <label key={index}>
                        <input type="text" placeholder='LinkedIn Profile' value={detail.linkedin} onChange={(e) => handleAdditionalDetailsChange(index, 'linkedin', e.target.value)} />
                        <input type="text" placeholder='Github Profile' value={detail.githubProfile} onChange={(e) => handleAdditionalDetailsChange(index, 'githubProfile', e.target.value)} />
                        <label>
                            <span>About: </span>
                            <textarea
                                cols="48"
                                rows="10"
                                value={detail.about}
                                onChange={(e) => handleAdditionalDetailsChange(index, 'about', e.target.value)}
                            ></textarea>
                        </label>
                        <label>
                            About Profile:
                            <input type="file" onChange={(e) => handleAdditionalDetailsChange(index, 'image', e.target.files[0])} />
                        </label>
                        <label>
                            Upload CV:
                            <input type="file" onChange={(e) => handleAdditionalDetailsChange(index, 'cvLink', e.target.files[0])} />
                        </label>

                    </label>
                ))}
                <div id="container-button" className={styles.btnContainer}>
                    <button className={`btn ${styles.next}`} onClick={submitHandler}>Submit</button>
                </div>
            </>}
        </form>
    )
}

export default About
