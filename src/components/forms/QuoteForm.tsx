"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface QuoteFormProps {
  locale: string;
}

type FormData = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  employeeCount: string;
  message: string;
};

type LocaleKey = 'en' | 'ar';

type ContentType = {
  [key in LocaleKey]: {
    title: string;
    subtitle: string;
    fields: {
      fullName: {
        label: string;
        placeholder: string;
        required: string;
      };
      company: {
        label: string;
        placeholder: string;
        required: string;
      };
      email: {
        label: string;
        placeholder: string;
        required: string;
        pattern: string;
      };
      phone: {
        label: string;
        placeholder: string;
        required: string;
      };
      industry: {
        label: string;
        placeholder: string;
        required: string;
        options: Array<{
          value: string;
          label: string;
        }>;
      };
      employeeCount: {
        label: string;
        placeholder: string;
        required: string;
        options: Array<{
          value: string;
          label: string;
        }>;
      };
      message: {
        label: string;
        placeholder: string;
        required: string;
      };
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
  };
};

const QuoteForm: React.FC<QuoteFormProps> = ({ locale }) => {
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors, isSubmitting } 
  } = useForm<FormData>();
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  // Content based on locale
  const content: ContentType = {
    en: {
      title: 'Request a Quick Quote',
      subtitle: 'Fill in the form below, and we\'ll get back to you within 24 hours',
      fields: {
        fullName: {
          label: 'Full Name',
          placeholder: 'Enter your full name',
          required: 'Full name is required'
        },
        company: {
          label: 'Company Name',
          placeholder: 'Enter your company name',
          required: 'Company name is required'
        },
        email: {
          label: 'Email Address',
          placeholder: 'Enter your email address',
          required: 'Email address is required',
          pattern: 'Please enter a valid email address'
        },
        phone: {
          label: 'Phone Number',
          placeholder: 'Enter your phone number',
          required: 'Phone number is required'
        },
        industry: {
          label: 'Industry',
          placeholder: 'Select your industry',
          required: 'Please select an industry',
          options: [
            { value: '', label: 'Select your industry' },
            { value: 'healthcare', label: 'Healthcare' },
            { value: 'hospitality', label: 'Hospitality' },
            { value: 'corporate', label: 'Corporate' },
            { value: 'education', label: 'Education' },
            { value: 'retail', label: 'Retail' },
            { value: 'industrial', label: 'Industrial' },
            { value: 'other', label: 'Other' },
          ]
        },
        employeeCount: {
          label: 'Number of Employees',
          placeholder: 'Select employee count',
          required: 'Please select employee count',
          options: [
            { value: '', label: 'Select employee count' },
            { value: '1-10', label: '1-10 employees' },
            { value: '11-50', label: '11-50 employees' },
            { value: '51-200', label: '51-200 employees' },
            { value: '201-500', label: '201-500 employees' },
            { value: '500+', label: 'More than 500 employees' },
          ]
        },
        message: {
          label: 'Your Requirements',
          placeholder: 'Briefly describe your uniform requirements',
          required: 'Please provide some details about your requirements'
        },
        submit: 'Request Quote',
        sending: 'Sending...',
        success: 'Your quote request has been submitted successfully. We will contact you shortly.',
        error: 'There was an error submitting your request. Please try again.'
      },
    },
    ar: {
      title: 'طلب عرض سعر سريع',
      subtitle: 'املأ النموذج أدناه، وسنرد عليك خلال 24 ساعة',
      fields: {
        fullName: {
          label: 'الاسم الكامل',
          placeholder: 'أدخل اسمك الكامل',
          required: 'الاسم الكامل مطلوب'
        },
        company: {
          label: 'اسم الشركة',
          placeholder: 'أدخل اسم شركتك',
          required: 'اسم الشركة مطلوب'
        },
        email: {
          label: 'البريد الإلكتروني',
          placeholder: 'أدخل عنوان بريدك الإلكتروني',
          required: 'البريد الإلكتروني مطلوب',
          pattern: 'الرجاء إدخال عنوان بريد إلكتروني صالح'
        },
        phone: {
          label: 'رقم الهاتف',
          placeholder: 'أدخل رقم هاتفك',
          required: 'رقم الهاتف مطلوب'
        },
        industry: {
          label: 'الصناعة',
          placeholder: 'اختر صناعتك',
          required: 'الرجاء اختيار الصناعة',
          options: [
            { value: '', label: 'اختر صناعتك' },
            { value: 'healthcare', label: 'الرعاية الصحية' },
            { value: 'hospitality', label: 'الضيافة' },
            { value: 'corporate', label: 'الشركات' },
            { value: 'education', label: 'التعليم' },
            { value: 'retail', label: 'البيع بالتجزئة' },
            { value: 'industrial', label: 'الصناعي' },
            { value: 'other', label: 'أخرى' },
          ]
        },
        employeeCount: {
          label: 'عدد الموظفين',
          placeholder: 'اختر عدد الموظفين',
          required: 'الرجاء اختيار عدد الموظفين',
          options: [
            { value: '', label: 'اختر عدد الموظفين' },
            { value: '1-10', label: '1-10 موظفين' },
            { value: '11-50', label: '11-50 موظف' },
            { value: '51-200', label: '51-200 موظف' },
            { value: '201-500', label: '201-500 موظف' },
            { value: '500+', label: 'أكثر من 500 موظف' },
          ]
        },
        message: {
          label: 'متطلباتك',
          placeholder: 'صف بإيجاز متطلبات الزي الموحد الخاص بك',
          required: 'يرجى تقديم بعض التفاصيل حول متطلباتك'
        },
        submit: 'طلب عرض سعر',
        sending: 'جارٍ الإرسال...',
        success: 'تم تقديم طلب عرض السعر بنجاح. سنتصل بك قريبًا.',
        error: 'حدث خطأ أثناء تقديم طلبك. يرجى المحاولة مرة أخرى.'
      },
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSuccess(false);
    setIsError(false);
    
    try {
      // Add date and time
      const now = new Date();
      const submissionData = {
        ...data,
        submissionDate: now.toISOString().split('T')[0],
        submissionTime: now.toTimeString().split(' ')[0],
        language: locale
      };
      
      // Send data to SheetDB API endpoint
      const response = await fetch('https://sheetdb.io/api/v1/shbplo8e8uafs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([submissionData]),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong');
      }
      
      // Show success message and reset form
      setIsSuccess(true);
      reset();
      
      // Clear success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsError(true);
      
      // Clear error message after 5 seconds
      setTimeout(() => setIsError(false), 5000);
    }
  };
  
  // Use the appropriate locale or fallback to 'en'
  const localeKey: LocaleKey = locale === 'ar' ? 'ar' : 'en';

  return (
    <div className={`bg-white p-6 rounded-xl shadow-md ${locale === 'ar' ? 'text-right' : 'text-left'}`}>
      <h3 className="text-xl font-bold mb-2 text-primary-800">{content[localeKey].title}</h3>
      <p className="text-neutral-600 mb-6">{content[localeKey].subtitle}</p>
      
      {isSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
          {content[localeKey].fields.success}
        </div>
      )}
      
      {isError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
          {content[localeKey].fields.error}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              {content[localeKey].fields.fullName.label}
            </label>
            <input
              type="text"
              {...register('fullName', { required: content[localeKey].fields.fullName.required })}
              className={`w-full rounded-md border ${errors.fullName ? 'border-red-500' : 'border-neutral-300'} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500`}
              placeholder={content[localeKey].fields.fullName.placeholder}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
            )}
          </div>
          
          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              {content[localeKey].fields.company.label}
            </label>
            <input
              type="text"
              {...register('company', { required: content[localeKey].fields.company.required })}
              className={`w-full rounded-md border ${errors.company ? 'border-red-500' : 'border-neutral-300'} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500`}
              placeholder={content[localeKey].fields.company.placeholder}
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
            )}
          </div>
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              {content[localeKey].fields.email.label}
            </label>
            <input
              type="email"
              {...register('email', { 
                required: content[localeKey].fields.email.required,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: content[localeKey].fields.email.pattern
                }
              })}
              className={`w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-neutral-300'} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500`}
              placeholder={content[localeKey].fields.email.placeholder}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          
          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              {content[localeKey].fields.phone.label}
            </label>
            <input
              type="tel"
              {...register('phone', { required: content[localeKey].fields.phone.required })}
              className={`w-full rounded-md border ${errors.phone ? 'border-red-500' : 'border-neutral-300'} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500`}
              placeholder={content[localeKey].fields.phone.placeholder}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
          
          {/* Industry */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              {content[localeKey].fields.industry.label}
            </label>
            <select
              {...register('industry', { required: content[localeKey].fields.industry.required })}
              className={`w-full rounded-md border ${errors.industry ? 'border-red-500' : 'border-neutral-300'} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500`}
            >
              {content[localeKey].fields.industry.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.industry && (
              <p className="mt-1 text-sm text-red-600">{errors.industry.message}</p>
            )}
          </div>
          
          {/* Employee Count */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              {content[localeKey].fields.employeeCount.label}
            </label>
            <select
              {...register('employeeCount', { required: content[localeKey].fields.employeeCount.required })}
              className={`w-full rounded-md border ${errors.employeeCount ? 'border-red-500' : 'border-neutral-300'} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500`}
            >
              {content[localeKey].fields.employeeCount.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.employeeCount && (
              <p className="mt-1 text-sm text-red-600">{errors.employeeCount.message}</p>
            )}
          </div>
        </div>
        
        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            {content[localeKey].fields.message.label}
          </label>
          <textarea
            {...register('message', { required: content[localeKey].fields.message.required })}
            rows={4}
            className={`w-full rounded-md border ${errors.message ? 'border-red-500' : 'border-neutral-300'} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500`}
            placeholder={content[localeKey].fields.message.placeholder}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>
        
        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-md font-medium transition-colors duration-300 disabled:opacity-70"
          >
            {isSubmitting 
              ? content[localeKey].fields.sending 
              : content[localeKey].fields.submit
            }
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm; 