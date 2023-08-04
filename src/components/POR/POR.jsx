import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from './POR.module.css'

const PORBody = ({ inputDataValues, onChange }) => {

    const {
        
        title,
        positionName,
        responsibilities

    } = inputDataValues

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
                        <Form.Label>Position Name and Role</Form.Label>
                        <Form.Control type="text" name='positionName' placeholder="Eg abc at xyz community" value={positionName} onChange={handleChange}/>
                    </Form.Group>

                </div>
            </div>
            <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Responsibilities you managed </Form.Label>
                    <Form.Control type="text" name='responsibilities' placeholder="Eg. Actively involved in facilitating online events, and more alongside other admins and a team of volunteer moderators!" value={responsibilities} onChange={handleChange}/>
                </Form.Group>
            </div>
        </div>
    )
}

export default PORBody