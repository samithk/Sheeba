import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { mcInfo } from '@/data/mcInfo';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Mic, Heart, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn about ${mcInfo.name}, a professional MC and event host bringing energy and elegance to weddings, corporate events, and private celebrations.`}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="relative max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-body font-semibold tracking-widest text-primary uppercase">Get to Know Me</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mt-4">
                About <span className="text-gradient">Sheeba</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Portrait and Biography */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-xl bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&h=800&fit=crop"
                    alt="Sheeba Diana Adams"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  {mcInfo.socialLinks.instagram && (
                    <a
                      href={mcInfo.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-lg hover:border-primary/40 hover:bg-primary/5 transition-all"
                      aria-label="Instagram"
                    >
                      <Instagram className="size-5" />
                    </a>
                  )}
                  {mcInfo.socialLinks.facebook && (
                    <a
                      href={mcInfo.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-lg hover:border-primary/40 hover:bg-primary/5 transition-all"
                      aria-label="Facebook"
                    >
                      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                  )}
                  {mcInfo.socialLinks.tiktok && (
                    <a
                      href={mcInfo.socialLinks.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-lg hover:border-primary/40 hover:bg-primary/5 transition-all"
                      aria-label="TikTok"
                    >
                      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                    </a>
                  )}
                </div>
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-display font-bold">
                    {mcInfo.name}
                  </h2>
                  <p className="text-xl text-primary font-body font-medium tracking-wide">
                    {mcInfo.tagline}
                  </p>
                </div>

                <Separator className="bg-border" />

                <div className="space-y-4">
                  {mcInfo.biography.split('\n\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base md:text-lg font-body font-light leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="pt-4 space-y-3">
                  <div className="text-sm font-body">
                    <span className="text-muted-foreground">Email: </span>
                    <a href={`mailto:${mcInfo.email}`} className="text-foreground hover:text-primary transition-colors">
                      {mcInfo.email}
                    </a>
                  </div>
                  <div className="text-sm font-body">
                    <span className="text-muted-foreground">Location: </span>
                    <span className="text-foreground">{mcInfo.location}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What I Bring */}
        <section className="py-20 px-6 lg:px-8 bg-secondary/50">
          <div className="max-w-6xl mx-auto space-y-12">
            <ScrollReveal>
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  What I Bring to <span className="text-gradient">Your Event</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Mic, title: 'Commanding Presence', desc: 'A powerful stage presence that captivates audiences and keeps energy high throughout the event.' },
                { icon: Heart, title: 'Personal Touch', desc: 'Every event is unique, and I tailor my approach to match the tone and personality of each occasion.' },
                { icon: Sparkles, title: 'Seamless Flow', desc: 'Expert coordination to ensure smooth transitions, timely program flow, and flawless execution.' },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.15}>
                  <div className="text-center space-y-4 p-6">
                    <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="size-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-bold">{item.title}</h3>
                    <p className="text-muted-foreground font-body font-light leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-center">
                Event <span className="text-gradient">Specialties</span>
              </h2>
            </ScrollReveal>

            <div className="flex flex-wrap justify-center gap-4">
              {mcInfo.eventTypes.map((type, i) => (
                <ScrollReveal key={type} delay={i * 0.1}>
                  <div className="px-6 py-3 rounded-full border border-border bg-card hover:border-primary/40 transition-colors font-body font-medium">
                    {type}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
