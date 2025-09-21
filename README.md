📚 Product Data Explorer

A full-stack application that scrapes product data from Books to Scrape
, stores it in a database, and displays it in a frontend UI.

🛠 Tech Stack

Scraper: Node.js + Playwright + Crawlee

Backend: NestJS + TypeORM + SQLite

Frontend: React + Vite + Tailwind

⚡ Features

✅ Scrapes book data (title, price, category) from books.toscrape.com
✅ Saves categories + products into the backend database
✅ REST API for products, categories, and reviews
✅ Frontend UI with categories and product listings
✅ Support for adding reviews

🚀 How to Run
1. Clone repo
git clone <your-repo-url>
cd product-data-explorer

2. Run the scraper
cd scraper
npm install
npm run build && npm run scrape


This will scrape books & categories and send them to your backend API.

Make sure backend is running before or after depending on your workflow (see below).

3. Run the backend
cd backend/backend-app
npm install
npm run start:dev


Runs on http://localhost:4000

Endpoints:

GET /categories → list categories

GET /products → list products

POST /reviews → add review

4. Run the frontend
cd frontend
npm install
npm run dev


Runs on http://localhost:5173

UI will show categories + products.

📂 Project Structure
product-data-explorer/
│
├── scraper/              # Crawlee + Playwright scraper
├── backend/
│   └── backend-app/      # NestJS backend + TypeORM
└── frontend/             # React + Vite frontend

📝 Notes

Always run scraper after backend is ready so data can be saved.

The "All Books" category is skipped to avoid duplicates.

SQLite database auto-creates tables on first run.

📸 Demo

Backend: API returns JSON of categories/products.

![backend-categories](image.png)

![backend-products](image.png)

Frontend: UI shows categories and product listings.

![frontend-categories](image.png)

Scraper: Logs each page scrape + API POST confirmations.

![scrapper-logs](image.png)
