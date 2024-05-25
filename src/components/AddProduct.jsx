// import axios from 'axios';
import { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

  // const navigate = useNavigate();

  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [company, setCompany] = useState();

  const addProduct = async () => {
    const userid = JSON.parse(localStorage.getItem("user"))._id;

    let result = await fetch("http://localhost:5000/add-product", {
      method: 'post',
      body: JSON.stringify({ name, price, category, company, userid }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    result = await result.json();
    console.log("result", result);
  }


  return (
    <div className='d-flex align-items-center justify-content-center mt-5 pt-5'>
      <Container className='mt-5 pt-5'>
        <Row>
          <Col className='mx-auto' lg={6}>
            <Form className='shadow p-4'>
              <h2 className='text-center'>Add Product</h2>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter category" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter company" />
              </Form.Group>
              <Button onClick={addProduct} type="button">Save</Button>

            </Form>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default AddProduct