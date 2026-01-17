'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  calories: number;
  protein: string;
  fat: string;
  carbs: string;
  ingredients: string[];
  allergens: string[];
  additionalImages: string[];
  pairings: {
    name: string;
    description: string;
    price: string;
    image: string;
  }[];
}

const menuItems: Record<string, MenuItem> = {
  'grilled-lamb-chops': {
    id: 'grilled-lamb-chops',
    name: 'Grilled Lamb Chops',
    price: '$58.00',
    description: 'Slow-roasted premium lamb with mint reduction and herb crust',
    longDescription: 'Premium grass-fed lamb chops, marinated for 24 hours in a curated blend of Mediterranean herbs and organic garlic, flame-grilled to perfection over white oak. Served with a reduction of balsamic vinegar and rosemary-infused honey.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNthkzZbP5Ha-g8-EMjTItrLhaAm9usgHgAiY-BN-oPi_YezfIumiSnWNZCdU13RhJ7t4m0Adoow8BO_BEGZ4o3ncIWEI3l8VowJNj6v48mcc6C5Lc0Afuk7SBeHhlGhHpNeN--Z1aGT7GOC_TfJt8iLmTkX_LuJ0F6qWydvK_6dYW1CtSl5gFjP7Dw3kPt5XMjL4jafgyP8C8EKN14GdSL0sXAWDSpx6-hPswtn2ToQWU1kTvhYVZRe-OmW8pcy8KBP8DF_5xGSM',
    category: 'Chef\'s Signature Selection',
    rating: 4.5,
    reviews: 42,
    calories: 480,
    protein: '42g',
    fat: '28g',
    carbs: '6g',
    ingredients: ['Australian Lamb', 'Fresh Rosemary', 'Aged Balsamic', 'Smoked Sea Salt', 'Organic Garlic', 'Thyme Bouquet'],
    allergens: ['Contains Dairy'],
    additionalImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA6P4mjOsiz-x3BkMIKO5rasOyOUYaW-nAJOSTFTl3v7uul25K6n9sXSdRt-uUeuJaHLyXvHSGsoss37Y8oP9g_ZLJjpsBR0h7eZ-9oVrIgbsJSyATP-qZYTEsZ6xTCmMK7AAwlI4RvY-BACTtKIKjTd2pPLETQrmxzAfui_MA0uz2qMI0cP8Sw0fnep3-AZuoZJEfNbLaJ_PuP2CiPffdrShonGiAm2x3SIrGmfQ3kgJKDncVeWPP8nF_qJ8_bHjXJWjMvfBciPzA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9H1Pdt0fbb65Rfd7ytRZQiuHoNS9ZD6BkHS48Q0uZWBP3UW4VJmEcTX29FMkTtVDL31GEPQXb1c2VdilnizbzOEbMJcJsz0E_YOeunafxPKFLSHpBmYT98x5OhD-CHaD3vOoXFok7MCZHRfnQGNW8_viaEN8P0xS7eZL9WYQUUMUU0QVOKoMcbxHzSQzBSUJXo7sfO9NpnrEw2gHMCOyxM5Corb8rYxcAXJAeKzfRhV3DU7ZiX36zFYrLQPtAi1gThisk0ka2Xys',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ1IpGis40h5RN79G0mm3Pyl7zMKg1cjOIt87VkqzAtKnjB-fzizUEO9yntryGXiQd6kZvgwsnYnXAFQjR5b_5cQU4Ajv5SEOpoyipRLK1LGOL8f6juvKkDxAdVs1XX0RsEgUlejDI3OC_Lhkk_BcZK-9aVGIPt_i7MzQm1r6S5qkLXaw8EDr8aekDlj59nnSfExvqhPgL4V-k117y3Ih2mAll8ouZTunZURVUiwA-TWFlMOq_J1o8qDDsOYugL_4KuyhPP930h7M'
    ],
    pairings: [
      {
        name: 'Crème Brûlée',
        description: 'Vanilla bean custard, caramelized crust.',
        price: '$14.00',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd4_fabFCRIvNFxFwjGTgOlWePgEVRQK-Q9DOZFXIkAx6Ax1caZ9CvxjCKGHfLgmve9MuopaR7SEv9ozLroL_NZZBuKIpPDFLRWyhn-zGg0qlp6-ClPaRT-RYD-rjucro49xijefVa0yL0NsFq8Mbdgyc61tr9NbvfxZuGdIc1bCReC4gVn0O-Hnre_tXZ6jl13k_i-8Yeo30IqaXu7b1Le_DkQDRnGmvH4pjCYpLOAvcOZA-c2rwmKPZGuikr5KYUmr7xpFwWKyc'
      },
      {
        name: 'Seafood Risotto',
        description: 'Arborio rice, shrimp, saffron.',
        price: '$32.00',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAk6mj639jdpGsQnY7iksOCpQ4Bj9GcNiw-HvPfbwF4FJF4pc_J85gXjAhSm3g92yWTB2q2IRgnEaXFPZIQ2Md8O0XuxMHllvPer6tY0YbuAX6FPN-75YxqfR8WCcacm9jd5wUnTwp0pGWCT6gGVj3hdPMalOkygMfgzSClz3TrrI67mMp7AjPK838rMTcZAvW1Eerwv8E1qfagxjS_gHiPOCup5N5XYTlSL2TzdgLJBtrjkbJT-i3LNdVs2xBCy4HA6ecIsw1_vVg'
      }
    ]
  },
  'smoked-salmon-tower': {
    id: 'smoked-salmon-tower',
    name: 'Smoked Salmon Tower',
    price: '$32.00',
    description: 'Fresh Atlantic salmon with capers, cream cheese, and caviar',
    longDescription: 'Premium Norwegian smoked salmon layered with artisanal cream cheese, topped with Ossetra caviar and fresh capers. Served with toasted brioche points and microgreens.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe_fmpSjdSmcL6L7dlrn-BxQVNkYVKSJrAsRha3rswg7AoVUE7LXeLEdhnJbRn-YVTyXj8RTTA49Hkk_CPfrW-q3Co_GknOh4WMBY7K4Ikelr8_waurO3HJtqnZMgHvvC2l1rDa98x36eDW-q7-qfxAxu_VrzMGrcugzcCFVntGgrGPgbooLqryNclo8RTXMuGJMru1my-L8pz4Kal5klDTSTJzP9VCVFeIVP8d_snNF_IDXAVubtfcRPu9ZymUjEa61gtc1Hfe-s',
    category: 'Appetizers',
    rating: 4.8,
    reviews: 28,
    calories: 320,
    protein: '24g',
    fat: '22g',
    carbs: '8g',
    ingredients: ['Norwegian Salmon', 'Ossetra Caviar', 'Cream Cheese', 'Fresh Capers', 'Brioche', 'Microgreens'],
    allergens: ['Contains Fish', 'Contains Dairy', 'Contains Gluten'],
    additionalImages: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=300&fit=crop'
    ],
    pairings: [
      {
        name: 'Champagne Cocktail',
        description: 'Dom Pérignon with elderflower.',
        price: '$28.00',
        image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=300&fit=crop'
      }
    ]
  }
};

