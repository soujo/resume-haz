import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from './Achievements.module.css'

const AchievementsBody = ({ inputDataValues, onChange }) => {


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
                    <Form.Control type="text" name='title' placeholder="" value={title} onChange={handleChange} />
                </Form.Group>
            </div>
            <div className={styles.col}>
                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Achievements</Form.Label>
                        <Form.Control type="text" name='0' placeholder="Enter your first achievement" value={points ? points[0] : ""} onChange={handlePointUpdate} />
                    </Form.Group>

                </div>
            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" name='1' placeholder="Enter your second achievement" value={points ? points[1] : ""} onChange={handlePointUpdate} />
                    </Form.Group>

                </div>

            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" name='2' placeholder="Enter your third achievement" value={points ? points[2] : ""} onChange={handlePointUpdate} />
                    </Form.Group>

                </div>

            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" name='3' placeholder="Enter your fourth achievement" value={points ? points[3] : ""} onChange={handlePointUpdate} />
                    </Form.Group>

                </div>

            </div>
            <div className={styles.col}>

                <div className={styles.colDiv}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" name='4' placeholder="Enter your fifth achievement" value={points ? points[4] : ""} onChange={handlePointUpdate} />
                    </Form.Group>

                </div>

            </div>
        </div>
    )
}

export default AchievementsBody