// Package the unmodified Three.js exports as a classic script for file:// use.
const fs=require('node:fs');
const source=fs.readFileSync('vendor/three.module.js','utf8');
const match=source.match(/export \{([^}]+)\};\s*$/);if(!match)throw Error('Unexpected Three.js export format');
const names=match[1].split(',').map(x=>x.trim());if(names.some(n=>!/^\w+$/.test(n)))throw Error('Unexpected aliased export');
fs.writeFileSync('vendor/three.offline.js','/* Three.js r169, MIT; see LICENSE-THREE.txt. Classic-script packaging. */\n(function(){\n'+source.slice(0,match.index)+'\nwindow.THREE={'+names.join(',')+'};\n})();');
fs.writeFileSync('models/anatomy-data.js','/* BodyParts3D / DBCLS + Z-Anatomy, CC BY-SA 2.1 JP. See LICENSE-MODEL.txt. Binary unchanged. */\nwindow.ANATOMY_BASE64="'+fs.readFileSync('models/anatomy.glb').toString('base64')+'";\n');
console.log('Offline runtime and anatomy packaged.');
