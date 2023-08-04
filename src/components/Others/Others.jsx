import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from './Others.module.css'

const OthersBody = ({ inputDataValues, onChange }) => {

    const {

        title,
        other

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
                        <Form.Label>Summary</Form.Label>
                        <Form.Control type="text" name='other' placeholder="Eg. Painting, Reading" value={other} onChange={handleChange} />
                    </Form.Group>

                </div>
            </div>

        </div>
    )
}

export default OthersBody