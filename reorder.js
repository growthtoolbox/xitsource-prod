const fs = require('fs');

const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Find Sector Grid
const sectorIndex = content.indexOf('{/* Sector Grid (Subsidiaries) */}');
const sectorEndIndex = content.indexOf('</section>', sectorIndex) + 10;
const sectorContent = content.slice(sectorIndex, sectorEndIndex);

// 2. Remove Sector Grid from current position
content = content.slice(0, sectorIndex) + content.slice(sectorEndIndex);

// 3. Find target position: Below the Hero Section and before Partner Bios
const heroEndIndex = content.indexOf('</div>', content.indexOf('{/* Partner Bios */}')) // This will break if Partner bios is missing. Let's just find John Bio
const targetIndex = content.indexOf('{/* John Bio */}');
const containerStart = content.lastIndexOf('<div className="grid grid-cols-1', targetIndex);

// Insert Sector Grid + double newline before the John/Ryan bio grid container
content = content.slice(0, containerStart) + sectorContent + '\n\n' + content.slice(containerStart);

fs.writeFileSync(file, content);
