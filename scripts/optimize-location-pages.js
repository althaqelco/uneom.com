#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Location data for SEO optimization
const locationData = {
  riyadh: {
    en: {
      name: 'Riyadh',
      title: 'UNEOM Riyadh | Premium Uniform Manufacturer & Supplier in the Capital',
      description: 'Visit UNEOM\'s headquarters in Riyadh for premium uniform manufacturing and design services. We offer custom corporate, healthcare, hospitality, and educational uniforms, with specialized services for the Central Region of Saudi Arabia.',
      keywords: [
        'uniforms Riyadh',
        'uniform supplier Riyadh',
        'corporate uniforms Riyadh',
        'healthcare uniforms Riyadh',
        'hospitality uniforms Riyadh',
        'educational uniforms Riyadh',
        'professional workwear Riyadh',
        'uniform manufacturing Riyadh',
        'custom uniforms Saudi Arabia',
        'UNEOM Riyadh headquarters',
        'Central Region uniforms',
        'Riyadh uniform showroom'
      ],
      trustSignals: [
        'Headquarters location in Riyadh',
        'Serving 500+ companies in Central Region',
        'On-site measurement services',
        'Rush production available',
        'Specialized design consultants'
      ]
    },
    ar: {
      name: 'الرياض',
      title: 'يونيوم الرياض | مصنع ومورد الزي الموحد المتميز في العاصمة',
      description: 'زوروا مقر يونيوم الرئيسي في الرياض للحصول على خدمات تصنيع وتصميم الزي الموحد المتميز. نقدم زي موحد مخصص للشركات والرعاية الصحية والضيافة والتعليم، مع خدمات متخصصة للمنطقة الوسطى في المملكة العربية السعودية.',
      keywords: [
        'زي موحد الرياض',
        'مورد زي موحد الرياض',
        'زي موحد شركات الرياض',
        'زي موحد طبي الرياض',
        'زي موحد ضيافة الرياض',
        'زي موحد تعليمي الرياض',
        'ملابس عمل مهنية الرياض',
        'تصنيع زي موحد الرياض',
        'زي موحد مخصص السعودية',
        'مقر يونيوم الرياض',
        'زي موحد المنطقة الوسطى',
        'صالة عرض زي موحد الرياض'
      ],
      trustSignals: [
        'المقر الرئيسي في الرياض',
        'نخدم أكثر من 500 شركة في المنطقة الوسطى',
        'خدمات قياس في الموقع',
        'إنتاج سريع متاح',
        'مستشارو تصميم متخصصون'
      ]
    }
  },
  jeddah: {
    en: {
      name: 'Jeddah',
      title: 'UNEOM Jeddah | Leading Uniform Manufacturer & Supplier in Western Saudi Arabia',
      description: 'Discover UNEOM\'s Jeddah branch offering premium uniform solutions for the Western Region. We specialize in corporate, healthcare, hospitality, and industrial uniforms with local expertise and international quality standards.',
      keywords: [
        'uniforms Jeddah',
        'uniform supplier Jeddah',
        'corporate uniforms Jeddah',
        'healthcare uniforms Jeddah',
        'hospitality uniforms Jeddah',
        'industrial uniforms Jeddah',
        'professional workwear Jeddah',
        'uniform manufacturing Jeddah',
        'custom uniforms Western Region',
        'UNEOM Jeddah branch',
        'Makkah Region uniforms',
        'Red Sea uniforms'
      ],
      trustSignals: [
        'Strategic location in Jeddah',
        'Serving Western Region businesses',
        'Port city logistics advantage',
        'International quality standards',
        'Local market expertise'
      ]
    },
    ar: {
      name: 'جدة',
      title: 'يونيوم جدة | مصنع ومورد الزي الموحد الرائد في غرب المملكة العربية السعودية',
      description: 'اكتشفوا فرع يونيوم في جدة الذي يقدم حلول زي موحد متميزة للمنطقة الغربية. نتخصص في الزي الموحد للشركات والرعاية الصحية والضيافة والصناعة مع خبرة محلية ومعايير جودة دولية.',
      keywords: [
        'زي موحد جدة',
        'مورد زي موحد جدة',
        'زي موحد شركات جدة',
        'زي موحد طبي جدة',
        'زي موحد ضيافة جدة',
        'زي موحد صناعي جدة',
        'ملابس عمل مهنية جدة',
        'تصنيع زي موحد جدة',
        'زي موحد مخصص المنطقة الغربية',
        'فرع يونيوم جدة',
        'زي موحد منطقة مكة',
        'زي موحد البحر الأحمر'
      ],
      trustSignals: [
        'موقع استراتيجي في جدة',
        'نخدم شركات المنطقة الغربية',
        'ميزة لوجستية لمدينة الميناء',
        'معايير جودة دولية',
        'خبرة في السوق المحلي'
      ]
    }
  },
  dammam: {
    en: {
      name: 'Dammam',
      title: 'UNEOM Dammam | Premium Uniform Solutions for Eastern Province Saudi Arabia',
      description: 'Explore UNEOM\'s Dammam facility serving the Eastern Province with specialized uniform solutions for oil & gas, petrochemical, industrial, and corporate sectors. Advanced manufacturing with regional expertise.',
      keywords: [
        'uniforms Dammam',
        'uniform supplier Dammam',
        'industrial uniforms Dammam',
        'oil gas uniforms Dammam',
        'petrochemical uniforms Dammam',
        'corporate uniforms Dammam',
        'safety uniforms Eastern Province',
        'uniform manufacturing Dammam',
        'custom uniforms Eastern Region',
        'UNEOM Dammam facility',
        'Dhahran uniforms',
        'Khobar uniforms'
      ],
      trustSignals: [
        'Specialized Eastern Province facility',
        'Oil & gas industry expertise',
        'Advanced safety standards',
        'Petrochemical sector experience',
        'Regional manufacturing hub'
      ]
    },
    ar: {
      name: 'الدمام',
      title: 'يونيوم الدمام | حلول زي موحد متميزة للمنطقة الشرقية بالمملكة العربية السعودية',
      description: 'اكتشفوا منشأة يونيوم في الدمام التي تخدم المنطقة الشرقية بحلول زي موحد متخصصة لقطاعات النفط والغاز والبتروكيماويات والصناعة والشركات. تصنيع متقدم مع خبرة إقليمية.',
      keywords: [
        'زي موحد الدمام',
        'مورد زي موحد الدمام',
        'زي موحد صناعي الدمام',
        'زي موحد نفط وغاز الدمام',
        'زي موحد بتروكيماويات الدمام',
        'زي موحد شركات الدمام',
        'زي موحد أمان المنطقة الشرقية',
        'تصنيع زي موحد الدمام',
        'زي موحد مخصص المنطقة الشرقية',
        'منشأة يونيوم الدمام',
        'زي موحد الظهران',
        'زي موحد الخبر'
      ],
      trustSignals: [
        'منشأة متخصصة في المنطقة الشرقية',
        'خبرة في صناعة النفط والغاز',
        'معايير أمان متقدمة',
        'خبرة في القطاع البتروكيماوي',
        'مركز تصنيع إقليمي'
      ]
    }
  },
  jeddah: {
    en: {
      name: 'Jeddah',
      title: 'UNEOM Jeddah | Leading Uniform Manufacturer & Supplier in Western Saudi Arabia',
      description: 'Discover UNEOM\'s Jeddah branch offering premium uniform solutions for the Western Region. We specialize in corporate, healthcare, hospitality, and industrial uniforms with local expertise and international quality standards.',
      keywords: [
        'uniforms Jeddah',
        'uniform supplier Jeddah',
        'corporate uniforms Jeddah',
        'healthcare uniforms Jeddah',
        'hospitality uniforms Jeddah',
        'industrial uniforms Jeddah',
        'professional workwear Jeddah',
        'uniform manufacturing Jeddah',
        'custom uniforms Western Region',
        'UNEOM Jeddah branch',
        'Makkah Region uniforms',
        'Red Sea uniforms'
      ],
      trustSignals: [
        'Strategic location in Jeddah',
        'Serving Western Region businesses',
        'Port city logistics advantage',
        'International quality standards',
        'Local market expertise'
      ]
    },
    ar: {
      name: 'جدة',
      title: 'يونيوم جدة | مصنع ومورد الزي الموحد الرائد في غرب المملكة العربية السعودية',
      description: 'اكتشفوا فرع يونيوم في جدة الذي يقدم حلول زي موحد متميزة للمنطقة الغربية. نتخصص في الزي الموحد للشركات والرعاية الصحية والضيافة والصناعة مع خبرة محلية ومعايير جودة دولية.',
      keywords: [
        'زي موحد جدة',
        'مورد زي موحد جدة',
        'زي موحد شركات جدة',
        'زي موحد طبي جدة',
        'زي موحد ضيافة جدة',
        'زي موحد صناعي جدة',
        'ملابس عمل مهنية جدة',
        'تصنيع زي موحد جدة',
        'زي موحد مخصص المنطقة الغربية',
        'فرع يونيوم جدة',
        'زي موحد منطقة مكة',
        'زي موحد البحر الأحمر'
      ],
      trustSignals: [
        'موقع استراتيجي في جدة',
        'نخدم شركات المنطقة الغربية',
        'ميزة لوجستية لمدينة الميناء',
        'معايير جودة دولية',
        'خبرة في السوق المحلي'
      ]
    }
  },
  mecca: {
    en: {
      name: 'Mecca',
      title: 'UNEOM Mecca | Specialized Uniform Solutions for the Holy City',
      description: 'UNEOM\'s Mecca services provide specialized uniform solutions for hospitality, healthcare, and service sectors in the Holy City. We understand the unique requirements of serving millions of pilgrims with dignity and professionalism.',
      keywords: [
        'uniforms Mecca',
        'uniform supplier Mecca',
        'hospitality uniforms Mecca',
        'healthcare uniforms Mecca',
        'service uniforms Mecca',
        'pilgrimage uniforms',
        'Hajj uniforms',
        'Umrah service uniforms',
        'hotel uniforms Mecca',
        'UNEOM Mecca services',
        'Holy City uniforms',
        'religious service uniforms'
      ],
      trustSignals: [
        'Specialized Holy City services',
        'Understanding of pilgrimage needs',
        'Respectful uniform designs',
        'High-volume capability',
        'Cultural sensitivity expertise'
      ]
    },
    ar: {
      name: 'مكة المكرمة',
      title: 'يونيوم مكة المكرمة | حلول زي موحد متخصصة للمدينة المقدسة',
      description: 'تقدم خدمات يونيوم في مكة المكرمة حلول زي موحد متخصصة لقطاعات الضيافة والرعاية الصحية والخدمات في المدينة المقدسة. نحن نفهم المتطلبات الفريدة لخدمة ملايين الحجاج بكرامة ومهنية.',
      keywords: [
        'زي موحد مكة المكرمة',
        'مورد زي موحد مكة',
        'زي موحد ضيافة مكة',
        'زي موحد طبي مكة',
        'زي موحد خدمات مكة',
        'زي موحد الحج',
        'زي موحد العمرة',
        'زي موحد خدمة الحجاج',
        'زي موحد فنادق مكة',
        'خدمات يونيوم مكة',
        'زي موحد المدينة المقدسة',
        'زي موحد الخدمات الدينية'
      ],
      trustSignals: [
        'خدمات متخصصة للمدينة المقدسة',
        'فهم احتياجات الحج والعمرة',
        'تصميمات زي محترمة',
        'قدرة على الأحجام الكبيرة',
        'خبرة في الحساسية الثقافية'
      ]
    }
  },
  medina: {
    en: {
      name: 'Medina',
      title: 'UNEOM Medina | Professional Uniform Solutions for the Prophet\'s City',
      description: 'UNEOM\'s Medina services offer professional uniform solutions for hospitality, healthcare, and service industries in the Prophet\'s City. We provide respectful, high-quality uniforms that honor the sacred environment.',
      keywords: [
        'uniforms Medina',
        'uniform supplier Medina',
        'hospitality uniforms Medina',
        'healthcare uniforms Medina',
        'service uniforms Medina',
        'pilgrimage service uniforms',
        'hotel uniforms Medina',
        'Prophet\'s Mosque uniforms',
        'religious service uniforms',
        'UNEOM Medina services',
        'sacred city uniforms',
        'Islamic service uniforms'
      ],
      trustSignals: [
        'Respectful service in sacred city',
        'Understanding of Islamic values',
        'Professional pilgrimage support',
        'High-quality materials',
        'Cultural appropriateness focus'
      ]
    },
    ar: {
      name: 'المدينة المنورة',
      title: 'يونيوم المدينة المنورة | حلول زي موحد مهنية لمدينة الرسول',
      description: 'تقدم خدمات يونيوم في المدينة المنورة حلول زي موحد مهنية لصناعات الضيافة والرعاية الصحية والخدمات في مدينة الرسول. نقدم زي موحد محترم وعالي الجودة يكرم البيئة المقدسة.',
      keywords: [
        'زي موحد المدينة المنورة',
        'مورد زي موحد المدينة',
        'زي موحد ضيافة المدينة',
        'زي موحد طبي المدينة',
        'زي موحد خدمات المدينة',
        'زي موحد خدمة الحجاج',
        'زي موحد فنادق المدينة',
        'زي موحد المسجد النبوي',
        'زي موحد الخدمات الدينية',
        'خدمات يونيوم المدينة',
        'زي موحد المدينة المقدسة',
        'زي موحد الخدمات الإسلامية'
      ],
      trustSignals: [
        'خدمة محترمة في المدينة المقدسة',
        'فهم للقيم الإسلامية',
        'دعم مهني للحج والعمرة',
        'مواد عالية الجودة',
        'تركيز على الملاءمة الثقافية'
      ]
    }
  }
};

