// import axios from 'axios';
import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/")
    } else {
      alert("Please enter valid details")
    }
  }

  return (
    <div className='d-flex align-items-center justify-content-center mt-5 pt-5'>
      <Container className='mt-5 pt-5'>
        <Row>
          <Col className='mx-auto' lg={6}>
            <Form className='shadow p-4'>
              <h2 className='text-center'>Sign In</h2>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
              </Form.Group>
              <Button onClick={handleLogin} type="button">Login</Button>

            </Form>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Login