import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from './Others.module.css'

const OthersBody = ({ sectionTitle, inputDataValues, handleInputChange }) => {

    const {

        title,
        other

    } = inputDataValues;

    const handleInputChangeHere = (e) => {
        const { name, value } = e.target;
        handleInputChange(name, value);
    };

    return (
        <div className={styles.container}>
            <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name='title' placeholder="" value={title} onChange={handleInputChangeHere}/>
                </Form.Group>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Summary</Form.Label>
                        <Form.Control type="text" name='other' placeholder="Eg. Painting, Reading" value={other}  onChange={handleInputChangeHere}/>
                    </Form.Group>

                </div>
            </div>

        </div>
    )
}

export default OthersBody