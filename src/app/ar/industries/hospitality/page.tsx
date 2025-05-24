import { Metadata } from "next";
import HospitalityClientPage from "./client";
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: "يونيفورم احترافي للضيافة والفنادق والمطاعم | الزي الموحد الأمثل للقطاع الفندقي",
  description: "تشكيلة واسعة من يونيفورم الضيافة بأعلى معايير الجودة العالمية تناسب الفنادق والمنتجعات والمطاعم في المملكة العربية السعودية",
  keywords: [
    "يونيفورم الضيافة",
    "يونيفورم الفنادق",
    "يونيفورم المطاعم",
    "ملابس الضيافة",
    "زي موحد للفنادق",
    "زي موحد للمطاعم",
    "يونيفورم شيف",
    "يونيفورم استقبال الفنادق",
    "يونيفورم خدمة الغرف",
    "يونيفورم المنتجعات",
    "يونيفورم كونسيرج",
    "يونيفورم سبا",
    "ملابس عمل فندقية",
    "موردي يونيفورم الضيافة",
    "تصنيع يونيفورم الفنادق",
    "يونيفورم ضيافة السعودية"
  ],
  openGraph: {
    title: "يونيفورم احترافي للضيافة والفنادق والمطاعم | يونيوم السعودية",
    description: "تشكيلة واسعة من يونيفورم الضيافة بأعلى معايير الجودة تناسب الفنادق والمطاعم في المملكة العربية السعودية",
    url: "https://uneom.com/ar/industries/hospitality",
    siteName: "يونيوم | الزي الموحد الاحترافي",
    images: [
      {
        url: "/images/hero/group-of-chefs-standing-with-arms-crossed-in-kitch-2023-11-27-05-01-36-utc.jpg",
        width: 1200,
        height: 630,
        alt: "يونيفورم احترافي للضيافة والفنادق والمطاعم",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://uneom.com/ar/industries/hospitality",
    languages: {
      'en': 'https://uneom.com/industries/hospitality',
      'ar': 'https://uneom.com/ar/industries/hospitality',
    },
  },
};

export default function HospitalityPage() {
  return <HospitalityClientPage />;
} 