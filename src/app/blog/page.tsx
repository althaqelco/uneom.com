import React from 'react';
import Container from '@/components/ui/Container';

export const metadata = {
  title: 'Blog | UNEOM',
  description: 'Latest news, insights, and updates from UNEOM',
};

export default function BlogPage() {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-4xl font-bold mb-6">UNEOM Blog</h1>
        <p className="text-lg">Our blog is currently being updated with new content.</p>
      </div>
    </Container>
  );
} 