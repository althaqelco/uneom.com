import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  EyeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  UserGroupIcon,
  MegaphoneIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Event Security Uniform | High-Visibility Crowd Management Attire | UNEOM',
  description: 'Professional event security uniforms designed for crowd management and event security services. High-visibility options with comfort and recognition features for Saudi Arabia events.',
  keywords: 'event security uniform, crowd management attire, high visibility security wear KSA, event guard uniform, festival security clothing',
  openGraph: {
    title: 'Event Security Uniform | High-Visibility Crowd Management Attire | UNEOM',
    description: 'Specialized security uniforms for events, festivals, and crowd management with high-visibility options and comfort features.',
    images: ['/images/security/saudi-events-security.jpg']}}

const uniformFeatures = [
  {
    icon: EyeIcon,
    title: 'High Visibility Design',
    description: 'Bright colors and reflective elements ensure security personnel are easily identifiable in crowded environments.'
  },
  {
    icon: UserGroupIcon,
    title: 'Crowd Management Features',
    description: 'Designed for mobility and comfort during long periods of standing and crowd interaction.'
  },
  {
    icon: MegaphoneIcon,
    title: 'Communication Ready',
    description: 'Radio clips, earpiece routing, and equipment attachment points for seamless communication.'
  },
  {
    icon: SparklesIcon,
    title: 'Weather Resistant',
    description: 'Durable materials that perform well in various weather conditions for outdoor events.'
  }
]

const eventTypes = [
  {
    name: 'Festivals & Concerts',
    description: 'High-visibility uniforms for music festivals, concerts, and entertainment events',
    features: ['Bright safety colors', 'Reflective strips', 'Comfortable fit for long shifts']
  },
  {
    name: 'Sports Events',
    description: 'Professional security attire for stadiums, sports venues, and athletic competitions',
    features: ['Team color coordination', 'Weather-resistant materials', 'Equipment attachment points']
  },
  {
    name: 'Corporate Events',
    description: 'Refined security uniforms for business conferences, exhibitions, and corporate gatherings',
    features: ['Professional appearance', 'Subtle branding options', 'Formal styling']
  },
  {
    name: 'Cultural Events',
    description: 'Culturally appropriate security attire for traditional festivals and cultural celebrations',
    features: ['Modest design options', 'Cultural sensitivity', 'Traditional color schemes']
  }
]

export default function EventSecurityUniformPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/shop/" className="hover:text-blue-600">Shop</Link>
            <span>/</span>
            <Link href="/shop/security-uniforms/" className="hover:text-blue-600">Security Uniforms</Link>
            <span>/</span>
            <span className="text-gray-900">Event Security Uniform</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/security/saudi-events-security.jpg"
            alt="Event security uniform background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EyeIcon className="h-20 w-20 text-white mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Event Security Uniform
          </h1>
          <p className="text-xl text-orange-200 mb-10 max-w-3xl mx-auto">
            High-visibility security uniforms designed for crowd management, event security, and public safety with enhanced recognition features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=event-security-uniform"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request Quote
            </Link>
            <Link
              href="/contact/?subject=Event Security Uniform Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-lg"
            >
              Contact Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Event Security Attire
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our event security uniforms are designed for maximum visibility and functionality in crowded environments. Whether managing crowds at festivals, sporting events, or corporate gatherings, these uniforms ensure your security team is easily identifiable and professionally equipped.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">High-Visibility Options</h3>
                    <p className="text-gray-600">Bright safety colors and reflective elements for maximum recognition</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Comfort for Long Shifts</h3>
                    <p className="text-gray-600">Breathable fabrics and ergonomic design for extended wear</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Weather Resistant</h3>
                    <p className="text-gray-600">Durable materials suitable for outdoor events in various conditions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/security/saudi-events-security.jpg"
                alt="Event security uniform details"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Features for Event Security
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every aspect designed to meet the unique requirements of event security operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniformFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Uniforms for Every Event Type
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized security uniform solutions tailored to different event environments and requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((eventType) => (
              <div key={eventType.name} className="bg-white border rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{eventType.name}</h3>
                <p className="text-gray-600 mb-4">{eventType.description}</p>
                <ul className="space-y-2">
                  {eventType.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Secure Your Next Event
          </h2>
          <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
            Contact our event security specialists to discuss your specific requirements and receive a customized uniform solution for your event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=event-security-uniform"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Event Quote
            </Link>
            <Link
              href="/shop/security-uniforms/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-lg"
            >
              View All Security Uniforms
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}