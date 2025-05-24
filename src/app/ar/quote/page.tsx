'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { useQuote } from '@/contexts/QuoteContext';
import SEO from '@/components/SEO';
import QuoteForm from '@/components/forms/QuoteForm';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function QuotePageArabic() {
  const locale = 'ar';
  const { state, removeItem, updateQuantity, clearQuote } = useQuote();
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // حساب المجموع
  const calculateTotal = () => {
    return state.items.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
      return total + price * item.quantity;
    }, 0);
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return;
    updateQuantity(id, quantity);
  };

  const handleRemoveItem = (id: string) => {
    if (window.confirm('هل أنت متأكد أنك تريد إزالة هذا العنصر؟')) {
      removeItem(id);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    
    if (!formData.companyName.trim()) {
      errors.companyName = 'اسم الشركة مطلوب';
    }
    
    if (!formData.contactName.trim()) {
      errors.contactName = 'اسم جهة الاتصال مطلوب';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'البريد الإلكتروني غير صالح';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'رقم الهاتف مطلوب';
    }
    
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // في الإنتاج، هنا سيتم إرسال البيانات إلى API
    console.log('Quote Request Data:', {
      customer: formData,
      items: state.items,
      total: calculateTotal(),
    });
    
    // تمثيل نجاح الإرسال
    setFormSubmitted(true);
    
    // تنظيف النموذج والسلة بعد إرسال الطلب
    setTimeout(() => {
      clearQuote();
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 2000);
  };

  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform Saudi Arabia","professional uniforms","custom uniforms"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="service"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

      <SEO 
        title="UNEOM - Professional Uniforms"
        description="طلب عرض سعر لأزياء UNEOM المهنية والملابس المؤسسية. طلبات بالجملة مخصصة، أسعار تنافسية، وجودة ممتازة."
      />
      
      <div className="bg-gray-100 py-4">
        <Container>
          <nav className="flex justify-end" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-3 rtl:md:space-x-reverse">
              <li className="inline-flex items-center">
                <Link href="/ar" className="text-sm text-gray-700 hover:text-primary-600">
                  الرئيسية
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="text-sm text-gray-500 mr-1 md:mr-2 rtl:mr-0 rtl:ml-1 rtl:md:ml-2">
                    طلب عرض سعر
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </Container>
      </div>
      
      <section className="py-12">
        <Container>
          <SectionHeading>طلب عرض سعر</SectionHeading>
          
          {formSubmitted ? (
            <div className="bg-green-50 p-8 rounded-lg text-center my-8">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">تم تقديم طلب عرض السعر</h2>
              <p className="text-gray-600 mb-6">شكراً لطلبك. سيتواصل فريقنا معك قريباً بمعلومات الأسعار والتوفر.</p>
              <Link href="/ar/shop" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors">
                مواصلة التسوق
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 order-2 md:order-1">
                {state.items.length === 0 ? (
                  <div className="bg-white p-8 rounded-lg text-center shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <h2 className="text-xl font-semibold mb-2">طلب عرض السعر الخاص بك فارغ</h2>
                    <p className="text-gray-600 mb-6">أضف عناصر إلى طلب عرض السعر الخاص بك من صفحات المنتجات.</p>
                    <Link href="/ar/shop" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors">
                      تصفح المنتجات
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                              المنتج
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                              السعر
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                              الكمية
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                              المجموع
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              الإجراءات
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {state.items.map((item) => {
                            const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
                            const itemTotal = price * item.quantity;
                            
                            return (
                              <tr key={item.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center justify-end">
                                    <div className="mr-4 text-right">
                                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                      <div className="text-sm text-gray-500">{item.category}</div>
                                      {item.options && Object.keys(item.options).length > 0 && (
                                        <div className="text-xs text-gray-500 mt-1">
                                          {Object.entries(item.options).map(([key, value]) => (
                                            <span key={key} className="ml-2">
                                              {key}: {value}
                                            </span>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                    <div className="flex-shrink-0 h-16 w-16 relative">
                                      <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover rounded-md"
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                                  {item.price}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex border border-gray-300 rounded w-28 mr-auto">
                                    <button
                                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                      className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    >
                                      -
                                    </button>
                                    <input
                                      type="number"
                                      min="1"
                                      value={item.quantity}
                                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                                      className="w-10 text-center focus:outline-none border-x border-gray-300"
                                    />
                                    <button
                                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                      className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    >
                                      +
                                    </button>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                  {itemTotal.toFixed(2)} ريال سعودي
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                                  <button 
                                    onClick={() => handleRemoveItem(item.id)}
                                    className="text-red-600 hover:text-red-900"
                                  >
                                    إزالة
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="flex justify-between items-center mb-8">
                      <div className="text-left">
                        <div className="text-lg font-medium text-gray-700 mb-1">
                          {state.items.length} {state.items.length === 1 ? 'عنصر' : 'عناصر'}
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                          المجموع: {calculateTotal().toFixed(2)} ريال سعودي
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          * الأسعار استرشادية وتخضع لعرض السعر النهائي
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={() => clearQuote()}
                          className="text-gray-600 hover:text-red-600 transition-colors"
                        >
                          مسح جميع العناصر
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <div className="order-1 md:order-2">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4">معلوماتك</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                        اسم الشركة*
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className={`w-full rounded-md border ${
                          formErrors.companyName ? 'border-red-500' : 'border-gray-300'
                        } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder="اسم شركتك"
                      />
                      {formErrors.companyName && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.companyName}</p>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                        اسم جهة الاتصال*
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        className={`w-full rounded-md border ${
                          formErrors.contactName ? 'border-red-500' : 'border-gray-300'
                        } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder="الاسم الكامل"
                      />
                      {formErrors.contactName && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.contactName}</p>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        البريد الإلكتروني*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded-md border ${
                          formErrors.email ? 'border-red-500' : 'border-gray-300'
                        } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder="عنوان بريدك الإلكتروني"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        الهاتف*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full rounded-md border ${
                          formErrors.phone ? 'border-red-500' : 'border-gray-300'
                        } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder="رقم هاتفك"
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
                      )}
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        معلومات إضافية
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="أي متطلبات أو أسئلة محددة..."
                      ></textarea>
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full justify-center"
                      disabled={state.items.length === 0}
                    >
                      إرسال طلب عرض السعر
                    </Button>
                    
                    {state.items.length === 0 && (
                      <p className="mt-3 text-sm text-gray-600 text-center">
                        أضف منتجات إلى طلب عرض السعر لتقديم طلب.
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
} 