import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import styles from "./Editor.module.css"
import { X } from 'react-feather';

import BasicInfoBody from "../BasicInfo/BasicInfo";
import EducationBody from "../Education/Education";
import SkillsBody from "../Skills/Skills";
import AchievementsBody from "../Achievements/Achievements";
import WorkExperienceBody from "../WorkExperience/WorkExperience";
import ProjectsBody from "../Projects/Projects";
import PORBody from "../POR/POR";
import OthersBody from "../Others/Others";

function Editor(props) {

    const sections = props.sections
    const values = Object.values(sections)

    const information = props.information

    const [activeHeaderItemKey, setactiveHeaderItemKey] = useState(0)

    const [activeInformation, setActiveInformation] = useState(
        information["Basic Information"]
    );


    const [inputDataValues, setInputDataValues] = useState({
        title: activeInformation?.detail?.title || "",
        name: activeInformation?.detail?.name || "",
        email: activeInformation?.detail?.email || "",
        phone: activeInformation?.detail?.phone || "",
        location: activeInformation?.detail?.location || "",
        github: activeInformation?.detail?.github || "",
        linkedin: activeInformation?.detail?.linkedin || "",
        objective: activeInformation?.detail?.objective || "",
        portfolio: activeInformation?.detail?.portfolio || "",
    });

    const generateSectionBody = () => {
        switch (Object.keys(sections)[activeHeaderItemKey]) {
            case Object.keys(sections)[0]:
                return <BasicInfoBody value={sections.basicInfo} />;
            case Object.keys(sections)[1]:
                return <EducationBody value={sections.education} />;
            case Object.keys(sections)[2]:
                return <SkillsBody value={sections.skills} />;
            case Object.keys(sections)[3]:
                return <AchievementsBody value={sections.achievements} />;
            case Object.keys(sections)[4]:
                return <WorkExperienceBody value={sections.workExp} />;
            case Object.keys(sections)[5]:
                return <ProjectsBody value={sections.projects} />;
            case Object.keys(sections)[6]:
                return <PORBody value={sections.POR} />;
            case Object.keys(sections)[7]:
                return <OthersBody value={sections.others} />;
            default:
                return null;
        }
    };

    useEffect(() => {
        setActiveInformation(information[values[activeHeaderItemKey]])
    }), [activeHeaderItemKey]

    return (
        <>
            <div className={styles.headerBox}>
                <div className={styles.headerItems}>
                    {values.map((value, index) => (
                        <div
                            className={
                                `${styles.headerItem}
                                ${activeHeaderItemKey === index ? styles.activeItem : ""
                                }
                                `
                            }
                            key={index}
                            onClick={() => { setactiveHeaderItemKey(index) }}
                        >
                            {value}
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
                                <Button className={styles.addOnsBtn} key={index} variant="secondary">Add-on {index + 1} <X size={16} /></Button>
                            ))
                            : ""
                    }
                </div>

                {

                    generateSectionBody()
                }
                <Button className={styles.saveBtn} variant="primary">Save</Button>{' '}
            </div>

        </>

    )
}

export default Editor