'use client';

import React from 'react';
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function SizeGuideClientPageArabic() {
  const resourceData = {
    locale: 'ar',
    title: 'دليل المقاسات للزي الموحد',
    subtitle: 'قياسات شاملة للحصول على تناسب مثالي لجميع أنواع الزي الموحد',
    heroImage: '/images/services/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg',
    overview: {
      title: 'العثور على المقاس المناسب',
      content: `
        <p class="mb-4">
          الأزياء الموحدة المناسبة لا تعزز المظهر فحسب، بل تساهم أيضًا في الراحة والاحترافية 
          والوظائف. يوفر هذا الدليل الشامل معلومات مفصلة عن المقاسات لجميع فئات الزي الموحد من يونيوم، 
          مما يضمن أن يظهر فريقك ويؤدي بأفضل حالاته.
        </p>
        <p class="mb-4">
          استخدم تعليمات القياس ومخططات المقاسات أدناه لتحديد المقاسات المناسبة لبرنامج الزي الموحد لمؤسستك. 
          بالنسبة للطلبات بالجملة، ضع في اعتبارك طلب عينات مقاسات للتأكد من التناسب المناسب قبل الانتهاء من طلبك.
        </p>
      `
    },
    sections: [
      {
        title: 'كيفية القياس',
        content: `
          <p class="mb-4">للحصول على قياسات دقيقة، نوصي باستخدام شريط قياس مرن واتباع هذه الإرشادات:</p>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">الصدر</h4>
            <p class="mb-2">قم بالقياس حول الجزء الأكمل من الصدر، مع الحفاظ على الشريط أفقيًا.</p>
            <p class="italic text-sm text-neutral-600">للنساء: ارتدي حمالة صدر غير مبطنة عند أخذ هذا القياس.</p>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">الخصر</h4>
            <p>قم بالقياس حول خصرك الطبيعي، مع الحفاظ على الشريط مرتخيًا بشكل مريح.</p>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">الوركين</h4>
            <p>قم بالقياس حول الجزء الأكمل من الوركين، على بُعد حوالي 20 سم أسفل خصرك.</p>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">طول الساق الداخلي</h4>
            <p>قم بالقياس من المنشعب إلى أسفل الساق، حيث تريد أن تستقر الحاشية.</p>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">طول الكم</h4>
            <p>قم بالقياس من وسط الظهر للرقبة، فوق الكتف، وحتى المعصم.</p>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">الرقبة</h4>
            <p>قم بالقياس حول قاعدة الرقبة، حيث سيستقر الياقة.</p>
          </div>
        `,
        image: '/images/services/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg',
      },
      {
        title: 'مخططات المقاسات القياسية',
        content: `
          <p class="mb-6">
            توفر مخططات المقاسات التالية إرشادات عامة. بالنسبة لفئات الزي الموحد الخاصة بصناعات محددة، 
            يرجى الرجوع إلى المخططات المتخصصة أدناه.
          </p>
          
          <h4 class="font-bold text-lg mb-3">ملابس الرجال العلوية (بالبوصة)</h4>
          <div class="overflow-x-auto mb-6">
            <table class="min-w-full bg-white border border-neutral-200">
              <thead class="bg-neutral-50">
                <tr>
                  <th class="px-4 py-2 border border-neutral-200 text-right">المقاس</th>
                  <th class="px-4 py-2 border border-neutral-200 text-right">الصدر</th>
                  <th class="px-4 py-2 border border-neutral-200 text-right">الخصر</th>
                  <th class="px-4 py-2 border border-neutral-200 text-right">الرقبة</th>
                  <th class="px-4 py-2 border border-neutral-200 text-right">الكم</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-4 py-2 border border-neutral-200">S</td>
                  <td class="px-4 py-2 border border-neutral-200">35-37</td>
                  <td class="px-4 py-2 border border-neutral-200">29-31</td>
                  <td class="px-4 py-2 border border-neutral-200">14-14.5</td>
                  <td class="px-4 py-2 border border-neutral-200">32-33</td>
                </tr>
                <tr class="bg-neutral-50">
                  <td class="px-4 py-2 border border-neutral-200">M</td>
                  <td class="px-4 py-2 border border-neutral-200">38-40</td>
                  <td class="px-4 py-2 border border-neutral-200">32-34</td>
                  <td class="px-4 py-2 border border-neutral-200">15-15.5</td>
                  <td class="px-4 py-2 border border-neutral-200">33-34</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border border-neutral-200">L</td>
                  <td class="px-4 py-2 border border-neutral-200">41-43</td>
                  <td class="px-4 py-2 border border-neutral-200">35-37</td>
                  <td class="px-4 py-2 border border-neutral-200">16-16.5</td>
                  <td class="px-4 py-2 border border-neutral-200">34-35</td>
                </tr>
                <tr class="bg-neutral-50">
                  <td class="px-4 py-2 border border-neutral-200">XL</td>
                  <td class="px-4 py-2 border border-neutral-200">44-46</td>
                  <td class="px-4 py-2 border border-neutral-200">38-40</td>
                  <td class="px-4 py-2 border border-neutral-200">17-17.5</td>
                  <td class="px-4 py-2 border border-neutral-200">35-36</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border border-neutral-200">XXL</td>
                  <td class="px-4 py-2 border border-neutral-200">47-49</td>
                  <td class="px-4 py-2 border border-neutral-200">41-43</td>
                  <td class="px-4 py-2 border border-neutral-200">18-18.5</td>
                  <td class="px-4 py-2 border border-neutral-200">36-37</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h4 class="font-bold text-lg mb-3">ملابس النساء العلوية (بالبوصة)</h4>
          <div class="overflow-x-auto mb-6">
            <table class="min-w-full bg-white border border-neutral-200">
              <thead class="bg-neutral-50">
                <tr>
                  <th class="px-4 py-2 border border-neutral-200 text-right">المقاس</th>
                  <th class="px-4 py-2 border border-neutral-200 text-right">الصدر</th>
                  <th class="px-4 py-2 border border-neutral-200 text-right">الخصر</th>
                  <th class="px-4 py-2 border border-neutral-200 text-right">الورك</th>
                  <th class="px-4 py-2 border border-neutral-200 text-right">الكم</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-4 py-2 border border-neutral-200">XS</td>
                  <td class="px-4 py-2 border border-neutral-200">31-32</td>
                  <td class="px-4 py-2 border border-neutral-200">24-25</td>
                  <td class="px-4 py-2 border border-neutral-200">34-35</td>
                  <td class="px-4 py-2 border border-neutral-200">30-30.5</td>
                </tr>
                <tr class="bg-neutral-50">
                  <td class="px-4 py-2 border border-neutral-200">S</td>
                  <td class="px-4 py-2 border border-neutral-200">33-34</td>
                  <td class="px-4 py-2 border border-neutral-200">26-27</td>
                  <td class="px-4 py-2 border border-neutral-200">36-37</td>
                  <td class="px-4 py-2 border border-neutral-200">30.5-31</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border border-neutral-200">M</td>
                  <td class="px-4 py-2 border border-neutral-200">35-36</td>
                  <td class="px-4 py-2 border border-neutral-200">28-29</td>
                  <td class="px-4 py-2 border border-neutral-200">38-39</td>
                  <td class="px-4 py-2 border border-neutral-200">31-31.5</td>
                </tr>
                <tr class="bg-neutral-50">
                  <td class="px-4 py-2 border border-neutral-200">L</td>
                  <td class="px-4 py-2 border border-neutral-200">37-39</td>
                  <td class="px-4 py-2 border border-neutral-200">30-32</td>
                  <td class="px-4 py-2 border border-neutral-200">40-42</td>
                  <td class="px-4 py-2 border border-neutral-200">31.5-32</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border border-neutral-200">XL</td>
                  <td class="px-4 py-2 border border-neutral-200">40-42</td>
                  <td class="px-4 py-2 border border-neutral-200">33-35</td>
                  <td class="px-4 py-2 border border-neutral-200">43-45</td>
                  <td class="px-4 py-2 border border-neutral-200">32-32.5</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        image: '/images/product-placeholder.jpg',
      },
      {
        title: 'المقاسات الخاصة بالصناعات',
        content: `
          <p class="mb-6">
            قد تتطلب الصناعات المختلفة اعتبارات محددة للمقاسات. راجع الإرشادات الخاصة بالصناعة 
            أدناه لبرنامج الزي الموحد الخاص بك.
          </p>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">أزياء الرعاية الصحية</h4>
            <p class="mb-3">غالبًا ما يفضل المتخصصون في الرعاية الصحية تناسبًا أكثر ارتخاءً للحركة والراحة أثناء المناوبات الطويلة.</p>
            <ul class="list-disc pr-5 mb-3">
              <li>ضع في اعتبارك زيادة المقاس للملابس العلوية إذا كانت الحركة الكبيرة مطلوبة</li>
              <li>عادة ما تناسب معاطف المختبر فوق الملابس الأخرى - خذ في الاعتبار الطبقات</li>
              <li>يجب أن تستقر السراويل ذات الأربطة بشكل مريح على الخصر دون أن تكون مقيدة</li>
            </ul>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">أزياء الضيافة</h4>
            <p class="mb-3">غالبًا ما يتطلب موظفو الواجهة في بيئات الضيافة تناسبًا أكثر تفصيلاً للحصول على مظهر أنيق.</p>
            <ul class="list-disc pr-5 mb-3">
              <li>يجب أن تسمح القمصان الرسمية بمساحة بعرض إصبع عند الياقة</li>
              <li>يجب أن تزرر السترات والصدريات بشكل مريح دون شد</li>
              <li>ضع في اعتبارك خيارات التفصيل للحصول على مظهر أكثر تخصيصًا</li>
            </ul>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">ملابس العمل الصناعية</h4>
            <p class="mb-3">السلامة هي الأهم بالنسبة للملابس الصناعية، مع مراعاة معدات الحماية.</p>
            <ul class="list-disc pr-5 mb-3">
              <li>اسمح بمساحة إضافية للأحزمة وأحزمة الأدوات أو معدات السلامة</li>
              <li>يجب أن يكون للأفرهولات طول كافٍ لتغطية الملابس بالكامل</li>
              <li>يجب أن تمتد الأكمام الطويلة إلى المعصم عند مد الذراعين</li>
            </ul>
          </div>
        `,
        image: '/images/services/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg',
      }
    ],
    items: [
      {
        id: 'mens-sizing',
        title: 'دليل مقاسات الرجال',
        description: 'جداول مقاسات مفصلة للزي الموحد للرجال مع إرشادات القياس.',
        image: '/images/services/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg'
      },
      {
        id: 'womens-sizing',
        title: 'دليل مقاسات النساء',
        description: 'جداول مقاسات مفصلة للزي الموحد للنساء مع إرشادات القياس.',
        image: '/images/services/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg'
      },
      {
        id: 'measurement-guide',
        title: 'دليل القياس',
        description: 'تعليمات خطوة بخطوة لأخذ قياسات دقيقة للحصول على أفضل تناسب.',
        image: '/images/services/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg'
      },
      {
        id: 'size-conversion',
        title: 'جدول تحويل المقاسات',
        description: 'جداول تحويل المقاسات بين المعايير الدولية المختلفة.',
        image: '/images/services/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg'
      }
    ],
    relatedResources: [
      {
        title: 'دليل الأقمشة',
        description: 'فهم المواد المختلفة المستخدمة في الزي الموحد وخصائصها.',
        link: '/ar/resources/fabric-guide',
        icon: 'article'
      },
      {
        title: 'طلب عينات المقاسات',
        description: 'احصل على عينات مقاسات لبرنامج الزي الموحد الخاص بك لضمان الملاءمة المثالية.',
        link: '/ar/contact?inquiry=size-samples',
        icon: 'service'
      }
    ],
    cta: {
      title: 'هل تحتاج إلى مساعدة في العثور على المقاس المناسب؟',
      description: 'اتصل بفريق خدمة العملاء لدينا للحصول على إرشادات شخصية حول مقاسات الزي الموحد أو لطلب عينات مقاسات.',
      buttonText: 'التواصل معنا',
      buttonUrl: '/ar/contact?inquiry=sizing'
    }
  };
  
  return <ResourcePageLayout resourceData={resourceData} skipMainLayout={true} />;
} 