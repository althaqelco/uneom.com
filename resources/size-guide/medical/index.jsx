import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import Layout from '../../../../components/layout/Layout';
import Button from '../../../../components/ui/Button';

// Component for size table
const SizeTable = ({ columns, rows, caption, isArabic = false }) => (
  <div className="overflow-x-auto mb-8">
    <table className="min-w-full divide-y divide-gray-200">
      {caption && (
        <caption className={`text-lg font-medium mb-2 ${isArabic ? 'text-right' : 'text-left'}`}>
          {caption}
        </caption>
      )}
      <thead className="bg-gray-50">
        <tr>
          {columns.map((column, index) => (
            <th 
              key={index}
              scope="col"
              className={`px-6 py-3 text-sm font-semibold ${isArabic ? 'text-right' : 'text-left'}`}
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            {row.map((cell, cellIndex) => (
              <td 
                key={cellIndex}
                className={`px-6 py-4 text-sm ${isArabic ? 'text-right' : 'text-left'}`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
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

// Main component for medical size guide
export default function MedicalSizeGuide() {
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
  
  // Define sample size tables
  const medicalScrubsColumns = isArabic 
    ? ['المقاس', 'الصدر (سم)', 'الخصر (سم)', 'الورك (سم)']
    : ['Size', 'Chest (cm)', 'Waist (cm)', 'Hip (cm)'];
    
  const medicalScrubsRows = [
    ['XS', '86-91', '68-73', '94-99'],
    ['S', '91-96', '73-78', '99-104'],
    ['M', '96-101', '78-83', '104-109'],
    ['L', '101-106', '83-88', '109-114'],
    ['XL', '106-114', '88-96', '114-122'],
    ['2XL', '114-122', '96-104', '122-130'],
    ['3XL', '122-130', '104-112', '130-138'],
    ['4XL', '130-138', '112-120', '138-146']
  ];
  
  const labCoatColumns = isArabic 
    ? ['المقاس', 'الطول (سم)', 'الصدر (سم)', 'الكتف (سم)', 'طول الكم (سم)']
    : ['Size', 'Length (cm)', 'Chest (cm)', 'Shoulder (cm)', 'Sleeve (cm)'];
    
  const labCoatRows = [
    ['XS', '84', '98', '42', '59'],
    ['S', '86', '102', '44', '60'],
    ['M', '88', '108', '46', '61'],
    ['L', '90', '114', '48', '62'],
    ['XL', '92', '120', '50', '63'],
    ['2XL', '94', '126', '52', '64'],
    ['3XL', '96', '132', '54', '65']
  ];
  
  const surgicalGownColumns = isArabic 
    ? ['المقاس', 'الطول (سم)', 'الصدر (سم)', 'الكتف (سم)']
    : ['Size', 'Length (cm)', 'Chest (cm)', 'Shoulder (cm)'];
    
  const surgicalGownRows = [
    ['Universal S', '115', '130', '46'],
    ['Universal M', '120', '140', '48'],
    ['Universal L', '125', '150', '50'],
    ['Universal XL', '130', '160', '52']
  ];
  
  return (
    <Layout>
      <NextSeo
        title={isArabic ? "دليل مقاسات الزي الطبي | UNEOM" : "Medical Uniform Size Guide | UNEOM"}
        description={isArabic 
          ? "دليل شامل لمقاسات الزي الطبي بما في ذلك البدلات الجراحية ومعاطف المختبر والزي الطبي. جداول المقاسات التفصيلية للرجال والنساء."
          : "Comprehensive guide to medical uniform sizing including scrubs, lab coats, and surgical gowns. Detailed size charts for men and women."
        }
        openGraph={{
          title: isArabic ? "دليل مقاسات الزي الطبي | UNEOM" : "Medical Uniform Size Guide | UNEOM",
          description: isArabic 
            ? "دليل شامل لمقاسات الزي الطبي بما في ذلك البدلات الجراحية ومعاطف المختبر والزي الطبي. جداول المقاسات التفصيلية للرجال والنساء."
            : "Comprehensive guide to medical uniform sizing including scrubs, lab coats, and surgical gowns. Detailed size charts for men and women.",
          images: [
            {
              url: "/images/resources/medical-uniform-sizing.jpg",
              width: 1200,
              height: 630,
              alt: isArabic ? "دليل مقاسات الزي الطبي" : "Medical Uniform Size Guide",
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
            { label: isArabic ? 'دليل المقاسات' : 'Size Guide', href: isArabic ? '/ar/resources/size-guide' : '/resources/size-guide' },
            { label: isArabic ? 'طبي' : 'Medical', href: isArabic ? '/ar/resources/size-guide/medical' : '/resources/size-guide/medical' },
          ]}
          rtl={isArabic}
        />
        
        {/* Header Section */}
        <div className={`max-w-4xl mx-auto text-center mb-12 ${isArabic ? 'rtl' : ''}`}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {isArabic 
              ? "دليل مقاسات الزي الطبي"
              : "Medical Uniform Size Guide"
            }
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {isArabic 
              ? "جداول مقاسات شاملة للزي الطبي للمساعدة في اختيار المقاس المناسب لفريقك"
              : "Comprehensive size charts for medical uniforms to help you choose the right fit for your team"
            }
          </p>
          <div className="flex justify-center">
            <Link 
              href={isArabic ? "/ar/contact" : "/contact"} 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              {isArabic ? "طلب قياسات مخصصة" : "Request Custom Sizing"}
            </Link>
          </div>
        </div>
        
        {/* Size Guide Info */}
        <div className={`max-w-4xl mx-auto mb-12 ${isArabic ? 'text-right' : ''}`}>
          <div className="prose max-w-none mb-8">
            <h2>
              {isArabic 
                ? "كيفية استخدام جداول المقاسات"
                : "How to Use These Size Charts"
              }
            </h2>
            <p>
              {isArabic 
                ? "جداول المقاسات التالية هي دليل عام. للحصول على أفضل النتائج، نوصي بأخذ قياسات دقيقة قبل الطلب. إذا كانت القياسات بين مقاسين، نقترح اختيار المقاس الأكبر للحصول على تناسب أكثر راحة."
                : "The following size charts are a general guide. For best results, we recommend taking accurate measurements before ordering. If measurements fall between two sizes, we suggest selecting the larger size for a more comfortable fit."
              }
            </p>
            <p>
              {isArabic 
                ? "جميع القياسات بالسنتيمتر. للمقاسات المخصصة أو متطلبات محددة، يرجى الاتصال بفريق خدمة العملاء لدينا."
                : "All measurements are in centimeters. For custom sizing or specific requirements, please contact our customer service team."
              }
            </p>
          </div>
          
          {/* How to Measure Section */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold mb-4">
              {isArabic ? "كيفية أخذ القياسات" : "How to Take Measurements"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">
                      {isArabic ? "الصدر:" : "Chest:"}
                    </span>
                    <span>
                      {isArabic 
                        ? "قم بقياس أوسع جزء من صدرك، مع إبقاء شريط القياس أفقيًا تحت الإبطين."
                        : "Measure the widest part of your chest, keeping the measuring tape horizontal under the armpits."
                      }
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">
                      {isArabic ? "الخصر:" : "Waist:"}
                    </span>
                    <span>
                      {isArabic 
                        ? "قم بقياس محيط خصرك عند أضيق نقطة، عادة عند السرة."
                        : "Measure around your natural waistline at the narrowest point, usually at the navel."
                      }
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">
                      {isArabic ? "الورك:" : "Hip:"}
                    </span>
                    <span>
                      {isArabic 
                        ? "قم بقياس أوسع جزء من وركيك، مع الوقوف وقدميك معًا."
                        : "Measure the widest part of your hips, standing with your feet together."
                      }
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">
                      {isArabic ? "الطول:" : "Length:"}
                    </span>
                    <span>
                      {isArabic 
                        ? "قم بقياس من أعلى الكتف إلى الطول المطلوب (عادة منتصف الركبة للمعاطف البيضاء)."
                        : "Measure from the top of the shoulder to the desired length (typically mid-knee for lab coats)."
                      }
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">
                      {isArabic ? "الكتف:" : "Shoulder:"}
                    </span>
                    <span>
                      {isArabic 
                        ? "قم بقياس من حافة كتف إلى آخر."
                        : "Measure from one shoulder edge to the other."
                      }
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">
                      {isArabic ? "طول الكم:" : "Sleeve:"}
                    </span>
                    <span>
                      {isArabic 
                        ? "قم بقياس من كتفك إلى المعصم مع الذراع مستقيمة."
                        : "Measure from your shoulder to your wrist with your arm straight."
                      }
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Size Tables */}
          <div className="space-y-12">
            {/* Medical Scrubs Size Chart */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                {isArabic ? "جدول مقاسات الزي الطبي (Scrubs)" : "Medical Scrubs Size Chart"}
              </h3>
              <p className="mb-4">
                {isArabic 
                  ? "جدول المقاسات هذا للزي الطبي الأساسي (العلوي والسفلي). القياسات هي نفسها للرجال والنساء."
                  : "This size chart is for basic medical scrubs (tops and pants). Measurements are the same for men and women."
                }
              </p>
              <SizeTable 
                columns={medicalScrubsColumns}
                rows={medicalScrubsRows}
                caption={isArabic ? "مقاسات الزي الطبي" : "Medical Scrubs Sizes"}
                isArabic={isArabic}
              />
            </div>
            
            {/* Lab Coat Size Chart */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                {isArabic ? "جدول مقاسات معطف المختبر" : "Lab Coat Size Chart"}
              </h3>
              <p className="mb-4">
                {isArabic 
                  ? "جدول المقاسات هذا مناسب لمعاطف المختبر القياسية بطول الركبة."
                  : "This size chart is applicable for standard knee-length lab coats."
                }
              </p>
              <SizeTable 
                columns={labCoatColumns}
                rows={labCoatRows}
                caption={isArabic ? "مقاسات معطف المختبر" : "Lab Coat Sizes"}
                isArabic={isArabic}
              />
            </div>
            
            {/* Surgical Gown Size Chart */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                {isArabic ? "جدول مقاسات الرداء الجراحي" : "Surgical Gown Size Chart"}
              </h3>
              <p className="mb-4">
                {isArabic 
                  ? "الأردية الجراحية عادة ما تكون بمقاسات عامة تناسب مجموعة من الأحجام."
                  : "Surgical gowns typically come in universal sizes that fit a range of body types."
                }
              </p>
              <SizeTable 
                columns={surgicalGownColumns}
                rows={surgicalGownRows}
                caption={isArabic ? "مقاسات الرداء الجراحي" : "Surgical Gown Sizes"}
                isArabic={isArabic}
              />
            </div>
          </div>
        </div>
        
        {/* Additional Information */}
        <div className={`max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg ${isArabic ? 'text-right' : ''}`}>
          <h3 className="text-xl font-semibold mb-4">
            {isArabic ? "معلومات إضافية" : "Additional Information"}
          </h3>
          <div className="prose max-w-none">
            <p>
              {isArabic 
                ? "قد تختلف المقاسات قليلاً حسب الشركة المصنعة والتصميم المحدد. إذا كان لديك أي أسئلة حول المقاسات أو تحتاج إلى مساعدة في اختيار المقاس المناسب، فلا تتردد في الاتصال بفريق خدمة العملاء لدينا."
                : "Sizes may vary slightly depending on manufacturer and specific design. If you have any questions about sizing or need assistance in selecting the appropriate size, please don't hesitate to contact our customer service team."
              }
            </p>
            
            <h4>
              {isArabic ? "ملاحظات حول المقاسات:" : "Sizing Notes:"}
            </h4>
            <ul>
              <li>
                {isArabic 
                  ? "لمقاسات الأطفال والصغار، يرجى الاتصال بفريقنا للحصول على جداول مقاسات مخصصة."
                  : "For pediatric and junior sizes, please contact our team for specialized size charts."
                }
              </li>
              <li>
                {isArabic 
                  ? "نقدم أيضًا خدمات التعديل والخياطة المخصصة للمؤسسات الطبية الكبيرة."
                  : "We also offer alteration and custom tailoring services for larger medical institutions."
                }
              </li>
              <li>
                {isArabic 
                  ? "للطلبات الكبيرة، نوصي بطلب مجموعة من المقاسات المختلفة لاستيعاب جميع أعضاء الفريق."
                  : "For bulk orders, we recommend ordering a range of different sizes to accommodate all team members."
                }
              </li>
            </ul>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className={`max-w-4xl mx-auto mt-12 p-8 bg-blue-50 rounded-lg ${isArabic ? 'text-right' : ''}`}>
          <h3 className="text-xl font-bold mb-2">
            {isArabic 
              ? "هل تحتاج إلى مساعدة في العثور على المقاس المناسب؟"
              : "Need Help Finding the Right Size?"
            }
          </h3>
          <p className="mb-4">
            {isArabic 
              ? "فريق UNEOM من المتخصصين جاهز لمساعدتك في العثور على المقاس المثالي لفريقك الطبي."
              : "UNEOM's team of specialists is ready to help you find the perfect fit for your medical team."
            }
          </p>
          <Link
            href={isArabic ? "/ar/contact" : "/contact"}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            {isArabic ? "اتصل بنا للمساعدة" : "Contact Us for Assistance"}
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