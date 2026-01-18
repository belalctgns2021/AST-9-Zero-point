import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const menuItems = [
    {
      name: "Grilled Lamb Chops",
      description: "Slow-roasted premium lamb with mint reduction and herb crust.",
      price: "$38.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJsW5Czp20k4-fmFlCBeNppCdzTPN0zFFa3eFLbrzBCSMPYgLh-jH0QHMBUifpMFrAWg-JIrTScYpqAyShhvKRRj1meerjZoXxZCk-SLAd4HqMf0bTQWTYgUogoD9ufbU_gXSTqNeGYq7uwYDUO7UHAt-5fv07uizeGD0QStO6EffV2QbLq0-haRbJKbB0F0QMSkc9XK5mwp79_9liZw_tQKRDnNFgQ-zdZdrdwMGrwTqB1Yps94jmPD4MXjb2PGUtliKyR-BP3PU"
    },
    {
      name: "Smoked Salmon Tower",
      description: "Fresh Atlantic salmon with capers, cream cheese, and caviar.",
      price: "$32.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe_fmpSjdSmcL6L7dlrn-BxQVNkYVKSJrAsRha3rswg7AoVUE7LXeLEdhnJbRn-YVTyXj8RTTA49Hkk_CPfrW-q3Co_GknOh4WMBY7K4Ikelr8_waurO3HJtqnZMgHvvC2l1rDa98x36eDW-q7-qfxAxu_VrzMGrcugzcCFVntGgrGPgbooLqryNclo8RTXMuGJMru1my-L8pz4Kal5klDTSTJzP9VCVFeIVP8d_snNF_IDXAVubtfcRPu9ZymUjEa61gtc1Hfe-s"
    },
    {
      name: "Wild Mushroom Risotto",
      description: "Arborio rice with truffle oil and seasonal forest mushrooms.",
      price: "$28.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDprV193oDDWQLQGLKShDTc8A4tAM010_J-Mmca7NnZWpXSJ9nIvixcWfe1524l3huUCVuYpzylsYak0gnMv6b7xClQ4OCv86-xUIFvpCiuWtlry_eLqTuvSr0uhLoOetzuQqsE6VWZYbEXLeAgaQ4_HH_t0-mUH6nh3kre2x79UteVgaspQSKlU_lwHwrkcMH6BFN1NxElNjtEGGZu5a3RW34bVkykqltGn5-M3kj2Rd_gdvD3M5rTlRPe3WQ0ldjzvDSayf6Z6io"
    },
    {
      name: "Dark Truffle Fondant",
      description: "Molten center chocolate cake served with vanilla bean gelato.",
      price: "$18.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBExg2okWqp9JGyXH8dFiMMdQYfVJt8NEmFvrgo18XgXrqA6cOpHg5xU1cZwUP23_YHUtufFGa2BRk_8cAcmhOjqEd3I4osjxXqExOOrZp2YMcaYHE8qowFyFV5lw6Yew1ImP89dv1VwVoa5ajpcjXZzyna9vS_3iRyXY09iyquTb-pLpf1EBw1b0759ZgT0s0meUgYfx5E7Vy5HCq8xPO86wpbGdjB9VY6uM9mp2wR2Mdps2XDX8BrxvtXXwi9Nlc5kaiObV2t_ng"
    }
  ];

  const services = [
    {
      icon: "restaurant",
      title: "Fine Dining",
      description: "Elegant seating and ambiance for intimate celebrations and meaningful gatherings."
    },
    {
      icon: "celebration",
      title: "Private Events",
      description: "Exclusive spaces for corporate events, weddings, and high-profile launches."
    },
    {
      icon: "local_bar",
      title: "Cocktail Bar",
      description: "Artisanal mixology featuring rare spirits and custom botanical infusions."
    },
    {
      icon: "auto_awesome",
      title: "Gourmet Delivery",
      description: "The Zero Point experience delivered to your doorstep with meticulous care."
    }
  ];

  const galleryImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuArLKeSRh8JJ3SZLISiNEFASfeEOqrbtSTV_0vmW9Ofyl2YvPJwCtvXMiTNPW5lN-DWoBaFryl1uF4YtfwL1Qm3HuodbLr-yd3MXQ5QUjjtqcF85KBLcyd5DRh5Z-CQXQVGsDfCPagc_ijgrMhVcyslKCrCA_I33BlnxxxxX9lt1tzLMcNqgZOAVqAwPrrgt1dUKLNzm0vxs8gfPUHAHhytXrbNqBQnSm1KZNK6wm-ROHieg3zS2gWg93YS3yXmUQJEFhOd4UsO0g0",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBXKrwSdUXFkC2XeMXr_6er9hxwNIqmKunCfKfDG6i8mZhMVna0XSKBjqUlJtQeXL0OpNHL5P3qDydpbuvZ7zouOuWoDX_fGHXK5_gI4fMypPMtlLfHI1kUmRdJDiry7EPHYdhZF7YfUIhzybg5z2D4fNIKmkrtZ5tcfiRy-pbK9Y8PNfZ6atXkzGBWKyKYyy2_L_c2vrhjUO5vPU672x6thEGuAmfC8hi6Ckqynk9mFkWa9fya2onMj2THTlPDVeBeIJVesYBt9Js",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDrjPeQ6A0XTBFFVE2U2UAVu7ZFZMS0CmoTVTwbjTFHYzoqgjwbNx0QDyO90aRTjFNJpKjqqW2OtPs67WnEclx_CRq6xmhkxeiWFBsrCC5rRzw_CzdqWOyECLusGApW4GhnvEldJBx4POBL2Hxg7m95LOCVF7ZAIi8ONRJ0baw6A93aMr_3_hrvz8MkyV3CQtFC1T9YTSe6fb9n1CR3sh9Z9dAxLk5YyoY7pPOOJTXIiHci8VFbmdjR20jwPA4uEMs9eu8SO3-ykis",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAce6pztOYjUwPXxAIX0bmO2UQ_7xZ7YgqMewa0PNF70yhMtDWxpIKJ3LTGh0Mk2dK_xMj-RdAA2bwDo0OIumUWhoKN2Pkl7dKy1P_0rj4FWylgcq69ayuviu2RL5TtZxfoJ1mrdjsklJNfgscRfl-Y9epG3Y7kaoVHwFUxeYKBfpVidTjuuCgWbF1nO7XGpwsTgJtoWiGEgZIjccND8ZRpzAnWBA_vmjrphDcNbfTreBAlC8vfhQhHYr-LAaGvqCOwJuRaRnXgLX4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBjqSMdUq6A6FDnI7cpiKT2K6ZqgP8xKIPpaYpl19XSsSjkk58rKJN9DUMj0PnjYTsmn7sE-AAWSfFytV_glTWcg4vJnjWLWrVvQvxKq-DqtCcEkbmYw8XBLh-WTn87lnUQKPwnAa0cTyE1_LnKMaysXB_Ssh5DEJSsqnZfbmWFN0EgmWWVxt4DEJ-RZAOuE2uQzC4ttSU5h6tlRNwIGGAYlQGmVKOCPgUQuuB8KIUAWcltMPtoZrJkAe_-AsKIgH3Uj_RJJpkRXic",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBe3zNu4h18C4SRKWErRKOOQyk1uah5Y_LHndRPEo-jin9GRQJhwutKgVtHEfnUnj4rMJjYGgmlgdBiThgDcvTPeNUrkIVWbJ3qkofiEDmna2jszX0WV4_X_Lgo0pFbkThx8i5BriJZV-fLzsT1iJT4t1_CJZCUEF_hJ2WLZElMGdRzI2FwgwYKlbekY-nfTclxsd5gee1cT2p8bAJ_rgTHUFJ0apJTh7lvRb2CoF7WYySYbiGyyFfhcqNfh0IZu656AsKAOYoLoWo"
  ];

  return (
    <div className="bg-[#0A0F1E] text-[#FDFCF0] selection:bg-[#D4AF37]/30">
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
              <Link className="nav-link-hover text-sm uppercase tracking-widest hover:text-[#D4AF37] transition-colors font-medium" href="/menu">
                Menu
              </Link>
              <Link className="nav-link-hover text-sm uppercase tracking-widest hover:text-[#D4AF37] transition-colors font-medium" href="#reservations">
                Reservations
              </Link>
              <Link className="nav-link-hover text-sm uppercase tracking-widest hover:text-[#D4AF37] transition-colors font-medium" href="#about">
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
      <header className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Exquisite gourmet plating"
            className="w-full h-full object-cover brightness-[0.4]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbu1lFJs-hX4V6-iGuFdjKw8E3HGcqS__wt4M7T0Y6yZHVhkTi2KbLR4-XsuCG_lbTFs3-VI3xbXZVejX1AUVd2aN3dVf_VvWt1mw9zlCvy_tLfXl3Cw5MXw-QndPzsGzW3Fs2XVWqa2qo7N6E79Nb4deFXHFiXU89Co6ijzgZ2YKDtrOOQqK5A621nTAXK7ZozgAWHf0X1_RVmyQ-PLzRD0EJLkt8v15poccCK-zrQCzOyTsBjWa68Nhk3fguJX3QadSLVc_q0Js"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/60 via-transparent to-[#0A0F1E]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase mb-6 block text-sm">
              Fine Dining Reimagined
            </span>
            <h1 className="text-7xl md:text-9xl font-display font-black text-[#FDFCF0] mb-8 leading-none">
              Experience <span className="text-[#D4AF37] italic font-normal">Culinary</span> Perfection
            </h1>
            <p className="text-xl text-[#FDFCF0]/80 mb-12 leading-relaxed font-light max-w-xl">
              Where the precision of modern gastronomy meets the soul of timeless tradition. Every plate is a symphony of balance and beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                className="bg-[#D4AF37] text-[#0A0F1E] px-12 py-5 rounded-sm font-bold text-center hover:scale-105 transition-all tracking-[0.2em] text-sm uppercase"
                href="/menu"
              >
                View Menu
              </Link>
              <Link
                className="bg-white/5 backdrop-blur-md text-[#FDFCF0] border border-[#D4AF37]/40 px-12 py-5 rounded-sm font-bold text-center hover:bg-[#D4AF37] hover:text-[#0A0F1E] transition-all tracking-[0.2em] text-sm uppercase"
                href="#reservations"
              >
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-32 bg-[#0A0F1E] relative" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-[#D4AF37]/50"></div>
              <Image
                alt="Kitchen interior"
                className="shadow-2xl relative z-10 grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuApvRrM8NveXIeAri600IkBdOBhSkYrWkjT27AvndjoYOvK4mBdVRL_5Hpza7cRQxP7gHmxvl8O5t_khYRDkQDYwFby7oH8-J7ywAPbCHhIPpxC7oQsVSOs_x8Cn13lIeLIblgMH1K_66WaKIU7cqPhr2V4drnNb1pP97C6zlxSfjQMVU8HK4dwKeS4-qMcCluszTxNqLfci2ugar6kdvJ0xCnCxVAp-ojWDh0agv0VvK28fxVHCoMOBONkkIeWz3VRDzJp6gp0bUQ"
                width={600}
                height={400}
              />
              <div className="absolute -bottom-10 -right-10 bg-[#121212] border border-[#D4AF37]/20 p-10 hidden lg:block z-20">
                <p className="text-[#D4AF37] font-display text-5xl font-bold mb-1">15+</p>
                <p className="text-[#FDFCF0]/60 text-xs uppercase tracking-[0.2em]">Years of Excellence</p>
              </div>
            </div>
            <div>
              <h2 className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-sm mb-6">Our Story</h2>
              <h3 className="text-5xl md:text-6xl font-display font-bold mb-8 text-[#FDFCF0] leading-tight">
                Redefining the Dining Experience
              </h3>
              <p className="text-[#FDFCF0]/70 mb-8 leading-relaxed text-lg">
                Founded in 2008, Zero Point began with a singular obsession: the pursuit of the &quot;Zero Point&quot; – that ephemeral moment where flavor, texture, and aesthetic achieve absolute equilibrium.
              </p>
              <p className="text-[#FDFCF0]/70 mb-10 leading-relaxed text-lg">
                Our kitchen serves as an atelier where local terroir is elevated through global techniques. We invite you to lose yourself in a sensory journey unlike any other.
              </p>
              <button className="group flex items-center gap-4 text-[#D4AF37] font-bold tracking-widest text-sm uppercase border-b border-[#D4AF37]/0 hover:border-[#D4AF37] transition-all pb-1">
                Read Full Story{' '}
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_right_alt
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-32 bg-[#121212] border-y border-[#D4AF37]/10" id="menu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-sm mb-6">Chef&apos;s Recommendations</h2>
            <h3 className="text-5xl md:text-6xl font-display font-bold text-[#FDFCF0]">Signature Delights</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {menuItems.map((item, index) => (
              <div key={index} className="group text-center">
                <div className="circle-frame mx-auto mb-8 w-52 h-52 overflow-hidden transition-transform duration-700 group-hover:scale-105">
                  <Image
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full"
                    src={item.image}
                    width={208}
                    height={208}
                  />
                </div>
                <h4 className="text-2xl font-display font-bold mb-3 text-[#FDFCF0] group-hover:text-[#D4AF37] transition-colors">
                  {item.name}
                </h4>
                <p className="text-sm text-[#FDFCF0]/60 mb-6 px-4 font-light">{item.description}</p>
                <span className="text-[#D4AF37] font-display font-bold text-2xl tracking-tight">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-sm mb-20">Our Services</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-10 bg-[#121212] border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all group">
                <span className="material-symbols-outlined text-[#D4AF37] text-5xl mb-8 block group-hover:scale-110 transition-transform">
                  {service.icon}
                </span>
                <h4 className="text-xl font-display font-bold mb-4 tracking-wide">{service.title}</h4>
                <p className="text-[#FDFCF0]/50 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="border-y border-[#D4AF37]/20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-[450px]">
          {galleryImages.map((src, index) => (
            <Image
              key={index}
              alt={`Dish gallery ${index + 1}`}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
              src={src}
              width={300}
              height={450}
            />
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 bg-[#0A0F1E] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="material-symbols-outlined text-7xl text-[#D4AF37]/30 mb-10">format_quote</span>
          <div className="space-y-10">
            <p className="text-3xl md:text-5xl font-display italic leading-snug text-[#FDFCF0]">
              &quot;An unforgettable experience. The attention to detail in the plating and the complexity of the flavors is something you rarely find. Zero Point is truly a gem.&quot;
            </p>
            <div>
              <h5 className="font-bold text-2xl text-[#D4AF37] mb-2">Eleanor Sterling</h5>
              <p className="text-[#FDFCF0]/50 text-sm uppercase tracking-[0.3em] font-semibold">
                Chief Critic, The Daily Gourmet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section className="py-32 bg-[#121212] border-t border-[#D4AF37]/20" id="reservations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-sm mb-6">Location & Hours</h2>
              <h3 className="text-5xl font-display font-bold mb-12 text-[#FDFCF0]">Find Your Way To Us</h3>
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <span className="material-symbols-outlined text-[#D4AF37] text-3xl">location_on</span>
                  <div>
                    <p className="font-bold text-lg text-[#FDFCF0] mb-2 tracking-wide uppercase text-sm">Our Address</p>
                    <p className="text-[#FDFCF0]/60 leading-relaxed">123 Culinary Heights, Art District, New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <span className="material-symbols-outlined text-[#D4AF37] text-3xl">schedule</span>
                  <div>
                    <p className="font-bold text-lg text-[#FDFCF0] mb-2 tracking-wide uppercase text-sm">Working Hours</p>
                    <p className="text-[#FDFCF0]/60">Mon - Fri: 5:00 PM - 11:00 PM</p>
                    <p className="text-[#FDFCF0]/60">Sat - Sun: 12:00 PM - 12:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <span className="material-symbols-outlined text-[#D4AF37] text-3xl">call</span>
                  <div>
                    <p className="font-bold text-lg text-[#FDFCF0] mb-2 tracking-wide uppercase text-sm">Reservations</p>
                    <p className="text-[#FDFCF0]/60 text-xl font-display">+1 (234) 567-8900</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#0A0F1E]/50 p-12 border border-[#D4AF37]/30 backdrop-blur-sm">
              <h4 className="text-3xl font-display font-bold mb-10 text-center text-[#FDFCF0]">Make a Reservation</h4>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <input
                    className="bg-[#0A0F1E] border-[#D4AF37]/20 text-[#FDFCF0] placeholder-[#FDFCF0]/30 focus:border-[#D4AF37] focus:ring-[#D4AF37] w-full px-6 py-4 rounded-none transition-all"
                    placeholder="Your Name"
                    type="text"
                  />
                  <input
                    className="bg-[#0A0F1E] border-[#D4AF37]/20 text-[#FDFCF0] placeholder-[#FDFCF0]/30 focus:border-[#D4AF37] focus:ring-[#D4AF37] w-full px-6 py-4 rounded-none transition-all"
                    placeholder="Email Address"
                    type="email"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <input
                    className="bg-[#0A0F1E] border-[#D4AF37]/20 text-[#FDFCF0] focus:border-[#D4AF37] focus:ring-[#D4AF37] w-full px-6 py-4 rounded-none transition-all"
                    type="date"
                  />
                  <select className="bg-[#0A0F1E] border-[#D4AF37]/20 text-[#FDFCF0] focus:border-[#D4AF37] focus:ring-[#D4AF37] w-full px-6 py-4 rounded-none transition-all">
                    <option>2 Persons</option>
                    <option>4 Persons</option>
                    <option>6+ Persons</option>
                  </select>
                </div>
                <textarea
                  className="bg-[#0A0F1E] border-[#D4AF37]/20 text-[#FDFCF0] placeholder-[#FDFCF0]/30 focus:border-[#D4AF37] focus:ring-[#D4AF37] w-full px-6 py-4 rounded-none transition-all"
                  placeholder="Special Requests"
                  rows={4}
                ></textarea>
                <button
                  className="w-full bg-[#D4AF37] text-[#0A0F1E] font-bold py-5 rounded-none hover:bg-[#FDFCF0] transition-all uppercase tracking-[0.3em] text-sm"
                  type="submit"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-[#D4AF37] relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-[#0A0F1E] text-center lg:text-left">
              <h4 className="text-4xl font-display font-black mb-3">Join Our Newsletter</h4>
              <p className="text-[#0A0F1E]/80 font-medium tracking-wide">
                Subscribe to get updates on seasonal menus and exclusive chef&apos;s table events.
              </p>
            </div>
            <div className="w-full max-w-lg">
              <form className="flex border-2 border-[#0A0F1E]">
                <input
                  className="flex-1 px-8 py-5 bg-[#FDFCF0] border-none focus:ring-0 text-[#0A0F1E] placeholder-[#0A0F1E]/40 font-medium"
                  placeholder="Your email address"
                  type="email"
                />
                <button className="bg-[#0A0F1E] text-[#D4AF37] px-10 py-5 font-bold hover:bg-[#0A0F1E]/90 transition-colors uppercase tracking-widest text-xs">
                  Subscribe
                </button>
              </form>
            </div>
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
    </div>
  );
}