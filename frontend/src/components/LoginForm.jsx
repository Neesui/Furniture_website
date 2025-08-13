import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import InputForm from './InputForm'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="p-14 flex flex-col justify-center">
      <h1 className="text-3xl text-center font-bold mb-8">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Email */}
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

        {/* Password */}
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

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between text-[17px]">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="w-5 h-5 rounded text-teal-500 focus:ring-teal-500"
            />
            <span>Remember me</span>
          </label>
          <Link to="/forgot-password" className="text-red-500 hover:text-red-600">
            Forgot Password?
          </Link>
        </div>

        {/* Button + Register Link */}
        <div className="space-y-2">
          <button
            type="submit"
            className="w-full py-4 px-4 text-xl font-bold bg-gradient-to-r from-teal-500 to-purple-500 text-white rounded-xl hover:opacity-90 transition-opacity"
          >
            Login
          </button>
          <p className="flex items-center justify-center text-sm">
            Don't have an account? 
            <Link to="/register" className="ml-1 text-teal-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
