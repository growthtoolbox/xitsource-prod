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

const replacements = [
  // Laundromat (the previous working one we used was photo-1545173168-9f1947eebb7f)
  {
    regex: /https:\/\/images\.unsplash\.com\/photo-1545173168-9f1947eebb7f(\?([a-zA-Z0-9_=-]+&?)*)?/g,
    local: '/images/laundromat-hero.jpg'
  },
  // Mobile Home
  {
    regex: /https:\/\/images\.unsplash\.com\/photo-1593301072233-a3b09277026f(\?([a-zA-Z0-9_=-]+&?)*)?/g,
    local: '/images/mobile-home-hero.jpg'
  },
  // Self Storage
  {
    regex: /https:\/\/images\.unsplash\.com\/photo-1590103512980-aa439b7b3967(\?([a-zA-Z0-9_=-]+&?)*)?/g,
    local: '/images/storage-hero.jpg'
  },
  {
    regex: /https:\/\/images\.unsplash\.com\/photo-1582133202029-450f2468f77d(\?([a-zA-Z0-9_=-]+&?)*)?/g,
    local: '/images/storage-hero.jpg'
  },
  // Residential
  {
    regex: /https:\/\/images\.unsplash\.com\/photo-1512917774080-9991f1c4c750(\?([a-zA-Z0-9_=-]+&?)*)?/g,
    local: '/images/residential-hero.jpg'
  }
];

walkDir('./src/app', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    replacements.forEach(r => {
      content = content.replace(r.regex, r.local);
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated images in:', filePath);
    }
  }
});
