import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from './POR.module.css'

const PORBody = (props) => {

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
                        <Form.Label>Position Name and Role</Form.Label>
                        <Form.Control type="text" placeholder="Eg abc at xyz community" />
                    </Form.Group>

                </div>
            </div>
            <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Responsibilities you managed </Form.Label>
                    <Form.Control type="text" placeholder="Eg. Actively
 involved in facilitating online events, and more alongside other admins and a team of
 volunteer moderators!" />
                </Form.Group>
            </div>
        </div>
    )
}

export default PORBody