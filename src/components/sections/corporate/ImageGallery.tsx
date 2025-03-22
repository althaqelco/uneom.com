"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ImageGalleryProps {
  locale: string;
  images?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

const defaultImages = [
  {
    src: '/images/corporate/corporate_uniform_formal.jpg',
    alt: 'Corporate Formal Uniform',
    width: 600,
    height: 400
  },
  {
    src: '/images/corporate/corporate_business_uniform.jpg',
    alt: 'Business Uniform',
    width: 600,
    height: 400
  },
  {
    src: '/images/corporate/corporate_brand.jpg',
    alt: 'Corporate Branded Uniform',
    width: 600,
    height: 400
  },
  {
    src: '/images/corporate/corporate_formal.jpg',
    alt: 'Corporate Formal Attire',
    width: 600,
    height: 400
  },
  {
    src: '/images/corporate/corporate_comoany.jpg',
    alt: 'Company Uniform',
    width: 600,
    height: 400
  },
  {
    src: '/images/corporate/corporate_custom_logo.jpg',
    alt: 'Corporate Custom Logo Uniform',
    width: 600,
    height: 400
  }
];

const ImageGallery: React.FC<ImageGalleryProps> = ({ locale, images = defaultImages }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const isRtl = locale === 'ar';

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null && selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    } else {
      setSelectedImage(0);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    } else {
      setSelectedImage(images.length - 1);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="py-12" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold mb-6 ${isRtl ? 'text-right' : 'text-left'}`}>
          {locale === 'ar' ? 'معرض الصور' : 'Image Gallery'}
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {images.map((image, index) => (
            <motion.div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => openModal(index)}
              variants={itemVariants}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-sm text-gray-600">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl w-full">
            <button 
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white rounded-full p-2 text-black z-10"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 text-black z-10"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 text-black z-10"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="relative w-full h-[80vh]">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
            
            <div className="bg-white p-4 text-center">
              <p className="text-lg font-medium">{images[selectedImage].alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery; 