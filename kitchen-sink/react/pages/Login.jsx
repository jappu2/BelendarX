// src/pages/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useUser } from '../UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  return (
    <div>
      <h1>تسجيل الدخول</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="البريد الإلكتروني" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="كلمة المرور" />
      <button onClick={handleLogin}>تسجيل الدخول</button>
    </div>
  );
};

export default Login;
