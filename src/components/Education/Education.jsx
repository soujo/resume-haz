import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from './Education.module.css'

const EducationBody = (props) => {

    const inputValue = props.value

    return (
        <div className={styles.container}>
            <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="" defaultValue ={inputValue}/>
                </Form.Group>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Course Name and Subject</Form.Label>
                        <Form.Control type="text" placeholder="Eg. B.Tech in Computer Science and Engineering" />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Specialization</Form.Label>
                        <Form.Control type="text" placeholder="Eg. Machine Learning" />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>College/School Name</Form.Label>
                        <Form.Control type="text" placeholder="Eg. ABC College/School" />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>CGPA</Form.Label>
                        <Form.Control type="text" placeholder="Eg 7.5" />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Course Starting Date</Form.Label>
                        <Form.Control type="date" placeholder="" />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Course Ending Date</Form.Label>
                        <Form.Control type="date" placeholder="" />
                    </Form.Group>

                </div>
            </div>
        </div>
    )
}

export default EducationBody