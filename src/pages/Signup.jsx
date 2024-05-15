import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const Signup = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  console.warn("name", name, "email", email, "password", password)

  return (
    <div className='d-flex align-items-center justify-content-center mt-5 pt-5'>
      <Container className=''>
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
              <Button type="button">Submit</Button>

            </Form>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Signup