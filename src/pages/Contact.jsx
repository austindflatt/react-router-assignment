import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Button } from '@mantine/core';

const Contact = () => {
  return (
    <>
    <div><Link to='form'>Contact Form</Link></div>
    <Outlet />
    </>
  )
}

export default Contact