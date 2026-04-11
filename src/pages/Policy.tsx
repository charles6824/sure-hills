import { useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Policy = () => {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <AnimatedSection>
        <header className="max-w-7xl mx-auto px-6 pt-16 pb-16">
          <div className="flex flex-col md:flex-row gap-12 items-end">
            <div className="flex-1">
              <span className="text-xs md:text-sm text-secondary font-bold uppercase tracking-widest block mb-4 font-body">Governance & Compliance</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight font-medium text-primary font-headline italic">
                The Legal <br/>Framework.
              </h1>
            </div>
            <div className="flex-1 pb-4">
              <p className="text-base md:text-lg text-on-surface-variant max-w-md border-l-4 border-surface-container-highest pl-6 leading-relaxed font-body">
                At SURE TOP HILLS LTD, our commitment to excellence is grounded in transparency and ethical governance. This document outlines the operational boundaries and mutual obligations governing our premier lifestyle management portfolio.
              </p>
            </div>
          </div>
        </header>
      </AnimatedSection>

      <main className="max-w-7xl mx-auto px-6 pb-32 flex flex-col md:flex-row gap-16 font-body">
        <aside className="md:w-72 hidden md:block">
          <div className="sticky top-32 space-y-2">
            <p className="text-xs font-bold text-on-surface-variant/50 uppercase tracking-tighter mb-6">Directory</p>
            <a className="flex items-center group py-2 text-sm text-emerald-700 border-l-2 border-emerald-700 pl-4 font-semibold hover:text-primary transition-colors" href="#identity">
              Section 01: Corporate Identity
            </a>
            <a className="flex items-center group py-2 text-sm text-on-surface-variant hover:text-primary transition-colors pl-4 border-l-2 border-transparent hover:border-outline-variant" href="#tos">
              Section 02: Terms of Service
            </a>
            <a className="flex items-center group py-2 text-sm text-on-surface-variant hover:text-primary transition-colors pl-4 border-l-2 border-transparent hover:border-outline-variant" href="#scope">
              Section 03: Scope of Services
            </a>
            <a className="flex items-center group py-2 text-sm text-on-surface-variant hover:text-primary transition-colors pl-4 border-l-2 border-transparent hover:border-outline-variant" href="#hospitality">
              Section 04: Hospitality Protocols
            </a>
            <a className="flex items-center group py-2 text-sm text-on-surface-variant hover:text-primary transition-colors pl-4 border-l-2 border-transparent hover:border-outline-variant" href="#privacy">
              Section 05: Data Privacy
            </a>
            <a className="flex items-center group py-2 text-sm text-on-surface-variant hover:text-primary transition-colors pl-4 border-l-2 border-transparent hover:border-outline-variant" href="#liability">
              Section 06: Liability & Jurisdiction
            </a>
          </div>
        </aside>

        <div className="flex-1 space-y-16 md:space-y-24">
          <AnimatedSection delay={0.1}>
            <section className="scroll-mt-32" id="identity">
              <div className="flex items-start gap-4 mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">domain</span>
                <h2 className="font-headline text-3xl md:text-4xl font-semibold">Section 01: Corporate Identity</h2>
              </div>
              <div className="bg-surface-container-low p-6 md:p-10 rounded-xl space-y-6">
                <p className="text-sm md:text-base leading-relaxed text-on-surface-variant">
                  SURE TOP HILLS LTD is a premier lifestyle and hotel management conglomerate registered under the laws of the Federal Republic of Nigeria. Our registered corporate headquarters is situated at No. 20, Ifite Road, Awka, Anambra State.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-2">
                    <h4 className="font-bold text-xs md:text-sm text-primary uppercase">Principal Entities</h4>
                    <ul className="space-y-2 text-on-surface text-xs md:text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Luxury Suites & Boutique Hotels
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Rosemore Kitchen
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Arena Entertainment TV
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> iCrave Dating App & Tech
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-xs md:text-sm text-primary uppercase">Statutory Contact</h4>
                    <p className="text-xs md:text-sm leading-relaxed">
                      Legal Affairs Department<br/>
                      Email: suretophills@gmail.com<br/>
                      Phone: 08035293815
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <section className="scroll-mt-32" id="tos">
              <div className="flex items-start gap-4 mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">gavel</span>
                <h2 className="font-headline text-3xl md:text-4xl font-semibold">Section 02: Terms of Service</h2>
              </div>
              <div className="space-y-6 text-on-surface-variant leading-relaxed text-sm md:text-base">
                <p>By accessing our physical properties, the iCrave application, digital platforms, or engaging in contractual agreements with any property managed by SURE TOP HILLS LTD, you signify your irrevocable acceptance of these terms.</p>
                <div className="grid grid-cols-1 gap-6">
                  <div className="border-l-4 border-primary/20 pl-4 md:pl-6 py-2">
                    <h5 className="font-bold text-on-surface mb-2">2.1 Modifications</h5>
                    <p className="text-xs md:text-sm">We reserve the right to amend these terms at any time. Significant changes will be communicated via our primary website and shall take effect immediately upon posting.</p>
                  </div>
                  <div className="border-l-4 border-primary/20 pl-4 md:pl-6 py-2">
                    <h5 className="font-bold text-on-surface mb-2">2.2 User Eligibility</h5>
                    <p className="text-xs md:text-sm">Services are available only to individuals or corporate entities capable of forming legally binding contracts under applicable law.</p>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <section className="scroll-mt-32" id="scope">
              <div className="flex items-start gap-4 mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">work</span>
                <h2 className="font-headline text-3xl md:text-4xl font-semibold">Section 03: Scope of Services</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-container-highest p-6 md:p-8 rounded-xl hover:shadow-sm transition-all group">
                  <span className="material-symbols-outlined text-secondary mb-4 block">domain_add</span>
                  <h4 className="font-headline text-lg md:text-xl font-bold mb-2">Boutique Hotels</h4>
                  <p className="text-xs md:text-sm text-on-surface-variant">Exclusive accommodations featuring bespoke design and highly personalized guest services.</p>
                </div>
                <div className="bg-surface-container-highest p-6 md:p-8 rounded-xl hover:shadow-sm transition-all group">
                  <span className="material-symbols-outlined text-secondary mb-4 block">restaurant</span>
                  <h4 className="font-headline text-lg md:text-xl font-bold mb-2">Rosemore Kitchen</h4>
                  <p className="text-xs md:text-sm text-on-surface-variant">Premium native Nigerian cuisine and infused signature drinks within an upscale lounge environment located in Port Harcourt.</p>
                </div>
                <div className="bg-surface-container-highest p-6 md:p-8 rounded-xl hover:shadow-sm transition-all group">
                  <span className="material-symbols-outlined text-secondary mb-4 block">live_tv</span>
                  <h4 className="font-headline text-lg md:text-xl font-bold mb-2">Arena Entertainment TV</h4>
                  <p className="text-xs md:text-sm text-on-surface-variant">A dynamic media production hub dedicated to curating engaging entertainment and broadcasting excellence.</p>
                </div>
                <div className="bg-surface-container-highest p-6 md:p-8 rounded-xl hover:shadow-sm transition-all group">
                  <span className="material-symbols-outlined text-secondary mb-4 block">phone_iphone</span>
                  <h4 className="font-headline text-lg md:text-xl font-bold mb-2">iCrave Dating App</h4>
                  <p className="text-xs md:text-sm text-on-surface-variant">A robust digital connection platform fostering authentic matching and modern romance.</p>
                </div>
                <div className="bg-surface-container-highest p-6 md:p-8 rounded-xl hover:shadow-sm transition-all group">
                  <span className="material-symbols-outlined text-secondary mb-4 block">real_estate_agent</span>
                  <h4 className="font-headline text-lg md:text-xl font-bold mb-2">Asset Management</h4>
                  <p className="text-xs md:text-sm text-on-surface-variant">Strategic operational oversight and brand management for independent hospitality properties.</p>
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <section className="scroll-mt-32" id="hospitality">
              <div className="flex items-start gap-4 mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">concierge</span>
                <h2 className="font-headline text-3xl md:text-4xl font-semibold">Section 04: Operating Protocols</h2>
              </div>
              <div className="bg-primary/5 p-6 md:p-10 rounded-xl space-y-6">
                <p className="italic font-headline text-base md:text-lg text-primary">"The SURE TOP HILLS Standard: Excellence in every detail."</p>
                <div className="space-y-4">
                  <p className="text-xs md:text-sm leading-relaxed text-on-surface-variant">Participation across our physical and digital services invokes the following specialized protocols:</p>
                  <ul className="space-y-3">
                    <li className="flex gap-4">
                      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                      <span className="text-xs md:text-sm"><strong>Cancellation Policy:</strong> 48-hour notice required for full refund on standard hotel bookings.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                      <span className="text-xs md:text-sm"><strong>Identity Verification:</strong> Valid government-issued ID is required for property check-ins and iCrave App profile verification.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                      <span className="text-xs md:text-sm"><strong>Conduct Code:</strong> We maintain a zero-tolerance policy for disruptive behavior, harassment, or damage to property.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <section className="scroll-mt-32" id="privacy">
              <div className="flex items-start gap-4 mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">shield_lock</span>
                <h2 className="font-headline text-3xl md:text-4xl font-semibold">Section 05: Data Privacy & Protection</h2>
              </div>
              <div className="space-y-6 md:space-y-8">
                <p className="text-sm md:text-base text-on-surface-variant">We prioritize the security of your personal data. Our privacy practices comply with relevant data protection regulations and focus on the following pillars:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-4 md:p-6 bg-surface-container rounded-lg">
                    <h6 className="font-bold text-[10px] md:text-xs uppercase text-primary tracking-wider mb-2 md:mb-3">Collection</h6>
                    <p className="text-[10px] md:text-xs text-on-surface-variant">We only collect data necessary for transaction processing, matching on iCrave, and guest service enhancement.</p>
                  </div>
                  <div className="p-4 md:p-6 bg-surface-container rounded-lg">
                    <h6 className="font-bold text-[10px] md:text-xs uppercase text-primary tracking-wider mb-2 md:mb-3">Retention</h6>
                    <p className="text-[10px] md:text-xs text-on-surface-variant">Data is stored securely for as long as required by hospitality, tech, and tax regulations.</p>
                  </div>
                  <div className="p-4 md:p-6 bg-surface-container rounded-lg">
                    <h6 className="font-bold text-[10px] md:text-xs uppercase text-primary tracking-wider mb-2 md:mb-3">Rights</h6>
                    <p className="text-[10px] md:text-xs text-on-surface-variant">You maintain the right to request access, correction, or deletion of your personal records and app data.</p>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <section className="scroll-mt-32" id="liability">
              <div className="flex items-start gap-4 mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">balance</span>
                <h2 className="font-headline text-3xl md:text-4xl font-semibold">Section 06: Liability & Jurisdiction</h2>
              </div>
              <div className="bg-surface-container-low p-6 md:p-10 rounded-xl">
                <div className="text-xs md:text-sm text-on-surface-variant space-y-4">
                  <p><strong>Limitation of Liability:</strong> SURE TOP HILLS LTD, its directors, and employees shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our properties or digital services.</p>
                  <p><strong>Indemnification:</strong> You agree to indemnify and hold harmless the corporate group from any claims, losses, or expenses resulting from your breach of these terms.</p>
                  <p><strong>Governing Law:</strong> These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Anambra State.</p>
                </div>
                <div className="mt-8 md:mt-12 flex items-center justify-center p-6 md:p-8 border-t border-outline-variant/30">
                  <div className="text-center">
                    <p className="text-[10px] md:text-xs text-on-surface-variant uppercase tracking-widest mb-1 md:mb-2 font-bold">Document Authentication</p>
                    <p className="font-headline text-base md:text-lg italic">Certified by the Board of Directors, 2024</p>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>
        </div>
      </main>
    </>
  );
};

export default Policy;
