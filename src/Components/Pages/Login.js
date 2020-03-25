import React from 'react';
import Input from '../Input';
import Button from '../Button';
import { FaLock, FaUserAlt } from 'react-icons/fa'

export default function Login() {
  return (
    <form className="form login-form">
      <h2 class="form-title">Member Login</h2>
      <Input type="text" placeholder="Username" icon={<FaUserAlt />} />
      <Input type="text" placeholder="Password" icon={<FaLock />} />
      <Button btn="btn-success" text="Login" type="submit" />
    </form>
  )
}
