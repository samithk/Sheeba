import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { galleryImages } from '@/data/mcInfo';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { X } from 'lucide-react';

const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <SEOHead
        title="Gallery"
        description="Browse photos from events hosted by Sheeba Diana Adams — weddings, corporate galas, private celebrations, and more."
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
              <span className="text-xs font-body font-semibold tracking-widest text-primary uppercase">Event Highlights</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mt-4">
                Event <span className="text-gradient">Gallery</span>
              </h1>
              <p className="text-lg text-muted-foreground font-body font-light mt-4 max-w-2xl mx-auto">
                A glimpse into the unforgettable events I've had the pleasure of hosting
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="px-6 pb-8">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="px-4 md:px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              layout
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`group relative cursor-pointer overflow-hidden rounded-lg ${
                      index % 5 === 0 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 text-xs font-body font-semibold bg-primary/90 text-primary-foreground rounded-full">
                        {image.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close lightbox"
              >
                <X className="size-8" />
              </button>
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute bottom-8 text-center">
                <span className="px-4 py-2 bg-primary/90 text-primary-foreground text-sm font-body font-medium rounded-full">
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
