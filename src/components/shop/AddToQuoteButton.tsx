'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

interface Product {
  id: string;
  name: string;
  price: string;
  image?: string;
  category?: string;
}

interface AddToQuoteButtonProps {
  product: Product;
  quantity?: number;
  color?: string;
  size?: string;
  className?: string;
  redirectToQuote?: boolean;
}

// Define the quote item interface
interface QuoteItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  image?: string;
  category?: string;
  color?: string;
  size?: string;
}

const AddToQuoteButton: React.FC<AddToQuoteButtonProps> = ({ 
  product, 
  quantity = 1, 
  color, 
  size,
  className = '',
  redirectToQuote = false,
}) => {
  const router = useRouter();

  const handleAddToQuote = () => {
    // For a real application, you might want to use a context or state management solution
    // This is a simplified version for demonstration purposes
    
    // Create quote item
    const quoteItem: QuoteItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
      category: product.category,
      color,
      size,
    };
    
    // Get existing quote from localStorage
    const existingQuoteString = localStorage.getItem('quoteItems');
    const existingQuote: QuoteItem[] = existingQuoteString 
      ? JSON.parse(existingQuoteString) 
      : [];
    
    // Check if item already exists in quote
    const existingItemIndex = existingQuote.findIndex(item => 
      item.id === product.id && item.color === color && item.size === size
    );
    
    if (existingItemIndex >= 0) {
      // Update existing item
      existingQuote[existingItemIndex].quantity += quantity;
    } else {
      // Add new item
      existingQuote.push(quoteItem);
    }
    
    // Save back to localStorage
    localStorage.setItem('quoteItems', JSON.stringify(existingQuote));
    
    // Show success message or redirect
    if (redirectToQuote) {
      router.push('/quote');
    } else {
      alert(`${product.name} added to your quote request.`);
    }
  };
  
  return (
    <Button
      variant="primary"
      onClick={handleAddToQuote}
      className={`w-full justify-center ${className}`}
    >
      Add to Quote
    </Button>
  );
};

export default AddToQuoteButton; 