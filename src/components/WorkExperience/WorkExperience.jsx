import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from './WorkExperience.module.css'

const WorkExperienceBody = (props) => {

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
                        <Form.Label>Role Name</Form.Label>
                        <Form.Control type="text" placeholder="Eg. Software Engineer" />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" placeholder="Eg. Atlassian" />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="Eg. Bengaluru" />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" placeholder="Eg. India" />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Joining Date</Form.Label>
                        <Form.Control type="date" placeholder="" />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Termination Date</Form.Label>
                        <Form.Control type="date" placeholder="" />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Summary</Form.Label>
                        <Form.Control type="text" placeholder="Eg. Achieved X% growth for XYZ using A, B, and C skills" />
                    </Form.Group>

                </div>

            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" placeholder="Eg. Developed XYZ that did A, B, and C using X, Y, and Z.
" />
                    </Form.Group>

                </div>

            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" placeholder="Eg. Led XYZ which led to X% of improvement in ABC
" />
                    </Form.Group>

                </div>

            </div>
        </div>
    )
}

export default WorkExperienceBody