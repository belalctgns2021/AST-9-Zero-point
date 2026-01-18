'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/menu'); // Redirect to menu after successful login
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError('');

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/menu'); // Redirect to menu after successful login
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Google login failed';
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0C] text-slate-100" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-matter.png')" }}>
      {/* Navigation */}
      <nav className="w-full px-6 py-6 flex items-center justify-between max-w-7xl mx-auto z-10">
        <Link href="/" className="flex items-center space-x-2">
          <span className="material-symbols-outlined text-[#C5A059] text-3xl">restaurant</span>
          <span className="text-xl font-display font-bold tracking-wide text-[#C5A059]">Zero Point</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-slate-300 hover:text-[#C5A059] transition-colors text-sm uppercase tracking-widest">
            Home
          </Link>
          <Link href="/menu" className="text-slate-300 hover:text-[#C5A059] transition-colors text-sm uppercase tracking-widest">
            Menu
          </Link>
          <Link href="/signup" className="px-6 py-2 border border-[#C5A059]/50 text-[#C5A059] rounded-md hover:bg-[#C5A059] hover:text-black transition-all duration-300 text-sm font-medium">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-12 relative">
        {/* Background blur effect */}
        <div className="absolute w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[120px] -z-10"></div>
        
        <div className="w-full max-w-md">
          <div className="premium-card rounded-2xl shadow-2xl p-8 md:p-12 backdrop-blur-sm bg-[#161618]/80">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="text-4xl font-display font-bold mb-3 text-white">Welcome Back</h1>
              <div className="w-12 h-px bg-[#C5A059] mx-auto mb-4"></div>
              <p className="text-slate-400 text-sm tracking-wide">Experience Culinary Perfection</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-sm text-center">{error}</p>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest mb-2 text-slate-400">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-[#161618] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-[#C5A059] focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-widest mb-2 text-slate-400">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-[#161618] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-[#C5A059] focus:outline-none transition-colors pr-12"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-[#C5A059] transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="sr-only" />
                  <div className="w-4 h-4 border border-white/20 rounded bg-transparent mr-2"></div>
                  <span className="text-sm text-slate-400">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-[#C5A059] hover:text-[#EAD196] transition-colors">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-6 bg-[#C5A059] text-black font-semibold rounded-lg hover:bg-[#EAD196] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="px-4 text-sm text-slate-400 uppercase tracking-widest">Or</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center py-3 px-6 border border-white/20 rounded-lg text-white hover:border-[#C5A059] hover:bg-[#C5A059]/5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-slate-400 text-sm">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="text-[#C5A059] hover:text-[#EAD196] transition-colors font-medium">
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}