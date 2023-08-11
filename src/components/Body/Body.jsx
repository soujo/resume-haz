import React, { useState, useRef } from 'react';
import ReactToPrint from "react-to-print";
import styles from "./Body.module.css"
import Editor from "../Editor/Editor";
import Resume from '../Resume/Resume';
import Button from 'react-bootstrap/Button';
import { Download } from 'react-feather';
import { GitHub } from 'react-feather';
import { Linkedin } from 'react-feather';
import { Home } from 'react-feather';
import { Mail } from 'react-feather';

function Body() {

  const sections = {
    basicInfo: "Basic Information",
    education: "Education",
    skills: "Skills",
    achievements: "Achievements",
    workExp: "Work Experience",
    projects: "Projects",
    POR: "Position Of Reponsibility",
    others: "Interest and Hobbies"
  }

  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.skills]: {
      id: sections.skills,
      sectionTitle: sections.skills,
      points: [],
    },
    [sections.achievements]: {
      id: sections.achievements,
      sectionTitle: sections.achievements,
      points: [],
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.projects]: {
      id: sections.projects,
      sectionTitle: sections.projects,
      details: [],
    },
    [sections.POR]: {
      id: sections.POR,
      sectionTitle: sections.POR,
      details: [],
    },
    [sections.others]: {
      id: sections.others,
      sectionTitle: sections.others,
      detail: "",
    },
  });

  const resumeRef = useRef()

  return (
    <div className={styles.bodySection}>
      <div className={styles.bodyHeader}>
        <div className={styles.textContent}>
          Embark on a journey towards your professional aspirations with our revolutionary Resume Builder. Seamlessly translate your experiences into a compelling narrative as you navigate through our user-friendly interface. Watch your resume come to life in real-time, giving you the opportunity to fine-tune every detail until it perfectly aligns with your vision. Step confidently into the job market, armed with an ATS-friendly resume ready to open doors and unlock new opportunities.
        </div>
      </div>
      <div className={styles.editorBox} id='editor'>
        <Editor
          sections={sections}
          resumeInformation={resumeInformation}
          setResumeInformation={setResumeInformation}
        />
      </div>
      <div className={styles.resumeHeader}>
        <div className={styles.resumeContent}>
          Finalized your resume? With a single click, make it yours – download and own your ATS-friendly masterpiece, primed to make an impact.
        </div>
        <div className={styles.dwldButton}>
          <ReactToPrint
            trigger={() => {
              return (
                <Button variant="primary">Download <Download className={styles.dwldIcon} size={18} /> </Button>
              );
            }}
            content={() => resumeRef.current}
          />
        </div>
      </div>
      <div className={styles.resumeBox}>
        <Resume
          ref={resumeRef}
          sections={sections}
          resumeInformation={resumeInformation}
        />
      </div>
      <footer>
        Made with ❤ by &nbsp; <b>Soujanya Hazra</b> &nbsp;
        <a href="https://github.com/soujo">
          <GitHub />
        </a>
        <a href="https://www.linkedin.com/in/soujanyahazra/">
          <Linkedin />
        </a>
        <a href="https://soujanyahazra.tech/">
          <Home />
        </a>
        <a href="mailto:hazrasoujanya@gmail.com">
          <Mail />
        </a>
      </footer>
    </div>
  )
}

export default Body