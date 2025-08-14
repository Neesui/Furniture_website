import React, { useState } from 'react';
import InputForm from './InputForm';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const RegisterForm = ({ setIsLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

      <div className="mb-4">
        <InputForm
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          icon={<FaUser />}
        />
      </div>

      <div className="mb-4">
        <InputForm
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          icon={<FaEnvelope />}
        />
      </div>

      <div className="mb-4">
        <InputForm
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
          icon={<FaLock />}
        />
      </div>

      <div className="mb-6">
        <InputForm
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          required
          icon={<FaLock />}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#FFB800] to-red-700 text-white py-3 rounded-full font-semibold hover:bg-teal-700 transition"
      >
        Register
      </button>

      <p className="flex items-center justify-center text-sm mt-4">
        Already have an account?
        <button
          type="button"
          onClick={() => setIsLogin(true)}
          className="ml-1 text-teal-600 hover:underline"
        >
          Login
        </button>
      </p>
    </form>
  );
};

export default RegisterForm;
