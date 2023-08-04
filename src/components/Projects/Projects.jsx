import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from './Projects.module.css'

const ProjectsBody = ({ inputDataValues, onChange }) => {

    const {

        title,
        projectName,
        projectDesp,
        github,
        preview

    } = inputDataValues;

    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange(name, value);
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
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control type="text" name='projectName' placeholder="Eg xyz" value={projectName} onChange={handleChange}/>
                    </Form.Group>

                </div>
            </div>
            <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Project Description</Form.Label>
                    <Form.Control type="text" name='projectDesp' placeholder="Eg. Build a project that does something and had quantified success using A, B, and C. " value={projectDesp} onChange={handleChange}/>
                </Form.Group>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>GitHub Links</Form.Label>
                        <Form.Control type="text" name='github' placeholder="Enter your github repo link" value={github} onChange={handleChange}/>
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Preview Link</Form.Label>
                        <Form.Control type="text" name='preview' placeholder="Enter your hosted website/app link" value={preview} onChange={handleChange}/>
                    </Form.Group>

                </div>
            </div>
        </div>
    )
}

export default ProjectsBody