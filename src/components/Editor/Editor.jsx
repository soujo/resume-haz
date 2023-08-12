import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import styles from "./Editor.module.css"
import Form from 'react-bootstrap/Form';
import { X } from 'react-feather';


function Editor(props) {

    const { sections, resumeInformation, setResumeInformation } = props;

    //* States
    const [activeSectionObjectKey, setactiveSectionObjectKey] = useState(Object.keys(sections)[0])

    const [activeInformation, setActiveInformation] = useState(
        resumeInformation[sections[Object.keys(sections)[0]]]
    );

    const [sectionTitle, setSectionTitle] = useState(sections[Object.keys(sections)[0]])

    const [inputDataValues, setInputDataValues] = useState({
        name: activeInformation?.detail?.name || "",
        email: activeInformation?.detail?.email || "",
        phone: activeInformation?.detail?.phone || "",
        location: activeInformation?.detail?.location || "",
        github: activeInformation?.detail?.github || "",
        linkedin: activeInformation?.detail?.linkedin || "",
        objective: activeInformation?.detail?.objective || "",
        portfolio: activeInformation?.detail?.portfolio || ""
    });

    const [activeAddOnDetailIndex, setactiveAddOnDetailIndex] = useState(0)

    //* Section Body 
    const BasicInfoBody = (
        <div className={styles.container}>
            <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name='title' placeholder=""
                        disabled
                        value={sectionTitle}
                        onChange={(event) => setSectionTitle(event.target.value)} />
                </Form.Group>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Eg. John Doe"
                            value={inputDataValues.name}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, name: event.target.value }))
                            } />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Eg. example@abc.com"
                            value={inputDataValues.email}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, email: event.target.value }))
                            } />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" name='phone' placeholder="Eg. 1234567890"
                            value={inputDataValues.phone}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, phone: event.target.value }))
                            } />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" name='location' placeholder="Eg Kolkata, India"
                            value={inputDataValues.location}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, location: event.target.value }))
                            } />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>GitHub Link</Form.Label>
                        <Form.Control type="text" name='github' placeholder="Enter your GitHub profile link"
                            value={inputDataValues.github}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, github: event.target.value }))
                            } />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>LinkedIn Link </Form.Label>
                        <Form.Control type="text" name='linkedin' placeholder="Enter your LinkedIn profile link"
                            value={inputDataValues.linkedin}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, linkedin: event.target.value }))
                            } />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Objective</Form.Label>
                        <Form.Control as="textarea" name='objective' placeholder='Write a short summary of yourself'
                            value={inputDataValues.objective}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, objective: event.target.value }))
                            } />
                    </Form.Group>
                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Portfolio Link </Form.Label>
                        <Form.Control type="text" name='portfolio' placeholder="Enter your Portfolio link"
                            value={inputDataValues.portfolio}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, portfolio: event.target.value }))
                            } />
                    </Form.Group>

                </div>
            </div>
        </div>
    )

    const EducationBody = (
        <div className={styles.container}>
            <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name='title' placeholder=""
                        disabled
                        value={sectionTitle}
                        onChange={(event) => setSectionTitle(event.target.value)} />
                </Form.Group>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Course Name and Subject</Form.Label>
                        <Form.Control type="text" name='courseName' placeholder="Eg. B.Tech in Computer Science and Engineering"
                            value={inputDataValues.courseName}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, courseName: event.target.value }))
                            } />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Specialization</Form.Label>
                        <Form.Control type="text" name='specialization' placeholder="Eg. Machine Learning"
                            value={inputDataValues.specialization}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, specialization: event.target.value }))
                            } />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>College/School Name</Form.Label>
                        <Form.Control type="text" name='collegeName' placeholder="Eg. ABC College/School"
                            value={inputDataValues.collegeName}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, collegeName: event.target.value }))
                            } />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>CGPA</Form.Label>
                        <Form.Control type="text" name='cgpa' placeholder="Eg 7.5"
                            value={inputDataValues.cgpa}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, cgpa: event.target.value }))
                            } />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Course Starting Date</Form.Label>
                        <Form.Control type="date" name='eduStartDate' placeholder=""
                            value={inputDataValues.eduStartDate}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, eduStartDate: event.target.value }))
                            } />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Course Ending Date</Form.Label>
                        <Form.Control type="date" name='eduEndDate' placeholder=""
                            value={inputDataValues.eduEndDate}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, eduEndDate: event.target.value }))
                            } />
                    </Form.Group>

                </div>
            </div>
        </div>
    )

    const SkillsBody = (
        <div className={styles.container}>
            <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name='title' placeholder=""
                        disabled
                        value={sectionTitle}
                        onChange={(event) => setSectionTitle(event.target.value)}
                    />
                </Form.Group>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Technical Skills</Form.Label>
                        <Form.Control type="text" name="0" placeholder="Eg. Nodejs, Reactjs etc"
                            value={inputDataValues.points ? inputDataValues.points[0] : ""}
                            onChange={(event) => handlePointUpdate(event.target.value, 0)} />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Soft Skills</Form.Label>
                        <Form.Control type="text" name="1" placeholder="Eg. Problem Solving, Leadership etc"
                            value={inputDataValues.points ? inputDataValues.points[1] : ""}
                            onChange={(event) => handlePointUpdate(event.target.value, 1)} />
                    </Form.Group>

                </div>

            </div>
        </div>
    )

    const AchievementsBody = (
        <div className={styles.container}>
            <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name='title' placeholder=""
                        disabled
                        value={sectionTitle}
                        onChange={(event) => setSectionTitle(event.target.value)} />
                </Form.Group>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Achievements</Form.Label>
                        <Form.Control type="text" name='0' placeholder="Enter your first achievement"
                            value={inputDataValues.points ? inputDataValues.points[0] : ""}
                            onChange={(event) => handlePointUpdate(event.target.value, 0)} />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" name='1' placeholder="Enter your second achievement"
                            value={inputDataValues.points ? inputDataValues.points[1] : ""}
                            onChange={(event) => handlePointUpdate(event.target.value, 1)} />
                    </Form.Group>

                </div>

            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" name='2' placeholder="Enter your third achievement"
                            value={inputDataValues.points ? inputDataValues.points[2] : ""}
                            onChange={(event) => handlePointUpdate(event.target.value, 2)} />
                    </Form.Group>

                </div>

            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" name='3' placeholder="Enter your fourth achievement"
                            value={inputDataValues.points ? inputDataValues.points[3] : ""}
                            onChange={(event) => handlePointUpdate(event.target.value, 3)} />
                    </Form.Group>

                </div>

            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" name='4' placeholder="Enter your fifth achievement"
                            value={inputDataValues.points ? inputDataValues.points[4] : ""}
                            onChange={(event) => handlePointUpdate(event.target.value, 4)} />
                    </Form.Group>

                </div>

            </div>
        </div>
    )

    const WorkExperienceBody = (
        <div className={styles.container}>
            <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name='title' disabled placeholder="" value={sectionTitle}
                        onChange={(event) => setSectionTitle(event.target.value)} />
                </Form.Group>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Role Name</Form.Label>
                        <Form.Control type="text" name='roleName' placeholder="Eg. Software Engineer" value={inputDataValues.roleName} onChange={(event) =>
                            setInputDataValues((prev) => ({ ...prev, roleName: event.target.value }))
                        } />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" name='companyName' placeholder="Eg. Atlassian" value={inputDataValues.companyName} onChange={(event) =>
                            setInputDataValues((prev) => ({ ...prev, companyName: event.target.value }))
                        } />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" name='state' placeholder="Eg. Bengaluru" value={inputDataValues.state} onChange={(event) =>
                            setInputDataValues((prev) => ({ ...prev, state: event.target.value }))
                        } />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" name='country' placeholder="Eg. India" value={inputDataValues.country} onChange={(event) =>
                            setInputDataValues((prev) => ({ ...prev, country: event.target.value }))
                        } />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Joining Date</Form.Label>
                        <Form.Control type="date" name='workExpStartDate' placeholder="" value={inputDataValues.workExpStartDate} onChange={(event) =>
                            setInputDataValues((prev) => ({ ...prev, workExpStartDate: event.target.value }))
                        } />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Termination Date</Form.Label>
                        <Form.Control type="date" name='workExpEndDate' placeholder="" value={inputDataValues.workExpEndDate} onChange={(event) =>
                            setInputDataValues((prev) => ({ ...prev, workExpEndDate: event.target.value }))
                        } />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Summary</Form.Label>
                        <Form.Control type="text" name='workExpSum1' placeholder="Eg. Achieved X% growth for XYZ using A, B, and C skills"
                            value={inputDataValues.workExpSum1}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, workExpSum1: event.target.value }))
                            } />
                    </Form.Group>

                </div>

            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" name='workExpSum2' placeholder="Eg. Developed XYZ that did A, B, and C using X, Y, and Z."
                            value={inputDataValues.workExpSum2}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, workExpSum2: event.target.value }))
                            } />
                    </Form.Group>

                </div>

            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" name='workExpSum3' placeholder="Eg. Led XYZ which led to X% of improvement in ABC "
                            value={inputDataValues.workExpSum3}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, workExpSum3: event.target.value }))
                            } />
                    </Form.Group>

                </div>

            </div>
        </div>
    )

    const ProjectBody = (
        <div className={styles.container}>
            <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name='title' placeholder=""
                        disabled
                        value={sectionTitle}
                        onChange={(event) => setSectionTitle(event.target.value)} />
                </Form.Group>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control type="text" name='projectName' placeholder="Eg xyz"
                            value={inputDataValues.projectName}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, projectName: event.target.value }))
                            } />
                    </Form.Group>

                </div>
            </div>
            <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Project Description</Form.Label>
                    <Form.Control type="text" name='projectDesp' placeholder="Eg. Build a project that does something and had quantified success using A, B, and C. "
                        value={inputDataValues.projectDesp}
                        onChange={(event) =>
                            setInputDataValues((prev) => ({ ...prev, projectDesp: event.target.value }))
                        } />
                </Form.Group>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>GitHub Links</Form.Label>
                        <Form.Control type="text" name='projectGithub' placeholder="Enter your github repo link"
                            value={inputDataValues.projectGithub}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, projectGithub: event.target.value }))
                            } />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Preview Link</Form.Label>
                        <Form.Control type="text" name='preview' placeholder="Enter your hosted website/app link"
                            value={inputDataValues.preview}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, preview: event.target.value }))
                            } />
                    </Form.Group>

                </div>
            </div>
        </div>
    )

    const PORBody = (
        <div className={styles.container}>
            <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name='title' placeholder=""
                        value={sectionTitle} disabled
                        onChange={(event) => setSectionTitle(event.target.value)} />
                </Form.Group>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Position Name and Role</Form.Label>
                        <Form.Control type="text" name='positionName' placeholder="Eg abc at xyz community"
                            value={inputDataValues.positionName}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, positionName: event.target.value }))
                            }
                        />
                    </Form.Group>

                </div>
            </div>
            <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Responsibilities you managed </Form.Label>
                    <Form.Control type="text" name='responsibilities' placeholder="Eg. Actively involved in facilitating online events, and more alongside other admins and a team of volunteer moderators!"
                        value={inputDataValues.responsibilities}
                        onChange={(event) =>
                            setInputDataValues((prev) => ({ ...prev, responsibilities: event.target.value }))
                        }
                    />
                </Form.Group>
            </div>
        </div>
    )

    const OthersBody = (
        <div className={styles.container}>
            <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name='title' placeholder=""
                        disabled
                        value={sectionTitle}
                        onChange={(event) => setSectionTitle(event.target.value)} />
                </Form.Group>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Summary</Form.Label>
                        <Form.Control type="text" name='other' placeholder="Eg. Painting, Reading"
                            value={inputDataValues.other}
                            onChange={(event) =>
                                setInputDataValues((prev) => ({ ...prev, other: event.target.value }))
                            } />
                    </Form.Group>

                </div>
            </div>

        </div>
    )

    //* Helper Functions
    const handlePointUpdate = (value, index) => {
        const tempInputDataValues = { ...inputDataValues };
        if (!Array.isArray(tempInputDataValues.points)) tempInputDataValues.points = [];
        tempInputDataValues.points[index] = value;
        setInputDataValues(tempInputDataValues);
    };

    const handleNewAddDetail = () => {
        const details = activeInformation?.details
        const lastDetail = details.slice(-1)[0];

        if (!details)
            return
        if (!Object.keys(lastDetail).length)
            return;
        details.push({})

        props.setResumeInformation((prev) => ({
            ...prev,
            [sections[activeSectionObjectKey]]: {
                ...resumeInformation[sections[activeSectionObjectKey]],
                details: details
            }
        }))

        setactiveAddOnDetailIndex(details?.length - 1)
    }

    const handleNewDelDetail = (index) => {
        const details = activeInformation?.details
            ? [...activeInformation?.details]
            : "";

        if (!details)
            return;

        details.splice(index, 1);

        props.setResumeInformation((prev) => ({
            ...prev,
            [sections[activeSectionObjectKey]]: {
                ...resumeInformation[sections[activeSectionObjectKey]],
                details: details,
            },
        }));

        setactiveAddOnDetailIndex((prev) => (prev === index ? 0 : prev - 1));

    };

    const generateSectionBody = () => {
        switch (sections[activeSectionObjectKey]) {
            case sections.basicInfo:
                return BasicInfoBody;
            case sections.education:
                return EducationBody;
            case sections.skills:
                return SkillsBody;
            case sections.achievements:
                return AchievementsBody;
            case sections.workExp:
                return WorkExperienceBody;
            case sections.projects:
                return ProjectBody;
            case sections.POR:
                return PORBody;
            case sections.others:
                return OthersBody;
            default:
                return null;
        }
    };

    const handleComponentSubmission = () => {
        switch (sections[activeSectionObjectKey]) {
            case sections.basicInfo: {
                const tempDetail = {
                    name: inputDataValues.name,
                    email: inputDataValues.email,
                    phone: inputDataValues.phone,
                    location: inputDataValues.location,
                    github: inputDataValues.github,
                    linkedin: inputDataValues.linkedin,
                    objective: inputDataValues.objective,
                    portfolio: inputDataValues.portfolio,
                };

                props.setResumeInformation((prev) => ({
                    ...prev,
                    [sections.basicInfo]: {
                        ...prev[sections.basicInfo],
                        detail: tempDetail,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.education: {
                const tempDetail = {
                    courseName: inputDataValues.courseName,
                    specialization: inputDataValues.specialization,
                    collegeName: inputDataValues.collegeName,
                    cgpa: inputDataValues.cgpa,
                    eduStartDate: inputDataValues.eduStartDate,
                    eduEndDate: inputDataValues.eduEndDate
                };

                const tempDetails = [...resumeInformation[sections.education]?.details];
                tempDetails[activeAddOnDetailIndex] = tempDetail;

                props.setResumeInformation((prev) => ({
                    ...prev,
                    [sections.education]: {
                        ...prev[sections.education],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));

                break;
            }
            case sections.skills: {
                const tempPoints = inputDataValues.points

                props.setResumeInformation((prev) => ({
                    ...prev,
                    [sections.skills]: {
                        ...prev[sections.skills],
                        points: tempPoints,
                        sectionTitle,
                    },
                }));

                break;
            }
            case sections.achievements: {
                const tempPoints = inputDataValues.points

                props.setResumeInformation((prev) => ({
                    ...prev,
                    [sections.achievements]: {
                        ...prev[sections.achievements],
                        points: tempPoints,
                        sectionTitle,
                    },
                }));

                break;
            }
            case sections.workExp: {
                const tempDetail = {
                    roleName: inputDataValues.roleName,
                    companyName: inputDataValues.companyName,
                    state: inputDataValues.state,
                    country: inputDataValues.country,
                    workExpStartDate: inputDataValues.workExpStartDate,
                    workExpEndDate: inputDataValues.workExpEndDate,
                    workExpSum1: inputDataValues.workExpSum1,
                    workExpSum2: inputDataValues.workExpSum2,
                    workExpSum3: inputDataValues.workExpSum3,
                };

                const tempDetails = [...resumeInformation[sections.workExp]?.details];
                tempDetails[activeAddOnDetailIndex] = tempDetail;

                props.setResumeInformation((prev) => ({
                    ...prev,
                    [sections.workExp]: {
                        ...prev[sections.workExp],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));

                break;
            }
            case sections.projects: {
                const tempDetail = {
                    projectName: inputDataValues.projectName,
                    projectDesp: inputDataValues.projectDesp,
                    projectGithub: inputDataValues.projectGithub,
                    preview: inputDataValues.preview
                };

                const tempDetails = [...resumeInformation[sections.projects]?.details];
                tempDetails[activeAddOnDetailIndex] = tempDetail;

                props.setResumeInformation((prev) => ({
                    ...prev,
                    [sections.projects]: {
                        ...prev[sections.projects],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));

                break;
            }
            case sections.POR: {
                const tempDetail = {
                    positionName: inputDataValues.positionName,
                    responsibilities: inputDataValues.responsibilities
                };

                const tempDetails = [...resumeInformation[sections.POR]?.details];
                tempDetails[activeAddOnDetailIndex] = tempDetail;

                props.setResumeInformation((prev) => ({
                    ...prev,
                    [sections.POR]: {
                        ...prev[sections.POR],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));

                break;
            }
            case sections.others: {
                const tempDetail = inputDataValues.other;

                props.setResumeInformation((prev) => ({
                    ...prev,
                    [sections.others]: {
                        ...prev[sections.others],
                        detail: tempDetail,
                        sectionTitle,
                    },
                }));
                break;
            }
            default:
                break;
        }
        console.log(resumeInformation)

    }

    //* Effects
    useEffect(() => {

        const activeInfo = resumeInformation[sections[activeSectionObjectKey]]

        setActiveInformation(activeInfo)
        setSectionTitle(sections[activeSectionObjectKey])
        setactiveAddOnDetailIndex(0)
        setInputDataValues({
            name: activeInfo?.detail?.name || ""
            ,
            email: activeInfo?.detail?.email || ""
            ,
            phone: activeInfo?.detail?.phone || ""
            ,
            location: activeInfo?.detail?.location || ""
            ,
            github: activeInfo?.details
                ? activeInfo.details[0]?.github || ""
                : activeInfo?.detail?.github || ""
            ,
            linkedin: activeInfo?.detail?.linkedin || ""
            ,
            objective: activeInfo?.detail?.objective || ""
            ,
            portfolio: activeInfo?.detail?.portfolio || ""
            ,
            //Education
            courseName: activeInfo?.details
                ? activeInfo.details[0]?.courseName || ""
                : ""
            ,
            specialization: activeInfo?.details
                ? activeInfo.details[0]?.specialization || ""
                : ""
            ,
            collegeName: activeInfo?.details
                ? activeInfo.details[0]?.collegeName || ""
                : ""
            ,
            cgpa: activeInfo?.details
                ? activeInfo.details[0]?.cgpa || ""
                : ""
            ,
            eduStartDate: activeInfo?.details
                ? activeInfo.details[0]?.eduStartDate || ""
                : ""
            ,
            eduEndDate: activeInfo?.details
                ? activeInfo.details[0]?.eduEndDate || ""
                : ""
            ,
            //Skills Achievements
            points: activeInfo?.details
                ? activeInfo.details[0]?.points
                    ? [...activeInfo.details[0]?.points]
                    : ""
                : activeInfo?.points
                    ? [...activeInfo.points]
                    : ""
            ,
            //Work Experience
            roleName: activeInfo?.details
                ? activeInfo.details[0]?.roleName || ""
                : ""
            ,
            companyName: activeInfo?.details
                ? activeInfo.details[0]?.companyName || ""
                : ""
            ,
            state: activeInfo?.details
                ? activeInfo.details[0]?.state || ""
                : ""
            ,
            country: activeInfo?.details
                ? activeInfo.details[0]?.country || ""
                : ""
            ,
            workExpStartDate: activeInfo?.details
                ? activeInfo.details[0]?.workExpStartDate || ""
                : ""
            ,
            workExpEndDate: activeInfo?.details
                ? activeInfo.details[0]?.workExpEndDate || ""
                : ""
            ,
            workExpSum1: activeInfo?.details
                ? activeInfo.details[0]?.workExpSum1 || ""
                : ""
            ,
            workExpSum2: activeInfo?.details
                ? activeInfo.details[0]?.workExpSum2 || ""
                : ""
            ,
            workExpSum3: activeInfo?.details
                ? activeInfo.details[0]?.workExpSum3 || ""
                : ""
            ,
            //Projects
            projectName: activeInfo?.details
                ? activeInfo.details[0]?.projectName || ""
                : ""
            ,
            projectDesp: activeInfo?.details
                ? activeInfo.details[0]?.projectDesp || ""
                : ""
            ,
            projectGithub: activeInfo?.details
                ? activeInfo.details[0]?.projectGithub || ""
                : ""
            ,
            preview: activeInfo?.details
                ? activeInfo.details[0]?.preview || ""
                : ""
            ,
            //POR
            positionName: activeInfo?.details
                ? activeInfo.details[0]?.positionName || ""
                : ""
            ,
            responsibilities: activeInfo?.details
                ? activeInfo.details[0]?.responsibilities || ""
                : ""
            ,
            //others
            other: typeof (activeInfo?.detail) !== "object"
                ? activeInfo?.detail
                : "",
        })


    }, [activeSectionObjectKey])

    useEffect(() => {
        setActiveInformation(resumeInformation[sections[activeSectionObjectKey]]);
    }, [resumeInformation]);

    useEffect(() => {
        const details = activeInformation?.details;
        if (!details)
            return;

        const activeInfo = resumeInformation[sections[activeSectionObjectKey]];

        setInputDataValues({
            courseName: activeInfo.details[activeAddOnDetailIndex]?.courseName || "",
            specialization: activeInfo.details[activeAddOnDetailIndex]?.specialization || "",
            collegeName: activeInfo.details[activeAddOnDetailIndex]?.collegeName || "",
            cgpa: activeInfo.details[activeAddOnDetailIndex]?.cgpa || "",
            eduStartDate: activeInfo.details[activeAddOnDetailIndex]?.eduStartDate || "",
            eduEndDate: activeInfo.details[activeAddOnDetailIndex]?.eduEndDate || "",
            roleName: activeInfo.details[activeAddOnDetailIndex]?.roleName || "",
            companyName: activeInfo.details[activeAddOnDetailIndex]?.companyName || "",
            state: activeInfo.details[activeAddOnDetailIndex]?.state || "",
            country: activeInfo.details[activeAddOnDetailIndex]?.country || "",
            workExpSum1: activeInfo.details[activeAddOnDetailIndex]?.workExpSum1 || "",
            workExpSum2: activeInfo.details[activeAddOnDetailIndex]?.workExpSum2 || "",
            workExpSum3: activeInfo.details[activeAddOnDetailIndex]?.workExpSum3 || "",
            projectName: activeInfo.details[activeAddOnDetailIndex]?.projectName || "",
            projectDesp: activeInfo.details[activeAddOnDetailIndex]?.projectDesp || "",
            github: activeInfo.details[activeAddOnDetailIndex]?.github || "",
            preview: activeInfo.details[activeAddOnDetailIndex]?.preview || "",
            positionName: activeInfo.details[activeAddOnDetailIndex]?.positionName || "",
            responsibilities: activeInfo.details[activeAddOnDetailIndex]?.responsibilities || "",
        });
    }, [activeAddOnDetailIndex]);


    return (
        <>
            <div className={styles.headerBox}>
                <div className={styles.headerItems}>
                    {Object.keys(sections)?.map((key) => (
                        <div
                            className={
                                `${styles.headerItem}
                                ${activeSectionObjectKey === key ? styles.activeItem : ""
                                }
                                `
                            }
                            key={key}
                            onClick={() => { setactiveSectionObjectKey(key) }}
                        >
                            {sections[key]}
                        </div>
                    ))}
                </div>


            </div>
            <div className={styles.contentBox}>
                <div className={styles.addOns}>
                    {


                        activeInformation?.details
                            ?
                            activeInformation?.details?.map((item, index) => (
                                activeAddOnDetailIndex === index
                                    ?
                                    <Button
                                        className={styles.addOns}
                                        key={item.title + index}
                                        onClick={() => setactiveAddOnDetailIndex(index)}
                                        variant="primary"
                                    >
                                        {sections[activeSectionObjectKey]} {index + 1}
                                        <X
                                            size={16}
                                            className={styles.cross}
                                            onClick={() => { handleNewDelDetail(index) }}
                                        />
                                    </Button>
                                    :
                                    <Button
                                        className={styles.addOns}
                                        key={item.title + index}
                                        variant="secondary"
                                        onClick={() => setactiveAddOnDetailIndex(index)}
                                    >
                                        {sections[activeSectionObjectKey]} {index + 1}
                                        <X size={16}
                                            className={styles.cross}
                                            onClick={() => { handleNewDelDetail(index) }}
                                        />
                                    </Button>
                            ))
                            : ""

                    }
                    {
                        activeInformation?.details && activeInformation?.details?.length > 0
                            ? <Button variant="info" className={styles.addOns} onClick={handleNewAddDetail}>Add</Button>
                            : ("")
                    }
                </div>

                {

                    generateSectionBody()
                }
                <Button className={styles.saveBtn} onClick={handleComponentSubmission} variant="primary">Save</Button>{' '}
            </div>

        </>

    )
}

export default Editor