import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextInput, Button } from '@mantine/core';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  
  return (
    <>
    <h1>Contact Form</h1>
    <TextInput
    placeholder="Your name"
    label="Name"
    type='text'
    required
    />
    <TextInput
    placeholder="Phone Number"
    label="Phone Number"
    type='number'
    required
    />
    <TextInput
    placeholder="Your age"
    label="Age"
    type='number'
    required
    />
    <TextInput
    placeholder="Your email"
    label="Email"
    type='email'
    required
    />
    <Link to='/contact/submitted'>
    <Button color="teal" style={{ marginTop: '20px', float: 'right' }}>Submit</Button>
    </Link>
    <Link to='/contact/share'>
    <Button color="teal" style={{ marginTop: '20px', float: 'right' }}>Share</Button>
    </Link>
    </>
  )
}

export default ContactForm