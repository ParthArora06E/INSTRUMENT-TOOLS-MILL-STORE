const fs = require('fs');
const path = require('path');

const productsTsPath = path.join(__dirname, 'src', 'data', 'products.ts');
const publicDir = path.join(__dirname, 'public');

let productsTs = fs.readFileSync(productsTsPath, 'utf8');
const match = productsTs.match(/export const products: Product\[\] = (\[.*\]);/s);
const products = eval(match[1]);

let updatedCount = 0;

for (const product of products) {
  // Check if the current image path is valid and not corrupted
  const imgPath = path.join(publicDir, product.image);
  
  // Is it a placeholder? Check if there's a .jpg with 471475 bytes
  const parsed = path.parse(product.image);
  const jpgPath = path.join(publicDir, 'images', parsed.name + '.jpg');
  const jpegPath = path.join(publicDir, 'images', parsed.name + '.jpeg');
  
  let bestImage = product.image;
  
  // If the product image points to a .jpeg, but a .jpg exists and it's the 471KB placeholder OR the user's valid jpg...
  // Let's just point to the .jpg if it exists!
  if (product.image.endsWith('.jpeg')) {
    if (fs.existsSync(jpgPath)) {
      // The user uploaded valid .jpg files earlier, and my placeholder is also .jpg
      bestImage = `/images/${parsed.name}.jpg`;
    }
  } else if (product.image.endsWith('.svg')) {
    if (fs.existsSync(jpgPath)) {
      bestImage = `/images/${parsed.name}.jpg`;
    } else if (fs.existsSync(jpegPath)) {
      bestImage = `/images/${parsed.name}.jpeg`;
    }
  }

  // To bust Next.js cache aggressively, let's append a version string based on current timestamp to ALL images
  // Wait, products.ts doesn't support query string well because Next.js Image component handles it.
  // We can just append `?v=1` to the product.image in products.ts!
  // Wait! Next.js `src` handles query strings, but it's better to just ensure the correct file is used.
  
  if (bestImage !== product.image) {
    product.image = bestImage;
    updatedCount++;
  }
  
  // Aggressively version the image path in the JSON to bust next/image cache
  product.image = product.image.split('?')[0] + '?v=' + Date.now();
}

const tsContent = `export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  slug: string;
  shortDescription: string;
}

export const products: Product[] = ${JSON.stringify(products, null, 2)};

export const categories = Array.from(new Set(products.map(p => p.category)));
`;

fs.writeFileSync(productsTsPath, tsContent);
console.log(`Updated ${updatedCount} extensions and added cache-busting query strings to all products.`);
