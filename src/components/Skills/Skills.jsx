import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from './Skills.module.css'

const SkillsBody = ({ inputDataValues={}, onChange }) => {

    const {
        
        title,
        points

    } = inputDataValues

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
                    <Form.Control type="text" name='title' placeholder="" value={title} onChange={handleChange}/>
                </Form.Group>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Technical Skills</Form.Label>
                        <Form.Control type="text" name='0' placeholder="Eg. Nodejs, Reactjs etc" value={points ? points[0] : ""} onChange={handlePointUpdate}/>
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Soft Skills</Form.Label>
                        <Form.Control type="text" name='1' placeholder="Eg. Problem Solving, Leadership etc" value={points ? points[1] : ""} onChange={handlePointUpdate}/>
                    </Form.Group>

                </div>

            </div>
        </div>
    )
}

export default SkillsBody