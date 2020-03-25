import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { FaLock, FaUserAlt, FaAt } from 'react-icons/fa'

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    const user = { username, email, password };
    console.log(user);
  }
  return (
    <form className="form signup-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Create a New User</h2>
      <Input type="text" placeholder="Username" icon={<FaUserAlt />} value={username} setValue={handleUserNameChange} />
      <Input type="text" placeholder="Email" icon={<FaAt />} value={email} setValue={handleEmailChange} />
      <Input type="password" placeholder="Password" icon={<FaLock />} value={password} setValue={handlePasswordChange} />
      <Button btn="btn-success" text="Signup" type="submit" />
    </form>
  )
}
