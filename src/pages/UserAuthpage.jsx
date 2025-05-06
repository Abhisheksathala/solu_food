import React, { useState } from 'react';
import InputComponent from '../components/InputComponent';

import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const UserAuthForm = ({ type }) => {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    password: '',
    role: '',
  });
  // const [role, setRole] = useState('customer');

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === 'signup' && form.fullname.length < 3) {
      return toast.error('Fullname must be at least 3 characters long');
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
      return toast.error('Invalid email address');
    }

    if (form.password.length < 8) {
      return toast.error('Password must be at least 8 characters long');
    }

    toast.success(`${type === 'signin' ? 'Sign in' : 'Sign up'} simulated successfully!`);
    console.log('Form submitted:', form);
  };

  return (
    <div>
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center">
        <Toaster />
        <form className="w-[80%] max-w-[400px]" onSubmit={handleSubmit}>
          {type !== 'signin' && (
            <InputComponent
              name="fullname"
              type="text"
              id="fullname"
              placeholder="Full Name"
              value={form.fullname}
              onChange={handleChange}
            />
          )}

          <InputComponent
            name="email"
            type="email"
            id="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <InputComponent
            name="password"
            type="password"
            id="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 py-4 px-6 bg-blue-400 text-white rounded-full cursor-pointer "
          >
            {type === 'signin' ? 'Sign In' : 'Sign Up'}
          </button>
          {type === 'signup' && (
            <div className="flex flex-col  mt-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="customer"
                  checked={form.role === 'customer'}
                  onChange={handleChange}
                  className="accent-black"
                />
                I am a customer
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="vendor"
                  checked={form.role === 'vendor'}
                  onChange={handleChange}
                  className="accent-black"
                />
                I am a vendor
              </label>
            </div>
          )}

          {type === 'signup' && (
            <div className="text-xs py-2">
              Your personal data will be used to support your experience throughout this website, to
              manage access to your account, and for other purposes described in our privacy{' '}
              <Link to="/PrivacyPolicy" className="underline text-purple-500">
                policy
              </Link>
            </div>
          )}

          {type === 'signup' ? (
            <p className="mt-6 text-gray-400">
              Already have an account?
              <Link to="/signin" className="underline text-black text-xl ml-1">
                Sign In
              </Link>
            </p>
          ) : (
            <p className="mt-6 text-gray-400">
              Don&apos;t have an account?
              <Link to="/signup" className="underline text-black text-xl ml-1">
                Sign Up
              </Link>
            </p>
          )}
        </form>
      </section>
    </div>
  );
};

export default UserAuthForm;
