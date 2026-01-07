"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const SocialButton = ({ provider, onClick, className, children }) => (
  <button
    type="button"
    onClick={() => onClick(provider)}
    className={`w-full flex items-center gap-3 justify-center px-4 py-2 rounded-lg font-semibold text-sm transition-transform duration-150 ease-out hover:scale-105 ${className}`}
    aria-label={`Continue with ${provider}`}
  >
    {children}
    <span>{provider}</span>
  </button>
);

// Success notification component
const SuccessNotification = ({ show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000); // Auto close after 2 seconds
      
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-4 animate-in zoom-in-95 duration-300">
        <div className="flex flex-col items-center gap-4">
          {/* Success checkmark icon */}
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h3>
            <p className="text-gray-600">Welcome to NIKE. Redirecting to login...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export this component so it can be used in the modal
export const SignupFormContent = ({ onSwitchToLogin, onSignupSuccess }) => {
  const router = useRouter();
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const firstRef = useRef(null);
  const MIN_AGE = 13;

  useEffect(() => {
    firstRef.current?.focus();
  }, []);

  const validate = () => {
    const e = {};
    if (!first.trim()) e.first = 'First name is required';
    if (!last.trim()) e.last = 'Last name is required';
    if (!email) e.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = 'Enter a valid email';
    const ageNum = Number(age);
    if (!age) e.age = 'Age is required';
    else if (Number.isNaN(ageNum) || !Number.isInteger(ageNum)) e.age = 'Enter a valid whole number';
    else if (ageNum < MIN_AGE) e.age = `You must be at least ${MIN_AGE} years old`;
    else if (ageNum > 120) e.age = 'Enter a realistic age';
    if (!password) e.password = 'Password is required';
    else if (password.length < 8) e.password = 'Password must be at least 8 characters';
    if (confirm !== password) e.confirm = 'Passwords do not match';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    console.log('register', { first, last, email, age, password });
    
    // Show success notification
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    
    // If onSwitchToLogin callback is provided (for modal usage), call it to switch to login
    if (onSwitchToLogin) {
      onSwitchToLogin();
    } else {
      // If used as standalone page, navigate to login page
      router.push('/ecommerce/ecomlogin');
    }
  };

  const handleSocial = (provider) => {
    console.log('social register', provider);
    // Show success for social signup too
    setShowSuccess(true);
  };

  const handleLoginClick = () => {
    if (onSwitchToLogin) {
      // If used in modal, switch to login
      onSwitchToLogin();
    } else {
      // If used as standalone page, navigate
      router.push('/ecommerce/ecomlogin');
    }
  };

  return (
    <>
      <SuccessNotification show={showSuccess} onClose={handleSuccessClose} />
      
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-2xl border border-white/6">
        {/* Left hero */}
        <div className="hidden md:flex flex-col justify-center gap-4 px-2">
          <div className="flex items-center gap-3">
            <svg className="w-16 h-8 text-white" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M2 18 C30 2, 70 2, 98 18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-white text-xl tracking-widest font-bold">NIKE</span>
          </div>

          <h2 className="text-3xl font-extrabold text-white">Create your account</h2>
          <p className="text-sm text-slate-300">Join Nike to get member benefits, faster checkout, and exclusive access.</p>

          <ul className="mt-4 space-y-2 text-slate-300 text-sm">
            <li>• Member-only product drops</li>
            <li>• Manage orders & addresses</li>
            <li>• Save favorites and sizes</li>
          </ul>
        </div>

        {/* Registration form */}
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 md:gap-4" aria-label="Create account form">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="first" className="text-sm text-slate-200 font-medium">First name</label>
              <input
                id="first"
                ref={firstRef}
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                className={`mt-1 w-full px-3 py-2 rounded-lg bg-white/3 text-slate-50 placeholder:text-slate-400 outline-none border ${errors.first ? 'border-rose-400' : 'border-transparent'} focus:ring-2 focus:ring-rose-400`}
                placeholder="First"
                aria-invalid={!!errors.first}
              />
              {errors.first && <p className="text-rose-300 text-sm mt-1">{errors.first}</p>}
            </div>

            <div>
              <label htmlFor="last" className="text-sm text-slate-200 font-medium">Last name</label>
              <input
                id="last"
                value={last}
                onChange={(e) => setLast(e.target.value)}
                className={`mt-1 w-full px-3 py-2 rounded-lg bg-white/3 text-slate-50 placeholder:text-slate-400 outline-none border ${errors.last ? 'border-rose-400' : 'border-transparent'} focus:ring-2 focus:ring-rose-400`}
                placeholder="Last"
                aria-invalid={!!errors.last}
              />
              {errors.last && <p className="text-rose-300 text-sm mt-1">{errors.last}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm text-slate-200 font-medium">Email</label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 w-full px-3 py-2 rounded-lg bg-white/3 text-slate-50 placeholder:text-slate-400 outline-none border ${errors.email ? 'border-rose-400' : 'border-transparent'} focus:ring-2 focus:ring-rose-400`}
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              autoComplete="email"
            />
            {errors.email && <p className="text-rose-300 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="age" className="text-sm text-slate-200 font-medium">Age</label>
            <input
              id="age"
              type="number"
              min={MIN_AGE}
              max={120}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={`mt-1 w-full px-3 py-2 rounded-lg bg-white/3 text-slate-50 placeholder:text-slate-400 outline-none border ${errors.age ? 'border-rose-400' : 'border-transparent'} focus:ring-2 focus:ring-rose-400`}
              placeholder="e.g. 25"
              aria-invalid={!!errors.age}
            />
            {errors.age && <p className="text-rose-300 text-sm mt-1">{errors.age}</p>}
          </div>

          <div>
            <label htmlFor="password" className="text-sm text-slate-200 font-medium">Password</label>
            <div className="mt-1 flex items-center gap-2">
              <input
                id="password"
                type={showPwd ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`flex-1 px-3 py-2 rounded-md bg-white/5 text-slate-50 placeholder:text-slate-400 text-sm outline-none border ${errors.password ? 'border-rose-400' : 'border-transparent'} focus:ring-2 focus:ring-rose-400`}
                placeholder="At least 8 characters"
                aria-invalid={!!errors.password}
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPwd((s) => !s)}
                className="p-2 rounded-md text-slate-300 hover:bg-white/6 focus:outline-none focus:ring-2 focus:ring-rose-400"
                aria-pressed={showPwd}
                aria-label={showPwd ? 'Hide password' : 'Show password'}
              >
                {showPwd ? (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19.5c-4.97 0-9.12-3.11-10.5-7.5a10.94 10.94 0 0 1 2.29-3.9"/>
                    <path d="M1 1l22 22"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
            {errors.password && <p className="text-rose-300 text-sm mt-1">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="confirm" className="text-sm text-slate-200 font-medium">Confirm password</label>
            <input
              id="confirm"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className={`mt-1 w-full px-3 py-2 rounded-lg bg-white/3 text-slate-50 placeholder:text-slate-400 outline-none border ${errors.confirm ? 'border-rose-400' : 'border-transparent'} focus:ring-2 focus:ring-rose-400`}
              placeholder="Repeat your password"
              aria-invalid={!!errors.confirm}
              autoComplete="new-password"
            />
            {errors.confirm && <p className="text-rose-300 text-sm mt-1">{errors.confirm}</p>}
          </div>

          <button
            type="submit"
            className="mt-2 w-full bg-blue-400 text-black font-bold px-4 py-2 
            rounded-lg shadow hover:bg-green-500 transition"
          >
            Create account
          </button>

          <div className="flex items-center gap-3 text-sm text-slate-300 mt-2">
            <span className="flex-1 h-px bg-white/6" />
            <span className="whitespace-nowrap">or sign up with</span>
            <span className="flex-1 h-px bg-white/6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
            <SocialButton provider="Apple" onClick={handleSocial} className="bg-white text-black">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M16.365 1.43c-.8.02-2.11.54-2.77 1.2-.6.6-1.16 1.64-.96 2.6 1.08.04 2.17-.6 2.87-1.33.6-.64.96-1.48.86-2.47zM12.5 6.1c-1.58 0-3.66 1.4-3.66 3.92 0 1.6.8 3.94 2.6 4.86.5.3 1.1.54 1.76.54.68 0 1.24-.24 1.78-.56 1.8-.9 2.86-3.26 2.86-4.86 0-2.52-2.08-3.9-3.64-3.9-.8 0-1.36.22-2.7.0z" />
              </svg>
            </SocialButton>

            <SocialButton provider="Google" onClick={handleSocial} className="bg-white/90 text-black">
              <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden>
                <path d="M21 12.2c0-.7-.06-1.3-.18-1.9H12v3.6h5.4c-.24 1.4-1.02 2.6-2.18 3.4v2.8h3.53c2.06-1.9 3.26-4.6 3.26-7.9z" fill="#4285F4"/>
                <path d="M12 22c2.7 0 4.96-.9 6.62-2.5l-3.53-2.8c-.98.66-2.24 1.05-3.09 1.05-2.37 0-4.38-1.6-5.1-3.74H2.28v2.35C3.94 19.9 7.6 22 12 22z" fill="#34A853"/>
                <path d="M6.9 13.0c-.22-.66-.34-1.36-.34-2.08s.12-1.42.34-2.08V6.5H2.28C1.44 7.9 1 9.42 1 11s.44 3.06 1.28 4.5l4.62-2.5z" fill="#FBBC05"/>
                <path d="M12 5.2c1.47 0 2.8.5 3.85 1.48l2.89-2.89C16.94 2.2 14.7 1.2 12 1.2 7.6 1.2 3.94 3.3 2.28 6.5l4.62 2.35C7.62 6.8 9.63 5.2 12 5.2z" fill="#EA4335"/>
              </svg>
            </SocialButton>

            <SocialButton provider="Facebook" onClick={handleSocial} className="bg-blue-600 text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.08 5.66 21.2 10.44 22v-7.03H7.9v-2.9h2.54V9.77c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.44h-1.25c-1.23 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.9h-2.32V22C18.34 21.2 22 17.08 22 12.07z"/>
              </svg>
            </SocialButton>
          </div>

          <div className="text-center text-sm text-slate-300 mt-3">
            Already have an account?{' '}
            <button
              type="button"
              onClick={handleLoginClick}
              className="text-white font-semibold hover:underline"
            >
              Login
            </button>
          </div>

          <p className="text-xs text-slate-400 mt-2 text-center">
            By creating an account you agree to Nike's Terms of Use & Privacy Policy.
          </p>
        </form>
      </div>
    </>
  );
};

// Default export for the page route
const EcomRegister = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black/90 via-slate-900 to-slate-800 flex items-center justify-center p-6">
      <SignupFormContent />
    </div>
  );
};

export default EcomRegister;