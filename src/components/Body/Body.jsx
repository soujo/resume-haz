import React from "react";
import styles from "./Body.module.css"
import Editor from "../Editor/Editor";
import Button from 'react-bootstrap/Button';
import { Download } from 'react-feather';

function Body (){

    const sections = {
        basicInfo : "Basic Information",
        education : "Education",
        skills : "Skills",
        achievements : "Achievements",
        workExp : "Work Experience",
        projects : "Projects",
        POR : "Position Of Reponsibility",
        others : "Interest and Hobbies"
    }
    
    return (
        <div className={styles.bodySection}>
            <div className={styles.bodyHeader}>
                <div className={styles.textContent}>
                Get started on your journey to success with our intuitive resume builder. Fill in your information, customize your resume, and hit download to unlock new career possibilities. Your future awaits!"
                </div>
                <div className={styles.dwldButton}>
                    <Button variant="primary">Download <Download className={styles.dwldIcon} size={18}/> </Button>{' '}
                </div>
            </div>
            <div className={styles.editorBox}>
                <Editor
                    sections={sections}
                />
            </div>
            <div className={styles.ResumeBox}>

            </div>
        </div>
    )
}

export default Body