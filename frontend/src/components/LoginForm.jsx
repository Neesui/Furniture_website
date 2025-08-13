import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import InputForm from './InputForm';

const LoginForm = ({ setIsLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-full p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded-2xl p-8 space-y-6"
      >
        <h1 className="text-3xl text-center font-bold">Login</h1>

        <InputForm
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address"
          required
          icon={<FaEnvelope />}
        />

        <InputForm
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          icon={<FaLock />}
        />

        <div className="flex items-center justify-between text-sm sm:text-base">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="w-4 h-4 rounded text-teal-500 focus:ring-teal-500"
            />
            <span>Remember me</span>
          </label>
          <span className="text-red-500 hover:text-red-600 cursor-pointer">
            Forgot Password?
          </span>
        </div>

        <button
          type="submit"
          className="w-full py-3 text-lg font-bold bg-gradient-to-r from-teal-500 to-purple-500 text-white rounded-xl hover:opacity-90 transition-opacity"
        >
          Login
        </button>

        <p className="flex items-center justify-center text-sm">
          Don't have an account?
          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className="ml-1 text-teal-600 hover:underline"
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
