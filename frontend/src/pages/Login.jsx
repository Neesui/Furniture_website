import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-[1200px] grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Left Side */}
        <div className="bg-teal-600 p-14 text-white flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl font-bold mb-6">Welcome Back!</h2>
          <img
            src="/src/assets/login-illustration.svg"
            alt="Login Illustration"
            className="w-60 h-60 mb-8"
          />
          <p className="text-teal-100 text-base leading-relaxed max-w-sm">
            We're glad to see you again. Please login with your credentials to access your dashboard.
          </p>
        </div>

        {/* Right Side */}
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
