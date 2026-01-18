import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-24 bg-[#0A0F1E] text-[#FDFCF0]/60 border-t border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <span className="text-3xl font-display font-black text-[#D4AF37] mb-8 block tracking-tighter">
              ZERO POINT
            </span>
            <p className="text-sm leading-relaxed mb-8">
              Crafting unforgettable culinary memories since 2008. Our passion for perfection drives everything we do in our pursuit of gastro-excellence.
            </p>
            <div className="flex gap-4">
              <Link className="w-10 h-10 border border-[#D4AF37]/20 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A0F1E] transition-all" href="#">
                <span className="material-symbols-outlined text-xl">public</span>
              </Link>
              <Link className="w-10 h-10 border border-[#D4AF37]/20 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A0F1E] transition-all" href="#">
                <span className="material-symbols-outlined text-xl">camera</span>
              </Link>
            </div>
          </div>
          <div>
            <h5 className="text-[#FDFCF0] font-bold mb-8 uppercase text-xs tracking-[0.3em]">Quick Links</h5>
            <ul className="space-y-5 text-sm uppercase tracking-widest">
              <li><Link className="hover:text-[#D4AF37] transition-colors" href="#">Home</Link></li>
              <li><Link className="hover:text-[#D4AF37] transition-colors" href="#menu">Our Menu</Link></li>
              <li><Link className="hover:text-[#D4AF37] transition-colors" href="#reservations">Reservations</Link></li>
              <li><Link className="hover:text-[#D4AF37] transition-colors" href="#about">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[#FDFCF0] font-bold mb-8 uppercase text-xs tracking-[0.3em]">Gastronomy</h5>
            <ul className="space-y-5 text-sm uppercase tracking-widest">
              <li><Link className="hover:text-[#D4AF37] transition-colors" href="#">The Kitchen</Link></li>
              <li><Link className="hover:text-[#D4AF37] transition-colors" href="#">Our Farmers</Link></li>
              <li><Link className="hover:text-[#D4AF37] transition-colors" href="#">Events</Link></li>
              <li><Link className="hover:text-[#D4AF37] transition-colors" href="#">Wine Cellar</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[#FDFCF0] font-bold mb-8 uppercase text-xs tracking-[0.3em]">Contact</h5>
            <ul className="space-y-5 text-sm">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#D4AF37] text-sm">mail</span>
                contact@zeropoint.com
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#D4AF37] text-sm">call</span>
                +1 (234) 567-8900
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#D4AF37] text-sm">location_on</span>
                NYC Culinary District
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-[#D4AF37]/10 text-center text-[10px] tracking-[0.4em] text-[#FDFCF0]/30 uppercase">
          <p>© 2024 ZERO POINT RESTAURANT GROUP. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}