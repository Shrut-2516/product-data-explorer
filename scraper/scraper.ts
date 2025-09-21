import axios from 'axios';
import { PlaywrightCrawler } from 'crawlee';

const API_URL = 'http://localhost:4000';

// ✅ Utility: Save category but skip duplicate "All Books"
async function saveCategory(title: string) {
  try {
    // Skip posting "All Books" if it already exists
    if (title.toLowerCase() === 'all books') {
      console.log(`⚠️ Skipping category: ${title}`);
      return null;
    }

    const res = await axios.post(`${API_URL}/categories`, { title });
    return res.data;
  } catch (err: any) {
    if (err.response && err.response.status === 409) {
      console.log(`⚠️ Category already exists: ${title}`);
      return null;
    }
    console.error(`❌ Failed to save category: ${title}`, err.message);
    return null;
  }
}

async function saveProduct(product: any) {
  try {
    const res = await axios.post(`${API_URL}/products`, product);
    console.log(`✅ Saved product: ${product.title}`);
    return res.data;
  } catch (err: any) {
    console.error(`❌ Failed to save product: ${product.title}`, err.message);
    return null;
  }
}

const crawler = new PlaywrightCrawler({
  async requestHandler({ page }) {
    console.log(`Visiting: ${page.url()}`);

    // Extract category name
    let category = 'All Books';
    try {
      category = await page.$eval('.breadcrumb li:nth-child(3) a', el => el.textContent?.trim() || 'All Books');
    } catch {
      // fallback if category not found
      category = 'All Books';
    }

    const savedCategory = await saveCategory(category);

    // Extract products
    const products = await page.$$eval('.product_pod', (cards) =>
      cards.map(card => {
        const title = (card.querySelector('h3 a') as HTMLElement)?.getAttribute('title') || 'Untitled';
        const priceText = (card.querySelector('.price_color') as HTMLElement)?.textContent || '£0';
        const price = parseFloat(priceText.replace('£', ''));

        return {
          title,
          description: 'Scraped from books.toscrape.com',
          price,
        };
      })
    );

    // Save each product
    for (const p of products) {
      await saveProduct({
        ...p,
        categoryId: savedCategory ? savedCategory.id : null, // ✅ safe category
      });
    }
  },
});
(async () => {
  await crawler.run(['https://books.toscrape.com/catalogue/page-1.html']);
})();
