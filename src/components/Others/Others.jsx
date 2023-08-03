import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from './Others.module.css'

const OthersBody = (props) => {

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
                        <Form.Label>Summary</Form.Label>
                        <Form.Control type="text" placeholder="Eg. Painting, Reading" />
                    </Form.Group>

                </div>
            </div>

        </div>
    )
}

export default OthersBody