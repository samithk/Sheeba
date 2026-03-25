import { motion } from 'framer-motion';
import { partnerships } from '@/data/mcInfo';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Handshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Partnerships() {
  return (
    <>
      <SEOHead
        title="Partnerships"
        description="Explore the trusted brands and partners that collaborate with Sheeba Diana Adams to create world-class events."
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative py-24 md:py-32 px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="relative max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-body font-semibold tracking-widest text-primary uppercase">Trusted Collaborators</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mt-4">
                My <span className="text-gradient">Partners</span>
              </h1>
              <p className="text-lg text-muted-foreground font-body font-light mt-4 max-w-2xl mx-auto">
                I work with the best in the industry to deliver exceptional event experiences
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerships.map((partner, index) => (
                <ScrollReveal key={partner.name} delay={index * 0.1}>
                  <div className="group p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_hsl(0_85%_55%/0.1)] text-center space-y-4">
                    <div className="text-5xl">{partner.logo}</div>
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body font-light leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="py-20 px-6 lg:px-8 bg-secondary/50">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <Handshake className="size-12 mx-auto text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Interested in <span className="text-gradient">Partnering?</span>
              </h2>
              <p className="text-lg text-muted-foreground font-body font-light">
                I'm always open to collaborating with vendors and brands that share my passion for creating unforgettable events.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold px-8 py-6 text-lg glow-red">
                  Get in Touch
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
