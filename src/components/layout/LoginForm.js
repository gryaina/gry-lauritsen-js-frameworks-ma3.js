/*jshint esversion: 6 */

// Used recipe from the module material here
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const schema = yup.object().shape({
  userName: yup.string()
    .required('Username is required'),
  password: yup.string()
  .required('Password is required')
  .matches(/[^ ]{4}/, "Password must be at least 4 characters")
});

function LoginForm() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  function onSubmit(data) {
    console.log("data" + errors, data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control name="userName" placeholder="Username" ref={register({ required: true })} />
        {errors.userName && <p>Username is required</p>}
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" ref={register({ required: true, pattern: /[^ ]{4}/i })} />
        {errors.password && <p>Password of minimum 4 characters is required</p>}
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default LoginForm;
