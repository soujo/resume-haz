import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from './Education.module.css'

const EducationBody = ({ sectionTitle,inputDataValues, handleInputChange, handleSectionChange }) => {

    const {

        title,
        courseName,
        specialization,
        collegeName,
        cgpa,
        startDate,
        endDate

    } = inputDataValues;

    const handleInputChangeHere = (e) => {
        const { name, value } = e.target;
        handleInputChange(name, value);
        // handleSectionChange("Education", inputDataValues);
    };


    return (
        <div className={styles.container}>
            <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name='title' placeholder=""  value={title} onChange={handleInputChangeHere}/>
                </Form.Group>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Course Name and Subject</Form.Label>
                        <Form.Control type="text" name='courseName' placeholder="Eg. B.Tech in Computer Science and Engineering" onChange={handleInputChangeHere} value={courseName}/>
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Specialization</Form.Label>
                        <Form.Control type="text" name='specialization' placeholder="Eg. Machine Learning" onChange={handleInputChangeHere} value={specialization}/>
                    </Form.Group>

                </div>
            </div>
            {/* <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>College/School Name</Form.Label>
                        <Form.Control type="text" name='collegeName' placeholder="Eg. ABC College/School" value={collegeName} onChange={handleChange}/>
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>CGPA</Form.Label>
                        <Form.Control type="text" name='cgpa' placeholder="Eg 7.5" value={cgpa} onChange={handleChange}/>
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Course Starting Date</Form.Label>
                        <Form.Control type="date" name='startDate' placeholder="" value={startDate} onChange={handleChange}/>
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Course Ending Date</Form.Label>
                        <Form.Control type="date" name='endDate' placeholder="" value={endDate} onChange={handleChange}/>
                    </Form.Group>

                </div>
            </div> */}
        </div>
    )
}

export default EducationBody