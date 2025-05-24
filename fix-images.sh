#!/bin/bash

echo "Creating missing directories..."
mkdir -p public/images/products/aviation
mkdir -p public/images/industries/corporate
mkdir -p public/images/industries/healthcare
mkdir -p public/images/industries/aviation
mkdir -p public/images/hospitality
mkdir -p public/images/products
mkdir -p public/images/corporate

echo "Copying missing images..."

# Blog images - copy existing ones to missing paths
if [ -f "public/images/blog/sustainable-trends.jpg" ]; then
    cp public/images/blog/sustainable-trends.jpg public/images/education/school-uniform-post-1.jpg 2>/dev/null || echo "Could not copy school-uniform-post-1.jpg"
    cp public/images/blog/sustainable-trends.jpg public/images/education/sustainable-uniform.jpg 2>/dev/null || echo "Could not copy sustainable-uniform.jpg"
fi

# Aviation product images
if [ -f "public/images/aviation/aviation_uniform_airline_main_image.jpg" ]; then
    cp public/images/aviation/aviation_uniform_airline_main_image.jpg public/images/products/aviation/airline-1.jpg
    cp public/images/aviation/aviation_uniform_airline.jpg public/images/products/aviation/airline-2.jpg
    cp public/images/aviation/aviation_uniform_flightـattendants.jpg public/images/products/aviation/airline-3.jpg
fi

# Industry hero images
if [ -f "public/images/Corporate_Uniforms_Business.png" ]; then
    cp public/images/Corporate_Uniforms_Business.png public/images/industries/corporate/hero-corporate-uniforms.jpg
fi

if [ -f "public/images/doctor-SBI-300813580.jpg" ]; then
    cp public/images/doctor-SBI-300813580.jpg public/images/industries/healthcare/hero-healthcare-uniforms.jpg
fi

# Aviation industry images
if [ -f "public/images/cheerful-airline-workers-standing-in-airfield-unde-2024-10-20-08-49-20-utc.jpg" ]; then
    cp public/images/cheerful-airline-workers-standing-in-airfield-unde-2024-10-20-08-49-20-utc.jpg public/images/industries/aviation/customization-aviation-uniforms.jpg
fi

# Corporate product images
if [ -f "public/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg" ]; then
    cp public/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg public/images/products/corporate-shirts-blouses.jpg
    cp public/images/modern-arabic-businessman-SBI-300984397.jpg public/images/products/corporate-suit-executive.jpg
    cp public/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg public/images/products/corporate-polo-shirts.jpg
fi

# Healthcare product images
if [ -f "public/images/doctor-SBI-300813580.jpg" ]; then
    cp public/images/doctor-SBI-300813580.jpg public/images/products/lab-coat.jpg
    cp public/images/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-SBI-322343728.jpg public/images/products/nursing-uniform.jpg
    cp public/images/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-SBI-322343728.jpg public/images/industries/healthcare/fabric-tech-healthcare.jpg
fi

# Hospitality images
if [ -f "public/images/group-of-chefs-standing-with-arms-crossed-in-kitch-2023-11-27-05-01-36-utc.jpg" ]; then
    cp public/images/group-of-chefs-standing-with-arms-crossed-in-kitch-2023-11-27-05-01-36-utc.jpg public/images/hospitality/hospitality_uniform_custom_logo.jpg
    cp public/images/cook-flavoring-his-best-meal-2024-11-29-22-42-39-utc.jpg public/images/hospitality/hospitality_uniform_buttons.jpg
    cp public/images/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg public/images/hospitality/hospitality_uniform_fabric.jpg
    cp public/images/group-of-chefs-standing-with-arms-crossed-in-kitch-2023-11-27-05-01-36-utc.jpg public/images/hospitality/hospitality_uniform_department.jpg
    cp public/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg public/images/hospitality/hospitality_uniform_formal.jpg
    cp public/images/confident-man-in-uniform-with-phone-2025-02-12-01-27-59-utc.jpg public/images/hospitality/hospitality_uniform_concierge.jpg
fi

# Customization and general industry images
if [ -f "public/images/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg" ]; then
    cp public/images/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg public/images/industries/customization-options.jpg
fi

# Create missing favicon
if [ ! -f "public/favicon.ico" ]; then
    # Create a simple favicon using existing logo or placeholder
    if [ -f "public/images/logos/uneom-logo-en.png" ]; then
        cp public/images/logos/uneom-logo-en.png public/favicon.ico 2>/dev/null || echo "Could not create favicon"
    fi
fi

echo "Image fixing completed!"
echo "Summary of actions taken:"
echo "- Created missing directories"
echo "- Copied existing images to missing paths"
echo "- Created fallback images for 404 errors"
echo "- All critical missing images should now be available"