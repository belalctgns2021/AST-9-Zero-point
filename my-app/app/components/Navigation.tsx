import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/5" style={{ backgroundColor: 'rgba(11, 11, 12, 0.9)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 border rounded-full flex items-center justify-center" style={{ borderColor: 'var(--primary-gold)' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--primary-gold)' }}>restaurant</span>
            </div>
            <Link href="/" className="text-3xl font-display font-bold gold-gradient-text tracking-tight">
              Zero Point
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <Link className="nav-link text-sm font-medium uppercase tracking-widest" style={{ color: 'var(--text-muted)' }} href="/">
              Home
            </Link>
            <Link className="nav-link text-sm font-medium uppercase tracking-widest" style={{ color: 'var(--primary-gold)' }} href="/menu">
              Menu
            </Link>
            <Link className="nav-link text-sm font-medium uppercase tracking-widest" style={{ color: 'var(--text-muted)' }} href="#">
              Reservations
            </Link>
            <Link className="nav-link text-sm font-medium uppercase tracking-widest" style={{ color: 'var(--text-muted)' }} href="#">
              About Us
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <button className="px-8 py-3 rounded-none font-bold text-xs uppercase tracking-widest transition-all duration-300 text-black hover:opacity-90" style={{ backgroundColor: 'var(--primary-gold)' }}>
              Book Table
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}