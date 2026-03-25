import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { mcInfo } from '@/data/mcInfo';
import { ContactForm } from '@/components/forms/ContactForm';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Book Me"
        description={`Book Sheeba Diana Adams for your next event. ${mcInfo.availability}. Weddings, corporate events, and private parties.`}
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
              <span className="text-xs font-body font-semibold tracking-widest text-primary uppercase">Let's Work Together</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mt-4">
                Book <span className="text-gradient">Sheeba</span>
              </h1>
              <p className="text-lg text-muted-foreground font-body font-light mt-4">
                Let's make your next event unforgettable
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-display font-bold">
                    Send a <span className="text-gradient">Message</span>
                  </h2>
                  <p className="text-muted-foreground font-body font-light">
                    Tell me about your event and I'll get back to you within 24 hours.
                  </p>
                </div>

                <ContactForm />
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-display font-bold">
                    Contact <span className="text-gradient">Info</span>
                  </h2>
                  <p className="text-muted-foreground font-body font-light">
                    Prefer to reach out directly? Here's how.
                  </p>
                </div>

                <Separator className="bg-border" />

                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Email', value: mcInfo.email, href: `mailto:${mcInfo.email}` },
                    { icon: Phone, label: 'Phone', value: mcInfo.phone, href: `tel:${mcInfo.phone}` },
                    { icon: MapPin, label: 'Location', value: mcInfo.location },
                    { icon: Calendar, label: 'Availability', value: mcInfo.availability },
                  ].map(item => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <item.icon className="size-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-body text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-base md:text-lg font-body font-light text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-base md:text-lg font-body font-light text-foreground">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social links */}
                <div className="pt-4">
                  <p className="text-sm font-body text-muted-foreground mb-4">Follow me on social media</p>
                  <div className="flex gap-3">
                    {Object.entries(mcInfo.socialLinks).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg border border-border text-sm font-body font-medium capitalize hover:border-primary/40 hover:bg-primary/5 transition-all"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="h-16" />
      </div>
    </>
  );
}
