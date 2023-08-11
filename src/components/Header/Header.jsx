import React from "react";
import styles from "./Header.module.css"
import heroSectionSVG from "../../assets/heroSectionSVG.svg"
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.heading}>
                    Unleash Your Potential with our <span>Resume</span> Builder!
                </h1>
                <p className={styles.para}>
                    Craft Your Career Journey for free !
                </p>
                <div className={styles.heroSectionCTA}>
                    <a href="#editor">
                        <Button variant="primary">Get Started</Button>
                    </a>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <img src={heroSectionSVG} alt="Resume" />
            </div>
        </div>
    );

}

export default Header 