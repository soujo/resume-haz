import React from 'react'
import styles from './Resume.module.css'
import { Disc } from 'react-feather'

const Resume = () => {
    return (
        <div className={styles.container}>
            <div className={styles.basicInfoSection}>
                <div className={styles.fullName}>
                    XYZ ABC
                </div>
                <div className={styles.phoneCity}>
                    <div className={styles.phone}>
                        1234567890
                    </div>
                    <Disc className={styles.disc} size={10} />
                    <div className={styles.city}>City, Country</div>
                </div>
                <div className={styles.basicInfoLinks}>
                    <div className={styles.email}>
                        <a href="">Gmail</a>
                    </div>
                    <Disc className={styles.disc} size={10} />
                    <div className={styles.linkedin}>
                        <a href="">LinkedIn</a>
                    </div>
                    <Disc className={styles.disc} size={10} />
                    <div className={styles.github}>
                        <a href="">GitHub</a>
                    </div>
                    <Disc className={styles.disc} size={10} />
                    <div className={styles.portfolio}>
                        <a href="">Portfolio</a>
                    </div>
                </div>
            </div>
            <div className={styles.objectiveSection}>
                <div className={styles.header}>OBJECTIVE</div>
                <div className={styles.sectionContent}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, sequi?
                </div>
            </div>
            <div className={styles.educationSection}>
                <div className={styles.header}>EDUCATION</div>
                <div className={styles.sectionContent}>
                    <div className={styles.box}>
                        <div className={styles.courseSub}>
                            <div className={styles.course}>B.Tech</div>
                            &nbsp; in &nbsp;
                            <div className={styles.subject}>Xyz Engineering</div>
                        </div>
                        <div className={styles.cgpaDate}>
                            <div className={styles.cgpa}>
                                CGPA: 7.5
                            </div>
                            &nbsp;&nbsp;
                            <div className={styles.date}>
                                (July’20 - June’24)

                            </div>
                        </div>
                    </div>
                    <div className={styles.college}>
                        XYZ Engineering College
                    </div>
                </div>
            </div>
            <div className={styles.skillsSection}>
                <div className={styles.header}>SKILLS</div>
                <div className={styles.sectionContent}>
                    <div className={styles.skillsBox}>
                        <div className={styles.skillsHeader}>
                            Technical Skills
                        </div>
                        <div className={styles.skillsContent}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, corrupti?
                        </div>
                    </div>
                    <div className={styles.skillsBox}>
                        <div className={styles.skillsHeader}>
                            Soft Skills
                        </div>
                        <div className={styles.skillsContent}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, corrupti?
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.achievementsSection}>
                <div className={styles.header}>ACHIEVEMENTS</div>
                <div className={styles.sectionContent}>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, officiis!</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, officiis!</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, officiis!</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, officiis!</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, officiis!</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, officiis!</li>
                    </ul>
                </div>
            </div>
            <div className={styles.projectSection}>
                <div className={styles.header}>PROJECTS</div>
                <div className={styles.sectionContent}>
                    <div className={styles.project}>
                        <div className={styles.projectHeader}>XYZ</div>
                        <div className={styles.projectContent}>
                            <div className={styles.projectText}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum soluta ratione fugit quae tempora cum minus quibusdam et rem exercitationem?fsdfsdfsdffdsfdsfdsf
                                &nbsp;
                                <a href="">(GitHub)</a>
                                &nbsp;
                                <a href="">(Preview)</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.porSection}>
                <div className={styles.header}>POSITION OF RESPONSIBILITY</div>
                <div className={styles.sectionContent}>
                    <div className={styles.por}>
                        <div className={styles.porHeader}>Admin at ABC</div>
                        <div className={styles.porContent}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, mollitia eum. Cum voluptas ab mollitia saepe sequi, similique quo distinctio.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.othersSection}>
                <div className={styles.header}>INTEREST AND HOBBIES</div>
                <div className={styles.sectionContent}>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, officiis!</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume