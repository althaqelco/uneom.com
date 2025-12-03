#!/bin/bash

# Script to fix missing images by copying available alternatives
cd "$(dirname "$0")/.."
PUBLIC_DIR="public/images"

echo "===== UNEOM Image Fix Script ====="
echo "Fixing missing images..."

# Create missing directories
mkdir -p "$PUBLIC_DIR/banners"
mkdir -p "$PUBLIC_DIR/case-studies"
mkdir -p "$PUBLIC_DIR/services"
mkdir -p "$PUBLIC_DIR/locations"
mkdir -p "$PUBLIC_DIR/retail-shops"

# ===== INDUSTRY CATEGORY IMAGES =====

# Aviation
if [ ! -f "$PUBLIC_DIR/Aviation_Uniforms.png" ] || [ $(stat -f%z "$PUBLIC_DIR/Aviation_Uniforms.png" 2>/dev/null || echo 0) -lt 1000 ]; then
  cp "$PUBLIC_DIR/Airline_Crew_Uniform.png" "$PUBLIC_DIR/Aviation_Uniforms.png" 2>/dev/null && echo "Fixed: Aviation_Uniforms.png"
fi

# Education
if [ ! -f "$PUBLIC_DIR/Education_Uniform_School.png" ]; then
  cp "$PUBLIC_DIR/4k-top-view-of-little-asian-students-with-uniforms-reading-book-in-library-together-SBI-351422735.jpg" "$PUBLIC_DIR/Education_Uniform_School.png" 2>/dev/null && echo "Fixed: Education_Uniform_School.png"
fi

# Factory/Manufacturing
if [ ! -f "$PUBLIC_DIR/Factory_Workers_Manufacturing.png" ]; then
  cp "$PUBLIC_DIR/Industrial_Manufacturing_Uniforms .png" "$PUBLIC_DIR/Factory_Workers_Manufacturing.png" 2>/dev/null && echo "Fixed: Factory_Workers_Manufacturing.png"
fi

# Hospitality
if [ ! -f "$PUBLIC_DIR/Hospitality_Uniforms.png" ]; then
  cp "$PUBLIC_DIR/Luxury_Hotel Staff_Uniform.png" "$PUBLIC_DIR/Hospitality_Uniforms.png" 2>/dev/null && echo "Fixed: Hospitality_Uniforms.png"
fi

# Security
if [ ! -f "$PUBLIC_DIR/Security_Uniforms.png" ]; then
  cp "$PUBLIC_DIR/Military Uniform.H03.2k.png" "$PUBLIC_DIR/Security_Uniforms.png" 2>/dev/null && echo "Fixed: Security_Uniforms.png"
fi

# ===== AVIATION IMAGES =====
if [ ! -f "$PUBLIC_DIR/aviation_cabin_crew_formal.jpg" ]; then
  cp "$PUBLIC_DIR/cheerful-airline-workers-standing-in-airfield-unde-2024-10-20-08-49-20-utc.jpg" "$PUBLIC_DIR/aviation_cabin_crew_formal.jpg" 2>/dev/null && echo "Fixed: aviation_cabin_crew_formal.jpg"
fi

# ===== BANNER IMAGES =====
for banner in corporate-attire-banner education-banner graduation-ceremony-banner manufacturing-banner polo-shirts-banner; do
  if [ ! -f "$PUBLIC_DIR/banners/${banner}.jpg" ]; then
    cp "$PUBLIC_DIR/banner-placeholder.jpg" "$PUBLIC_DIR/banners/${banner}.jpg" 2>/dev/null && echo "Fixed: banners/${banner}.jpg"
  fi
done

# ===== CORPORATE IMAGES =====
if [ ! -f "$PUBLIC_DIR/corporate-workwear.jpg" ]; then
  cp "$PUBLIC_DIR/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg" "$PUBLIC_DIR/corporate-workwear.jpg" 2>/dev/null && echo "Fixed: corporate-workwear.jpg"
fi

mkdir -p "$PUBLIC_DIR/corporate"
for corp_img in confidence-boost customer-interaction-saudi uniform-design-saudi; do
  if [ ! -f "$PUBLIC_DIR/corporate/${corp_img}.jpg" ]; then
    cp "$PUBLIC_DIR/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg" "$PUBLIC_DIR/corporate/${corp_img}.jpg" 2>/dev/null && echo "Fixed: corporate/${corp_img}.jpg"
  fi
done

