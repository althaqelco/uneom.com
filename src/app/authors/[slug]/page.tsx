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
  fullBio?: string;
  education?: string[];
  experience?: {
    position: string;
    company: string;
    period: string;
    description: string;
  }[];
  expertise: string[];
  socialMedia?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

// Blog post type definition (simplified for this page)
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  coverImage: string;
  readTime: number;
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default function AuthorPage({ params }: PageProps) {
  const locale = 'en';
  const { slug } = params;
  
  // Sample authors data - in a real app, you would fetch this from an API based on the slug
  const authors: Record<string, Author> = {
    'fahad-al-shamri': {
      id: 'fahad-al-shamri',
      name: 'Eng. Fahad Al-Shamri',
      image: '/images/avatar-placeholder.jpg',
      title: 'Strategic Consultant - Textile Industry',
      bio: 'Textile engineer and expert in developing the Kingdom\'s textile and fashion industry, previously worked in the National Industrial Development and Logistics Program.',
      fullBio: 'Eng. Fahad Al-Shamri is a specialized consultant in developing the textile and fashion industry in Saudi Arabia, with extensive experience in strategic planning for the industrial sector and developing local value chains. He previously worked as a consultant in the National Industrial Development and Logistics Program, one of the executive programs for Saudi Vision 2030, where he contributed to developing strategies for localizing the textile and uniform industry. He has also participated in many consulting projects for major local and international companies operating in the Kingdom and has contributed to developing the technical training system for national cadres in this field.',
      education: [
        'Master\'s in Textile Engineering, University of Manchester, United Kingdom',
        'Bachelor\'s in Industrial Engineering, King Saud University, Saudi Arabia',
        'Advanced Diploma in Supply Chain Management, Massachusetts Institute of Technology, USA'
      ],
      experience: [
        {
          position: 'Strategic Consultant - Textile Industry',
          company: 'UNEOM',
          period: '2021 - Present',
          description: 'Leads the strategic planning team to develop company products in line with Vision 2030 requirements and industry localization initiatives.'
        },
        {
          position: 'Consultant',
          company: 'National Industrial Development and Logistics Program',
          period: '2017 - 2021',
          description: 'Contributed to developing strategies for localizing the textile and uniform industry within Vision 2030 initiatives.'
        },
        {
          position: 'Product Development Manager',
          company: 'Riyadh Textile Company',
          period: '2014 - 2017',
          description: 'Led the product development team and worked on improving the quality of local products to compete with imported products.'
        }
      ],
      expertise: ['Saudi Vision 2030', 'Textile Industry', 'Industry Localization', 'Supply Chains', 'Sustainability in Fashion Industry'],
      socialMedia: {
        twitter: 'https://twitter.com/fahadalshamri',
        linkedin: 'https://linkedin.com/in/fahadalshamri'
      }
    },
    'nora-al-otaibi': {
      id: 'nora-al-otaibi',
      name: 'Dr. Noura Al-Otaibi',
      image: '/images/blog/author-khalid.jpg',
      title: 'Medical Apparel Consultant',
      bio: 'Expert in medical apparel with over 12 years of experience in developing uniforms for healthcare workers.',
      expertise: ['Healthcare Sector', 'Smart Fabrics', 'Worker Safety'],
      fullBio: 'Dr. Noura Al-Otaibi is a leading expert in medical apparel design and safety standards in Saudi Arabia. With a background in textile science and public health, she has been at the forefront of developing innovative healthcare uniforms that combine functionality, comfort, and compliance with international safety standards. Through her work with major hospitals and healthcare systems across the Kingdom, Dr. Al-Otaibi has pioneered the adoption of advanced antimicrobial fabrics and ergonomic designs that enhance both patient and provider safety.',
      education: [
        'PhD in Textile Sciences, King Abdulaziz University',
        'Master\'s in Public Health, Johns Hopkins University',
        'Bachelor\'s in Biomedical Engineering, King Saud University'
      ],
      experience: [
        {
          position: 'Medical Apparel Consultant',
          company: 'UNEOM',
          period: '2020 - Present',
          description: 'Leads research and development of advanced healthcare uniforms with antimicrobial properties and innovative design features.'
        },
        {
          position: 'Standards Committee Member',
          company: 'Saudi Standards, Metrology and Quality Organization',
          period: '2018 - Present',
          description: 'Contributes to developing national standards for medical textiles and healthcare worker uniforms.'
        },
        {
          position: 'Head of Infection Control Textiles',
          company: 'King Fahad Medical City',
          period: '2015 - 2020',
          description: 'Oversaw the implementation of advanced uniform protocols that reduced healthcare-associated infections by 23%.'
        }
      ],
      socialMedia: {
        twitter: 'https://twitter.com/dr_alotaibi',
        linkedin: 'https://linkedin.com/in/noura-alotaibi'
      }
    },
    'sara-al-harbi': {
      id: 'sara-al-harbi',
      name: 'Sara Al-Harbi',
      image: '/images/team/sara.jpg',
      title: 'Design Director',
      bio: 'Sara has over 15 years of experience in fashion design, with specialized training in uniform design. She brings an innovative approach to balancing functionality, comfort, and elegance.',
      expertise: ['Sustainable Design', 'Corporate Uniforms', 'Eco-Friendly Fabrics'],
      fullBio: 'Sara Al-Harbi is a pioneering figure in sustainable fashion design within Saudi Arabia, specializing in creating corporate uniforms that combine aesthetic appeal with environmental responsibility. With a background in both traditional couture and modern industrial design, Sara brings a unique perspective to the uniform industry. Her award-winning designs for major Saudi corporations have redefined workplace attire by incorporating locally-sourced materials and traditional craftsmanship techniques into contemporary business wear.',
      education: [
        'Master of Fashion Design, Central Saint Martins, London',
        'Bachelor of Industrial Design, King Abdulaziz University',
        'Certificate in Sustainable Textiles, Fashion Institute of Technology, New York'
      ],
      experience: [
        {
          position: 'Design Director',
          company: 'UNEOM',
          period: '2018 - Present',
          description: 'Leads the design department, overseeing all creative aspects of corporate and institutional uniform collections, with a focus on integrating sustainability principles.'
        },
        {
          position: 'Senior Designer',
          company: 'Saudi Arabian Airlines',
          period: '2013 - 2018',
          description: 'Redesigned the entire cabin crew uniform collection, incorporating traditional Saudi elements with modern, functional fabrics.'
        },
        {
          position: 'Design Consultant',
          company: 'Ministry of Culture',
          period: '2010 - 2013',
          description: 'Developed guidelines for cultural heritage preservation in contemporary Saudi fashion and textile industries.'
        }
      ],
      socialMedia: {
        twitter: 'https://twitter.com/saraalharbi',
        linkedin: 'https://linkedin.com/in/saraalharbi',
        instagram: 'https://instagram.com/sara_design'
      }
    },
    'amina-al-zahrani': {
      id: 'amina-al-zahrani',
      name: 'أمينة الزهراني',
      image: '/images/default-placeholder.jpg',
      title: 'مديرة قسم الاستدامة',
      bio: 'خبيرة في مجال التصميم المستدام والأزياء الصديقة للبيئة، مع تركيز خاص على تقنيات إعادة التدوير وتقليل النفايات في صناعة المنسوجات والأزياء الموحدة.',
      expertise: ['الاستدامة', 'المواد المعاد تدويرها', 'الأزياء الخضراء', 'الاقتصاد الدائري'],
      fullBio: 'أمينة الزهراني من الرواد في مجال الاستدامة البيئية في صناعة المنسوجات والأزياء في المملكة العربية السعودية. تحمل شهادة ماجستير في العلوم البيئية وتطبيقاتها في صناعة الأزياء، وأسست أول مبادرة سعودية متخصصة في إعادة تدوير المنسوجات "نسيج أخضر" التي تحولت لاحقاً إلى شركة ناشئة ناجحة. عملت كمستشارة للهيئة الملكية للبيئة في وضع المعايير البيئية لقطاع المنسوجات، وشاركت في تأسيس أول مختبر للأزياء المستدامة في جامعة الملك عبد الله للعلوم والتقنية.',
      education: [
        'ماجستير في العلوم البيئية التطبيقية، جامعة الملك عبدالله للعلوم والتقنية',
        'بكالوريوس في علوم النسيج، جامعة جدة',
        'دبلوم متخصص في الاقتصاد الدائري، معهد ستوكهولم للاستدامة، السويد'
      ],
      experience: [
        {
          position: 'مديرة قسم الاستدامة',
          company: 'شركة يونيوم (UNEOM)',
          period: '2020 - الآن',
          description: 'تقود استراتيجيات الاستدامة وتشرف على تطوير خطوط إنتاج صديقة للبيئة وتطبيق معايير الاقتصاد الدائري في سلسلة القيمة.'
        },
        {
          position: 'مؤسسة ومديرة تنفيذية',
          company: 'نسيج أخضر',
          period: '2016 - 2020',
          description: 'أسست وقادت أول شركة سعودية متخصصة في إعادة تدوير المنسوجات وتحويلها إلى منتجات جديدة عالية القيمة.'
        },
        {
          position: 'مستشارة',
          company: 'الهيئة الملكية للبيئة',
          period: '2014 - 2016',
          description: 'ساهمت في وضع معايير الاستدامة البيئية لقطاع المنسوجات والأزياء في المملكة.'
        }
      ],
      socialMedia: {
        twitter: 'https://twitter.com/aminazahrani',
        linkedin: 'https://linkedin.com/in/aminazahrani',
        instagram: 'https://instagram.com/amina_green_textile'
      }
    },
    'dr-khalid-bakr': {
      id: 'dr-khalid-bakr',
      name: 'Dr. Khalid Bakr',
      image: '/images/default-placeholder.jpg',
      title: 'Healthcare Uniform Specialist',
      bio: 'Dr. Khalid specializes in healthcare uniforms with a focus on safety standards and infection control. He has consulted for major hospitals across the Kingdom.',
      expertise: ['Healthcare', 'Safety Standards', 'Medical Textiles'],
      fullBio: 'Dr. Khalid Bakr is a leading expert in medical textiles and healthcare uniform design, with a particular focus on infection control and staff safety in clinical environments. With a background in both medicine and materials science, Dr. Bakr brings a unique perspective to designing functional, comfortable, and protective uniforms for healthcare professionals. His research on antimicrobial fabrics has been published in several international journals, and he has developed patented technologies for self-sterilizing textiles now used in multiple hospitals across the GCC region.',
      education: [
        'Ph.D. in Medical Textiles, Imperial College London',
        'M.D., King Saud University Medical School',
        'Master of Science in Biomedical Materials, MIT'
      ],
      experience: [
        {
          position: 'Healthcare Uniform Specialist',
          company: 'UNEOM',
          period: '2019 - Present',
          description: 'Leads the development of advanced healthcare uniforms, overseeing research into antimicrobial fabrics and ergonomic designs for medical staff.'
        },
        {
          position: 'Research Director',
          company: 'King Faisal Specialist Hospital',
          period: '2015 - 2019',
          description: 'Directed research initiatives on hospital infections and textile-based prevention strategies, resulting in a 32% reduction in hospital-acquired infections.'
        },
        {
          position: 'Visiting Professor',
          company: 'Harvard Medical School',
          period: '2013 - 2015',
          description: 'Conducted research and taught courses on infection control in healthcare settings, with a focus on textile surfaces and uniform design.'
        }
      ],
      socialMedia: {
        twitter: 'https://twitter.com/drkhalid_bakr',
        linkedin: 'https://linkedin.com/in/khalidbakr'
      }
    },
    'abdullah-al-qahtani': {
      id: 'abdullah-al-qahtani',
      name: 'Abdullah Al-Qahtani',
      image: '/images/team/abdullah.jpg',
      title: 'Aviation Uniform Designer',
      bio: 'Abdullah leads UNEOM\'s aviation division, designing uniforms that blend traditional Saudi elements with modern functionality for airlines.',
      expertise: ['Aviation', 'Cultural Design', 'Corporate Identity'],
      fullBio: 'Abdullah Al-Qahtani is a visionary uniform designer who has revolutionized the approach to aviation uniforms in the Middle East. By seamlessly blending traditional Saudi design elements with cutting-edge functional fabrics, Abdullah has created iconic uniforms for several major airlines. His designs not only represent corporate branding but serve as cultural ambassadors for the Kingdom on international flights. With a background in both fashion design and aeronautical engineering, Abdullah brings a unique perspective to creating uniforms that meet the rigorous demands of aviation professionals while maintaining aesthetic excellence.',
      education: [
        'Master of Fashion Design, Parsons School of Design, New York',
        'Bachelor of Aeronautical Engineering, King Fahd University of Petroleum and Minerals',
        'Executive Certificate in Brand Identity Design, London College of Fashion'
      ],
      experience: [
        {
          position: 'Aviation Uniform Designer',
          company: 'UNEOM',
          period: '2017 - Present',
          description: 'Leads the aviation division, designing and developing uniform collections for commercial airlines and private aviation companies throughout the Middle East.'
        },
        {
          position: 'Senior Designer',
          company: 'Saudia Airlines',
          period: '2012 - 2017',
          description: 'Led the redesign of the national carrier\'s cabin crew uniforms, creating an award-winning collection that balanced tradition with modern functionality.'
        },
        {
          position: 'Design Consultant',
          company: 'Emirates Airlines',
          period: '2009 - 2012',
          description: 'Consulted on uniform updates with a focus on incorporating cultural elements from Gulf nations while enhancing comfort for long-haul flights.'
        }
      ],
      socialMedia: {
        twitter: 'https://twitter.com/abdullah_design',
        linkedin: 'https://linkedin.com/in/abdullahalqahtani',
        instagram: 'https://instagram.com/abdullah_aviation_design'
      }
    },
    'sultan-al-ghamdi': {
      id: 'sultan-al-ghamdi',
      name: 'سلطان الغامدي',
      image: '/images/default-placeholder.jpg',
      title: 'خبير التراث والأزياء التقليدية',
      bio: 'مستشار في مجال دمج العناصر التراثية في الأزياء الموحدة العصرية، مع خبرة أكثر من 15 عاماً في الحفاظ على الهوية الثقافية السعودية في التصاميم المعاصرة.',
      expertise: ['التراث السعودي', 'الأزياء التقليدية', 'الهوية الثقافية', 'الحرف اليدوية'],
      fullBio: 'سلطان الغامدي شخصية بارزة في مجال الحفاظ على التراث السعودي وتطويعه في سياقات معاصرة. يمتلك خبرة واسعة في توثيق تقنيات الحياكة والتطريز التقليدية من مختلف مناطق المملكة، ويعمل على إدماجها في تصاميم الأزياء الموحدة العصرية. حصل على جائزة الأمير سلطان بن سلمان للتراث العمراني لعمله في توثيق وإحياء الزخارف التقليدية، وعمل كمستشار للعديد من المبادرات الثقافية التابعة لوزارة الثقافة وهيئة التراث.',
      education: [
        'ماجستير في دراسات التراث الثقافي، جامعة الملك سعود',
        'دبلوم متقدم في تصميم الأزياء، كلية الفنون، لندن',
        'بكالوريوس في التاريخ والآثار، جامعة الملك عبدالعزيز'
      ],
      experience: [
        {
          position: 'خبير التراث والأزياء التقليدية',
          company: 'شركة يونيوم (UNEOM)',
          period: '2018 - الآن',
          description: 'يقود مبادرات دمج التراث السعودي في تصاميم الزي الموحد للمؤسسات الحكومية والشركات الكبرى، مع تركيز خاص على الضيافة والسياحة.'
        },
        {
          position: 'مستشار',
          company: 'هيئة التراث',
          period: '2015 - 2018',
          description: 'عمل على توثيق وتصنيف الأزياء التقليدية في مختلف مناطق المملكة وإنشاء قاعدة بيانات رقمية للحفاظ عليها.'
        },
        {
          position: 'مدير مشروع',
          company: 'مبادرة الحرف السعودية التقليدية',
          period: '2011 - 2015',
          description: 'أشرف على برامج تدريب الشباب على الحرف التقليدية وربطها بصناعة الأزياء المعاصرة، مما ساهم في إيجاد فرص عمل للحرفيين التقليديين.'
        }
      ],
      socialMedia: {
        twitter: 'https://twitter.com/sultanaltraath',
        instagram: 'https://instagram.com/sultan_heritage'
      }
    },
    'layla-mohammed': {
      id: 'layla-mohammed',
      name: 'Layla Mohammed',
      image: '/images/default-placeholder.jpg',
      title: 'Industrial Uniform Researcher',
      bio: 'Specializing in advanced protective fabrics and ergonomic design for industrial environments, Layla combines her background in materials science with practical field experience.',
      expertise: ['Industrial Safety', 'Protective Fabrics', 'Ergonomic Design', 'Hazard Protection'],
      fullBio: 'Layla Mohammed is a pioneering researcher in industrial protective clothing with expertise spanning materials science, safety engineering, and ergonomic design. Her groundbreaking work on heat-resistant fabrics has transformed safety standards in the oil and gas industry throughout the Gulf region. After earning her doctorate from MIT with a focus on innovative polymer blends for extreme environments, Layla returned to Saudi Arabia to lead research initiatives aimed at developing locally-manufactured protective fabrics specifically designed for the Kingdom\'s industrial sectors and climate conditions.',
      education: [
        'Ph.D. in Materials Science and Engineering, Massachusetts Institute of Technology',
        'Master of Science in Textile Engineering, North Carolina State University',
        'Bachelor of Science in Chemical Engineering, King Fahd University of Petroleum and Minerals'
      ],
      experience: [
        {
          position: 'Industrial Uniform Researcher',
          company: 'UNEOM',
          period: '2020 - Present',
          description: 'Leads research initiatives for developing next-generation protective uniforms for industrial applications, with a focus on extreme environment protection and comfort optimization.'
        },
        {
          position: 'Senior Research Scientist',
          company: 'Saudi Aramco',
          period: '2015 - 2020',
          description: 'Conducted research on specialized protective clothing for oil and gas environments, developing new standards for heat, flame, and chemical resistance.'
        },
        {
          position: 'Visiting Researcher',
          company: 'DuPont Protection Technologies',
          period: '2013 - 2015',
          description: 'Collaborated on the development of advanced Nomex® and Kevlar® applications for Middle Eastern markets, with a focus on heat stress reduction in protective garments.'
        }
      ],
      socialMedia: {
        twitter: 'https://twitter.com/layla_safetytex',
        linkedin: 'https://linkedin.com/in/laylamohammed'
      }
    },
    'omar-al-saeed': {
      id: 'omar-al-saeed',
      name: 'عمر السعيد',
      image: '/images/default-placeholder.jpg',
      title: 'خبير سلاسل التوريد والإمداد',
      bio: 'متخصص في إدارة سلاسل التوريد واللوجستيات لصناعة الأزياء الموحدة، مع خبرة تمتد لأكثر من 10 سنوات في تحسين كفاءة العمليات وتقليل التكاليف وتحقيق الاستدامة.',
      expertise: ['سلاسل التوريد', 'اللوجستيات', 'التصنيع الرشيق', 'إدارة المخزون'],
      fullBio: 'عمر السعيد خبير مرموق في مجال إدارة سلاسل التوريد والإمداد مع تركيز خاص على صناعة المنسوجات والأزياء الموحدة. عمل مع كبرى الشركات العالمية في أوروبا وآسيا قبل العودة إلى المملكة لتطبيق أفضل الممارسات العالمية في القطاع المحلي. قاد مشاريع لإعادة هيكلة سلاسل التوريد لعدة شركات كبرى، محققاً وفورات تصل إلى 30% وتقليص أوقات التسليم بنسبة 40%. كما طور نماذج مبتكرة لإدارة المخزون تجمع بين الكفاءة التشغيلية والاستدامة البيئية.',
      education: [
        'ماجستير في إدارة سلاسل التوريد العالمية، كلية إدارة الأعمال، INSEAD، فرنسا',
        'بكالوريوس في إدارة الأعمال، جامعة الملك سعود',
        'شهادة احترافية في إدارة اللوجستيات، معهد إدارة التوريد (ISM)، الولايات المتحدة'
      ],
      experience: [
        {
          position: 'خبير سلاسل التوريد والإمداد',
          company: 'شركة يونيوم (UNEOM)',
          period: '2018 - الآن',
          description: 'يقود استراتيجيات سلاسل التوريد والإمداد الشاملة للشركة، مع التركيز على تكامل العمليات وتحسين الكفاءة وتطبيق حلول التصنيع الرشيق.'
        },
        {
          position: 'مدير اللوجستيات العالمية',
          company: 'شركة Inditex (زارا)',
          period: '2014 - 2018',
          description: 'أشرف على عمليات اللوجستيات في منطقة الشرق الأوسط وشمال أفريقيا، وطور استراتيجيات للتوسع في الأسواق الناشئة.'
        },
        {
          position: 'مستشار أول',
          company: 'ماكينزي آند كومباني',
          period: '2010 - 2014',
          description: 'قدم استشارات استراتيجية في مجال سلاسل التوريد والعمليات لشركات صناعة الأزياء والتجزئة الكبرى في أوروبا والشرق الأوسط.'
        }
      ],
      socialMedia: {
        twitter: 'https://twitter.com/omarsupplychain',
        linkedin: 'https://linkedin.com/in/omaralsaeed'
      }
    }
  };
  
  // Social Media Icons Components to avoid SVG errors
  const TwitterIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );

  const LinkedinIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126-2.126-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
    </svg>
  );

  // Author data - additional authors
  const additionalAuthors = {
    'tariq-al-mahmoud': {
      id: 'tariq-al-mahmoud',
      name: 'طارق المحمود',
      image: '/images/default-placeholder.jpg',
      title: 'رئيس قسم الابتكار الرقمي',
      bio: 'يقود فريق الابتكار الرقمي في تطوير تقنيات التصنيع المتقدمة وأنظمة إدارة الزي الموحد الذكية، مع خبرة في دمج إنترنت الأشياء والذكاء الاصطناعي في صناعة الأزياء.',
      expertise: ['التصنيع الرقمي', 'إنترنت الأشياء', 'الأقمشة الذكية', 'التحول الرقمي'],
      fullBio: 'طارق المحمود رائد في مجال التحول الرقمي لصناعة المنسوجات والأزياء، مع خبرة تتجاوز 12 عاماً في تطبيقات التكنولوجيا المتقدمة. بدأ مسيرته في وادي السيليكون قبل أن يعود إلى المملكة ليقود مبادرات الابتكار الرقمي في القطاع الصناعي. يعتبر من أوائل المطورين لتقنيات "الأقمشة الذكية" في الشرق الأوسط، وحصل على براءات اختراع لأنظمة تتبع ومراقبة الزي الموحد باستخدام تقنيات إنترنت الأشياء. كما طور منصات رقمية متكاملة لإدارة دورة حياة الزي الموحد تم تبنيها من قبل عدة شركات كبرى في المملكة.',
      education: [
        'ماجستير في علوم الحاسب والذكاء الاصطناعي، جامعة ستانفورد، الولايات المتحدة',
        'بكالوريوس في هندسة البرمجيات، جامعة الملك فهد للبترول والمعادن',
        'شهادة متخصصة في إنترنت الأشياء الصناعية، معهد ماساتشوستس للتكنولوجيا'
      ],
      experience: [
        {
          position: 'رئيس قسم الابتكار الرقمي',
          company: 'شركة يونيوم (UNEOM)',
          period: '2019 - الآن',
          description: 'يقود تطوير وتنفيذ استراتيجيات التحول الرقمي في عمليات التصميم والإنتاج، مع تركيز على أتمتة خطوط الإنتاج وتطوير منصات لإدارة الزي الموحد.'
        },
        {
          position: 'مؤسس ومدير تنفيذي',
          company: 'شركة "سمارت فابريك"',
          period: '2015 - 2019',
          description: 'أسس وقاد شركة ناشئة متخصصة في تطوير تطبيقات إنترنت الأشياء للمنسوجات الذكية، تم الاستحواذ عليها لاحقاً من قبل شركة يونيوم.'
        },
        {
          position: 'مهندس برمجيات أول',
          company: 'Google X Labs',
          period: '2012 - 2015',
          description: 'عمل ضمن فريق تطوير مشروع Project Jacquard لتطوير المنسوجات التفاعلية والملابس الذكية.'
        }
      ],
      socialMedia: {
        twitter: 'https://twitter.com/tariqtech',
        linkedin: 'https://linkedin.com/in/tariqalmahmoud',
        instagram: 'https://instagram.com/tariq_innovation'
      }
    },
    'dr-nora-al-atiebi': {
      id: 'dr-nora-al-atiebi',
      name: 'Dr. Nora Al-Atiebi',
      image: '/images/avatar-placeholder.jpg',
      title: 'Consultant in Surgical and Preventive Aesthetics',
      bio: 'Dr. Nora Al-Atiebi is an expert in surgical and preventive aesthetics with over 12 years of experience in developing and improving uniforms for healthcare workers.',
      expertise: ['Healthcare', 'Surgical Uniform', 'Smart Fabrics'],
      fullBio: 'Dr. Nora Al-Atiebi brings a unique perspective to healthcare uniform design as both a practicing surgeon and textile innovator. After completing her medical training, she pursued specialized studies in preventive healthcare textiles, recognizing the critical role that medical garments play in infection control and healthcare worker safety. Her research has led to groundbreaking innovations in antimicrobial surgical scrubs and operating room attire that have been adopted by leading hospitals across the GCC region.',
      education: [
        'Fellowship in Preventive Healthcare Textiles, Imperial College London',
        'M.D., King Saud University Medical School',
        'Masters in Healthcare Innovation, Harvard University'
      ],
      experience: [
        {
          position: 'Consultant in Surgical and Preventive Aesthetics',
          company: 'UNEOM',
          period: '2020 - Present',
          description: 'Leads the development of specialized surgical uniforms and innovative healthcare textiles with a focus on infection prevention and surgical team safety.'
        },
        {
          position: 'Healthcare Uniform Innovation Lead',
          company: 'King Faisal Specialist Hospital',
          period: '2016 - 2020',
          description: 'Directed the hospital\'s uniform modernization program, implementing evidence-based design improvements that increased staff comfort and reduced infection rates.'
        },
        {
          position: 'Surgical Consultant',
          company: 'Ministry of Health',
          period: '2013 - 2016',
          description: 'Advised on national healthcare uniform standards and helped develop guidelines for specialized medical textiles in high-risk hospital environments.'
        }
      ],
      socialMedia: {
        twitter: 'https://twitter.com/dr_alotaibi',
        linkedin: 'https://linkedin.com/in/nora-al-atiebi'
      }
    }
  };

  // Combine basic authors with additional authors
  const allAuthors: Record<string, Author> = {...authors, ...additionalAuthors};
  
  const author = allAuthors[slug];
  
  // If author not found, you could redirect or show an error
  if (!author) {
    return (
      <MainLayout locale={locale}>
        <Container>
          <div className="py-20 text-center">
            <h1 className="text-3xl font-bold mb-4">Author Not Found</h1>
            <p className="mb-8">The author you are looking for does not exist.</p>
            <Link href="/authors" className="text-primary-600 hover:text-primary-700">
              View All Authors
            </Link>
          </div>
        </Container>
      </MainLayout>
    );
  }
  
  // Sample blog posts by this author
  const authorPosts: BlogPost[] = [
    {
      id: 'uniform-innovations-vision-2030',
      title: 'ابتكارات الزي الموحد ودورها في تحقيق رؤية السعودية 2030',
      excerpt: 'كيف تساهم الابتكارات في صناعة الزي الموحد في دعم أهداف رؤية السعودية 2030 من توطين الصناعة وتنويع الاقتصاد وتعزيز الهوية الوطنية.',
      date: 'يونيو 10, 2025',
      category: 'رؤية السعودية 2030',
      coverImage: '/images/default-placeholder.jpg',
      readTime: 8
    },
    {
      id: 'local-manufacturing-textile-industry',
      title: 'تحديات وفرص التصنيع المحلي في صناعة المنسوجات السعودية',
      excerpt: 'تحليل شامل للتحديات التي تواجه توطين صناعة المنسوجات في المملكة والفرص الواعدة لتطويرها في ظل مبادرات رؤية 2030.',
      date: 'أبريل 22, 2024',
      category: 'صناعة المنسوجات',
      coverImage: '/images/default-placeholder.jpg',
      readTime: 7
    },
    {
      id: 'innovative-textiles-future-industry',
      title: 'المنسوجات المبتكرة ومستقبل الصناعة في المملكة',
      excerpt: 'نظرة مستقبلية حول كيفية مساهمة التقنيات الحديثة في تطوير صناعة المنسوجات المتقدمة في المملكة وتأثيرها على القطاعات المختلفة.',
      date: 'فبراير 15, 2024',
      category: 'الابتكار',
      coverImage: '/images/default-placeholder.jpg',
      readTime: 6
    }
  ];
  
  return (
    <MainLayout locale={locale}>
      {/* Author Hero Section */}
      <div className="relative py-24 bg-primary-700 text-white">
        <Container>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="relative w-32 h-32 lg:w-48 lg:h-48 rounded-lg overflow-hidden flex-shrink-0 border-4 border-white shadow-lg">
              <Image
                src={author.image}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-3">
                {author.name}
              </h1>
              <p className="text-xl text-white/90 mb-4">{author.title}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {author.expertise.map((skill, idx) => (
                  <span key={idx} className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              {author.socialMedia && (
                <div className="flex gap-4">
                  {author.socialMedia.twitter && (
                    <a href={author.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                      <TwitterIcon />
                    </a>
                  )}
                  {author.socialMedia.linkedin && (
                    <a href={author.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                      <LinkedinIcon />
                    </a>
                  )}
                  {author.socialMedia.instagram && (
                    <a href={author.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                      <InstagramIcon />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
      
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Author Bio and Experience */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">About {author.name}</h2>
                <p className="text-neutral-600 mb-6">{author.fullBio || author.bio}</p>
                
                {author.education && (
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-3">Education</h3>
                    <ul className="space-y-2">
                      {author.education.map((edu, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-primary-600 rounded-full mt-2 mr-2"></span>
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {author.experience && (
                  <div>
                    <h3 className="text-lg font-bold mb-3">Experience</h3>
                    <div className="space-y-4">
                      {author.experience.map((exp, idx) => (
                        <div key={idx} className="border-l-2 border-primary-200 pl-4">
                          <h4 className="font-bold">{exp.position}</h4>
                          <div className="text-primary-600 text-sm mb-1">{exp.company}</div>
                          <div className="text-neutral-500 text-sm mb-2">{exp.period}</div>
                          <p className="text-neutral-600 text-sm">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {author.expertise.map((skill, idx) => (
                    <span key={idx} className="bg-primary-50 text-primary-700 text-sm px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Author Articles */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Latest Articles by {author.name}</h2>
              
              <div className="space-y-8">
                {authorPosts.map((post, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                    <div className="relative md:w-1/3 h-56 md:h-auto">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="mb-2">
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full mr-2">
                          {post.category}
                        </span>
                        <span className="text-neutral-500 text-xs">
                          {post.date} • {post.readTime} min read
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 hover:text-primary-600 transition-colors duration-200">
                        <Link href={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-neutral-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                      >
                        Read Article →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Contact Author CTA */}
              <div className="mt-12 bg-neutral-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Work with {author.name}</h3>
                <p className="text-neutral-600 mb-6">Interested in consulting or collaboration opportunities? Get in touch with our team.</p>
                <Link 
                  href="/contact" 
                  className="inline-block px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Related Authors */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-center">You May Also Be Interested In</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(allAuthors)
              .filter(a => a.id !== author.id)
              .slice(0, 3)
              .map((relatedAuthor, idx) => (
                <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Link href={`/authors/${relatedAuthor.id}`} className="block">
                    <div className="relative h-48 w-full bg-neutral-100">
                      <Image
                        src={relatedAuthor.image}
                        alt={relatedAuthor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 hover:text-primary-600 transition-colors duration-200">
                        {relatedAuthor.name}
                      </h3>
                      <p className="text-primary-600 font-medium mb-4">{relatedAuthor.title}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {relatedAuthor.expertise.slice(0, 2).map((skill, skillIdx) => (
                          <span key={skillIdx} className="bg-neutral-100 text-neutral-700 text-xs px-3 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </Container>
      </section>
    </MainLayout>
  );
} 