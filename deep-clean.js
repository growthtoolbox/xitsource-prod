import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = [
  'src/app/industries/residential-homes/page.tsx',
  'src/app/industries/raw-land/page.tsx',
  'src/app/resources/self-storage-facility-investments/page.tsx',
  'src/app/resources/laundromat-business-exit-strategies/page.tsx',
  'src/app/resources/sell-rv-park-california/page.tsx',
  'src/app/resources/mobile-home-community-acquisitions/page.tsx',
  'src/app/resources/exit-laundromat-guide/page.tsx',
  'src/app/resources/raw-land-development-perspective/page.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Remove stray dark mode classes
    content = content.replace(/\bbg-black\b/g, '');
    content = content.replace(/\bbg-slate-950\b/g, '');
    content = content.replace(/\bbg-gray-900\b/g, '');
    content = content.replace(/\btext-white\b/g, '');
    content = content.replace(/\bdark:[^\s"'`]+/g, '');

    // 2. Force 'bg-white text-slate-900' on the main outer container
    // They usually start with `<div className="container mx-auto px-6 py-24 md:py-32`
    content = content.replace(
      /(<div\s+className=["'`]?container mx-auto px-6 py-24 md:py-32([^>"'`]*))(["'`]?\s*>)/g,
      (match, p1, p2, p3) => {
        // If it already has it, don't add again
        let newClasses = p1;
        if (!newClasses.includes('bg-white')) newClasses += ' bg-white';
        if (!newClasses.includes('text-slate-900')) newClasses += ' text-slate-900';
        return newClasses + p3;
      }
    );

    // 3. Ensure the Hero section also has a light background just in case it was explicitly dark.
    // The previous scripts already made them bg-[#52D017]/10 etc., but we make sure they aren't dark.
    // Replace any remaining text-[#1F2937] with text-slate-900 for consistency with the prompt.
    content = content.replace(/text-\[\#1F2937\]/g, 'text-slate-900');
    content = content.replace(/text-\[\#111827\]/g, 'text-slate-900');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed:', file);
    } else {
      console.log('No changes needed or regex missed:', file);
    }
  } else {
    console.error('File not found:', filePath);
  }
});
