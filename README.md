# E-Store React Project

This project is a simple e-commerce web application built using React.
It allows users to browse products, search items, filter by category, add products to cart, and complete checkout after logging in.

The goal of this project was to practice React concepts such as components, routing, context API, API calls, authentication logic, and state management.

---

## Features

* Product list loaded from FakeStore API
* Search products by name
* Filter products by category
* Add to cart
* Remove from cart
* Cart saved in LocalStorage
* Login and Signup pages
* Protected checkout page (login required)
* Dark mode toggle
* Responsive layout
* React Router navigation
* Context API for cart and auth

---

## Technologies Used

* React
* React Router
* Context API
* JavaScript
* CSS
* FakeStore API
* LocalStorage

---

## Project Structure

src/
components/
Navbar.js
Footer.js
ProductCard.js
SearchBar.js
ProtectedRoute.js

context/
CartContext.js
AuthContext.js

pages/
Home.js
Cart.js
Login.js
Signup.js
Checkout.js
ProductDetails.js

api/
productsApi.js

styles/
style.css

App.js
index.js

---

## How to Run the Project

1. Install dependencies

npm install

2. Install axios (for API)

npm install axios

3. Start the project

npm start

The app will run at:

http://localhost:3000

---

## How Login Works

This project uses a simple authentication system.

When user logs in:

* Email is saved in LocalStorage
* User stays logged in after refresh
* Checkout page is protected

This is not a real backend login, only frontend logic for practice.

---

## How Cart Works

Cart uses Context API and LocalStorage.

* Products stay in cart after refresh
* Total price is calculated automatically
* User can remove items

---

## Dark Mode

Dark mode can be toggled from the navbar.
It changes background, cards, buttons, and text colors.

---

## API Used

Fake Store API

https://fakestoreapi.com/products

Products are loaded using axios.

---

## Future Improvements

* Real backend authentication
* Payment integration
* Better UI design
* Product ratings
* Wishlist
* Admin panel

---

## Author

Created by Rishabh Rai
React practice project for learning full frontend workflow.
