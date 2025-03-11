'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { useQuote } from '@/contexts/QuoteContext';
import SEO from '@/components/SEO';

export default function QuotePage() {
  const locale = 'en';
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
    if (window.confirm('Are you sure you want to remove this item?')) {
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
      errors.companyName = 'Company name is required';
    }
    
    if (!formData.contactName.trim()) {
      errors.contactName = 'Contact name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
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
    <MainLayout locale={locale}>
      <SEO 
        title="Request a Quote"
        description="Request a quote for UNEOM's professional uniforms and corporate attire. Custom bulk orders, competitive pricing, and premium quality."
      />
      
      <div className="bg-gray-100 py-4">
        <Container>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-sm text-gray-700 hover:text-primary-600">
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="text-sm text-gray-500 ml-1 md:ml-2">
                    Request a Quote
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </Container>
      </div>
      
      <section className="py-12">
        <Container>
          <SectionHeading>Request a Quote</SectionHeading>
          
          {formSubmitted ? (
            <div className="bg-green-50 p-8 rounded-lg text-center my-8">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Quote Request Submitted</h2>
              <p className="text-gray-600 mb-6">Thank you for your quote request. Our team will contact you shortly with pricing and availability information.</p>
              <Link href="/shop" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                {state.items.length === 0 ? (
                  <div className="bg-white p-8 rounded-lg text-center shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <h2 className="text-xl font-semibold mb-2">Your quote request is empty</h2>
                    <p className="text-gray-600 mb-6">Add items to your quote request from our product pages.</p>
                    <Link href="/shop" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors">
                      Browse Products
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Product
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Quantity
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Total
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Actions
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
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0 h-16 w-16 relative">
                                      <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover rounded-md"
                                      />
                                    </div>
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                      <div className="text-sm text-gray-500">{item.category}</div>
                                      {item.options && Object.keys(item.options).length > 0 && (
                                        <div className="text-xs text-gray-500 mt-1">
                                          {Object.entries(item.options).map(([key, value]) => (
                                            <span key={key} className="mr-2">
                                              {key}: {value}
                                            </span>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {item.price}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex border border-gray-300 rounded w-28">
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
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  SAR {itemTotal.toFixed(2)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <button 
                                    onClick={() => handleRemoveItem(item.id)}
                                    className="text-red-600 hover:text-red-900"
                                  >
                                    Remove
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="flex justify-between items-center mb-8">
                      <div>
                        <button
                          onClick={() => clearQuote()}
                          className="text-gray-600 hover:text-red-600 transition-colors"
                        >
                          Clear All Items
                        </button>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-medium text-gray-700 mb-1">
                          {state.items.length} {state.items.length === 1 ? 'Item' : 'Items'}
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                          Total: SAR {calculateTotal().toFixed(2)}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          * Prices are indicative and subject to final quote
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4">Your Information</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name*
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
                        placeholder="Your company name"
                      />
                      {formErrors.companyName && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.companyName}</p>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Name*
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
                        placeholder="Your full name"
                      />
                      {formErrors.contactName && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.contactName}</p>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email*
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
                        placeholder="Your email address"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone*
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
                        placeholder="Your phone number"
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
                      )}
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Any specific requirements or questions..."
                      ></textarea>
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full justify-center"
                      disabled={state.items.length === 0}
                    >
                      Submit Quote Request
                    </Button>
                    
                    {state.items.length === 0 && (
                      <p className="mt-3 text-sm text-gray-600 text-center">
                        Add products to your quote to submit a request.
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>
    </MainLayout>
  );
} 