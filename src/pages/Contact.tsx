import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  return (
    <>
      <AnimatedSection>
        <section className="relative py-16 md:py-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 z-10">
              <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight mb-6">
                Get in Touch with <br/>
                <span className="italic text-primary">Excellence</span>
              </h1>
              <p className="text-base md:text-lg text-on-surface-variant max-w-lg mb-8 leading-relaxed font-body">
                Experience the synergy of high-end hotel management, native culinary arts, and digital connection. Our team is ready to curate your next milestone.
              </p>
              <div className="flex items-center gap-4">
                <span className="h-1 w-12 bg-primary"></span>
                <span className="text-xs md:text-sm font-body font-bold tracking-widest text-primary uppercase">Luxury Consultations</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-0 bg-surface-container rounded-xl -rotate-3 scale-105 opacity-50"></div>
              <img 
                className="rounded-xl shadow-2xl relative z-10 w-full aspect-video object-cover" 
                src="/images/hotel_exterior_1775924550234.png"
                alt="Hotel Excellence"
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <section className="bg-surface-container-low py-16 md:py-24 px-6 font-body">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
            <div className="lg:col-span-7 bg-surface-container-lowest p-6 md:p-12 rounded-xl shadow-sm">
              <h2 className="text-2xl md:text-3xl font-headline font-semibold mb-8 md:mb-10 text-on-surface">Send a Message</h2>
              <form action="#" className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="relative form-input-container">
                    <input className="w-full bg-surface-container-high border-none rounded-lg px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary focus:bg-white transition-all peer placeholder-transparent" id="name" placeholder="Full Name" type="text" />
                    <label className="absolute left-4 top-4 text-on-surface-variant/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-primary" htmlFor="name">Full Name</label>
                  </div>
                  <div className="relative form-input-container">
                    <input className="w-full bg-surface-container-high border-none rounded-lg px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary focus:bg-white transition-all peer placeholder-transparent" id="email" placeholder="Email Address" type="email" />
                    <label className="absolute left-4 top-4 text-on-surface-variant/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-primary" htmlFor="email">Email Address</label>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="relative form-input-container">
                    <input className="w-full bg-surface-container-high border-none rounded-lg px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary focus:bg-white transition-all peer placeholder-transparent" id="phone" placeholder="Phone Number" type="tel" />
                    <label className="absolute left-4 top-4 text-on-surface-variant/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-primary" htmlFor="phone">Phone Number</label>
                  </div>
                  <div className="relative form-input-container">
                    <input className="w-full bg-surface-container-high border-none rounded-lg px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary focus:bg-white transition-all peer placeholder-transparent" id="subject" placeholder="Subject" type="text" />
                    <label className="absolute left-4 top-4 text-on-surface-variant/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-primary" htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="relative form-input-container">
                  <textarea className="w-full bg-surface-container-high border-none rounded-lg px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary focus:bg-white transition-all peer resize-none placeholder-transparent" id="message" placeholder="Message" rows={5}></textarea>
                  <label className="absolute left-4 top-4 text-on-surface-variant/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-primary" htmlFor="message">Message</label>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-6">
                  <p className="text-[10px] md:text-xs text-on-surface-variant max-w-[200px] text-center sm:text-left">By submitting this form you agree to our Privacy Policy and Terms.</p>
                  <button className="w-full sm:w-auto bg-primary text-on-primary px-8 py-4 rounded-lg font-bold hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2" type="submit">
                    Send Inquiry
                    <span className="material-symbols-outlined text-lg">send</span>
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-primary shadow-sm hover:translate-x-2 transition-transform duration-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-container/10 rounded-lg text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold mb-2">Corporate Headquarters</h3>
                    <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                      NO. 20, IFITE ROAD, AWKA,<br/>
                      ANAMBRA STATE, NIGERIA
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-secondary shadow-sm hover:translate-x-2 transition-transform duration-500 delay-75">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                    <span className="material-symbols-outlined">contact_support</span>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold mb-2">Contact Details</h3>
                    <p className="text-sm md:text-base text-on-surface-variant mb-1">Email: suretophills@gmail.com</p>
                    <p className="text-sm md:text-base text-on-surface-variant">Phone: 08035293815</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-surface-dim shadow-sm hover:translate-x-2 transition-transform duration-500 delay-150">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-surface-container-high rounded-lg text-on-surface">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold mb-2">Business Hours</h3>
                    <ul className="text-xs md:text-sm text-on-surface-variant space-y-1">
                      <li className="flex justify-between gap-4 md:gap-8"><span>Monday - Friday</span> <span>08:00 - 18:00</span></li>
                      <li className="flex justify-between gap-4 md:gap-8"><span>Saturday</span> <span>10:00 - 16:00</span></li>
                      <li className="flex justify-between gap-4 md:gap-8 text-on-error"><span>Sunday</span> <span>Closed</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default Contact;