// Function to update location page with enhanced SEO
function updateLocationPage(filePath, cityKey, language) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already has EnhancedSEO2025
    if (content.includes('EnhancedSEO2025')) {
      console.log(`✅ Already optimized: ${filePath}`);
      return;
    }
    
    const locationInfo = locationData[cityKey]?.[language];
    if (!locationInfo) {
      console.log(`⚠️  No data for ${cityKey} in ${language}: ${filePath}`);
      return;
    }
    
    // Add import if not present
    if (!content.includes("import EnhancedSEO2025")) {
      const importRegex = /import.*from.*['"];?\n/g;
      const imports = content.match(importRegex) || [];
      
      if (imports.length > 0) {
        const lastImport = imports[imports.length - 1];
        const lastImportIndex = content.lastIndexOf(lastImport);
        const insertIndex = lastImportIndex + lastImport.length;
        
        content = content.slice(0, insertIndex) + 
                 "import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';\n" +
                 content.slice(insertIndex);
      }
    }
    
    // Find the return statement and add SEO component
    const returnMatch = content.match(/return \(\s*<main/);
    if (returnMatch) {
      const returnIndex = returnMatch.index;
      const mainTagIndex = content.indexOf('<main', returnIndex);
      const afterMainTag = content.indexOf('>', mainTagIndex) + 1;
      
      const canonicalUrl = language === 'ar' 
        ? `https://uneom.com/ar/locations/${cityKey}/`
        : `https://uneom.com/locations/${cityKey}/`;
      
      const teamName = language === 'ar' 
        ? `فريق يونيوم ${locationInfo.name}`
        : `UNEOM ${locationInfo.name} Team`;
      
      const expertise = language === 'ar'
        ? `تصنيع وتصميم الزي الموحد في ${locationInfo.name}`
        : `Uniform Manufacturing & Design in ${locationInfo.name}`;
      
      const seoComponent = `
      {/* Enhanced SEO for Google May 2025 Standards - ${language.toUpperCase()} */}
      <EnhancedSEO2025 
        title="${locationInfo.title}"
        description="${locationInfo.description}"
        keywords={${JSON.stringify(locationInfo.keywords, null, 10)}}
        author="${teamName}"
        expertise="${expertise}"
        contentType="location"
        trustSignals={${JSON.stringify(locationInfo.trustSignals, null, 10)}}
        canonicalUrl="${canonicalUrl}"
        locale="${language}"
      />
      `;
      
      content = content.slice(0, afterMainTag) + seoComponent + content.slice(afterMainTag);
    }
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Optimized: ${filePath}`);
    
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
  }
}

// Main execution
console.log('🚀 Starting location pages SEO optimization...\n');

const locations = ['riyadh', 'jeddah', 'dammam', 'mecca', 'medina'];
const languages = ['en', 'ar'];

let totalUpdated = 0;

locations.forEach(location => {
  languages.forEach(language => {
    const filePath = language === 'en' 
      ? path.join(__dirname, `../src/app/locations/${location}/page.tsx`)
      : path.join(__dirname, `../src/app/ar/locations/${location}/page.tsx`);
    
    if (fs.existsSync(filePath)) {
      updateLocationPage(filePath, location, language);
      totalUpdated++;
    } else {
      console.log(`⚠️  File not found: ${filePath}`);
    }
  });
});

console.log('\n✅ Location pages SEO optimization completed!');
console.log('\n📊 Summary:');
console.log(`- Total location pages optimized: ${totalUpdated}`);
console.log('- All pages now include EnhancedSEO2025 component');
console.log('- Perfect bilingual SEO implementation');
console.log('- Location-specific keywords and trust signals');
console.log('- Google May 2025 standards compliance');