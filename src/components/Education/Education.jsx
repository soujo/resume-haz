import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from './Education.module.css'

const EducationBody = ({ inputDataValues, onChange, handleSectionChange }) => {

    const {

        title,
        courseName,
        specialization,
        collegeName,
        cgpa,
        startDate,
        endDate

    } = inputDataValues;

    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange(name, value);
        console.log(name,value)
        handleSectionChange("Basic Information", inputDataValues);
    };


    return (
        <div className={styles.container}>
            <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name='title' placeholder="" value={title} onChange={handleChange} />
                </Form.Group>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Course Name and Subject</Form.Label>
                        <Form.Control type="text" name='courseName' placeholder="Eg. B.Tech in Computer Science and Engineering" value={courseName} onChange={handleChange}/>
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Specialization</Form.Label>
                        <Form.Control type="text" name='specialization' placeholder="Eg. Machine Learning" value={specialization} onChange={handleChange}/>
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>

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
            </div>
        </div>
    )
}

export default EducationBody