# ===== EDUCATION IMAGES =====
mkdir -p "$PUBLIC_DIR/education"
mkdir -p "$PUBLIC_DIR/education/school-uniforms"
for edu_img in modern-education-uniforms premium-boys-uniform premium-school-uniforms school-uniform-fabric-guide sustainable-school-uniforms; do
  if [ ! -f "$PUBLIC_DIR/education/${edu_img}.jpg" ]; then
    cp "$PUBLIC_DIR/4k-top-view-of-little-asian-students-with-uniforms-reading-book-in-library-together-SBI-351422735.jpg" "$PUBLIC_DIR/education/${edu_img}.jpg" 2>/dev/null && echo "Fixed: education/${edu_img}.jpg"
  fi
done

if [ ! -f "$PUBLIC_DIR/education/school-uniforms/school-uniforms-students-classroom-saudi-arabia-03.webp" ]; then
  cp "$PUBLIC_DIR/4k-top-view-of-little-asian-students-with-uniforms-reading-book-in-library-together-SBI-351422735.jpg" "$PUBLIC_DIR/education/school-uniforms/school-uniforms-students-classroom-saudi-arabia-03.webp" 2>/dev/null && echo "Fixed: education school uniforms webp"
fi

# ===== HOSPITALITY IMAGES =====
mkdir -p "$PUBLIC_DIR/hospitality"
for hosp_img in chef-uniform-professional executive-hospitality-suit hospitality_full_look hospitality_reception hospitality_spa_uniform hospitality_uniform_management premium-chef-uniform; do
  if [ ! -f "$PUBLIC_DIR/hospitality/${hosp_img}.jpg" ]; then
    cp "$PUBLIC_DIR/hospitality_uniform_formal.jpg" "$PUBLIC_DIR/hospitality/${hosp_img}.jpg" 2>/dev/null && echo "Fixed: hospitality/${hosp_img}.jpg"
  fi
done

# ===== INDUSTRIAL IMAGES =====
mkdir -p "$PUBLIC_DIR/industrial"
for ind_img in color-coding-chart color-coding-emergency color-coding-intro esd-hazard-zones esd-monitoring-center future-smart-uniforms heat-resistant-fabric multi-hazard-esd-clothing safety-standards-testing safety-training-color-coding saudi-petrochemical-plant saudi-petrochemical-workers saudi-safety-standards smart-safety-clothing; do
  if [ ! -f "$PUBLIC_DIR/industrial/${ind_img}.jpg" ]; then
    cp "$PUBLIC_DIR/selective-focus-of-two-warehouse-workers-wearing-2024-09-20-08-02-30-utc.jpg" "$PUBLIC_DIR/industrial/${ind_img}.jpg" 2>/dev/null && echo "Fixed: industrial/${ind_img}.jpg"
  fi
done

# ===== MANUFACTURING IMAGES =====
mkdir -p "$PUBLIC_DIR/manufacturing"
for mfg_img in industrial-workwear-detail industrial-zone-uniforms quality-workwear saudi-factory-uniforms vision-2030-sustainable worker-uniforms-textile; do
  if [ ! -f "$PUBLIC_DIR/manufacturing/${mfg_img}.jpg" ]; then
    cp "$PUBLIC_DIR/selective-focus-of-two-warehouse-workers-wearing-2024-09-20-08-02-30-utc.jpg" "$PUBLIC_DIR/manufacturing/${mfg_img}.jpg" 2>/dev/null && echo "Fixed: manufacturing/${mfg_img}.jpg"
  fi
done

# ===== BLOG IMAGES =====
mkdir -p "$PUBLIC_DIR/blog"
for blog_img in bulletproof-protection-technologies corporate-uniform-satisfaction industrial-color-coding industrial-protective-advances industrial-protective-clothing industrial-safety-compliance protective-clothing-advances retail-uniform-impact retail-uniform-selection smart-security-uniforms sustainable-retail-uniforms sustainable-uniforms-2024; do
  if [ ! -f "$PUBLIC_DIR/blog/${blog_img}.jpg" ]; then
    if [ -f "$PUBLIC_DIR/blog/modern-uniform-design-showcase.jpg" ]; then
      cp "$PUBLIC_DIR/blog/modern-uniform-design-showcase.jpg" "$PUBLIC_DIR/blog/${blog_img}.jpg" 2>/dev/null && echo "Fixed: blog/${blog_img}.jpg"
    elif [ -f "$PUBLIC_DIR/blog/sustainable-uniform.jpg" ]; then
      cp "$PUBLIC_DIR/blog/sustainable-uniform.jpg" "$PUBLIC_DIR/blog/${blog_img}.jpg" 2>/dev/null && echo "Fixed: blog/${blog_img}.jpg"
    fi
  fi
