"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaTiktok, FaYoutube, FaPinterest } from 'react-icons/fa';
import Logo from '../ui/Logo';

const ArabicFooter: React.FC = () => {
  const locale = 'ar'; // Always Arabic for this component
  
  const content = {
    about: 'عن يونيوم',
    aboutContent: 'يونيوم هي الشركة الرائدة في المملكة العربية السعودية في توفير الأزياء المهنية والملابس الرسمية للقطاعات المختلفة بما في ذلك الرعاية الصحية والطيران والضيافة والشركات.',
    contactUs: 'اتصل بنا',
    address: 'طريق الملك فهد، الرياض، المملكة العربية السعودية',
    quickLinks: 'روابط سريعة',
    industries: 'القطاعات',
    products: 'المنتجات',
    services: 'الخدمات',
    blog: 'المدونة',
    resources: 'الموارد',
    aboutUs: 'من نحن',
    contactUsLink: 'تواصل معنا',
    followUs: 'تابعنا',
    copyright: '© 2025 يونيوم. جميع الحقوق محفوظة.',
    certifications: 'شهادات الجودة'};
  
  // روابط وسائل التواصل الاجتماعي
  const socialLinks = {
    facebook: "https://www.facebook.com/uneomuniforms/",
    twitter: "https://www.linkedin.com/company/uneom",
    instagram: "https://www.instagram.com/uneomuniforms/",
    tiktok: "https://www.tiktok.com/@uneomcom",
    pinterest: "https://www.pinterest.com/uneomcompany/",
    youtube: "https://www.youtube.com/@uneom-uniforms",
    whatsapp: "https://wa.me/+971558164922"
  };
  
  // Certification images
  const certificates = [
    {
      name: 'ISO 9001:2015',
      logo: '/images/certificate/ISO_90012015.png'},
    {
      name: 'OEKO-TEX® Standard 100',
      logo: '/images/certificate/OEKO-TEX.png'},
    {
      name: 'Saudi Quality Mark',
      logo: '/images/certificate/Saudi_Quality_Mark.png'},
    {
      name: 'GOTS Certified',
      logo: '/images/certificate/GOTS_Certified.png'}
  ];
  
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 lg:dir-rtl">
          {/* About */}
          <div className="text-right">
            <h3 className="font-heading text-xl font-bold mb-4">{content.about}</h3>
            <Logo locale={locale} inverted={true} withLink={false} className="h-12 w-auto mb-4" width={200} height={60} />
            <p className="text-neutral-300 mb-4">
              {content.aboutContent}
            </p>
            
            {/* Certificates under About section */}
            <div className="mt-4">
              <div className="flex flex-wrap gap-3 items-center mb-2 justify-end">
                {certificates.map((cert) => (
                  <div key={cert.name} className="flex items-center justify-center ml-2 last:m-0">
                    <Image
                      src={cert.logo}
                      alt={cert.name}
                      width={45}
                      height={45}
                      className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact */}
          <div className="text-right">
            <h3 className="font-heading text-xl font-bold mb-4">{content.contactUs}</h3>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-center flex-row-reverse justify-end space-x-0">
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>{content.address}</span>
              </li>
              <li className="flex items-center flex-row-reverse justify-end space-x-0">
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>info@uneom.com</span>
              </li>
              <li className="flex items-center flex-row-reverse justify-end space-x-0">
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span dir="ltr">+971558164922</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="text-right">
            <h3 className="font-heading text-xl font-bold mb-4">{content.quickLinks}</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <Link href="/ar/industries/" className="hover:text-primary-400 transition duration-300">
                  {content.industries}
                </Link>
              </li>
              <li>
                <Link href="/ar/shop/" className="hover:text-primary-400 transition duration-300">
                  {content.products}
                </Link>
              </li>
              <li>
                <Link href="/ar/services/" className="hover:text-primary-400 transition duration-300">
                  {content.services}
                </Link>
              </li>
              <li>
                <Link href="/ar/resources/" className="hover:text-primary-400 transition duration-300">
                  {content.resources}
                </Link>
              </li>
              <li>
                <Link href="/ar/blog/" className="hover:text-primary-400 transition duration-300">
                  {content.blog}
                </Link>
              </li>
              <li>
                <Link href="/ar/about/" className="hover:text-primary-400 transition duration-300">
                  {content.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/ar/contact/" className="hover:text-primary-400 transition duration-300">
                  {content.contactUsLink}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="text-right">
            <h3 className="font-heading text-xl font-bold mb-4">{content.followUs}</h3>
            <div className="flex flex-wrap justify-end gap-3">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="bg-neutral-800 hover:bg-primary-600 transition duration-300 p-3 rounded-full">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="bg-neutral-800 hover:bg-primary-600 transition duration-300 p-3 rounded-full">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="bg-neutral-800 hover:bg-primary-600 transition duration-300 p-3 rounded-full">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="bg-neutral-800 hover:bg-primary-600 transition duration-300 p-3 rounded-full">
                <FaTiktok className="w-5 h-5" />
              </a>
              <a href={socialLinks.pinterest} target="_blank" rel="noopener noreferrer" className="bg-neutral-800 hover:bg-primary-600 transition duration-300 p-3 rounded-full">
                <FaPinterest className="w-5 h-5" />
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="bg-neutral-800 hover:bg-primary-600 transition duration-300 p-3 rounded-full">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-neutral-800 hover:bg-primary-600 transition duration-300 p-3 rounded-full">
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
            
            <div className="mt-6">
              <Link 
                href="/ar/quote/"
                className="inline-flex items-center flex-row-reverse px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition duration-300"
              >
                طلب عرض سعر
              </Link>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400">
          <p>{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default ArabicFooter; 