export default function MenuItemPage() {
  const params = useParams();
  const slug = params.slug as string;
  const item = menuItems[slug];

  if (!item) {
    return (
      <div className="min-h-screen bg-[#0A0E17] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display text-[#D4AF37] mb-4">Dish Not Found</h1>
          <p className="text-white/60 mb-8">The dish you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/menu" className="bg-[#D4AF37] text-[#0A0E17] px-8 py-3 font-bold uppercase tracking-[0.2em] hover:bg-[#D4AF37]/90 transition-all">
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="material-symbols-outlined text-sm text-[#D4AF37]" style={{ fontVariationSettings: "'FILL' 1" }}>
          star
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="material-symbols-outlined text-sm text-[#D4AF37]" style={{ fontVariationSettings: "'FILL' 1" }}>
          star_half
        </span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="material-symbols-outlined text-sm text-[#D4AF37]/40">
          star
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-[#0A0E17] text-white">
      {/* Header */}
      <header className="fixed w-full z-50 bg-[#0A0E17]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#D4AF37] text-3xl">restaurant</span>
              <Link href="/" className="text-2xl font-display font-semibold tracking-[0.2em] text-white uppercase">
                Zero Point
              </Link>
            </div>
            <nav className="hidden md:flex space-x-12 items-center text-xs uppercase tracking-[0.2em] font-medium">
              <Link className="text-white/60 hover:text-[#D4AF37] transition-colors" href="/">
                Home
              </Link>
              <Link className="text-[#D4AF37] border-b border-[#D4AF37] pb-1" href="/menu">
                Menu
              </Link>
              <Link className="text-white/60 hover:text-[#D4AF37] transition-colors" href="/#reservations">
                Reservations
              </Link>
              <Link className="text-white/60 hover:text-[#D4AF37] transition-colors" href="/#about">
                About
              </Link>
              <Link href="/login" className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0A0E17] px-8 py-3 font-bold transition-all">
                Login
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row min-h-screen">
        {/* Image Section */}
        <div className="lg:w-1/2 relative h-[60vh] lg:h-screen sticky top-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A0E17]/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-transparent z-10 lg:hidden"></div>
          <Image
            alt={`${item.name} with herb garnish`}
            className="w-full h-full object-cover grayscale-[0.2] brightness-75 contrast-125"
            src={item.image}
            fill
            priority
          />
          
          {/* Thumbnail Gallery */}
          <div className="absolute bottom-12 left-12 z-20 hidden lg:flex gap-4">
            <div className="w-20 h-20 border-2 border-[#D4AF37] overflow-hidden">
              <Image
                alt={`${item.name} detail 1`}
                className="w-full h-full object-cover"
                src={item.additionalImages[0] || item.image}
                width={80}
                height={80}
              />
            </div>
            {item.additionalImages.slice(1, 3).map((img, index) => (
              <div key={index} className="w-20 h-20 border border-white/20 overflow-hidden opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                <Image
                  alt={`${item.name} detail ${index + 2}`}
                  className="w-full h-full object-cover"
                  src={img}
                  width={80}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 bg-[#0A0E17] px-8 lg:px-24 pt-40 pb-20 overflow-y-auto">
          <div className="max-w-xl mx-auto lg:mx-0">
            {/* Back Button */}
            <div className="mb-12">
              <Link href="/menu" className="inline-flex items-center gap-2 text-white/40 hover:text-[#D4AF37] transition-colors uppercase tracking-[0.2em] text-xs font-semibold">
                <span className="material-symbols-outlined text-sm">west</span>
                <span>Back to Menu</span>
              </Link>
            </div>

            <div className="space-y-8">
              {/* Title Section */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold py-1 border-y border-[#D4AF37]/30">
                    {item.category}
                  </span>
                </div>
                <h1 className="text-6xl lg:text-7xl font-display italic mb-6 leading-tight text-[#D4AF37]">
                  {item.name}
                </h1>
                <div className="flex items-center gap-8">
                  <span className="text-3xl font-display text-[#D4AF37]/80">{item.price}</span>
                  <div className="flex items-center gap-1 text-[#D4AF37]/40">
                    {renderStars(item.rating)}
                    <span className="ml-2 text-xs uppercase tracking-widest text-white/30">
                      ({item.reviews} Reviews)
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-invert prose-lg">
                <p className="text-white/60 font-light leading-relaxed italic">
                  {item.longDescription}
                </p>
              </div>

              {/* Ingredients */}
              <div className="pt-8 border-t border-white/5">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 text-[#D4AF37]/60">
                  Composition
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {item.ingredients.map((ingredient, index) => (
                    <span key={index} className="text-sm text-white/80 border-b border-white/10 pb-1">
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nutrition Info */}
              <div className="grid grid-cols-4 gap-4 py-8 border-y border-white/5">
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Calories</p>
                  <p className="text-xl font-display text-white">{item.calories}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Protein</p>
                  <p className="text-xl font-display text-white">{item.protein}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Fat</p>
                  <p className="text-xl font-display text-white">{item.fat}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Carbs</p>
                  <p className="text-xl font-display text-white">{item.carbs}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Link href="/#reservations" className="flex-[2] bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0A0E17] py-5 px-8 font-bold text-sm uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined text-lg">calendar_today</span>
                  Make Reservation
                </Link>
                <Link href="/cart" className="flex-1 border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white py-5 px-8 font-bold text-sm uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined text-lg">shopping_bag</span>
                  Add to Cart
                </Link>
              </div>

              {/* Allergen Info */}
              <div className="flex items-center gap-8 pt-6">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Gluten Free
                </div>
                {item.allergens.map((allergen, index) => (
                  <div key={index} className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    {allergen}
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Pairings */}
            <section className="mt-32 pt-16 border-t border-white/5">
              <h2 className="text-3xl font-display italic mb-12 text-[#D4AF37]">
                Recommended Pairings
              </h2>
              <div className="space-y-12">
                {item.pairings.map((pairing, index) => (
                  <div key={index} className="group flex gap-6 items-center">
                    <div className="w-24 h-24 overflow-hidden border border-white/10">
                      <Image
                        alt={pairing.name}
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                        src={pairing.image}
                        width={96}
                        height={96}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-display text-white group-hover:text-[#D4AF37] transition-colors">
                        {pairing.name}
                      </h4>
                      <p className="text-white/40 text-sm font-light mt-1 italic">
                        {pairing.description}
                      </p>
                      <span className="text-[#D4AF37] text-sm mt-2 block">{pairing.price}</span>
                    </div>
                    <button className="material-symbols-outlined text-white/20 hover:text-[#D4AF37] transition-colors">
                      east
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#141B2D] border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="material-symbols-outlined text-[#D4AF37] text-2xl">restaurant</span>
            <span className="text-xl font-display font-semibold tracking-[0.2em] text-white uppercase">
              Zero Point
            </span>
          </div>
          <p className="text-white/40 max-w-lg mx-auto mb-10 font-light italic leading-relaxed">
            Crafting singular gastronomic experiences. Our pursuit of perfection begins at the zero point of every ingredient.
          </p>
          <div className="flex justify-center space-x-12 mb-10 text-[10px] uppercase tracking-[0.3em] font-semibold">
            <Link className="text-white/60 hover:text-[#D4AF37] transition-colors" href="#">
              Instagram
            </Link>
            <Link className="text-white/60 hover:text-[#D4AF37] transition-colors" href="#">
              Facebook
            </Link>
            <Link className="text-white/60 hover:text-[#D4AF37] transition-colors" href="#">
              Twitter
            </Link>
          </div>
          <p className="text-[10px] text-white/20 uppercase tracking-widest">
            © 2024 Zero Point Culinary Group. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}