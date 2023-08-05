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

    const { sections, resumeInformation, setResumeInformation } = props;

    const [activeSectionObjectKey, setactiveSectionObjectKey] = useState(Object.keys(sections)[0])

    const [activeInformation, setActiveInformation] = useState(
        resumeInformation[sections[Object.keys(sections)[0]]]
    );

    const [ sectionTitle , setSectionTitle ] = useState(sections[Object.keys(sections)[0]])

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

    const handlePointUpdate = (value, index) => {
        const tempInputDataValues = { ...inputDataValues };
        if (!Array.isArray(tempInputDataValues.points)) tempInputDataValues.points = [];
        tempInputDataValues.points[index] = value;
        setInputDataValues(tempInputDataValues);
    };

    const handleInputChange = (fieldName, value) => {
        setInputDataValues((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
        console.log(inputDataValues)
        // console.log("resumeInformation:",resumeInformation)
    };

    const handleChangeFunctions = {
        handleInputChange,
        handlePointUpdate,
    };

    // const handleSectionChange = (sectionKey, updatedSection) => {
    //     setResumeInformation((prevResumeInformation) => ({
    //         ...prevResumeInformation,
    //         [sectionKey]: updatedSection,
    //     }));
    // };

    const handleComponentSubmission = () => {
        console.log(inputDataValues)
    }

    const generateSectionBody = () => {
        switch (sections[activeSectionObjectKey]) {
            case sections.basicInfo:
                return <BasicInfoBody 
                sectionTitle={sectionTitle} 
                handleInputChange={handleInputChange} 
                inputDataValues={inputDataValues}
                />;
            case sections.education:
                return <EducationBody sectionTitle={sectionTitle} inputDataValues={inputDataValues} handleInputChange={handleInputChange}/>;
            case sections.skills:
                return <SkillsBody sectionTitle={sectionTitle} inputDataValues={inputDataValues} handleChangeFunctions={handleChangeFunctions}/>;
            // case Object.keys(sections)[3]:
            //     return <AchievementsBody inputDataValues={inputDataValues} onChange={handleChangeFunctions} />;
            // case Object.keys(sections)[4]:
            //     return <WorkExperienceBody inputDataValues={inputDataValues} onChange={handleChangeFunctions} />;
            // case Object.keys(sections)[5]:
            //     return <ProjectsBody inputDataValues={inputDataValues} onChange={handleInputChange} />;
            // case Object.keys(sections)[6]:
            //     return <PORBody inputDataValues={inputDataValues} onChange={handleInputChange} />;
            case sections.others:
                return <OthersBody sectionTitle={sectionTitle} inputDataValues={inputDataValues} handleInputChange={handleInputChange}/>;
            default:
                return null;
        }
    };

    useEffect(() => {

    const activeInfo = resumeInformation[sections[activeSectionObjectKey]]
    setActiveInformation(activeInfo)
    setSectionTitle(sections[activeSectionObjectKey])
    console.log(sections[activeSectionObjectKey])

        setInputDataValues({
            //BasicInfo
            title: activeInfo?.details
                ? activeInfo.details[0]?.title || ""
                : activeInfo?.detail?.title || ""
            ,
            name: activeInfo?.detail?.name || ""
            ,
            email: activeInfo?.detail?.email || ""
            ,
            // phone: activeInfo?.detail?.phone || ""
            // ,
            // location: activeInfo?.detail?.location || ""
            // ,
            // github: activeInfo?.details
            //     ? activeInfo.details[0]?.github || ""
            //     : activeInfo?.detail?.github || ""
            // ,
            // linkedin: activeInfo?.detail?.linkedin || ""
            // ,
            // objective: activeInfo?.detail?.objective || ""
            // ,
            // portfolio: activeInfo?.detail?.portfolio || ""
            // ,
            //Education
            courseName: activeInfo?.details
                ? activeInfo.details[0]?.courseName || ""
                : ""
            ,
            specialization: activeInfo?.details
                ? activeInfo.details[0]?.specialization || ""
                : ""
            ,
            // collegeName: activeInfo?.details
            //     ? activeInfo.details[0]?.collegeName || ""
            //     : ""
            // ,
            // cgpa: activeInfo?.details
            //     ? activeInfo.details[0]?.cgpa || ""
            //     : ""
            // ,
            // startDate: activeInfo?.details
            //     ? activeInfo.details[0]?.startDate || ""
            //     : ""
            // ,
            // endDate: activeInfo?.details
            //     ? activeInfo.details[0]?.endDate || ""
            //     : ""
            // ,
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
            // roleName: activeInfo?.details
            //     ? activeInfo.details[0]?.roleName || ""
            //     : ""
            // ,
            // companyName: activeInfo?.details
            //     ? activeInfo.details[0]?.companyName || ""
            //     : ""
            // ,
            // state: activeInfo?.details
            //     ? activeInfo.details[0]?.state || ""
            //     : ""
            // ,
            // country: activeInfo?.details
            //     ? activeInfo.details[0]?.country || ""
            //     : ""
            // ,
            //Projects
            // projectName: activeInfo?.details
            //     ? activeInfo.details[0]?.projectName || ""
            //     : ""
            // ,
            // projectDesp: activeInfo?.details
            //     ? activeInfo.details[0]?.projectDesp || ""
            //     : ""
            // ,
            // preview: activeInfo?.details
            //     ? activeInfo.details[0]?.preview || ""
            //     : ""
            // ,
            //POR
            // positionName: activeInfo?.details
            //     ? activeInfo.details[0]?.positionName || ""
            //     : ""
            // ,
            // responsibilities: activeInfo?.details
            //     ? activeInfo.details[0]?.responsibilities || ""
            //     : ""
            // ,
            //others
            other: typeof (activeInfo?.detail) !== "object"
                ? activeInfo?.detail
                : "",
        })

    }, [activeSectionObjectKey])


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
                                <Button className={styles.addOnsBtn} key={item.title + index} variant="secondary">{sections[activeSectionObjectKey]} {index + 1} <X size={16} /></Button>
                            ))
                            : ""
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