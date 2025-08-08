import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap, FaAward, FaBriefcase, FaBook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Author } from '@/lib/data/authors';

interface AuthorProfileProps {
  author: Author;
  compact?: boolean;
}

const AuthorProfile: React.FC<AuthorProfileProps> = ({ author, compact = false }) => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Author Image/Avatar */}
        <div className="md:w-1/3 relative">
          <div className="relative h-64 md:h-full w-full">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
          
          {/* Featured Badge */}
          {author.featured && (
            <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              Featured Expert
            </div>
          )}
        </div>
        
        {/* Author Information */}
        <div className="md:w-2/3 p-6">
          <h2 className="text-2xl font-bold mb-1">{author.name}</h2>
          <p className="text-primary-600 font-medium mb-3">{author.title}</p>
          
          {/* Experience Badge */}
          <div className="inline-flex items-center mb-4 bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
            <FaBriefcase className="mr-2" />
            <span>{author.experience}+ years experience</span>
          </div>
          
          {/* Short Bio */}
          <p className="text-neutral-600 mb-6">
            {compact ? author.shortBio : author.bio}
          </p>
          
          {/* Expertise Areas */}
          <div className="mb-5">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Expertise Areas</h3>
            <div className="flex flex-wrap gap-2">
              {author.expertise.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {!compact && (
            <React.Fragment>
              {/* Credentials */}
              <div className="mb-5">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-2">
                  <FaGraduationCap className="inline-block mr-1" /> Credentials
                </h3>
                <ul className="space-y-1">
                  {author.credentials.map((credential, index) => (
                    <li key={index} className="text-neutral-600 text-sm">
                      • {credential}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Industries */}
              <div className="mb-5">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Industries</h3>
                <div className="flex flex-wrap gap-2">
                  {author.industries.map((industry, index) => (
                    <span 
                      key={index} 
                      className="bg-neutral-50 text-neutral-600 border border-neutral-200 px-2 py-0.5 rounded text-xs"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Certifications */}
              {author.certifications && author.certifications.length > 0 && (
                <div className="mb-5">
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-2">
                    <FaAward className="inline-block mr-1" /> Certifications
                  </h3>
                  <ul className="space-y-1">
                    {author.certifications.map((cert, index) => (
                      <li key={index} className="text-neutral-600 text-sm">
                        • {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Publications */}
              {author.publications && author.publications.length > 0 && (
                <div className="mb-5">
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-2">
                    <FaBook className="inline-block mr-1" /> Publications
                  </h3>
                  <ul className="space-y-2">
                    {author.publications.map((pub, index) => (
                      <li key={index} className="text-neutral-600 text-sm">
                        <p><strong>"{pub.title}"</strong></p>
                        <p className="text-neutral-500 text-xs">{pub.publisher}, {pub.year}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </React.Fragment>
          )}
          
          {/* Social & Profile Link */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex space-x-3">
              {author.linkedin && (
                <a 
                  href={author.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-neutral-100 p-2 rounded-full text-neutral-700 hover:bg-neutral-200 transition-colors"
                  aria-label={`${author.name}'s LinkedIn Profile`}
                >
                  <FaLinkedinIn />
                </a>
              )}
              {author.twitter && (
                <a 
                  href={author.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-neutral-100 p-2 rounded-full text-neutral-700 hover:bg-neutral-200 transition-colors"
                  aria-label={`${author.name}'s Twitter Profile`}
                >
                  <FaTwitter />
                </a>
              )}
            </div>
            
            <Link 
              href={`/authors/${author.id}`}
              className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              View Full Profile →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile; 