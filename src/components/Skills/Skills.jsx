import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from './Skills.module.css'

const SkillsBody = (props) => {

    const inputValue = props.value

    return (
        <div className={styles.container}>
            <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="" defaultValue={inputValue} />
                </Form.Group>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Technical Skills</Form.Label>
                        <Form.Control type="text" placeholder="Eg. Nodejs, Reactjs etc" />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Soft Skills</Form.Label>
                        <Form.Control type="text" placeholder="Eg. Problem Solving, Leadership etc" />
                    </Form.Group>

                </div>

            </div>
        </div>
    )
}

export default SkillsBody