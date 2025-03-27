import React, { useState } from 'react';
import Button from '@/components/ui/Button';

interface RequestInfoFormProps {
  productName?: string;
  productId?: string;
  onClose?: () => void;
}

const RequestInfoForm: React.FC<RequestInfoFormProps> = ({ 
  productName = 'this product', 
  productId,
  onClose
}) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    position: '',
    email: '',
    phone: '',
    quantity: '',
    requirements: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // In a real application, this would be an API call
      console.log('Submitting form data:', {
        productId,
        productName,
        ...formData
      });
      
      // Format the data for WhatsApp message
      const now = new Date();
      const whatsappMessage = `
*New Product Information Request*
Product: ${productName}
Product ID: ${productId || 'Not specified'}
Company: ${formData.companyName}
Contact: ${formData.contactPerson}
Position: ${formData.position}
Email: ${formData.email}
Phone: ${formData.phone}
Quantity: ${formData.quantity}
Requirements: ${formData.requirements}
Submitted: ${now.toLocaleString()}
      `.trim();
      
      // Encode the message for WhatsApp URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/+971558164922?text=${encodedMessage}`;
      
      // Open WhatsApp in a new window/tab
      window.open(whatsappUrl, '_blank');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      // Optionally close the form after some time
      if (onClose) {
        setTimeout(onClose, 3000);
      }
    } catch (err) {
      setError('There was an error submitting your request. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      {isSuccess ? (
        <div className="bg-green-50 p-4 rounded-md text-green-800">
          <h4 className="font-medium">Thank you for your inquiry!</h4>
          <p className="mt-1">We've received your request about {productName}. Our team will contact you shortly.</p>
        </div>
      ) : (
        <>
          <p className="text-neutral-700">
            Please fill out the form below to request more information about {productName}. Our team will get back to you shortly.
          </p>
          
          {error && (
            <div className="bg-red-50 p-4 rounded-md text-red-800">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700">Company Name</label>
              <input 
                type="text" 
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" 
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700">Contact Person</label>
              <input 
                type="text" 
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" 
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700">Position/Department</label>
              <input 
                type="text" 
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" 
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700">Phone</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" 
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700">Estimated Quantity</label>
              <input 
                type="number" 
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700">Specific Requirements</label>
              <textarea 
                rows={4} 
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              ></textarea>
            </div>
            
            <div className="flex justify-end">
              <Button 
                type="submit" 
                variant="primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default RequestInfoForm; 