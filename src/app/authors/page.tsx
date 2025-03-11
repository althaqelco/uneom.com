'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

// Author type definition
interface Author {
  id: string;
  name: string;
  image: string;
  title: string;
  bio: string;
  posts: number;
  expertise: string[];
}

export default function AuthorsPage() {
  const locale = 'en';
  
  // Sample authors data (in a real app, this would come from a CMS or API)
  const authors: Author[] = [
    {
      id: 'fahad-al-shamri',
      name: 'م. فهد الشمري',
      image: '/images/team/man-in-gray-shirt-and-black-blazer-SBI-300015242.jpg',
      title: 'مستشار استراتيجي - صناعة المنسوجات',
      bio: 'مهندس نسيج وخبير في مجال تطوير صناعة المنسوجات والأزياء في المملكة، عمل سابقاً في برنامج تطوير الصناعة الوطنية والخدمات اللوجستية.',
      posts: 4,
      expertise: ['رؤية السعودية 2030', 'صناعة النسيج', 'توطين الصناعة']
    },
    {
      id: 'nora-al-otaibi',
      name: 'د. نورة العتيبي',
      image: '/images/blog/author-khalid.jpg',
      title: 'استشاري الأزياء الطبية',
      bio: 'خبيرة في مجال الأزياء الطبية مع خبرة تمتد لأكثر من 12 عامًا في تطوير الزي الموحد للعاملين في القطاع الصحي.',
      posts: 3,
      expertise: ['القطاع الصحي', 'الأقمشة الذكية', 'سلامة العاملين']
    },
    {
      id: 'sara-al-harbi',
      name: 'Sara Al-Harbi',
      image: '/images/team/sara.jpg',
      title: 'Design Director',
      bio: 'Sara has over 15 years of experience in fashion design, with specialized training in uniform design. She brings an innovative approach to balancing functionality, comfort, and elegance.',
      posts: 5,
      expertise: ['Sustainable Design', 'Corporate Uniforms', 'Eco-Friendly Fabrics']
    },
    {
      id: 'amina-al-zahrani',
      name: 'أمينة الزهراني',
      image: '/images/adult-beautiful-muslim-woman-with-hijab-on-head-smiling-for-camera-in-room-SBI-351089408.jpg',
      title: 'مديرة قسم الاستدامة',
      bio: 'خبيرة في مجال التصميم المستدام والأزياء الصديقة للبيئة، مع تركيز خاص على تقنيات إعادة التدوير وتقليل النفايات في صناعة المنسوجات والأزياء الموحدة.',
      posts: 6,
      expertise: ['الاستدامة', 'المواد المعاد تدويرها', 'الأزياء الخضراء', 'الاقتصاد الدائري']
    },
    {
      id: 'dr-khalid-bakr',
      name: 'Dr. Khalid Bakr',
      image: '/images/doctor-SBI-300813580.jpg',
      title: 'Healthcare Uniform Specialist',
      bio: 'Dr. Khalid specializes in healthcare uniforms with a focus on safety standards and infection control. He has consulted for major hospitals across the Kingdom.',
      posts: 2,
      expertise: ['Healthcare', 'Safety Standards', 'Medical Textiles']
    },
    {
      id: 'abdullah-al-qahtani',
      name: 'Abdullah Al-Qahtani',
      image: '/images/team/abdullah.jpg',
      title: 'Aviation Uniform Designer',
      bio: 'Abdullah leads UNEOM\'s aviation division, designing uniforms that blend traditional Saudi elements with modern functionality for airlines.',
      posts: 2,
      expertise: ['Aviation', 'Cultural Design', 'Corporate Identity']
    },
    {
      id: 'dr-nora-al-atiebi',
      name: 'Dr. Nora Al-Atiebi',
      image: '/images/team/nora.jpg',
      title: 'Consultant in Surgical and Preventive Aesthetics',
      bio: 'Dr. Nora Al-Atiebi is an expert in surgical and preventive aesthetics with over 12 years of experience in developing and improving uniforms for healthcare workers.',
      posts: 1,
      expertise: ['Healthcare', 'Surgical Uniform', 'Smart Fabrics']
    },
    {
      id: 'sultan-al-ghamdi',
      name: 'سلطان الغامدي',
      image: '/images/portrait-of-an-arab-man-sheikh-SBI-300981247.jpg',
      title: 'خبير التراث والأزياء التقليدية',
      bio: 'مستشار في مجال دمج العناصر التراثية في الأزياء الموحدة العصرية، مع خبرة أكثر من 15 عاماً في الحفاظ على الهوية الثقافية السعودية في التصاميم المعاصرة.',
      posts: 5,
      expertise: ['التراث السعودي', 'الأزياء التقليدية', 'الهوية الثقافية', 'الحرف اليدوية']
    },
    {
      id: 'layla-mohammed',
      name: 'Layla Mohammed',
      image: '/images/young-muslim-arab-woman-wearing-hijab-veiling-face-looking-at-camera-outdoors-during-s-SBI-351149151.jpg',
      title: 'Industrial Uniform Researcher',
      bio: 'Specializing in advanced protective fabrics and ergonomic design for industrial environments, Layla combines her background in materials science with practical field experience.',
      posts: 4,
      expertise: ['Industrial Safety', 'Protective Fabrics', 'Ergonomic Design', 'Hazard Protection']
    },
    {
      id: 'tariq-al-mahmoud',
      name: 'طارق المحمود',
      image: '/images/arabian-businessman-wearing-traditional-clothes-while-using-smartphone-at-home-SBI-350765162.jpg',
      title: 'رئيس قسم الابتكار الرقمي',
      bio: 'يقود فريق الابتكار الرقمي في تطوير تقنيات التصنيع المتقدمة وأنظمة إدارة الزي الموحد الذكية، مع خبرة في دمج إنترنت الأشياء والذكاء الاصطناعي في صناعة الأزياء.',
      posts: 3,
      expertise: ['التصنيع الرقمي', 'إنترنت الأشياء', 'الأقمشة الذكية', 'التحول الرقمي']
    },
    {
      id: 'omar-al-saeed',
      name: 'عمر السعيد',
      image: '/images/modern-arabic-businessman-SBI-300984397.jpg',
      title: 'خبير سلاسل التوريد والإمداد',
      bio: 'متخصص في إدارة سلاسل التوريد واللوجستيات لصناعة الأزياء الموحدة، مع خبرة تمتد لأكثر من 10 سنوات في تحسين كفاءة العمليات وتقليل التكاليف وتحقيق الاستدامة.',
      posts: 7,
      expertise: ['سلاسل التوريد', 'اللوجستيات', 'التصنيع الرشيق', 'إدارة المخزون']
    }
  ];
  
  return (
    <MainLayout locale={locale}>
      {/* Hero Section */}
      <div className="relative py-24 bg-primary-700 text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
              Meet Our Team of Experts
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Learn from our diverse team of specialists who combine industry knowledge with practical expertise in uniform design and manufacturing.
            </p>
          </div>
        </Container>
      </div>
      
      {/* Authors Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {authors.map((author, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <Link href={`/authors/${author.id}`} className="block">
                  <div className="relative h-64 w-full bg-neutral-100">
                    <Image
                      src={author.image}
                      alt={author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 hover:text-primary-600 transition-colors duration-200">
                      {author.name}
                    </h2>
                    <p className="text-primary-600 font-medium mb-4">{author.title}</p>
                    <p className="text-neutral-600 mb-4 line-clamp-3">{author.bio}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {author.expertise.map((skill, idx) => (
                        <span key={idx} className="bg-neutral-100 text-neutral-700 text-xs px-3 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-sm text-neutral-500">
                      <span>{author.posts} Articles</span>
                      <span className="text-primary-600 font-medium">View Profile →</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Looking for Uniform Expertise?</h2>
            <p className="text-neutral-600 mb-8">Our team of experts are available for consultation on your uniform program. From healthcare to corporate, we have specialists in every industry.</p>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Contact Our Team
            </Link>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
} 