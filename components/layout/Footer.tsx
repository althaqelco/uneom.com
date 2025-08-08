import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    industries: [
      { name: 'Healthcare Uniforms', href: '/industries/healthcare' },
      { name: 'Aviation Uniforms', href: '/industries/aviation' },
      { name: 'Hospitality Uniforms', href: '/industries/hospitality' },
      { name: 'Corporate Uniforms', href: '/industries/corporate' },
      { name: 'Education Uniforms', href: '/industries/education' },
      { name: 'Manufacturing Uniforms', href: '/industries/manufacturing' },
      { name: 'Security Uniforms', href: '/industries/security' },
      { name: 'Retail Uniforms', href: '/industries/retail' },
    ],
    services: [
      { name: 'Custom Design', href: '/services/custom-design' },
      { name: 'Bulk Orders', href: '/services/bulk-orders' },
      { name: 'Embroidery', href: '/services/embroidery' },
      { name: 'Screen Printing', href: '/services/screen-printing' },
      { name: 'Fabric Consultation', href: '/services/fabric-consultation' },
      { name: 'Delivery Services', href: '/services/delivery' },
    ],
    locations: [
      { name: 'Riyadh', href: '/locations/riyadh' },
      { name: 'Jeddah', href: '/locations/jeddah' },
      { name: 'Dammam', href: '/locations/dammam' },
      { name: 'Mecca', href: '/locations/mecca' },
      { name: 'Medina', href: '/locations/medina' },
      { name: 'All Locations', href: '/locations' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Story', href: '/about/our-story' },
      { name: 'Mission & Vision', href: '/about/mission-vision' },
      { name: 'Certifications', href: '/about/certifications' },
      { name: 'Careers', href: '/about/careers' },
      { name: 'Contact Us', href: '/contact' },
    ],
    resources: [
      { name: 'Size Guides', href: '/resources/size-guides' },
      { name: 'Fabric Guide', href: '/resources/fabric-guide' },
      { name: 'Care Instructions', href: '/resources/care-instructions' },
      { name: 'Blog', href: '/resources/blog' },
      { name: 'FAQ', href: '/resources/faq' },
      { name: 'Downloads', href: '/resources/downloads' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/images/UNEOM_FAVICON.png"
                alt="UNEOM Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-2xl font-bold">UNEOM</span>
            </div>
            <p className="text-gray-400 mb-4">
              Saudi Arabia's leading uniform manufacturer with 15+ years of excellence. 
              ISO certified quality for medical, aviation, hospitality, and corporate sectors.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/uneom" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com/uneom_saudi" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              {footerLinks.industries.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Locations</h3>
            <ul className="space-y-2">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-800">
          <div>
            <h4 className="font-semibold mb-2">Riyadh Head Office</h4>
            <p className="text-gray-400 text-sm">
              King Fahd Road, Al Olaya<br />
              Riyadh 11564, Saudi Arabia<br />
              📞 +966 11 234 5678
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Customer Service</h4>
            <p className="text-gray-400 text-sm">
              📧 sales@uneom.com<br />
              💬 WhatsApp: +966 50 123 4567<br />
              🕐 Sun-Thu: 8:00 AM - 5:00 PM
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact/quote" className="btn primary small">
                Get Quote
              </Link>
              <Link href="/shop" className="btn secondary small">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="container flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} UNEOM. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/resources/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/resources/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 