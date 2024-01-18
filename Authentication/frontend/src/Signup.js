import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Validation from './SignupValidation';

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState('');

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));  

    if (errors.name === '' && errors.email === '' && errors.password === '') {
      axios
        .post('https://vigilant-waddle-jj549wp5r75xhj6qp-8082.app.github.dev:8082/signup', values)
        .then((res) => navigate('/'))
        .catch((err) => {
          setGeneralError('An error occurred during signup. Please try again.');
          console.log(err);
        });
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-dark-purple vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign-Up</h2>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'>
              <strong>Full name</strong>
            </label>
            <input
              type='text'
              placeholder='Enter full name'
              name='name'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.name && <span className='text-danger'> {errors.name}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.email && <span className='text-danger'> {errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.password && <span className='text-danger'> {errors.password}</span>}
          </div>
          {generalError && <span className='text-danger'>{generalError}</span>}
          <button type='submit' className='btn btn-success w-100'>
            <strong>SignUp</strong>
          </button>
          <Link to='/' className='btn btn-default border w-100 text-decoration-none'>
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
