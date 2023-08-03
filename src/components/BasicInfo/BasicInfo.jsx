import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from './BasicInfo.module.css'

const BasicInfoBody = (props) => {

    const inputValue = props.value

    return (
        <div className={styles.container}>
            <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Basic Information" defaultValue ={inputValue}/>
                </Form.Group>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Eg. John Doe" />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Eg. example@abc.com" />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Eg. 1234567890" />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Eg Kolkata, India" />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>GitHub Link</Form.Label>
                        <Form.Control type="text" placeholder="Enter your GitHub profile link" />
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>LinkedIn Link </Form.Label>
                        <Form.Control type="text" placeholder="Enter your LinkedIn profile link" />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Objective</Form.Label>
                        <Form.Control as="textarea" placeholder='Write a short summary of yourself'/>
                    </Form.Group>
                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Portfolio Link </Form.Label>
                        <Form.Control type="text" placeholder="Enter your Portfolio link" />
                    </Form.Group>

                </div>
            </div>
        </div>
    )
}

export default BasicInfoBody