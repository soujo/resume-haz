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

    const [activeHeaderItemKey, setactiveHeaderItemKey] = useState(0)

    const [activeInformation, setActiveInformation] = useState(
        resumeInformation["Basic Information"]
    );

    const [inputDataValues, setInputDataValues] = useState({
        title: activeInformation?.title || "",
        name: activeInformation?.name || "",
        email: activeInformation?.email || "",
        phone: activeInformation?.phone || "",
        location: activeInformation?.location || "",
        github: activeInformation?.github || "",
        linkedin: activeInformation?.linkedin || "",
        objective: activeInformation?.objective || "",
        portfolio: activeInformation?.portfolio || "",
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
        console.log("resumeInformation:",resumeInformation)
    };

    const handleChangeFunctions = {
        handleInputChange,
        handlePointUpdate,
    };

    const handleSectionChange = (sectionKey, updatedSection) => {
        setResumeInformation((prevResumeInformation) => ({
          ...prevResumeInformation,
          [sectionKey]: updatedSection,
        }));
      };

    const handleComponentSubmission = () => {
        console.log(inputDataValues)
    }

    const generateSectionBody = () => {
        switch (Object.keys(sections)[activeHeaderItemKey]) {
            case Object.keys(sections)[0]:
                return <BasicInfoBody inputDataValues={inputDataValues} onChange={handleInputChange} handleSectionChange={handleSectionChange}/>;
            case Object.keys(sections)[1]:
                return <EducationBody inputDataValues={inputDataValues} onChange={handleInputChange} handleSectionChange={handleSectionChange}/>;
            case Object.keys(sections)[2]:
                return <SkillsBody inputDataValues={inputDataValues} onChange={handleChangeFunctions} />;
            case Object.keys(sections)[3]:
                return <AchievementsBody inputDataValues={inputDataValues} onChange={handleChangeFunctions} />;
            case Object.keys(sections)[4]:
                return <WorkExperienceBody inputDataValues={inputDataValues} onChange={handleChangeFunctions} />;
            case Object.keys(sections)[5]:
                return <ProjectsBody inputDataValues={inputDataValues} onChange={handleInputChange} />;
            case Object.keys(sections)[6]:
                return <PORBody inputDataValues={inputDataValues} onChange={handleInputChange} />;
            case Object.keys(sections)[7]:
                return <OthersBody inputDataValues={inputDataValues} onChange={handleInputChange} />;
            default:
                return null;
        }
    };

    useEffect(() => {

        const activeInfo = resumeInformation[Object.values(sections)[activeHeaderItemKey]]

        setActiveInformation(activeInfo)

        setInputDataValues({
            //BasicInfo
            title: activeInfo?.details
                ? activeInfo?.title || ""
                : activeInfo?.title || ""
            ,
            name: activeInfo?.detail?.name || ""
            ,
            email: activeInfo?.detail?.email || ""
            ,
            phone: activeInfo?.detail?.phone || ""
            ,
            location: activeInfo?.details
                ? activeInfo.details[0]?.location || ""
                : ""
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
            startDate: activeInfo?.details
                ? activeInfo.details[0]?.startDate || ""
                : ""
            ,
            endDate: activeInfo?.details
                ? activeInfo.details[0]?.endDate || ""
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
            //Projects
            projectName: activeInfo?.details
                ? activeInfo.details[0]?.projectName || ""
                : ""
            ,
            projectDesp: activeInfo?.details
                ? activeInfo.details[0]?.projectDesp || ""
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
    }, [activeHeaderItemKey])

    return (
        <>
            <div className={styles.headerBox}>
                <div className={styles.headerItems}>
                    {Object.values(sections).map((value, index) => (
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
                <Button className={styles.saveBtn} onClick={handleComponentSubmission} variant="primary">Save</Button>{' '}
            </div>

        </>

    )
}

export default Editor