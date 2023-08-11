import React, { forwardRef, useEffect, useState } from "react";
import styles from './Resume.module.css'
import { Disc } from 'react-feather'

const Resume = forwardRef((props, ref) => {

    const { sections, resumeInformation } = props;

    const [columns, setColumns] = useState([[]]);

    const info = {
        basicInfo: resumeInformation[sections.basicInfo],
        education: resumeInformation[sections.education],
        skills: resumeInformation[sections.skills],
        achievements: resumeInformation[sections.achievements],
        workExp: resumeInformation[sections.workExp],
        projects: resumeInformation[sections.projects],
        POR: resumeInformation[sections.POR],
        others: resumeInformation[sections.others],
    };

    const getFormattedDate = (value) => {
        if (!value) return "";
        const date = new Date(value);
        const month = date.toLocaleString('default', { month: 'short' });
        return `${month}, ${date.getFullYear()}`;
    };

    const sectionDiv = {
        [sections.basicInfo]: (
            <div key={"basicInfo"}>
                <div className={styles.basicInfoSection}>
                    {
                        info?.basicInfo?.detail?.name
                            ?
                            (
                                <div className={styles.fullName}>
                                    {info?.basicInfo?.detail?.name.toUpperCase()}
                                </div>
                            )
                            : <></>
                    }
                    <div className={styles.phoneCity}>
                        {
                            info?.basicInfo?.detail?.phone
                                ?
                                (
                                    <div className={styles.phone}>
                                        {info?.basicInfo?.detail?.phone}

                                    </div>
                                )
                                : <></>
                        }
                        {
                            info?.basicInfo?.detail?.location
                                ?
                                (
                                    <Disc className={styles.disc} size={10} />

                                )
                                : <></>
                        }
                        {
                            info?.basicInfo?.detail?.location
                                ?
                                (
                                    <div className={styles.city}>
                                        {info?.basicInfo?.detail?.location}

                                    </div>
                                )
                                : <></>
                        }

                    </div>
                    <div className={styles.basicInfoLinks}>
                        {
                            info?.basicInfo?.detail?.email
                                ?
                                (
                                    <div className={styles.email}>
                                        <a href={`mailto:${info?.basicInfo?.detail?.email}`}>Email</a>
                                    </div>
                                )
                                : <></>
                        }
                        {
                            info?.basicInfo?.detail?.linkedin
                                ?
                                (
                                    <Disc className={styles.disc} size={10} />

                                )
                                : <></>
                        }
                        {
                            info?.basicInfo?.detail?.linkedin
                                ?
                                (
                                    <div className={styles.linkedin}>
                                        <a href={`${info?.basicInfo?.detail?.linkedin}`}>LinkedIn</a>
                                    </div>
                                )
                                : <></>
                        }
                        {
                            info?.basicInfo?.detail?.github
                                ?
                                (
                                    <Disc className={styles.disc} size={10} />

                                )
                                : <></>
                        }
                        {
                            info?.basicInfo?.detail?.github
                                ?
                                (
                                    <div className={styles.github}>
                                        <a href={`${info?.basicInfo?.detail?.github}`}>GitHub</a>
                                    </div>
                                )
                                : <></>
                        }
                        {
                            info?.basicInfo?.detail?.portfolio
                                ?
                                (
                                    <Disc className={styles.disc} size={10} />

                                )
                                : <></>
                        }
                        {
                            info?.basicInfo?.detail?.portfolio
                                ?
                                (
                                    <div className={styles.portfolio}>
                                        <a href={`${info?.basicInfo?.detail?.portfolio}`}>Portfolio</a>
                                    </div>
                                )
                                : <></>
                        }
                    </div>
                </div>
                <div className={styles.objectiveSection}>
                    {
                        info?.basicInfo?.detail?.objective
                            ?
                            (

                                <>
                                    <div className={styles.header}>OBJECTIVE</div>
                                    <div className={styles.sectionContent}>
                                        {info?.basicInfo?.detail?.objective}
                                    </div>
                                </>
                            )
                            : <></>
                    }
                </div>
            </div>
        ),
        [sections.education]: (
            <div key={"education"} className={styles.educationSection}>
                {
                    info?.education?.details.length > 0
                        ? <div className={styles.header}>EDUCATION</div>
                        : <></>

                }
                {info.education?.details?.map((item) => (
                    <>
                        <div className={styles.sectionContent}>
                            <div className={styles.box}>
                                <div className={styles.courseSub}>
                                    {
                                        item.courseName
                                            ?
                                            (
                                                <div className={styles.course}>{item.courseName}</div>
                                            )
                                            : <></>
                                    }
                                </div>
                                <div className={styles.cgpaDate}>
                                    {
                                        item.cgpa
                                            ?
                                            (
                                                <div className={styles.cgpa}>CGPA: {item.cgpa} &nbsp;&nbsp;</div>
                                            )
                                            : <></>
                                    }
                                    {
                                        item.eduStartDate
                                            ?
                                            (
                                                item.eduEndDate
                                                    ?
                                                    (
                                                        <div className={styles.date}>
                                                            {

                                                                `( ${getFormattedDate(item.eduStartDate)} - ${getFormattedDate(item.eduEndDate)} )`
                                                            }

                                                        </div>
                                                    )
                                                    :
                                                    (
                                                        <div className={styles.date}>
                                                            {
                                                                `( ${getFormattedDate(item.eduStartDate)} - Present )`
                                                            }

                                                        </div>
                                                    )


                                            )
                                            : <></>
                                    }
                                </div>
                            </div>
                            {
                                item.specialization
                                    ?
                                    (
                                        <div className={styles.specialization}>Relevent CourseWork: {item.specialization}</div>
                                    )
                                    : <></>
                            }
                            {
                                item.collegeName
                                    ?
                                    (
                                        <div className={styles.college}> {item.collegeName}</div>
                                    )
                                    : <></>
                            }
                        </div>
                    </>

                ))}
            </div>
        ),
        [sections.skills]: (
            <div key={"skills"} className={styles.skillsSection}>
                {
                    info?.skills?.points.length > 0
                        ?
                        (
                            <>
                                <div className={styles.header}>SKILLS</div>
                                {
                                    info?.skills?.points[0]
                                        ?
                                        (
                                            <div className={styles.skillsBox}>
                                                <div className={styles.skillsHeader}>
                                                    Technical Skills
                                                </div>
                                                <div className={styles.skillsContent}>
                                                    {info?.skills?.points[0]}
                                                </div>
                                            </div>

                                        )
                                        : <></>


                                }
                                {
                                    info?.skills?.points[1]
                                        ?
                                        (
                                            <div className={styles.skillsBox}>
                                                <div className={styles.skillsHeader}>
                                                    Soft Skills
                                                </div>
                                                <div className={styles.skillsContent}>
                                                    {info?.skills?.points[1]}
                                                </div>
                                            </div>

                                        )
                                        : <></>


                                }
                            </>

                        )
                        :
                        <></>
                }
            </div>
        ),
        [sections.achievements]: (
            <div key={"achievements"} className={styles.achievementsSection}>
                {
                    info?.achievements?.points.length > 0
                        ?
                        <>
                            <div className={styles.header}>ACHIEVEMENTS</div>
                            <div className={styles.sectionContent}>
                                <ul>
                                    {
                                        info?.achievements?.points?.map((elem, index) => (
                                            <li key={index}>{elem}</li>
                                        ))
                                    }
                                </ul>
                            </div>

                        </>
                        :
                        <></>
                }
            </div>
        ),
        [sections.workExp]: (
            <div key={"workExp"} className={styles.workExpSection}>
                {
                    info?.workExp?.details.length > 0
                        ? <div className={styles.header}>EXPERIENCE</div>
                        : <></>

                }
                <div className={styles.sectionContent}>
                    {info.workExp?.details?.map((item) => (
                        <>
                            <div className={styles.workExpBox}>
                                <div className={styles.roleDate}>
                                    {
                                        item.roleName
                                            ?
                                            <div className={styles.role}>{item.roleName}</div>
                                            :
                                            <></>

                                    }
                                    {
                                        item.workExpStartDate
                                            ?
                                            (
                                                item.workExpEndDate
                                                    ?
                                                    (
                                                        <div className={styles.date}>
                                                            {

                                                                `${getFormattedDate(item.workExpStartDate)} - ${getFormattedDate(item.workExpEndDate)}`
                                                            }

                                                        </div>
                                                    )
                                                    :
                                                    (
                                                        <div className={styles.date}>
                                                            {
                                                                `${getFormattedDate(item.workExpStartDate)} - Present `
                                                            }

                                                        </div>
                                                    )


                                            )
                                            : <></>
                                    }
                                </div>
                                <div className={styles.companyLocation}>
                                    {
                                        item.companyName
                                            ?
                                            <div className={styles.company}>{item.companyName}</div>
                                            :
                                            <></>

                                    }
                                    {
                                        item.state && item.country
                                            ?
                                            <div className={styles.location}>{`${item.state}, ${item.country}`}</div>
                                            :
                                            <></>

                                    }
                                </div>
                            </div>
                            <div className={styles.workExpSummary}>
                                <ul>
                                    {
                                        item.workExpSum1
                                            ?
                                            <li>{item.workExpSum1}</li>
                                            :
                                            <></>
                                    }
                                    {
                                        item.workExpSum2
                                            ?
                                            <li>{item.workExpSum2}</li>
                                            :
                                            <></>
                                    }
                                    {
                                        item.workExpSum3
                                            ?
                                            <li>{item.workExpSum3}</li>
                                            :
                                            <></>
                                    }
                                </ul>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        ),
        [sections.projects]: (
            <div key={"projects"} className={styles.projectSection}>
                {
                    info?.projects?.details.length > 0
                        ? <div className={styles.header}>PROJECTS</div>
                        : <></>

                }
                <div className={styles.sectionContent}>
                    {info.projects?.details?.map((item) => (
                        <div className={styles.project}>
                            <div className={styles.projectHeader}>{item.projectName}</div>
                            <div className={styles.projectContent}>
                                <div className={styles.projectText}>
                                    {item.projectDesp}
                                    &nbsp;
                                    {
                                        info?.projects?.details?.projectGithub == ""
                                            ? <></>
                                            : <a href={`${item.projectGithub}`}>(GitHub)</a>
                                    }
                                    {
                                        info?.projects?.details?.preview == ""
                                            ? <></>
                                            : <a href={`${item.preview}`}>(Preview)</a>
                                    }
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        ),
        [sections.POR]: (
            <div key={"por"} className={styles.porSection}>
                {
                    info?.POR?.details.length > 0
                        ? <div className={styles.header}>POSITION OF RESPONSIBILITY</div>
                        : <></>

                }
                <div className={styles.sectionContent}>
                    {info.POR?.details?.map((item) => (

                        <div className={styles.por}>
                            <div className={styles.porHeader}>{item.positionName}</div>
                            <div className={styles.porContent}>
                                {item.responsibilities}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
        [sections.others]: (
            <div key={"others"} className={styles.othersSection}>
                {
                    info?.others?.detail == ""
                        ? <></>
                        : <div className={styles.header}>INTEREST AND HOBBIES</div>

                }
                <div className={styles.sectionContent}>
                    <ul>
                        {
                            info?.others?.detail == ""
                                ? <></>
                                : <li>{info?.others?.detail}</li>

                        }
                    </ul>
                </div>
            </div>
        )
    }


    useEffect(() => {
        setColumns([
            [
                sections.basicInfo,
                sections.education,
                sections.skills,
                sections.achievements,
                sections.workExp,
                sections.projects,
                sections.POR,
                sections.others,
            ]
        ]);
    }, []);


    return (
        <div ref={ref} className={styles.container}>
            {columns[0].map((item) => sectionDiv[item])}
        </div>
    )
})

export default Resume