import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const commonFields = [
    { controlId: "firstname", label: "firstname", type: "text" },
    { controlId: "lastname", label: "lastname", type: "text" },
    { controlId: "username", label: "UserName", type: "text" },
    { controlId: "email", label: "Email", type: "email" },
    { controlId: "password", label: "Password", type: "password" },
];

const Registration = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstname, lastname, username, email, password } = formData;

    try {
        const response = await fetch('http://localhost:5100/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstname, lastname, username, email, password })
        });

        if (response.ok) {
            // Try to parse the response, but check for an empty response
            const data = await response.json().catch(() => null);
            if (data) {
                console.log('Registration successful:', data);
            } else {
                console.log('Registration successful but no data returned');
            }
            alert("Registration Successful");
            navigate('/login');
        } else {
            alert('Registration failed');
        }
    } catch (error) {
        alert(`Error during registration: ${error.message}`);
    }
};

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', paddingTop: '10vh' }}>
            <Card className="shadow p-4" style={{ width: '400px' }}>
                <Card.Body>
                    <h2 className="mb-4">Sign Up</h2>
                    <Form onSubmit={handleSubmit}>
                        {commonFields.map((field) => (
                            <Form.Group style={{ textAlign: 'start', marginBottom: '10px' }} controlId={field.controlId} key={field.controlId}>
                                <Form.Label>{field.label}</Form.Label>
                                <Form.Control
                                    type={field.type}
                                    placeholder={`Enter ${field.label.toLowerCase()}`}
                                    name={field.controlId}
                                    value={formData[field.controlId]}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                        ))}
                        <Button type="submit" className="btn-primary w-100 mt-3">Sign Up</Button>
                    </Form>
                    <p>Already have an account? <Link to="/login">Log In</Link></p>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Registration;
