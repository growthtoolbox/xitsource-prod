import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src/app', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Backgrounds to #FFFFFF (bg-white)
    content = content.replace(/\bbg-gray-50\b/g, 'bg-white');
    content = content.replace(/\bbg-gray-100\b/g, 'bg-white');
    content = content.replace(/\bbg-gray-800\b/g, 'bg-white');
    content = content.replace(/\bbg-gray-900\b/g, 'bg-white');
    content = content.replace(/\bbg-black\b/g, 'bg-white');
    content = content.replace(/bg-\[\#0a0a0a\]/g, 'bg-white');
    content = content.replace(/bg-\[\#1a1a1a\]/g, 'bg-white');
    content = content.replace(/bg-\[\#050505\]/g, 'bg-white');
    content = content.replace(/bg-\[\#161616\]/g, 'bg-white');
    content = content.replace(/bg-\[\#111111\]/g, 'bg-white');
    content = content.replace(/bg-\[\#f8fafc\]/g, 'bg-white');

    // Text to #111827 (Charcoal) -> replacing #1F2937, gray-900, slate-900
    content = content.replace(/text-\[\#1F2937\]/g, 'text-[#111827]');
    content = content.replace(/text-\[\#1f2937\]/g, 'text-[#111827]');
    content = content.replace(/\btext-gray-900\b/g, 'text-[#111827]');
    content = content.replace(/\btext-gray-800\b/g, 'text-[#111827]');
    content = content.replace(/\btext-slate-900\b/g, 'text-[#111827]');
    content = content.replace(/\btext-slate-800\b/g, 'text-[#111827]');
    content = content.replace(/\btext-black\b/g, 'text-[#111827]');

    // Softer text replacements for secondary (if any)
    content = content.replace(/\btext-gray-600\b/g, 'text-[#111827]/80');
    content = content.replace(/\btext-gray-500\b/g, 'text-[#111827]/70');
    content = content.replace(/\btext-slate-600\b/g, 'text-[#111827]/80');
    content = content.replace(/\btext-slate-500\b/g, 'text-[#111827]/70');

    // Borders to #E5E7EB (border-gray-200)
    content = content.replace(/\bborder-gray-300\b/g, 'border-gray-200');
    content = content.replace(/\bborder-gray-400\b/g, 'border-gray-200');
    content = content.replace(/\bborder-gray-700\b/g, 'border-gray-200');
    content = content.replace(/\bborder-gray-800\b/g, 'border-gray-200');
    content = content.replace(/border-\[\#1a1a1a\]/g, 'border-gray-200');
    content = content.replace(/border-\[\#333333\]/g, 'border-gray-200');
    
    // Clean Look - remove shadows, glows
    content = content.replace(/shadow-glow/g, 'shadow-sm');
    // Drop custom RGB/Hex shadows
    content = content.replace(/shadow-\[[^\]]+\]/g, 'shadow-sm'); 
    
    // Propose prose defaults fixes:
    content = content.replace(/prose-invert/g, ''); // Ensure no invert typography
    
    // Accents (optional, usually they are already #52D017, but make sure hover states match)
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated theme in: ' + filePath);
    }
  }
});

walkDir('./src/components', function(filePath) {
   if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Backgrounds to #FFFFFF (bg-white)
    content = content.replace(/\bbg-gray-50\b/g, 'bg-white');
    content = content.replace(/\bbg-gray-100\b/g, 'bg-white');
    content = content.replace(/\bbg-gray-800\b/g, 'bg-white');
    content = content.replace(/\bbg-gray-900\b/g, 'bg-white');
    content = content.replace(/\bbg-black\b/g, 'bg-white');
    content = content.replace(/bg-\[\#0a0a0a\]/g, 'bg-white');
    content = content.replace(/bg-\[\#1a1a1a\]/g, 'bg-white');
    content = content.replace(/bg-\[\#050505\]/g, 'bg-white');
    content = content.replace(/bg-\[\#161616\]/g, 'bg-white');
    content = content.replace(/bg-\[\#111111\]/g, 'bg-white');
    content = content.replace(/bg-\[\#f8fafc\]/g, 'bg-white');

    // Text to #111827 (Charcoal) -> replacing #1F2937, gray-900, slate-900
    content = content.replace(/text-\[\#1F2937\]/g, 'text-[#111827]');
    content = content.replace(/text-\[\#1f2937\]/g, 'text-[#111827]');
    content = content.replace(/\btext-gray-900\b/g, 'text-[#111827]');
    content = content.replace(/\btext-gray-800\b/g, 'text-[#111827]');
    content = content.replace(/\btext-slate-900\b/g, 'text-[#111827]');
    content = content.replace(/\btext-slate-800\b/g, 'text-[#111827]');
    content = content.replace(/\btext-black\b/g, 'text-[#111827]');

    // Softer text replacements for secondary (if any)
    content = content.replace(/\btext-gray-600\b/g, 'text-[#111827]/80');
    content = content.replace(/\btext-gray-500\b/g, 'text-[#111827]/70');
    content = content.replace(/\btext-slate-600\b/g, 'text-[#111827]/80');
    content = content.replace(/\btext-slate-500\b/g, 'text-[#111827]/70');

    // Borders to #E5E7EB (border-gray-200)
    content = content.replace(/\bborder-gray-300\b/g, 'border-gray-200');
    content = content.replace(/\bborder-gray-400\b/g, 'border-gray-200');
    content = content.replace(/\bborder-gray-700\b/g, 'border-gray-200');
    content = content.replace(/\bborder-gray-800\b/g, 'border-gray-200');
    content = content.replace(/border-\[\#1a1a1a\]/g, 'border-gray-200');
    content = content.replace(/border-\[\#333333\]/g, 'border-gray-200');
    
    // Clean Look - remove shadows, glows
    content = content.replace(/shadow-glow/g, 'shadow-sm');
    // Drop custom RGB/Hex shadows
    content = content.replace(/shadow-\[[^\]]+\]/g, 'shadow-sm'); 
    
    // Propose prose defaults fixes:
    content = content.replace(/prose-invert/g, ''); // Ensure no invert typography
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated theme in: ' + filePath);
    }
   }
});
