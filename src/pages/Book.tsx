import AnimatedSection from '../components/AnimatedSection';

const Book = () => {
  return (
    <>
      <AnimatedSection>
        <section className="relative py-16 md:py-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 z-10">
              <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight mb-6">
                Reserve Your <br/>
                <span className="italic text-primary">Luxury Stay</span>
              </h1>
              <p className="text-base md:text-lg text-on-surface-variant max-w-lg mb-8 leading-relaxed font-body">
                Select your preferred dates and experience unparalleled comfort and unyielding commitment to hospitality.
              </p>
              <div className="flex items-center gap-4">
                <span className="h-1 w-12 bg-primary"></span>
                <span className="text-xs md:text-sm font-body font-bold tracking-widest text-primary uppercase">Exclusive Reservations</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-0 bg-surface-container rounded-xl -rotate-3 scale-105 opacity-50"></div>
              <img 
                className="rounded-xl shadow-2xl relative z-10 w-full aspect-video object-cover" 
                src="/images/luxury_suite_interior_1775924765092.png"
                alt="Hotel Booking Vibe"
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <section className="bg-surface-container-low py-16 md:py-24 px-6 font-body">
          <div className="max-w-5xl mx-auto bg-surface-container-lowest p-6 md:p-12 rounded-2xl shadow-sm">
            <h2 className="text-2xl md:text-3xl font-headline font-semibold mb-8 md:mb-10 text-on-surface">Booking Details</h2>
            
            <form action="#" className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div className="relative form-input-container">
                  <input className="w-full bg-surface-container-high border-none rounded-lg px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary focus:bg-white transition-all peer placeholder-transparent" id="checkin" placeholder="Check-in Date" type="date" />
                  <label className="absolute left-4 top-4 text-on-surface-variant/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-primary" htmlFor="checkin">Check-in Date</label>
                </div>
                <div className="relative form-input-container">
                  <input className="w-full bg-surface-container-high border-none rounded-lg px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary focus:bg-white transition-all peer placeholder-transparent" id="checkout" placeholder="Check-out Date" type="date" />
                  <label className="absolute left-4 top-4 text-on-surface-variant/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-primary" htmlFor="checkout">Check-out Date</label>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div className="relative form-input-container">
                  <select className="w-full bg-surface-container-high border-none rounded-lg px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary focus:bg-white transition-all peer appearance-none" id="guests" defaultValue="">
                    <option value="" disabled hidden>Select Guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4+">4+ Guests</option>
                  </select>
                  <label className="absolute left-4 top-1 text-[10px] md:text-xs text-primary" htmlFor="guests">Guests</label>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
                <div className="relative form-input-container">
                  <select className="w-full bg-surface-container-high border-none rounded-lg px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary focus:bg-white transition-all peer appearance-none" id="room" defaultValue="">
                    <option value="" disabled hidden>Select Room Type</option>
                    <option value="deluxe">Deluxe Suite</option>
                    <option value="executive">Executive Retreat</option>
                    <option value="penthouse">The Zenith Penthouse</option>
                    <option value="villa">Luxury Villa</option>
                  </select>
                  <label className="absolute left-4 top-1 text-[10px] md:text-xs text-primary" htmlFor="room">Room Type</label>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-outline-variant/20">
                <h3 className="text-xl font-headline font-semibold mb-6">Guest Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="relative form-input-container">
                    <input className="w-full bg-surface-container-high border-none rounded-lg px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary focus:bg-white transition-all peer placeholder-transparent" id="fullname" placeholder="Full Name" type="text" />
                    <label className="absolute left-4 top-4 text-on-surface-variant/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-primary" htmlFor="fullname">Full Name</label>
                  </div>
                  <div className="relative form-input-container">
                    <input className="w-full bg-surface-container-high border-none rounded-lg px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary focus:bg-white transition-all peer placeholder-transparent" id="email" placeholder="Email Address" type="email" />
                    <label className="absolute left-4 top-4 text-on-surface-variant/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-primary" htmlFor="email">Email Address</label>
                  </div>
                </div>
                
                <div className="relative form-input-container mt-6 md:mt-8">
                  <textarea className="w-full bg-surface-container-high border-none rounded-lg px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary focus:bg-white transition-all peer resize-none placeholder-transparent" id="notes" placeholder="Special Requests (Optional)" rows={3}></textarea>
                  <label className="absolute left-4 top-4 text-on-surface-variant/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-primary" htmlFor="notes">Special Requests (Optional)</label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-6">
                <p className="text-[10px] md:text-xs text-on-surface-variant max-w-[250px] text-center sm:text-left">
                  By confirming, you agree to our 48-hour cancellation policy.
                </p>
                <button className="w-full sm:w-auto bg-primary text-on-primary px-8 py-4 rounded-lg font-bold hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2" type="submit">
                  Confirm Reservation
                  <span className="material-symbols-outlined text-lg">hotel_class</span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default Book;
