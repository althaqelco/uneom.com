'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';

// تعريف نوع عنصر طلب عرض السعر
export interface QuoteItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  image: string;
  category?: string;
  size?: string;  // إضافة خاصية المقاس
  color?: string;  // إضافة خاصية اللون
  options?: {
    [key: string]: string;
  };
}

// تعريف حالة طلب عرض السعر
interface QuoteState {
  items: QuoteItem[];
  itemCount: number;
}

// تعريف أنواع الإجراءات
type QuoteAction =
  | { type: 'ADD_ITEM'; payload: QuoteItem }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_QUOTE' };

// الحالة الأولية
const initialState: QuoteState = {
  items: [],
  itemCount: 0,
};

// إنشاء السياق
const QuoteContext = createContext<{
  state: QuoteState;
  addItem: (item: QuoteItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearQuote: () => void;
} | undefined>(undefined);

// تقليل دالة لإدارة الحالة
const quoteReducer = (state: QuoteState, action: QuoteAction): QuoteState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // تحديث الكمية إذا كان العنصر موجوداً بالفعل
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + action.payload.quantity,
        };

        return {
          ...state,
          items: updatedItems,
        };
      }

      // إضافة عنصر جديد
      return {
        ...state,
        items: [...state.items, action.payload],
        itemCount: state.itemCount + 1,
      };
    }

    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        items: updatedItems,
        itemCount: updatedItems.length,
      };
    }

    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

      return {
        ...state,
        items: updatedItems,
      };
    }

    case 'CLEAR_QUOTE': {
      return initialState;
    }

    default:
      return state;
  }
};

// تعريف موفر السياق
export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(quoteReducer, initialState);

  // استعادة الحالة من التخزين المحلي عند التحميل
  useEffect(() => {
    const savedQuote = localStorage.getItem('quote');
    if (savedQuote) {
      const parsedQuote = JSON.parse(savedQuote);
      
      // تعيين كل عنصر من التخزين المحلي
      parsedQuote.items.forEach((item: QuoteItem) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
      });
    }
  }, []);

  // حفظ الحالة في التخزين المحلي عند التغيير
  useEffect(() => {
    localStorage.setItem('quote', JSON.stringify(state));
  }, [state]);

  // تعريف وظائف المساعدة
  const addItem = (item: QuoteItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearQuote = () => {
    dispatch({ type: 'CLEAR_QUOTE' });
  };

  return (
    <QuoteContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearQuote,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

// خطاف مخصص لاستخدام السياق
export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
}; 