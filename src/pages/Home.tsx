import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  return (
    <>
      <AnimatedSection>
        <section className="relative min-h-[921px] py-16 md:py-20 px-6 overflow-hidden bg-surface flex items-center">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            <div className="lg:col-span-7 z-10">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-headline font-bold text-on-surface leading-tight mb-6">
                Excellence in <br /><span className="italic text-primary">Lifestyle</span>
              </h1>
              <p className="text-base md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed font-body">
                A premier group dedicated to redefining the standards of luxury hotel accommodation, authentic native culinary experiences, and digital connection platforms across Nigeria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 font-body">
                <Link to="/gallery" className="px-8 py-4 bg-primary text-on-primary rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 shadow-lg">
                  Explore Properties
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <a href="https://icraveapp.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-pink-100 text-pink-700 rounded-xl font-semibold flex items-center justify-center hover:bg-pink-200 transition-colors shadow-sm">
                  Discover iCrave App
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative transform lg:translate-x-12">
                <img 
                  alt="Luxury Hotel Exterior / Nightclub vibes" 
                  className="w-full h-full object-cover" 
                  src="/images/hotel_exterior_1775924550234.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 md:-left-16 p-6 md:p-8 bg-surface/70 backdrop-blur-xl rounded-2xl shadow-xl max-w-[16rem] md:max-w-xs hidden sm:block">
                <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-2 block font-body">Our Promise</span>
                <p className="font-headline text-lg md:text-xl italic text-on-surface">"To craft unforgettable stays and meaningful connections."</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <section className="bg-surface-container-low py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center md:text-left font-body">
            <div className="flex flex-col gap-2">
              <span className="text-primary-container font-bold text-3xl md:text-4xl">Hotels</span>
              <span className="text-on-surface-variant uppercase tracking-widest text-xs md:text-sm font-semibold">Premium Stays</span>
            </div>
            <div className="flex flex-col gap-2 border-y sm:border-y-0 sm:border-x border-outline-variant/30 py-6 sm:py-0 sm:px-12">
              <span className="text-secondary font-bold text-3xl md:text-4xl">Rosemore</span>
              <span className="text-on-surface-variant uppercase tracking-widest text-xs md:text-sm font-semibold">Local Culinary Lounge</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-pink-600 font-bold text-3xl md:text-4xl font-headline italic">1M+ Matches</span>
              <span className="text-on-surface-variant uppercase tracking-widest text-xs md:text-sm font-semibold">iCrave Dating App</span>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <section className="py-16 md:py-24 px-6 bg-surface" id="projects">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:mb-16">
              <span className="text-secondary font-bold text-sm tracking-[0.2em] uppercase font-body">Our Portfolio</span>
              <h2 className="text-3xl md:text-5xl font-headline font-bold mt-4">Curated Experiences</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto">
              {/* Hotel Image */}
              <div className="lg:col-span-8 group relative overflow-hidden rounded-3xl bg-surface-container-high h-[400px] md:h-[500px]">
                <img 
                  alt="Luxury Retreats" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="/images/hotel_exterior_1775924550234.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-10 text-on-primary font-body w-full">
                  <h3 className="text-2xl md:text-3xl font-bold font-headline mb-4">Luxury Boutique Resorts</h3>
                  <p className="max-w-md text-on-primary/80 mb-6 text-sm md:text-base">Exclusive hideaways blending breathtaking aesthetics with tailored concierge services across Nigeria.</p>
                  <Link to="/gallery" className="inline-flex items-center gap-2 font-semibold hover:underline text-sm md:text-base">
                    View Properties <span className="material-symbols-outlined">trending_flat</span>
                  </Link>
                </div>
              </div>

              {/* Native Food Image */}
              <div className="lg:col-span-4 group relative overflow-hidden rounded-3xl bg-surface-container-high h-[400px] md:h-[500px]">
                <img 
                  alt="Native Food Lounge" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="/images/native_food_lounge_1775924595434.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-10 text-on-primary font-body">
                  <h3 className="text-2xl md:text-3xl font-bold font-headline mb-4">Rosemore Kitchen</h3>
                  <p className="text-on-primary/80 mb-6 text-sm md:text-base">A native Nigerian lounge at No. 94 Obiwali Rd, Rumuigbo, Port Harcourt. Enjoy premium delicacies like Nkwobi, Pepper Soup, and Shawarma.</p>
                  <Link to="/about" className="inline-flex items-center gap-2 font-semibold hover:underline text-sm md:text-base">
                    Visit the Lounge <span className="material-symbols-outlined">restaurant</span>
                  </Link>
                </div>
              </div>

              {/* Dating App Banner */}
              <div className="lg:col-span-12 group relative overflow-hidden rounded-3xl bg-surface-container-highest h-[300px] md:h-[400px] flex items-center justify-center">
                <img 
                  alt="iCrave Dating App" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" 
                  src="/images/icrave_dating_connection_1775924700913.png"
                />
                <div className="absolute inset-0 bg-pink-900/40 mix-blend-multiply"></div>
                <div className="relative text-center px-6 py-8 md:px-12 z-10 text-white font-body max-w-4xl">
                  <h3 className="text-3xl md:text-5xl font-bold font-headline mb-4">Discover True Connections</h3>
                  <p className="text-white/90 text-sm md:text-lg mb-8 max-w-2xl mx-auto">
                    The iCrave App goes beyond familiar swiping. Featuring deep functionality for verified matches, it’s the definitive platform for bold, modern dating.
                  </p>
                  <a href="https://icraveapp.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-pink-700 font-bold rounded-xl hover:bg-pink-100 transition-colors shadow-lg">
                    Check out iCrave App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <section className="py-16 md:py-24 px-6 bg-surface" id="contact">
          <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-8 md:p-20 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-primary-container/30 rounded-full -mr-24 -mt-24 md:-mr-32 md:-mt-32"></div>
            <div className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-secondary/20 rounded-full -ml-16 -mb-16 md:-ml-24 md:-mb-24"></div>
            <h2 className="text-3xl md:text-6xl font-headline text-on-primary font-bold mb-8 relative z-10 leading-tight">
              Ready to elevate your <br className="hidden md:block"/><span className="italic">lifestyle?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center relative z-10 font-body">
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-on-primary text-primary font-bold rounded-2xl hover:bg-surface-container-high transition-colors text-center text-sm md:text-base">
                Contact Our Team
              </Link>
              <a className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 border-2 border-on-primary text-on-primary font-bold rounded-2xl hover:bg-on-primary hover:text-primary transition-all text-center text-sm md:text-base" href="tel:08035293815">
                Call Headquarters
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default Home;
