import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignIn() {
    return (
        
        <div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="Name" placeholder="Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="LastName" placeholder="LastName" />
    </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="Register now">
    Register now
    
    </Button>
</Form>
        </div> 
    )
}

export default SignIn
