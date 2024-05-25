import axios from 'axios';
import { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth){
      navigate("/")
    }
  })

  const formSubmit = async () => {
    // console.warn("name", name, "email", email, "password", password)
    try {
      const response = await axios.post('http://localhost:5000/register', {
        name,
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const result = response.data;
      console.warn(result);
      localStorage.setItem("user", JSON.stringify(result));
      if (result) {
        navigate("/")
      }
    }

    catch (error) {
      console.error("There is an error: ", error)
    }
  }


  return (
    <div className='d-flex align-items-center justify-content-center mt-5 pt-5'>
      <Container className='mt-5 pt-5'>
        <Row>
          <Col className='mx-auto' lg={6}>
            <Form className='shadow p-4'>
              <h2 className='text-center'>Register</h2>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
              </Form.Group>
              <Button onClick={formSubmit} type="button">Submit</Button>

            </Form>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Signup