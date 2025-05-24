#!/usr/bin/env node

/**
 * Script para auditar la estructura SEO de las páginas
 * Ejecutar con: node scripts/check-seo.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const chalk = require('chalk'); // Asegúrate de instalar este paquete: npm install chalk

// Usar expresiones regulares para extraer encabezados y meta información
const titleRegex = /<title[^>]*>(.*?)<\/title>/i;
const h1Regex = /<h1[^>]*>(.*?)<\/h1>/gi;
const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi;
const canonicalRegex = /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i;
const hreflangRegex = /<link[^>]*rel=["']alternate["'][^>]*hreflang=["']([^"']*)["'][^>]*>/gi;
const metaDescRegex = /<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i;

// Función para contar palabras en un texto
function countWords(text) {
  if (!text) return 0;
  // Eliminar HTML tags si existen
  const cleanText = text.replace(/<\/?[^>]+(>|$)/g, " ");
  // Dividir por espacios y filtrar elementos vacíos
  return cleanText.trim().split(/\s+/).filter(Boolean).length;
}

// Función para extraer texto sin HTML tags
function extractTextContent(html) {
  // Eliminar scripts y estilos
  const contentHtml = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "");

  // Extraer texto sin etiquetas
  return contentHtml.replace(/<\/?[^>]+(>|$)/g, " ").trim();
}

// Función para analizar un archivo HTML
async function analyzeHtmlFile(filePath) {
  try {
    const html = await readFile(filePath, 'utf-8');
    const fileName = path.basename(filePath);
    const dirName = path.dirname(filePath);
    
    // Analizar metadatos
    const titleMatch = html.match(titleRegex);
    const h1Matches = [...html.matchAll(h1Regex)];
    const h2Matches = [...html.matchAll(h2Regex)];
    const canonicalMatch = html.match(canonicalRegex);
    const hreflangMatches = [...html.matchAll(hreflangRegex)];
    const metaDescMatch = html.match(metaDescRegex);
    
    // Extraer texto y contar palabras
    const textContent = extractTextContent(html);
    const wordCount = countWords(textContent);
    const textRatio = textContent.length / html.length;
    
    // Determinar si hay problemas
    const issues = [];
    
    if (!titleMatch) issues.push('Missing title');
    if (h1Matches.length === 0) issues.push('Missing H1');
    if (h1Matches.length > 1) issues.push('Multiple H1 tags');
    if (h2Matches.length === 0) issues.push('Missing H2');
    if (!canonicalMatch) issues.push('Missing canonical');
    if (hreflangMatches.length === 0) issues.push('Missing hreflang tags');
    if (!metaDescMatch) issues.push('Missing meta description');
    if (wordCount < 300) issues.push('Low word count (< 300)');
    if (textRatio < 0.1) issues.push('Low text ratio (< 10%)');
    
    return {
      file: filePath,
      title: titleMatch ? titleMatch[1] : null,
      h1Count: h1Matches.length,
      h1Text: h1Matches.length > 0 ? h1Matches[0][1] : null,
      h2Count: h2Matches.length,
      canonical: canonicalMatch ? canonicalMatch[1] : null,
      hreflangCount: hreflangMatches.length,
      hasMetaDesc: !!metaDescMatch,
      wordCount,
      textRatio: textRatio.toFixed(2),
      issues
    };
  } catch (error) {
    console.error(`Error analyzing ${filePath}:`, error);
    return {
      file: filePath,
      error: error.message,
      issues: ['Error analyzing file']
    };
  }
}

// Función para recorrer directorios y encontrar archivos HTML
async function scanDirectory(directory, results = []) {
  const entries = await readdir(directory);
  
  for (const entry of entries) {
    const entryPath = path.join(directory, entry);
    const entryStat = await stat(entryPath);
    
    if (entryStat.isDirectory()) {
      // Saltar directorios node_modules y .next
      if (entry !== 'node_modules' && entry !== '.next' && entry !== 'out') {
        await scanDirectory(entryPath, results);
      }
    } else if (entry.endsWith('.html') || entry.endsWith('.htm')) {
      const result = await analyzeHtmlFile(entryPath);
      results.push(result);
    }
  }
  
  return results;
}

// Función principal
async function main() {
  try {
    console.log(chalk.blue('🔍 Starting SEO Structure Audit...'));
    
    // Analizar directorio out/ que contiene el resultado del build
    const outDir = path.resolve(process.cwd(), 'out');
    
    // Verificar si el directorio out existe
    try {
      await stat(outDir);
    } catch (error) {
      console.log(chalk.yellow('⚠️ out/ directory not found. Run next build first.'));
      console.log(chalk.gray('Running: npm run build'));
  
      // Opcionalmente, ejecutar el build aquí
      // const { execSync } = require('child_process');
      // execSync('npm run build', { stdio: 'inherit' });
      
    return;
  }
  
    const results = await scanDirectory(outDir);
    
    // Contar problemas
    const problemFiles = results.filter(r => r.issues && r.issues.length > 0);
    const missingH1 = results.filter(r => r.issues && r.issues.includes('Missing H1'));
    const multipleH1 = results.filter(r => r.issues && r.issues.includes('Multiple H1 tags'));
    const missingH2 = results.filter(r => r.issues && r.issues.includes('Missing H2'));
    const missingCanonical = results.filter(r => r.issues && r.issues.includes('Missing canonical'));
    const missingHreflang = results.filter(r => r.issues && r.issues.includes('Missing hreflang tags'));
    const lowWordCount = results.filter(r => r.issues && r.issues.includes('Low word count (< 300)'));
    
    // Mostrar resumen
    console.log(chalk.blue('\n📊 SEO Audit Summary:'));
    console.log(chalk.white(`Total HTML files analyzed: ${results.length}`));
    console.log(chalk.white(`Files with issues: ${problemFiles.length}`));
    console.log(chalk.white(`Files missing H1: ${missingH1.length}`));
    console.log(chalk.white(`Files with multiple H1 tags: ${multipleH1.length}`));
    console.log(chalk.white(`Files missing H2: ${missingH2.length}`));
    console.log(chalk.white(`Files missing canonical: ${missingCanonical.length}`));
    console.log(chalk.white(`Files missing hreflang: ${missingHreflang.length}`));
    console.log(chalk.white(`Files with low word count: ${lowWordCount.length}`));
    
    // Mostrar detalles de problemas
    if (problemFiles.length > 0) {
      console.log(chalk.yellow('\n⚠️ Problem Files:'));
      
      problemFiles.forEach(file => {
        console.log(chalk.red(`\n❌ ${file.file}`));
        console.log(chalk.gray(`   Issues: ${file.issues.join(', ')}`));
        
        if (file.wordCount) {
          console.log(chalk.gray(`   Word count: ${file.wordCount}`));
}

        if (file.h1Text) {
          console.log(chalk.gray(`   H1: ${file.h1Text}`));
    }
  });
    }
    
    console.log(chalk.blue('\n✅ SEO Audit Completed'));
    
  } catch (error) {
    console.error(chalk.red('Error during SEO audit:'), error);
  }
}

main(); 