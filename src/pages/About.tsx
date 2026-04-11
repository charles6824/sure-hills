import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  return (
    <>
      <AnimatedSection>
        <section className="relative px-6 py-16 md:py-32 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 z-10">
              <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block font-body">Our Heritage</span>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-on-surface leading-tight mb-8">
                Curators of <br /> <span className="italic text-primary">Comfort & Connection</span>
              </h1>
              <p className="font-body text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed">
                SURE TOP HILLS LTD stands as a beacon of hospitality and lifestyle excellence. From high-end accommodation and curated guest experiences, to authentic native culinary arts, and digital connection platforms—we weave a tapestry of quality across all facets of modern living.
              </p>
            </div>
            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <img 
                  alt="Corporate Excellence" 
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000" 
                  src="/images/hotel_exterior_1775924550234.png"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-surface-container-highest p-6 md:p-8 rounded-2xl shadow-xl max-w-xs hidden md:block backdrop-blur-md bg-opacity-90">
                <p className="font-headline italic text-lg md:text-xl text-primary font-semibold">"Excellence in hospitality is not an act, but a habit we cultivate every day."</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <section className="bg-surface-container-low py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-primary">
                <span className="material-symbols-outlined text-4xl">visibility</span>
                <h2 className="font-headline text-2xl md:text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
                To be the multidimensional benchmark for lifestyle management, internationally recognized for integrating luxury hotel management, indigenous dining, and digital social platforms seamlessly.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-secondary">
                <span className="material-symbols-outlined text-4xl">rocket_launch</span>
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface">Our Mission</h2>
              </div>
              <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
                To provide superior value through strategic innovation ensuring that every guest interaction—whether checking into a suite, dining at our native lounge, or swiping on iCrave—leaves a lasting impression of quality.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Our Growing Ecosystem</h2>
            <p className="font-body text-base text-on-surface-variant max-w-2xl mx-auto">Beyond premium hotel management, SURE TOP HILLS LTD proudly operates in specialized sectors that elevate local culture and modern relationships.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-surface-container-highest rounded-3xl p-8 md:p-12 hover:shadow-lg transition-all duration-300">
              <div className="aspect-video w-full mb-8 rounded-xl overflow-hidden">
                <img 
                  src="/images/native_food_lounge_1775924595434.png" 
                  alt="Rosemore Kitchen Native Food" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-secondary">Rosemore Kitchen</h3>
              <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed">
                Immerse yourself in our premium culinary subsidiary. Located at No. 94 Obiwali Rd, Rumuigbo, Port Harcourt, Rosemore Kitchen is dedicated to authentic delicacies like Egusi, Oha, Nkwobi, Pepper Soup, Shawarma, and Barbecue—combining rich flavors with an upscale ambiance.
              </p>
            </div>

            <div className="bg-primary/5 rounded-3xl p-8 md:p-12 hover:shadow-lg transition-all duration-300">
              <div className="aspect-video w-full mb-8 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-pink-500/20 mix-blend-overlay z-10"></div>
                <img 
                  src="/images/icrave_dating_connection_1775924700913.png" 
                  alt="iCrave Dating App" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-pink-600">iCrave Dating App</h3>
              <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed mb-6">
                Redefining digital romance and social connection. iCrave is our bespoke dating platform equipped with advanced matching functionality, extending far beyond traditional swiping. It connects ambitious, verified individuals looking for meaningful relationships.
              </p>
              <a href="https://icraveapp.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-body font-bold text-pink-600 hover:text-pink-800 transition-colors">
                Visit iCraveApp.com <span className="material-symbols-outlined">open_in_new</span>
              </a>
            </div>

            <div className="bg-surface-container-highest rounded-3xl p-8 md:p-12 hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="aspect-video w-full mb-8 rounded-xl overflow-hidden relative bg-black flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-6xl opacity-50">live_tv</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-red-600">Arena Entertainment TV</h3>
              <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed mb-6">
                Our dynamic media and production hub boasting over 19K engaged followers. Arena Entertainment TV curates engaging lifestyle, culture, and event broadcasting, capturing the essence of modern entertainment and setting new benchmarks in media excellence.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
          <div className="bg-surface-container-highest rounded-3xl overflow-hidden flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 aspect-square md:aspect-auto self-stretch">
              <img 
                alt="Ekpe Uchechi Raymond" 
                className="w-full h-full object-cover" 
                src="/images/luxury_suite_interior_1775924765092.png"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-20">
              <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block font-body">The Founder</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-2">Ekpe Uchechi Raymond</h2>
              <p className="text-primary font-medium mb-6 md:mb-8 font-body">Director & Founder, SURE TOP HILLS LTD</p>
              <div className="w-12 h-1 bg-primary mb-6 md:mb-8"></div>
              <p className="font-body text-sm md:text-base text-on-surface-variant leading-loose mb-8">
                With a multifaceted vision, Ekpe Uchechi Raymond steered SURE TOP HILLS LTD past traditional hotel administration. By creating Rosemore Kitchen, Arena Entertainment TV, and pioneering the iCrave App, he established a lifestyle group that nourishes the body, mind, and social spirit, all without compromising our core ethos of luxury.
              </p>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary">signature</span>
                <span className="font-headline italic text-lg md:text-xl">Uchechi Raymond</span>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default About;
