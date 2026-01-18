import Image from 'next/image';
import Link from 'next/link';

export default function MenuPage() {
  const menuCategories = [
    {
      id: 'appetizers',
      name: 'Appetizers',
      description: 'Exquisite starters to awaken your palate',
      items: [
        {
          id: 'smoked-salmon-tower',
          name: 'Smoked Salmon Tower',
          description: 'Fresh Atlantic salmon with capers, cream cheese, and caviar',
          price: '$32.00',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe_fmpSjdSmcL6L7dlrn-BxQVNkYVKSJrAsRha3rswg7AoVUE7LXeLEdhnJbRn-YVTyXj8RTTA49Hkk_CPfrW-q3Co_GknOh4WMBY7K4Ikelr8_waurO3HJtqnZMgHvvC2l1rDa98x36eDW-q7-qfxAxu_VrzMGrcugzcCFVntGgrGPgbooLqryNclo8RTXMuGJMru1my-L8pz4Kal5klDTSTJzP9VCVFeIVP8d_snNF_IDXAVubtfcRPu9ZymUjEa61gtc1Hfe-s'
        },
        {
          id: 'truffle-arancini',
          name: 'Truffle Arancini',
          description: 'Crispy risotto balls with black truffle and parmesan',
          price: '$24.00',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop'
        },
        {
          id: 'oyster-selection',
          name: 'Oyster Selection',
          description: 'Fresh daily selection with champagne mignonette',
          price: '$18.00',
          image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=300&fit=crop'
        }
      ]
    },
    {
      id: 'mains',
      name: 'Main Courses',
      description: 'Masterfully crafted signature dishes',
      items: [
        {
          id: 'grilled-lamb-chops',
          name: 'Grilled Lamb Chops',
          description: 'Slow-roasted premium lamb with mint reduction and herb crust',
          price: '$38.00',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJsW5Czp20k4-fmFlCBeNppCdzTPN0zFFa3eFLbrzBCSMPYgLh-jH0QHMBUifpMFrAWg-JIrTScYpqAyShhvKRRj1meerjZoXxZCk-SLAd4HqMf0bTQWTYgUogoD9ufbU_gXSTqNeGYq7uwYDUO7UHAt-5fv07uizeGD0QStO6EffV2QbLq0-haRbJKbB0F0QMSkc9XK5mwp79_9liZw_tQKRDnNFgQ-zdZdrdwMGrwTqB1Yps94jmPD4MXjb2PGUtliKyR-BP3PU'
        },
        {
          id: 'wild-mushroom-risotto',
          name: 'Wild Mushroom Risotto',
          description: 'Arborio rice with truffle oil and seasonal forest mushrooms',
          price: '$28.00',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDprV193oDDWQLQGLKShDTc8A4tAM010_J-Mmca7NnZWpXSJ9nIvixcWfe1524l3huUCVuYpzylsYak0gnMv6b7xClQ4OCv86-xUIFvpCiuWtlry_eLqTuvSr0uhLoOetzuQqsE6VWZYbEXLeAgaQ4_HH_t0-mUH6nh3kre2x79UteVgaspQSKlU_lwHwrkcMH6BFN1NxElNjtEGGZu5a3RW34bVkykqltGn5-M3kj2Rd_gdvD3M5rTlRPe3WQ0ldjzvDSayf6Z6io'
        },
        {
          id: 'wagyu-beef-tenderloin',
          name: 'Wagyu Beef Tenderloin',
          description: 'A5 Wagyu with truffle reduction and seasonal vegetables',
          price: '$85.00',
          image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=300&fit=crop'
        },
        {
          id: 'pan-seared-halibut',
          name: 'Pan-Seared Halibut',
          description: 'Fresh halibut with lemon butter sauce and microgreens',
          price: '$42.00',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop'
        }
      ]
    },
    {
      id: 'desserts',
      name: 'Desserts',
      description: 'Sweet endings to your culinary journey',
      items: [
        {
          id: 'dark-truffle-fondant',
          name: 'Dark Truffle Fondant',
          description: 'Molten center chocolate cake served with vanilla bean gelato',
          price: '$18.00',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBExg2okWqp9JGyXH8dFiMMdQYfVJt8NEmFvrgo18XgXrqA6cOpHg5xU1cZwUP23_YHUtufFGa2BRk_8cAcmhOjqEd3I4osjxXqExOOrZp2YMcaYHE8qowFyFV5lw6Yew1ImP89dv1VwVoa5ajpcjXZzyna9vS_3iRyXY09iyquTb-pLpf1EBw1b0759ZgT0s0meUgYfx5E7Vy5HCq8xPO86wpbGdjB9VY6uM9mp2wR2Mdps2XDX8BrxvtXXwi9Nlc5kaiObV2t_ng'
        },
        {
          id: 'creme-brulee',
          name: 'Crème Brûlée',
          description: 'Classic vanilla custard with caramelized sugar crust',
          price: '$14.00',
          image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=300&fit=crop'
        },
        {
          id: 'tiramisu',
          name: 'Tiramisu',
          description: 'Traditional Italian dessert with espresso and mascarpone',
          price: '$16.00',
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=300&fit=crop'
        }
      ]
    }
  ];

  return (
    <div className="bg-[#0A0F1E] text-[#FDFCF0] min-h-screen">
      {/* Noise overlay */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-[100]"></div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0A0F1E]/95 backdrop-blur-lg border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-display font-black text-[#D4AF37] flex items-center gap-2 tracking-tighter">
                <span className="material-symbols-outlined text-4xl">temple_hindu</span>
                ZERO POINT
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <Link className="nav-link-hover text-sm uppercase tracking-widest hover:text-[#D4AF37] transition-colors font-medium" href="/">
                Home
              </Link>
              <Link className="nav-link-hover text-sm uppercase tracking-widest text-[#D4AF37] transition-colors font-medium" href="/menu">
                Menu
              </Link>
              <Link className="nav-link-hover text-sm uppercase tracking-widest hover:text-[#D4AF37] transition-colors font-medium" href="/#reservations">
                Reservations
              </Link>
              <Link className="nav-link-hover text-sm uppercase tracking-widest hover:text-[#D4AF37] transition-colors font-medium" href="/#about">
                About
              </Link>
              <Link className="nav-link-hover text-sm uppercase tracking-widest hover:text-[#D4AF37] transition-colors font-medium" href="/cart">
                Cart
              </Link>
              <Link href="/login" className="bg-[#D4AF37] text-[#0A0F1E] px-8 py-3 rounded-sm hover:bg-white transition-all font-bold tracking-widest text-xs uppercase shadow-lg shadow-[#D4AF37]/10">
                Login
              </Link>
            </div>
            <div className="md:hidden flex items-center text-[#D4AF37]">
              <span className="material-symbols-outlined text-3xl">menu</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Restaurant interior"
            className="w-full h-full object-cover brightness-[0.3]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXKrwSdUXFkC2XeMXr_6er9hxwNIqmKunCfKfDG6i8mZhMVna0XSKBjqUlJtQeXL0OpNHL5P3qDydpbuvZ7zouOuWoDX_fGHXK5_gI4fMypPMtlLfHI1kUmRdJDiry7EPHYdhZF7YfUIhzybg5z2D4fNIKmkrtZ5tcfiRy-pbK9Y8PNfZ6atXkzGBWKyKYyy2_L_c2vrhjUO5vPU672x6thEGuAmfC8hi6Ckqynk9mFkWa9fya2onMj2THTlPDVeBeIJVesYBt9Js"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/80 via-[#0A0F1E]/60 to-[#0A0F1E]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase mb-6 block text-sm">
            Culinary Excellence
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-black text-[#FDFCF0] mb-8 leading-none">
            Our <span className="text-[#D4AF37] italic font-normal">Menu</span>
          </h1>
          <p className="text-xl text-[#FDFCF0]/80 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, each crafted with the finest ingredients and presented with artistic precision.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 bg-[#0A0F1E] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuCategories.map((category, categoryIndex) => (
            <div key={category.id} className={`mb-24 ${categoryIndex !== 0 ? 'border-t border-[#D4AF37]/20 pt-24' : ''}`}>
              <div className="text-center mb-16">
                <h2 className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-sm mb-4">
                  {category.name}
                </h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-[#FDFCF0] mb-4">
                  {category.name}
                </h3>
                <p className="text-[#FDFCF0]/60 text-lg max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, index) => (
                  <Link key={index} href={`/menu/${item.id || item.name.toLowerCase().replace(/\s+/g, '-')}`} className="group bg-[#121212]/50 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300 overflow-hidden">
                    <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                      <Image
                        alt={item.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        src={item.image}
                        width={400}
                        height={300}
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-2xl font-display font-bold text-[#FDFCF0] group-hover:text-[#D4AF37] transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-[#D4AF37] font-display font-bold text-xl tracking-tight ml-4">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-[#FDFCF0]/70 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#D4AF37]/60 text-sm uppercase tracking-widest">
                          View Details
                        </span>
                        <span className="material-symbols-outlined text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors">
                          arrow_forward
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#D4AF37] relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0A0F1E] mb-6">
            Ready to Experience Zero Point?
          </h2>
          <p className="text-[#0A0F1E]/80 text-lg mb-8 max-w-2xl mx-auto">
            Reserve your table today and embark on an unforgettable culinary journey with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/#reservations"
              className="bg-[#0A0F1E] text-[#D4AF37] px-12 py-4 font-bold text-center hover:bg-[#0A0F1E]/90 transition-all tracking-[0.2em] text-sm uppercase"
            >
              Make Reservation
            </Link>
            <Link
              href="/"
              className="border-2 border-[#0A0F1E] text-[#0A0F1E] px-12 py-4 font-bold text-center hover:bg-[#0A0F1E] hover:text-[#D4AF37] transition-all tracking-[0.2em] text-sm uppercase"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/">Home</Link></li>
                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/menu">Our Menu</Link></li>
                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/#reservations">Reservations</Link></li>
                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/#about">About Us</Link></li>
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
    </div>
  );
}