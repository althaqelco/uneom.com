import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

interface BlogAuthorProps {
  name: string;
  title?: string;
  image: string;
  date: string;
  readTime?: string;
  authorLink?: string;
}

const BlogAuthor: React.FC<BlogAuthorProps> = ({
  name,
  title,
  image,
  date,
  readTime,
  authorLink
}) => {
  const AuthorContent = () => (
    <div className="flex items-center">
      <div className="flex-shrink-0 mr-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div>
        <h3 className="font-bold text-gray-900">
          {name}
        </h3>
        {title && (
          <p className="text-sm text-gray-600">{title}</p>
        )}
        <div className="flex items-center text-sm text-gray-500 mt-1">
          {date && (
            <span className="flex items-center mr-4">
              <FaCalendarAlt className="mr-1 text-gray-400" />
              {date}
            </span>
          )}
          {readTime && (
            <span className="flex items-center">
              <FaClock className="mr-1 text-gray-400" />
              {readTime}
            </span>
          )}
        </div>
      </div>
    </div>
  );
  
  return authorLink ? (
    <Link href={authorLink} className="block hover:opacity-90 transition-opacity">
      <AuthorContent />
    </Link>
  ) : (
    <AuthorContent />
  );
};

export default BlogAuthor; 