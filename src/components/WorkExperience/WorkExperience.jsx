import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from './WorkExperience.module.css'

const WorkExperienceBody = ({ inputDataValues = {}, onChange }) => {

    const {

        title,
        roleName,
        companyName,
        state,
        country,
        startDate,
        endDate,
        points

    } = inputDataValues;

    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange.handleInputChange(name, value);
    };

    const handlePointUpdate = (e) => {
        const { name, value } = e.target;
        let index = name
        onChange.handlePointUpdate(value, index);
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
                        <Form.Label>Role Name</Form.Label>
                        <Form.Control type="text" name='roleName' placeholder="Eg. Software Engineer" value={roleName} onChange={handleChange} />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" name='companyName' placeholder="Eg. Atlassian" value={companyName} onChange={handleChange} />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" name='state' placeholder="Eg. Bengaluru" value={state} onChange={handleChange} />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" name='country' placeholder="Eg. India" value={country} onChange={handleChange} />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Joining Date</Form.Label>
                        <Form.Control type="date" name='startDate' placeholder="" value={startDate} onChange={handleChange} />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Termination Date</Form.Label>
                        <Form.Control type="date" name='endDate' placeholder="" value={endDate} onChange={handleChange} />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Summary</Form.Label>
                        <Form.Control type="text" name='0' placeholder="Eg. Achieved X% growth for XYZ using A, B, and C skills" value={points ? points[0] : ""} onChange={handlePointUpdate} />
                    </Form.Group>

                </div>

            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" name='1' placeholder="Eg. Developed XYZ that did A, B, and C using X, Y, and Z." value={points ? points[1] : ""} onChange={handlePointUpdate} />
                    </Form.Group>

                </div>

            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" name='2' placeholder="Eg. Led XYZ which led to X% of improvement in ABC " value={points ? points[2] : ""} onChange={handlePointUpdate} />
                    </Form.Group>

                </div>

            </div>
        </div>
    )
}

export default WorkExperienceBody