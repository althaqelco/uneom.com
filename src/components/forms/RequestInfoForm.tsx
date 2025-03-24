import React from 'react';

const RequestInfoForm = () => {
  return (
    <form
      name="request-info"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/success"
      className="space-y-6 max-w-xl mx-auto"
    >
      <input type="hidden" name="form-name" value="request-info" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
          Industry
        </label>
        <select
          id="industry"
          name="industry"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select your industry</option>
          <option value="healthcare">Healthcare</option>
          <option value="hospitality">Hospitality</option>
          <option value="aviation">Aviation</option>
          <option value="corporate">Corporate</option>
          <option value="education">Education</option>
          <option value="industrial">Industrial/Manufacturing</option>
          <option value="retail">Retail</option>
          <option value="security">Security</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="information" className="block text-sm font-medium text-gray-700">
          Information Requested
        </label>
        <textarea
          id="information"
          name="information"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Please describe what information you're looking for..."
        ></textarea>
      </div>
      
      <div>
        <label htmlFor="preferred_contact" className="block text-sm font-medium text-gray-700">
          Preferred Contact Method
        </label>
        <select
          id="preferred_contact"
          name="preferred_contact"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="whatsapp">WhatsApp</option>
        </select>
      </div>
      
      <div>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Request Information
        </button>
      </div>
    </form>
  );
};

export default RequestInfoForm; 