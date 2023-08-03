import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from './Projects.module.css'

const ProjectsBody = (props) => {

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
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control type="text" placeholder="Eg xyz" />
                    </Form.Group>

                </div>
            </div>
            <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Project Description</Form.Label>
                    <Form.Control type="text" placeholder="Eg. Build a project that does something and had quantified success using A, B, and C. " />
                </Form.Group>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>GitHub Links</Form.Label>
                        <Form.Control type="text" placeholder="Enter your github repo link" />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Preview Link</Form.Label>
                        <Form.Control type="text" placeholder="Enter your hosted website/app link" />
                    </Form.Group>

                </div>
            </div>
        </div>
    )
}

export default ProjectsBody