import React, { useState } from "react";
import styles from "./Editor.module.css"

function Editor(props) {

    const sections = props.sections
    const values = Object.values(sections);

    const [aciveHeaderItemKey, setaciveHeaderItemKey] = useState(Object.keys(sections)[0])

    return (
        <>
            <div className={styles.headerBox}>
                <div className={styles.headerItems}>
                    {values.map((value, index) => (
                        <div 
                            className={
                                `${styles.headerItem}
                                ${
                                    aciveHeaderItemKey === index ? styles.activeItem : ""
                                }
                                `
                            } 
                            key={index}
                            onClick={()=>{setaciveHeaderItemKey(index)}}
                        >
                            {value}
                        </div>
                    ))}
                </div>


            </div>
            <div className={styles.contentBox}>

            </div>

        </>

    )
}

export default Editor