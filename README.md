<img width="1898" height="940" alt="Screenshot 2026-02-03 104924" src="https://github.com/user-attachments/assets/dacffba4-8d2b-498e-af00-a41fcfd298b6" />

🛍️ React Product Cart Application

This is a React-based product listing and cart application.
It fetches product data from an API, displays products using React-Bootstrap, and allows users to add items to a cart with quantity management.

🚀 Features


Fetch products from REST API

Display products in responsive cards

Add products to cart

Increase quantity for existing cart items

Cart modal with product list

Loading & error handling

Custom reusable HTTP hook

Clean UI using React-Bootstrap

🧰 Technologies Used

React

React Hooks (useState, useEffect)

Axios

Custom Hook (useHttp)

React-Bootstrap

Bootstrap

REST API

JavaScript (ES6)

📁 Project Structure
src
│── components
│   ├── Product.jsx
│   ├── Navbar.jsx
│   ├── CartModal.jsx
│   ├── Loading.jsx
│   └── Error.jsx
│
│── hooks
│   └── http.js
│
│── App.jsx
│── main.jsx

🔗 API Used
GET http://localhost:5000/products


Expected product object format:

{
  "id": 1,
  "name": "Product Name",
  "description": "Product description",
  "price": 999,
  "image": "image_url"
}

🛒 Cart Functionality

When Add to Cart is clicked:

If product already exists → quantity increases

If new product → added with quantity = 1

Cart count is displayed in the navbar

Cart opens in a modal

Option to clear cart

⏳ Loading & Error Handling

Loading component shown while fetching data

Error component shown if API fails or returns invalid data

Managed using a custom useHttp hook

▶️ How to Run the Project

Clone the repository

git clone <repository-url>


Install dependencies

npm install


Start the backend server (example using json-server)

json-server --watch db.json --port 5000


Start the React app

npm run dev

🎨 UI Library

React-Bootstrap components used:

Container

Row / Col

Card

Button

Modal

Navbar

📌 Future Improvements

Remove alert and show toast notification

Persist cart using localStorage

Add product details page

Add checkout functionality

Authentication (Login / Signup)
