import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import Layout from '../../../../components/layout/Layout';
import Button from '../../../../components/ui/Button';

// Component for resource cards
const ResourceCard = ({ title, description, image, downloadUrl, isArabic = false }) => (
  <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="relative w-full h-48">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
    </div>
    <div className={`p-4 ${isArabic ? 'text-right' : ''}`}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href={downloadUrl}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        {isArabic ? 'تحميل القالب' : 'Download Template'}
      </a>
    </div>
  </div>
);

// Component for breadcrumbs
const Breadcrumbs = ({ items, rtl = false }) => (
  <nav className="flex mb-5 text-sm" aria-label="Breadcrumb">
    <ol className={`inline-flex items-center space-x-1 ${rtl ? 'space-x-reverse' : ''}`}>
      {items.map((item, index) => (
        <li key={index} className="inline-flex items-center">
          {index > 0 && (
            <span className={`mx-2 text-gray-500 ${rtl ? 'rotate-180' : ''}`}>
              /
            </span>
          )}
          {index === items.length - 1 ? (
            <span className="text-gray-700">{item.label}</span>
          ) : (
            <Link 
              href={item.href} 
              className="text-blue-600 hover:text-blue-800"
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

// Main component for hospital policy templates
export default function HospitalPolicyTemplates() {
  const router = useRouter();
  const { locale } = router.query;
  const isArabic = locale === 'ar';
  
  // Check if the page is Arabic from the path
  useEffect(() => {
    const path = router.asPath;
    const isArabicPath = path.startsWith('/ar/');
    
    if (isArabicPath && locale !== 'ar') {
      router.push(path, path, { locale: 'ar' });
    }
  }, [router]);
  
  // Sample policy templates
  const policyTemplates = [
    {
      id: 1,
      title: "Healthcare Uniform Guidelines Template",
      titleAr: "قالب إرشادات الزي الموحد للرعاية الصحية",
      description: "Comprehensive template for hospital uniform policies including standards for different departments and roles.",
      descriptionAr: "قالب شامل لسياسات الزي الموحد للمستشفيات بما في ذلك معايير الإدارات والأدوار المختلفة.",
      image: "/images/resources/policy-1.jpg",
      downloadUrl: "/downloads/healthcare-uniform-guidelines.pdf"
    },
    {
      id: 2,
      title: "Infection Control Dress Code",
      titleAr: "قواعد اللباس لمكافحة العدوى",
      description: "Policy template focused on infection control requirements for healthcare uniforms and PPE.",
      descriptionAr: "قالب سياسة يركز على متطلبات مكافحة العدوى للأزياء الموحدة ومعدات الحماية الشخصية في الرعاية الصحية.",
      image: "/images/resources/policy-2.jpg",
      downloadUrl: "/downloads/infection-control-dress-code.pdf"
    },
    {
      id: 3,
      title: "Hospital Staff Identification Standards",
      titleAr: "معايير تحديد هوية موظفي المستشفى",
      description: "Template for staff identification policies including badge requirements and uniform color coding.",
      descriptionAr: "قالب لسياسات تحديد هوية الموظفين بما في ذلك متطلبات الشارات وترميز ألوان الزي الموحد.",
      image: "/images/resources/policy-3.jpg",
      downloadUrl: "/downloads/hospital-staff-identification.pdf"
    },
    {
      id: 4,
      title: "Medical Uniform Maintenance Protocol",
      titleAr: "بروتوكول صيانة الزي الطبي الموحد",
      description: "Guidelines for proper laundering, storage, and maintenance of medical uniforms.",
      descriptionAr: "إرشادات للغسيل المناسب والتخزين وصيانة الأزياء الطبية الموحدة.",
      image: "/images/resources/policy-4.jpg",
      downloadUrl: "/downloads/medical-uniform-maintenance.pdf"
    }
  ];
  
  return (
    <Layout>
      <NextSeo
        title={isArabic ? "قوالب سياسات أزياء المستشفى | UNEOM" : "Hospital Uniform Policy Templates | UNEOM"}
        description={isArabic 
          ? "قوالب قابلة للتخصيص لسياسات الزي الموحد في المستشفيات والمؤسسات الطبية. تحميل مجاني لمساعدتك في تنفيذ معايير موحدة."
          : "Customizable templates for hospital and medical institution uniform policies. Free download to help you implement standardized guidelines."
        }
        openGraph={{
          title: isArabic ? "قوالب سياسات أزياء المستشفى | UNEOM" : "Hospital Uniform Policy Templates | UNEOM",
          description: isArabic 
            ? "قوالب قابلة للتخصيص لسياسات الزي الموحد في المستشفيات والمؤسسات الطبية. تحميل مجاني لمساعدتك في تنفيذ معايير موحدة."
            : "Customizable templates for hospital and medical institution uniform policies. Free download to help you implement standardized guidelines.",
          images: [
            {
              url: "/images/resources/hospital-policies-cover.jpg",
              width: 1200,
              height: 630,
              alt: isArabic ? "قوالب سياسات أزياء المستشفى" : "Hospital Uniform Policy Templates",
            },
          ],
        }}
      />
      
      <div className={`container mx-auto py-12 px-4 ${isArabic ? 'rtl' : ''}`}>
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: isArabic ? 'الرئيسية' : 'Home', href: isArabic ? '/ar' : '/' },
            { label: isArabic ? 'الموارد' : 'Resources', href: isArabic ? '/ar/resources' : '/resources' },
            { label: isArabic ? 'قوالب السياسات' : 'Policy Templates', href: isArabic ? '/ar/resources/policy-templates' : '/resources/policy-templates' },
            { label: isArabic ? 'المستشفى' : 'Hospital', href: isArabic ? '/ar/resources/policy-templates/hospital' : '/resources/policy-templates/hospital' },
          ]}
          rtl={isArabic}
        />
        
        {/* Header Section */}
        <div className={`max-w-4xl mx-auto text-center mb-12 ${isArabic ? 'rtl' : ''}`}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {isArabic 
              ? "قوالب سياسات أزياء المستشفى"
              : "Hospital Uniform Policy Templates"
            }
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {isArabic 
              ? "قوالب قابلة للتخصيص لمساعدتك في تطوير سياسات الزي الموحد لمؤسستك الطبية"
              : "Customizable templates to help you develop uniform policies for your medical institution"
            }
          </p>
          <div className="flex justify-center">
            <Link 
              href={isArabic ? "/ar/contact" : "/contact"} 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              {isArabic ? "طلب قالب مخصص" : "Request Custom Template"}
            </Link>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="mb-12">
          <div className={`prose max-w-3xl mx-auto mb-8 ${isArabic ? 'text-right' : ''}`}>
            <h2>
              {isArabic 
                ? "لماذا تحتاج إلى سياسة زي موحد للمستشفى؟"
                : "Why You Need a Hospital Uniform Policy"
              }
            </h2>
            <p>
              {isArabic 
                ? "سياسات الزي الموحد للمستشفى تلعب دورًا مهمًا في الحفاظ على معايير مهنية متسقة، والالتزام بإرشادات مكافحة العدوى، ومساعدة المرضى في التعرف بسهولة على أدوار الموظفين المختلفة. السياسات المكتوبة بوضوح تضمن أن جميع الموظفين يفهمون التوقعات ويلتزمون بمعايير موحدة."
                : "Hospital uniform policies play a crucial role in maintaining consistent professional standards, adhering to infection control guidelines, and helping patients easily identify different staff roles. Clearly written policies ensure all staff understand expectations and adhere to standardized guidelines."
              }
            </p>
            <p>
              {isArabic 
                ? "قوالبنا تم تطويرها بالتعاون مع خبراء الرعاية الصحية لتوفير إطار قابل للتخصيص يمكن تعديله ليناسب احتياجات مؤسستك الخاصة."
                : "Our templates were developed in collaboration with healthcare experts to provide a customizable framework that can be tailored to suit your institution's specific needs."
              }
            </p>
          </div>
          
          {/* Template Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {policyTemplates.map((template) => (
              <ResourceCard
                key={template.id}
                title={isArabic ? template.titleAr : template.title}
                description={isArabic ? template.descriptionAr : template.description}
                image={template.image}
                downloadUrl={template.downloadUrl}
                isArabic={isArabic}
              />
            ))}
          </div>
        </div>
        
        {/* How to Use Section */}
        <div className={`max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg ${isArabic ? 'text-right' : ''}`}>
          <h2 className="text-2xl font-bold mb-4">
            {isArabic ? "كيفية استخدام هذه القوالب" : "How to Use These Templates"}
          </h2>
          <ol className={`list-decimal ${isArabic ? 'mr-5' : 'ml-5'} space-y-2`}>
            <li>
              {isArabic 
                ? "قم بتنزيل القالب الذي يناسب احتياجاتك"
                : "Download the template that suits your needs"
              }
            </li>
            <li>
              {isArabic 
                ? "خصص المحتوى ليعكس متطلبات مؤسستك المحددة"
                : "Customize the content to reflect your institution's specific requirements"
              }
            </li>
            <li>
              {isArabic 
                ? "راجع مع فريق الإدارة وفريق مكافحة العدوى"
                : "Review with management and infection control teams"
              }
            </li>
            <li>
              {isArabic 
                ? "قم بتنفيذ السياسة من خلال التدريب والتواصل الواضح"
                : "Implement the policy through training and clear communication"
              }
            </li>
            <li>
              {isArabic 
                ? "راجع وحدث بانتظام لضمان الامتثال لأحدث المعايير"
                : "Review and update regularly to ensure compliance with the latest standards"
              }
            </li>
          </ol>
        </div>
        
        {/* CTA Section */}
        <div className={`max-w-4xl mx-auto mt-12 p-8 bg-blue-50 rounded-lg ${isArabic ? 'text-right' : ''}`}>
          <h3 className="text-xl font-bold mb-2">
            {isArabic 
              ? "هل تحتاج إلى مساعدة في تنفيذ سياسات الزي الموحد؟"
              : "Need Help Implementing Uniform Policies?"
            }
          </h3>
          <p className="mb-4">
            {isArabic 
              ? "فريق UNEOM من المتخصصين جاهز لمساعدتك في تطوير وتنفيذ حلول زي موحد مخصصة لمنشأتك الطبية."
              : "UNEOM's team of specialists is ready to help you develop and implement customized uniform solutions for your medical facility."
            }
          </p>
          <Link
            href={isArabic ? "/ar/contact" : "/contact"}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            {isArabic ? "تواصل معنا اليوم" : "Contact Us Today"}
          </Link>
        </div>
      </div>
    </Layout>
  );
}

// getStaticProps to provide locale
export async function getStaticProps({ locale }) {
  return {
    props: {
      locale: locale || 'en',
    },
  };
} 