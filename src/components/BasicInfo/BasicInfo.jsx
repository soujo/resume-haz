import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from './BasicInfo.module.css'

const BasicInfoBody = ({ inputDataValues, onChange, handleSectionChange }) => {

    const { 
        
        title, 
        name, 
        email, 
        phone, 
        location, 
        github, 
        linkedin, 
        objective, 
        portfolio 

    } = inputDataValues;

    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange(name, value);
        // console.log(name,value)
        handleSectionChange("Basic Information", inputDataValues);
        // console.log(inputDataValues)
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
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Eg. John Doe" value={name} onChange={handleChange}/>
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Eg. example@abc.com" value={email} onChange={handleChange}/>
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" name='phone' placeholder="Eg. 1234567890" value={phone} onChange={handleChange}/>
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" name='location' placeholder="Eg Kolkata, India" value={location} onChange={handleChange}/>
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>GitHub Link</Form.Label>
                        <Form.Control type="text" name='github' placeholder="Enter your GitHub profile link" value={github} onChange={handleChange}/>
                    </Form.Group>

                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>LinkedIn Link </Form.Label>
                        <Form.Control type="text" name='linkedin' placeholder="Enter your LinkedIn profile link" value={linkedin} onChange={handleChange}/>
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Objective</Form.Label>
                        <Form.Control as="textarea" name='objective' placeholder='Write a short summary of yourself' value={objective} onChange={handleChange}/>
                    </Form.Group>
                </div>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Portfolio Link </Form.Label>
                        <Form.Control type="text" name='portfolio' placeholder="Enter your Portfolio link" value={portfolio} onChange={handleChange}/>
                    </Form.Group>

                </div>
            </div>
        </div>
    )
}

export default BasicInfoBody