'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Truffle Infused Tagliatelle',
      description: 'Hand-cut pasta, winter truffles, aged parmesan cream.',
      price: 28.00,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6uFPfGK4DVB8F6cZ70rOyRVy9_81D2-NGS6WPyL7XVmmBCNAIsP4xnt3A0tNyTtHFe5IHofcimSR9hXok9tBy42_GZV8gKjcTCLgzOBSu--RZFGdklo9W7ulEQmrH10KcVZct3V5RZuxN7SSrNEBC7Z8x5NeUzDb5kdTvTGIvlBHcESUkt6IKXQRvfIwYAXGEQpG4Mt_6np6Um7IaXgPpyXP39wS2eDWce5LTJoIhGUJMjyy_D1FzgqenNJczSMFLtWgoPrFAqDc'
    },
    {
      id: '2',
      name: 'Aged Ribeye Steak',
      description: '45-day dry-aged, rosemary butter, charred asparagus.',
      price: 45.00,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPnh3AuavOfOLncvpI83RyhLli21DGoiJXkpF0WNAv3NiMtJycpq2BGwGy1FuUOCgZncklNC8EKRalAJWcvUHt4U9JxMErxfylmZfRXOqO2nbL-lrTIQmOk7aJ9nQBsy693Ma4lNqeEAX6dg6HfmBXQdW3Qjb035dcMpvMVuj2DD9dt2rd5_mJFTJpOVMNsth4obleH6uBz1pzTZ0vtRi-CV6pCd6EM5e1J4tlclp7syz66PtEts_MUM77aDut5nG_GAQ-GqPBXE0'
    },
    {
      id: '3',
      name: 'Velvet Cacao Mousse',
      description: '70% dark chocolate, gold leaf, sea salt honeycomb.',
      price: 14.00,
      quantity: 2,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB755hGK-LLm6BDGLgls3phLbF7o1-pPiXvYZmg8kQzvoZHrOX2BLaXhXY82zbrfaqDJ_Zv5PWBhemrdTLuW2QmCxOoGL_j35_6y3-3irX7y4mFzcHjXYUGh2Wa1qRbiLDaHyOkUN8ZVD-7mDCn7gu6ZuMF8pm3Qg_A4yW03JIdVz16Tc1NSTgBpFaOy_plIlfn9kn_u6VZ-Dg4mBS6nAsZ7SigstwAycP3DhpBxPMYct8BHNH1xTde2cF0ZY-bQC8-fozj_9r5J0'
    }
  ]);

  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const serviceTax = subtotal * 0.05; // 5% service tax
  const deliveryFee = 0; // Free delivery
  const total = subtotal + serviceTax + deliveryFee;

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
          <nav className="hidden md:flex items-center gap-10">
            <Link className="text-sm font-medium hover:text-[#d4af35] transition-colors uppercase tracking-widest" href="/menu">
              Menu
            </Link>
            <Link className="text-sm font-medium hover:text-[#d4af35] transition-colors uppercase tracking-widest" href="/#reservations">
              Reservations
            </Link>
            <Link className="text-sm font-medium hover:text-[#d4af35] transition-colors uppercase tracking-widest text-[#d4af35] border-b border-[#d4af35]/40" href="/cart">
              Orders
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center rounded-full size-10 bg-black/5 dark:bg-white/5 hover:bg-[#d4af35]/20 transition-all">
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            </button>
            <div className="h-10 w-10 rounded-full border border-[#d4af35]/30 overflow-hidden">
              <Image
                alt="User profile portrait"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6ewbAkIly8Tfnz663JRv56moPOXjDPET3R-8yPG5X7OPYpYFfs01bmNyGRxzdM23e1D5WwC7VHR9fhIQs3OxecsBhZ3LWnYBFnDkTG67bgEtjqyAR2dtIn8XMl0gRL327ngXKV04FvtH5rzUi1OfRW0okB8_CSyYHfhiaAheJDKijF0EPtyKdtIdqJLhnmUj_ZNyvBI50ZwVMqE_BZvum8uwKfX3zpwG0hEmu5rm5M7hGh0zQlNqPo53hs7kHwWRvWZSdxskLxVg"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-[1280px] mx-auto w-full px-6 lg:px-20 py-10">
        {/* Progress Stepper */}
        <div className="flex items-center gap-4 mb-10 overflow-x-auto whitespace-nowrap pb-2">
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="flex items-center justify-center size-7 rounded-full bg-[#d4af35] text-[#10151e] text-xs font-bold">
              1
            </span>
            <span className="text-[#d4af35] font-medium tracking-wide">Cart</span>
          </div>
          <div className="h-[1px] w-12 bg-white/10"></div>
          <div className="flex items-center gap-2 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
            <span className="flex items-center justify-center size-7 rounded-full border border-white/30 text-xs font-bold">
              2
            </span>
            <span className="font-medium tracking-wide">Checkout</span>
          </div>
          <div className="h-[1px] w-12 bg-white/10"></div>
          <div className="flex items-center gap-2 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
            <span className="flex items-center justify-center size-7 rounded-full border border-white/30 text-xs font-bold">
              3
            </span>
            <span className="font-medium tracking-wide">Confirmation</span>
          </div>
        </div>

        <h1 className="text-4xl font-display font-bold mb-8">Review Your Order</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items List */}
          <div className="flex-1 space-y-2">
            <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-sm text-slate-400 uppercase tracking-widest">Selected Items</span>
              <span className="text-sm text-slate-400 uppercase tracking-widest">Quantity</span>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5">
                <div className="flex items-center gap-6">
                  <div className="relative size-24 shrink-0 rounded-full border-2 border-[#d4af35]/20 p-1">
                    <Image
                      alt={item.name}
                      className="rounded-full h-full w-full object-cover"
                      src={item.image}
                      width={96}
                      height={96}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-[#d4af35] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                    <p className="text-[#d4af35] font-medium mt-2">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <div className="flex items-center gap-4 bg-[#1d2433] border border-white/10 rounded-full px-4 py-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">remove</span>
                    </button>
                    <span className="text-lg font-bold w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">add</span>
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-xs text-red-500/60 hover:text-red-500 uppercase tracking-tighter transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="pt-10">
              <Link href="/menu" className="inline-flex items-center gap-2 text-[#d4af35] hover:gap-4 transition-all uppercase tracking-widest text-xs font-bold">
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Bill Details Card */}
          <div className="lg:w-[400px]">
            <div className="bg-[#1d2433] rounded-2xl p-8 border border-[#d4af35]/30 sticky top-32">
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#d4af35]">receipt_long</span>
                Bill Details
              </h2>

              <div className="space-y-4 border-b border-white/10 pb-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 group">
                    <span className="text-slate-400">Service Tax</span>
                    <span className="material-symbols-outlined text-xs text-slate-500 cursor-help">info</span>
                  </div>
                  <span className="font-medium">${serviceTax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Delivery Fee</span>
                  <span className="text-green-500 font-medium">Free</span>
                </div>
              </div>

              <div className="py-6 space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-lg font-display uppercase tracking-widest text-slate-300">
                    Total Payable
                  </span>
                  <span className="text-4xl font-display font-bold text-[#d4af35]">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 text-right uppercase tracking-[0.2em]">
                  Including all applicable taxes
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="relative group">
                  <input
                    className="w-full bg-[#10151e] border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-[#d4af35] focus:border-[#d4af35] outline-none transition-all placeholder:text-slate-600"
                    placeholder="Promo Code"
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button className="absolute right-2 top-2 bottom-2 px-3 bg-white/5 hover:bg-white/10 rounded text-xs font-bold uppercase tracking-wider transition-colors">
                    Apply
                  </button>
                </div>
                <button className="w-full bg-[#d4af35] hover:bg-[#d4af35]/90 text-[#10151e] font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 group hover:shadow-[0_0_15px_rgba(212,175,53,0.4)]">
                  <span className="uppercase tracking-[0.2em]">Proceed to Checkout</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>

              <div className="mt-8 p-4 rounded-lg bg-white/5 flex gap-4 items-start">
                <span className="material-symbols-outlined text-[#d4af35]">verified_user</span>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Secure Payment</p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    Your transaction is encrypted with military-grade SSL standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 lg:px-20 mt-20">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-30 grayscale">
            <div className="size-4">
              <svg fill="currentColor" viewBox="0 0 48 48">
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
              </svg>
            </div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase">Zero Point</span>
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
            <Link className="hover:text-[#d4af35] transition-colors" href="#">Privacy</Link>
            <Link className="hover:text-[#d4af35] transition-colors" href="#">Terms</Link>
            <Link className="hover:text-[#d4af35] transition-colors" href="#">Shipping</Link>
            <Link className="hover:text-[#d4af35] transition-colors" href="#">FAQ</Link>
          </div>
          <div className="text-[10px] text-slate-600 uppercase tracking-widest italic">
            Designed for the Discerning Palette
          </div>
        </div>
      </footer>
    </div>
  );
}