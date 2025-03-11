'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  privacy: boolean;
}

interface ContactFormProps {
  locale?: 'en' | 'ar';
}

export default function ContactForm({ locale = 'en' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    privacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send the data to your API here
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        privacy: false,
      });
      
      // Reset status after a delay
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const isRtl = locale === 'ar';
  const formClass = isRtl ? 'rtl' : 'ltr';

  return (
    <form onSubmit={handleSubmit} className={formClass}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              {isRtl ? 'الاسم الأول' : 'First Name'}
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              {isRtl ? 'الاسم الأخير' : 'Last Name'}
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            {isRtl ? 'البريد الإلكتروني' : 'Email'}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            {isRtl ? 'رقم الهاتف' : 'Phone Number'}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            {isRtl ? 'اسم الشركة' : 'Company Name'}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            {isRtl ? 'الموضوع' : 'Subject'}
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            required
          >
            <option value="">{isRtl ? 'اختر موضوعاً' : 'Select a subject'}</option>
            <option value="quote">{isRtl ? 'طلب عرض سعر' : 'Request a Quote'}</option>
            <option value="custom-design">{isRtl ? 'تصميم زي موحد مخصص' : 'Custom Uniform Design'}</option>
            <option value="bulk-order">{isRtl ? 'طلب بكميات كبيرة' : 'Bulk Order Inquiry'}</option>
            <option value="partnership">{isRtl ? 'استفسار عن الشراكة' : 'Partnership Inquiry'}</option>
            <option value="other">{isRtl ? 'موضوع آخر' : 'Other Topic'}</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            {isRtl ? 'الرسالة' : 'Message'}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            required
          ></textarea>
        </div>
        
        <div className="flex items-start">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            checked={formData.privacy}
            onChange={handleChange}
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded mt-1 ml-2"
            required
          />
          <label htmlFor="privacy" className="text-sm text-gray-600 ms-2">
            {isRtl
              ? 'أوافق على سياسة الخصوصية وأسمح ليونيوم بالاتصال بي بخصوص استفساري.'
              : 'I agree to the privacy policy and allow UNEOM to contact me regarding my inquiry.'}
          </label>
        </div>
        
        <div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting 
              ? (isRtl ? 'جاري الإرسال...' : 'Submitting...') 
              : (isRtl ? 'إرسال الرسالة' : 'Send Message')}
          </Button>
          
          {submitStatus === 'success' && (
            <p className="mt-4 text-green-600">
              {isRtl 
                ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.'
                : 'Your message has been sent successfully! We will get back to you soon.'}
            </p>
          )}
          
          {submitStatus === 'error' && (
            <p className="mt-4 text-red-600">
              {isRtl
                ? 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.'
                : 'An error occurred while sending your message. Please try again.'}
            </p>
          )}
        </div>
      </div>
    </form>
  );
} 