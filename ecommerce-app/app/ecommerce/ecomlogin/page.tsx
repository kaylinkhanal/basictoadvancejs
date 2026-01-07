"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const SocialButton = ({ provider, onClick, children, className }) => (
  <button
    type="button"
    onClick={() => onClick(provider)}
    className={`w-full flex items-center gap-3 justify-center px-4 py-2 rounded-lg font-semibold text-sm transition-shadow ${className}`}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Login Successful!</h3>
            <p className="text-gray-600">Welcome back to NIKE.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export this component so it can be used in the modal
export const LoginFormContent = ({ onSwitchToSignup, onLoginSuccess }) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const validate = () => {
    const e = {};
    if (!email) e.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = 'Enter a valid email';
    if (!password) e.password = 'Password is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    
    console.log('signIn', { email, password, remember });
    
    // Show success notification
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    
    // If onLoginSuccess callback is provided (for modal usage), call it to close the modal
    if (onLoginSuccess) {
      onLoginSuccess();
    } else {
      // If used as standalone page (not in modal), redirect to home
      router.push('/');
    }
  };

  const handleSocial = (provider) => {
    console.log('social sign-in', provider);
    // Show success for social login too
    setShowSuccess(true);
  };

  const handleCreateAccount = () => {
    if (onSwitchToSignup) {
      // If used in modal, switch to signup
      onSwitchToSignup();
    } else {
      // If used as standalone page, navigate
      router.push('/ecommerce/ecomsignup');
    }
  };

  return (
    <>
      <SuccessNotification show={showSuccess} onClose={handleSuccessClose} />
      
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-2xl border border-white/6">
        {/* LEFT HERO */}
        <div className="hidden md:flex flex-col justify-center gap-4 px-2">
          <div className="flex items-center gap-3">
            <svg className="w-16 h-8 text-white" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M2 18 C30 2, 70 2, 98 18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-white text-xl tracking-widest font-bold">NIKE</span>
          </div>

          <h2 className="text-3xl font-extrabold text-white">Welcome back</h2>
          <p className="text-sm text-slate-300">Sign in to access your account, orders, and Nike member benefits.</p>

          <ul className="mt-4 space-y-2 text-slate-300 text-sm">
            <li>• Fast checkout</li>
            <li>• Personalized recommendations</li>
            <li>• Exclusive member drops</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 md:gap-4 justify-center"
          noValidate
          aria-label="Nike login form"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-slate-200 font-medium">Email</label>
            <div
              className={`flex items-center gap-3 px-3 py-2 rounded-lg bg-white/3 border ${errors.email ? 'border-rose-400' : 'border-transparent'} focus-within:ring-2 focus-within:ring-rose-400`}
            >
              <svg className="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 7.5v9A2.5 2.5 0 0 0 5.5 19h13A2.5 2.5 0 0 0 21 16.5v-9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 7.5 12 13 3 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                id="email"
                ref={emailRef}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent outline-none text-slate-50 placeholder:text-slate-400 w-full"
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                autoComplete="email"
              />
            </div>
            {errors.email && <p className="text-rose-300 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm text-slate-200 font-medium">Password</label>
            <div className={`flex items-center gap-3 px-3 py-2 rounded-lg bg-white/3 border ${errors.password ? 'border-rose-400' : 'border-transparent'} focus-within:ring-2 focus-within:ring-rose-400`}>
              <svg className="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M7 11V8a5 5 0 0 1 10 0v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              <input
                id="password"
                type={showPwd ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent outline-none text-slate-50 placeholder:text-slate-400 w-full"
                placeholder="Enter your password"
                aria-invalid={!!errors.password}
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPwd((s) => !s)}
                className="text-xs text-slate-300 bg-white/5 px-2 py-1 rounded-md hover:bg-white/8"
                aria-pressed={showPwd}
                aria-label={showPwd ? 'Hide password' : 'Show password'}
              >
                {showPwd ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && <p className="text-rose-300 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-300">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="accent-slate-400 w-4 h-4 rounded"
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-slate-200 font-semibold hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="mt-2 w-full bg-blue-300 text-black font-bold px-4 py-2 
            rounded-lg shadow hover:bg-green-400 transition cursor-pointer"
          >
            Sign in
          </button>

          <div className="flex items-center gap-3 text-sm text-slate-300 mt-2">
            <span className="flex-1 h-px bg-white/6" />
            <span className="whitespace-nowrap">or continue with</span>
            <span className="flex-1 h-px bg-white/6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
            <SocialButton
              provider="Apple"
              onClick={handleSocial}
              className="bg-white text-black hover:scale-[1.05] cursor-pointer shadow-2xl"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M16.365 1.43c-.8.02-2.11.54-2.77 1.2-.6.6-1.16 1.64-.96 2.6 1.08.04 2.17-.6 2.87-1.33.6-.64.96-1.48.86-2.47zM12.5 6.1c-1.58 0-3.66 1.4-3.66 3.92 0 1.6.8 3.94 2.6 4.86.5.3 1.1.54 1.76.54.68 0 1.24-.24 1.78-.56 1.8-.9 2.86-3.26 2.86-4.86 0-2.52-2.08-3.9-3.64-3.9-.8 0-1.36.22-2.7.0z" />
              </svg>
            </SocialButton>

            <SocialButton
              provider="Google"
              onClick={handleSocial}
              className="bg-white/90 text-black hover:scale-[1.05] cursor-pointer shadow-2xl"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden>
                <path d="M21 12.2c0-.7-.06-1.3-.18-1.9H12v3.6h5.4c-.24 1.4-1.02 2.6-2.18 3.4v2.8h3.53c2.06-1.9 3.26-4.6 3.26-7.9z" fill="#4285F4"/>
                <path d="M12 22c2.7 0 4.96-.9 6.62-2.5l-3.53-2.8c-.98.66-2.24 1.05-3.09 1.05-2.37 0-4.38-1.6-5.1-3.74H2.28v2.35C3.94 19.9 7.6 22 12 22z" fill="#34A853"/>
                <path d="M6.9 13.0c-.22-.66-.34-1.36-.34-2.08s.12-1.42.34-2.08V6.5H2.28C1.44 7.9 1 9.42 1 11s.44 3.06 1.28 4.5l4.62-2.5z" fill="#FBBC05"/>
                <path d="M12 5.2c1.47 0 2.8.5 3.85 1.48l2.89-2.89C16.94 2.2 14.7 1.2 12 1.2 7.6 1.2 3.94 3.3 2.28 6.5l4.62 2.35C7.62 6.8 9.63 5.2 12 5.2z" fill="#EA4335"/>
              </svg>
            </SocialButton>

            <SocialButton
              provider="Facebook"
              onClick={handleSocial}
              className="bg-blue-600 text-white hover:scale-[1.05] cursor-pointer shadow-2xl"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.08 5.66 21.2 10.44 22v-7.03H7.9v-2.9h2.54V9.77c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.44h-1.25c-1.23 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.9h-2.32V22C18.34 21.2 22 17.08 22 12.07z"/>
              </svg>
            </SocialButton>
          </div>

          <div className="text-center text-sm text-slate-300 mt-3">
            New to NIKE?{' '}
            <button
              type="button"
              onClick={handleCreateAccount}
              className="text-white font-semibold hover:underline"
            >
              Create an account
            </button>
          </div>

          <p className="text-xs text-slate-400 mt-2 text-center">
            By signing in you agree to Nike's Terms of Use & Privacy Policy.
          </p>
        </form>
      </div>
    </>
  );
};

// Default export for the page route
const EcomLogin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black/90 via-slate-900 to-slate-800 flex items-center justify-center p-6">
      <LoginFormContent />
    </div>
  );
};

export default EcomLogin;