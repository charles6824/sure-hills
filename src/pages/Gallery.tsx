import AnimatedSection from '../components/AnimatedSection';

const Gallery = () => {
  return (
    <div className="pt-8 pb-24 max-w-7xl mx-auto px-6 lg:px-8">
      <AnimatedSection>
        <header className="mb-16 md:mb-24 max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline italic text-primary leading-tight mb-6">Curated Portfolios</h1>
          <p className="text-base md:text-lg lg:text-xl text-on-surface-variant font-body leading-relaxed">
            Explore the intersection of luxury accommodations, authentic dining, and digital lifestyle. From our flagship retreats to our vibrant lounges and dating platforms, our standard remains uncompromising.
          </p>
        </header>

        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-8 md:mb-12 overflow-x-auto pb-4 scrollbar-hide font-body">
          <button className="px-4 md:px-6 py-2 rounded-full bg-primary text-on-primary font-medium text-xs md:text-sm whitespace-nowrap transition-all duration-300">All Works</button>
          <button className="px-4 md:px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-xs md:text-sm whitespace-nowrap hover:bg-surface-container-highest transition-all duration-300">Boutique Hotels</button>
          <button className="px-4 md:px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-xs md:text-sm whitespace-nowrap hover:bg-surface-container-highest transition-all duration-300">Rosemore Kitchen</button>
          <button className="px-4 md:px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-xs md:text-sm whitespace-nowrap hover:bg-surface-container-highest transition-all duration-300">iCrave Dating</button>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-[250px] md:auto-rows-[300px]">
        {/* Large Featured Card */}
        <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-xl bg-surface-container-low transition-all duration-700">
          <AnimatedSection className="w-full h-full">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="/images/hotel_exterior_1775924550234.png"
              alt="The Obsidian Retreat"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
              <span className="text-on-primary/70 text-xs md:text-sm font-body uppercase tracking-widest mb-2">Boutique Hotels</span>
              <h3 className="text-on-primary text-2xl md:text-3xl font-headline italic">The Obsidian Retreat</h3>
              <p className="text-on-primary/80 mt-2 max-w-sm md:max-w-md font-body text-xs md:text-sm">A landmark high-end retreat redefining luxury accommodation with avant-garde design.</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Tall Vertical Card Food */}
        <div className="md:col-span-4 md:row-span-2 relative group overflow-hidden rounded-xl bg-surface-container-low transition-all duration-700">
          <AnimatedSection delay={0.2} className="w-full h-full">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="/images/native_food_lounge_1775924595434.png"
              alt="Rosemore Kitchen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
              <span className="text-on-primary/70 text-xs md:text-sm font-body uppercase tracking-widest mb-2">Rosemore Kitchen</span>
              <h3 className="text-on-primary text-xl md:text-2xl font-headline italic">Native Culinary Arts</h3>
              <p className="text-on-primary/80 mt-2 font-body text-xs md:text-sm">Enjoy premium native Nigerian food and expertly crafted drinks in a lavish setting.</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Square Card Dating App */}
        <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-xl bg-surface-container-low transition-all duration-700">
          <AnimatedSection delay={0.1} className="w-full h-full">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="/images/icrave_dating_connection_1775924700913.png"
              alt="iCrave Dating"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-6">
              <span className="text-white/70 text-[10px] md:text-xs font-body uppercase tracking-widest mb-1">iCrave App</span>
              <h3 className="text-white text-lg md:text-xl font-headline">Meaningful Connections</h3>
            </div>
          </AnimatedSection>
        </div>

        {/* Horizontal Card Hotel/Resort */}
        <div className="md:col-span-8 md:row-span-1 relative group overflow-hidden rounded-xl bg-surface-container-low transition-all duration-700">
          <AnimatedSection delay={0.3} className="w-full h-full">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="/images/luxury_suite_interior_1775924765092.png"
              alt="The Zenith Villa"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-6">
              <span className="text-on-primary/70 text-[10px] md:text-xs font-body uppercase tracking-widest mb-1">Resorts & Spas</span>
              <h3 className="text-on-primary text-lg md:text-xl font-headline italic">The Zenith Villa</h3>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </div>
  );
};

export default Gallery;
