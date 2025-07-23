# Invoice App 💰

A modern and dynamic invoice generator built with React and Vite. This application allows users to add and remove products, calculate totals with taxes, and display invoice and receipt data. Great for practicing modular React development.

## 🚀 Features

- Add and delete products dynamically
- Automatic tax and receipt calculation
- Display formatted invoice number
- Modular components for reusability
- Organized styles per component
- Local JSON support (via `datainfo.json`)

## 🛠️ Built With

- React
- Vite
- JavaScript (ES6+)
- CSS Modules
- JSON (as mock data)

## 📦 Installation & Usage

1. Clone the repository:

```bash
git clone https://github.com/MAGNUNMAX/Invoice.git
cd invoice-app



Install dependencies:
npm install

Start the development server:
npm run dev

Open your browser at:
http://localhost:5173



 Project Structure:
react/
├── node_modules/
├── public/
│ ├── datainfo.json
│ └── img/
├── src/
│ ├── App.jsx
│ ├── main.jsx
│ ├── components/
│ │ ├── add.jsx
│ │ ├── invNum.jsx
│ │ ├── localDB.jsx.jsx
│ │ ├── name.jsx
│ │ ├── product.jsx
│ │ ├── receipt.jsx
│ │ └── tax.jsx
│ ├── CSS/
│ │ ├── add.css
│ │ ├── App.css
│ │ ├── index.css
│ │ ├── invNum.css
│ │ ├── name.css
│ │ ├── product.css
│ │ ├── receipt.css
│ │ └── tax.css
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md



🧠 How It Works
.The invoiceNumber is displayed on screen. If empty, it shows "0000".
.Products are stored in a products array using React state.
.When clicking the delete button, the product is removed using:
 const updateProduct = products.filter((_, index) => index !== indexToRemove);
.This filters out the product with the matching index.


📌 Project Status
✅ Functional
🔄 Possible improvement: store data in LocalStorage or connect to a backend.

📬 Contributions
Have ideas to improve it? Fork the project and open a Pull Request!
Or open an issue to share suggestions.

Made by Pedro Segui
