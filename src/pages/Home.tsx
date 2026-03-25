import { motion } from 'framer-motion';
import { mcInfo, testimonials } from '@/data/mcInfo';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Mic, Star, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Home() {
  const stats = [
    { icon: Mic, value: mcInfo.stats.eventsHosted, label: 'Events Hosted' },
    { icon: Calendar, value: mcInfo.stats.yearsExperience, label: 'Years Experience' },
    { icon: Users, value: mcInfo.stats.happyClients, label: 'Happy Clients' },
    { icon: Star, value: mcInfo.stats.citiesCovered, label: 'Cities Covered' },
  ];

  return (
    <>
      <SEOHead />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=1080&fit=crop"
              alt="Event stage with dramatic lighting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10" />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center px-6">
            <motion.div
              className="text-center space-y-8 max-w-5xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Mic className="size-4 text-primary" />
                <span className="text-sm font-body font-medium tracking-wider text-primary uppercase">
                  Professional MC & Event Host
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight text-white leading-[0.9]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span className="block">SHEEBA</span>
                <span className="block text-gradient">DIANA</span>
                <span className="block">ADAMS</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl font-body font-light leading-relaxed text-white/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {mcInfo.heroIntroduction}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold tracking-wide px-8 py-6 text-lg glow-red">
                    Book Me Now
                    <ArrowRight className="ml-2 size-5" />
                  </Button>
                </Link>
                <Link to="/gallery">
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 font-body font-medium tracking-wide px-8 py-6 text-lg">
                    View Gallery
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-10 flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <span className="text-xs font-body text-white/50 tracking-widest uppercase">Scroll</span>
              <motion.div
                className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"
                animate={{ scaleY: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={index * 0.1}>
                  <div className="text-center space-y-3">
                    <stat.icon className="size-8 mx-auto text-primary" />
                    <div className="text-4xl md:text-5xl font-display font-bold text-gradient">
                      {stat.value}
                    </div>
                    <div className="text-sm font-body font-medium text-muted-foreground tracking-wider uppercase">
                      {stat.label}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-24 md:py-32 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <ScrollReveal>
                <div className="relative">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&h=800&fit=crop"
                      alt="Sheeba Diana Adams - Professional MC"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-lg blur-2xl" />
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-lg blur-2xl" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5">
                    <span className="text-xs font-body font-semibold tracking-widest text-primary uppercase">About Me</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                    Your Event, <br />
                    <span className="text-gradient">My Passion</span>
                  </h2>
                  <p className="text-lg font-body font-light leading-relaxed text-muted-foreground">
                    {mcInfo.biography.split('\n\n')[0]}
                  </p>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-primary font-body font-semibold tracking-wide hover:gap-3 transition-all group"
                  >
                    <span>Learn More About Me</span>
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-secondary/50">
          <div className="max-w-6xl mx-auto text-center space-y-16">
            <ScrollReveal>
              <div className="space-y-4">
                <span className="text-xs font-body font-semibold tracking-widest text-primary uppercase">What I Do</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                  Events I <span className="text-gradient">Host</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Weddings', desc: 'Making your special day truly unforgettable with grace and celebration.', icon: '💍' },
                { title: 'Corporate Events', desc: 'Professional hosting for conferences, galas, and award ceremonies.', icon: '🏢' },
                { title: 'Private Parties', desc: 'Bringing energy and excitement to birthdays, anniversaries, and more.', icon: '🎉' },
              ].map((service, index) => (
                <ScrollReveal key={service.title} delay={index * 0.15}>
                  <div className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_hsl(0_85%_55%/0.15)]">
                    <div className="text-5xl mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground font-body font-light leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 md:py-32 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            <ScrollReveal>
              <div className="text-center space-y-4">
                <span className="text-xs font-body font-semibold tracking-widest text-primary uppercase">Testimonials</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                  What Clients <span className="text-gradient">Say</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={testimonial.name} delay={index * 0.15}>
                  <div className="p-8 rounded-xl bg-card border border-border space-y-6">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="size-5 fill-mc-gold text-mc-gold" />
                      ))}
                    </div>
                    <p className="text-foreground/90 font-body font-light leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-display font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground font-body">{testimonial.event}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(0_85%_55%/0.1)_0%,transparent_70%)]" />
          <div className="relative max-w-4xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight">
                Ready to Make Your <br />
                Event <span className="text-gradient">Unforgettable?</span>
              </h2>
              <p className="text-lg font-body font-light text-muted-foreground max-w-2xl mx-auto">
                {mcInfo.availability}. Let's create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold tracking-wide px-10 py-6 text-lg glow-red">
                    Book Me Today
                    <ArrowRight className="ml-2 size-5" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
