import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center p-2 bg-gray-100">
      <div className="w-full max-w-[1200px] grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">

        {isLogin ? (
          <>
            {/* Left Side (Illustration for Login) */}
            <div className="flex flex-col justify-center items-center text-center w-full p-14 bg-teal-600 rounded-br-4xl rounded-tr-4xl text-white">
              <h2 className="text-4xl font-bold mb-6">Welcome Back!</h2>
              <img
                src="/src/assets/login-illustration.svg"
                alt="Login Illustration"
                className="w-60 h-60 mb-8"
              />
              <p className="text-base leading-relaxed max-w-sm">
                We're glad to see you again. Please login with your credentials to access your dashboard.
              </p>
              <button
                onClick={() => setIsLogin(false)}
                className="mt-6 px-6 py-2 rounded-full font-semibold border-2 border-white text-white bg-transparent hover:bg-white hover:text-teal-600 transition-colors"
                >
                 Go to Register
               </button>

            </div>

            {/* Right Side (Login Form) */}
            <div className="flex flex-col justify-center items-center w-full p-6">
              <LoginForm setIsLogin={setIsLogin} />
            </div>
          </>
        ) : (
          <>
            {/* Left Side (Register Form) */}
            <div className="flex flex-col justify-center items-center w-full p-6">
              <RegisterForm setIsLogin={setIsLogin} />
            </div>

            {/* Right Side (Illustration for Register) */}
            <div className="flex flex-col justify-center items-center text-center w-full p-14 bg-blue-900 rounded-bl-4xl rounded-tl-4xl text-white">
              <h2 className="text-4xl font-bold mb-6">Join Us!</h2>
              <img
                src="/src/assets/register-illustration.svg"
                alt="Register Illustration"
                className="w-60 h-60 mb-8"
              />
              <p className="text-base leading-relaxed max-w-sm">
                Create your account to get started. It's fast and easy!
              </p>
              <button
                 onClick={() => setIsLogin(true)}
                 className="mt-6 px-6 py-2 rounded-full font-semibold border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900 transition-colors"
                >
                Go to Login
               </button>

            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Auth;
