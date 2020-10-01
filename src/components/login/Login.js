import React from 'react';
import Heading from "../layout/Heading";
import { useForm } from "react-hook-form"
import * as yup from "yup;"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
  userName: yup.string().required('Username is required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  age: yup
  .number()
  .required()
  .integer()
  .min(10, 'Age must be greater or equal to 10')
  .max(30, 'Age must be less than or equal to 30')
});



function Login() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  function onSubmit(data) {
    console.log("data", data);
  }

  return (
      <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control name="userName" placeholder="First name" ref={register({ required: true })} />
              {errors.firstName && <p>First name is required</p>}
          </Form.Group>

          <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" placeholder="Enter your email" ref={register({ required: true })} />
              {errors.email && <p>Email is required</p>}
          </Form.Group>

          <Form.Group>
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" name="age" placeholder="Enter your age" ref={register} />
              {errors.age && <p>Age is required</p>}
          </Form.Group>
          <Button type="submit">Submit</Button>
      </Form>
  );
}

export default Login;
