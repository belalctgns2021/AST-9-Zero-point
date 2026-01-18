'use client';

import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-[#f8f7f6] dark:bg-[#10151e] text-slate-900 dark:text-white min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#f8f7f6]/80 dark:bg-[#10151e]/80 backdrop-blur-md px-6 lg:px-20 py-4">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-[#d4af35]">
            <div className="size-6">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
              </svg>
            </div>
            <Link href="/" className="text-xl font-display font-bold tracking-widest uppercase">
              Zero Point
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-[1280px] mx-auto w-full px-6 lg:px-20 py-20">
        <div className="text-center">
          <div className="mb-8">
            <span className="material-symbols-outlined text-[#d4af35] text-8xl">check_circle</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-4">Order Confirmed!</h1>
          <p className="text-slate-400 mb-8">Thank you for your order. We'll send you a confirmation email shortly.</p>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-[#d4af35] hover:bg-[#d4af35]/90 text-[#10151e] font-bold py-4 px-8 rounded-xl transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    </div>
  );
}