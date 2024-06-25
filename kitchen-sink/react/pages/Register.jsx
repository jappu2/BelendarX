// src/pages/Register.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useUser } from '../UserContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error("Error registering: ", error);
    }
  };

  return (
    <div>
      <h1>تسجيل</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="البريد الإلكتروني" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="كلمة المرور" />
      <button onClick={handleRegister}>تسجيل</button>
    </div>
  );
};

export default Register;