done

# ===== SERVICES IMAGES =====
mkdir -p "$PUBLIC_DIR/services"
for svc_img in consultation-meeting measurement-process quality-control; do
  if [ ! -f "$PUBLIC_DIR/services/${svc_img}.jpg" ]; then
    cp "$PUBLIC_DIR/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg" "$PUBLIC_DIR/services/${svc_img}.jpg" 2>/dev/null && echo "Fixed: services/${svc_img}.jpg"
  fi
done

# ===== RETAIL SHOPS IMAGES =====
mkdir -p "$PUBLIC_DIR/retail-shops"
for retail_img in brand-consistency retail-showcase team-unity; do
  if [ ! -f "$PUBLIC_DIR/retail-shops/${retail_img}.jpg" ]; then
    cp "$PUBLIC_DIR/bright-raincoats-hanging-at-a-fashion-store-2024-12-16-06-50-01-utc.jpg" "$PUBLIC_DIR/retail-shops/${retail_img}.jpg" 2>/dev/null && echo "Fixed: retail-shops/${retail_img}.jpg"
  fi
done

# ===== INDUSTRIES DIRECTORY =====
mkdir -p "$PUBLIC_DIR/industries/Factory_Industrial"
mkdir -p "$PUBLIC_DIR/industries/aviation"
mkdir -p "$PUBLIC_DIR/industries/education"

for factory_img in factory-workers-industrial industrial-coverall-detail industrial-coverall-worker; do
  if [ ! -f "$PUBLIC_DIR/industries/Factory_Industrial/${factory_img}.webp" ]; then
    cp "$PUBLIC_DIR/selective-focus-of-two-warehouse-workers-wearing-2024-09-20-08-02-30-utc.jpg" "$PUBLIC_DIR/industries/Factory_Industrial/${factory_img}.webp" 2>/dev/null && echo "Fixed: industries/Factory_Industrial/${factory_img}.webp"
  fi
done

# ===== HERO IMAGES =====
if [ ! -f "$PUBLIC_DIR/hero-shop-uniforms.jpg" ]; then
  cp "$PUBLIC_DIR/hero-healthcare-uniforms.jpg" "$PUBLIC_DIR/hero-shop-uniforms.jpg" 2>/dev/null && echo "Fixed: hero-shop-uniforms.jpg"
fi

# ===== FABRIC SELECTION =====
if [ ! -f "$PUBLIC_DIR/fabric-selection-process.webp" ]; then
  cp "$PUBLIC_DIR/Fabric_Guide.jpg" "$PUBLIC_DIR/fabric-selection-process.webp" 2>/dev/null && echo "Fixed: fabric-selection-process.webp"
fi

# ===== CASE STUDIES =====
mkdir -p "$PUBLIC_DIR/case-studies"
if [ ! -f "$PUBLIC_DIR/case-studies/retail-transformation-before-after.jpg" ]; then
  cp "$PUBLIC_DIR/bright-raincoats-hanging-at-a-fashion-store-2024-12-16-06-50-01-utc.jpg" "$PUBLIC_DIR/case-studies/retail-transformation-before-after.jpg" 2>/dev/null && echo "Fixed: case-studies image"
fi

# ===== RESOURCES =====
mkdir -p "$PUBLIC_DIR/resources"
if [ ! -f "$PUBLIC_DIR/resources/sustainability-banner.jpg" ]; then
  cp "$PUBLIC_DIR/banner-placeholder.jpg" "$PUBLIC_DIR/resources/sustainability-banner.jpg" 2>/dev/null && echo "Fixed: resources/sustainability-banner.jpg"
fi

# ===== LOCATIONS =====
mkdir -p "$PUBLIC_DIR/locations"
if [ ! -f "$PUBLIC_DIR/locations/dammam-industrial.jpg" ]; then
  cp "$PUBLIC_DIR/selective-focus-of-two-warehouse-workers-wearing-2024-09-20-08-02-30-utc.jpg" "$PUBLIC_DIR/locations/dammam-industrial.jpg" 2>/dev/null && echo "Fixed: locations/dammam-industrial.jpg"
fi

echo ""
echo "===== Image fix complete ====="
echo "Checking remaining missing images..."

# Count remaining missing images
cat /tmp/images_used.txt 2>/dev/null | sed 's/^"//' | while read img; do 
  if [ ! -f "public$img" ]; then 
    echo "Still missing: $img"
  fi
done | wc -l








