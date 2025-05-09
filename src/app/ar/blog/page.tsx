import React from 'react';
import Container from '@/components/ui/Container';

export const metadata = {
  title: 'المدونة | UNEOM',
  description: 'أحدث الأخبار والرؤى والتحديثات من UNEOM',
};

export default function BlogPageArabic() {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-4xl font-bold mb-6">مدونة UNEOM</h1>
        <p className="text-lg">يتم حاليًا تحديث مدونتنا بمحتوى جديد.</p>
      </div>
    </Container>
  );
} 