<h1 align="center">TrolleyPopStore</h1>

<div align="center">

<h2 align="center">
  <a href="LICENSE">
    <img src="https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/MIT%20License.png" alt="MIT License" />
  </a>
</h2>

<p>The "TrolleyPopStore" is a full-fledged web application Project using MERN. The Project uses HTML, CSS, React.Js, Node.Js, MongoDB, JavaScript,  Redux toolkit, JWT Auth, Invoice Creation, Email Template, and Payment Gateway.</p>

<a href="https://trolley-pop-storemain.vercel.app/" target="_blank"><strong>➥ Live Demo</strong></a>

</div> <br/><br/>

## Table of Contents

- [About](#about)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Road Map](#roadmap)
- [Clone The Project](#clone)
- [Report Issues](#report-issues)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About

"TrolleyPopStore" is a Full Stack E-Commerce Web Application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Designed for a seamless shopping experience, the platform offers powerful features for both customers and administrators, ensuring smooth transactions and efficient store management.

With TrolleyPopStore, we aim to provide a feature-rich, scalable, and secure e-commerce platform that enhances both user experience and store management. 🚀

## Features

- **Feature 1:** 🌐 Full-Stack Web Development – Built with the MERN stack for a robust and scalable e-commerce experience.
- **Feature 2:** 🔑 JWT Authentication – Secure user authentication and authorization using JSON Web Tokens (JWT).
- **Feature 3:** 🛒 Shopping Cart & Order Management – Intuitive cart functionality with real-time order processing.
- **Feature 4:** 📦 Real-Time Inventory Updates – Ensuring accurate stock tracking to prevent overselling.
- **Feature 5:** 📧 Email Templates – Automated order confirmations, shipping notifications, and user communication via email.
- **Feature 6:** ⚙️ CRUD Application – Full Create, Read, Update, Delete (CRUD) functionality for users, products, and orders.
- **Feature 7:** 📜 Invoice Generator – Generate detailed invoices for orders directly from the platform.
- **Feature 8:** 💳 Payment Gateway Integration – Seamless and secure payment processing via popular gateways (Stripe, PayPal, etc.).
- **Feature 9:** 📡 API Development – Well-structured RESTful APIs for handling backend operations efficiently.
- **Feature 10:** ⚡ Redux Toolkit – State management using Redux Toolkit for a smooth and responsive UI.
- **Feature 11:** 🛠️ Admin Panel – Comprehensive admin dashboard to manage users, products, orders, and reports efficiently.
- **Feature 12:** Proper Landing page with categories and New Arrivals.
- **Feature 13:** Product Listing Page.

## Screenshots
- Home Page : 
![](https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/HomePage.png)
![](https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/ListAllProducts.png)
- User Login Page :
![](https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/SignIn.png)
- User SignUp Page :
![](https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/SignUp.png)
- Admin Add Product Page :
![](https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/AdminAddNewProduct.png)
- Admin check Order Page :
![](https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/AdminCheckAllOrders.png)
- Add To Cart Page :
![](https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/AddToCart.png)
![](https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/Cart2.png)
- Check By Category Page :
![](https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/CategoryMen.png)
![](https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/CategoryWomen.png)
![](https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/Categorykids.png)
![](https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/CategoryFootwear.png)
![](https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/CategoryAccerories.png)
<!-- - Shop By Brand :
![](https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/HomePage.png)
![](https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/HomePage.png)
![](https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/HomePage.png)
![](https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/HomePage.png)
![](https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/HomePage.png) -->
- Paypal Payement Integration :
![](https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/PaypalCredentials.png)
![](https://github.com/SorcererChiragsingh/TrolleyPopStore/blob/main/Images/PaypalSelectMethod.png)

## Tech Stack

- Frontend: HTML, CSS, JAVASCRIPT & React.Js
- Backend:  Node JS & Express JS
- Database: MongoDb,cloudinary,Firebase
- Deployment: Vercel


## Roadmap

 - Live Chat Support – Real-time customer support with AI-powered chatbot integration.
 - Dark Mode UI – User-friendly dark mode for a better browsing experience.
 - Multi-Language & Multi-Currency Support – Expand to global markets with localization features.
 - User Reviews and Ratings
 - Personalized Recommendations
 - One-Click Checkout – Streamlined checkout process for faster purchases.

## Clone

To get the project on your local system, use the following commands:

```bash
git clone https://github.com/SorcererChiragsingh/TrolleyPopStore.git
cd TrolleyPopStore
```

## How to Run TrolleyPopStore on Your System 🛠🛠

1️⃣ **Install Dependencies:**

```bash
cd backend
npm install
cd ../frontend
npm install
```

2️⃣ **Setup Environment Variables:**

Create a `.env` file in the `server` directory and add the following:

```env
FRONTEND_URL= 'http://localhost:5173'
# PORT=3000
MONGODB_CONN=""
JWT_SECRET="djfnsndlknjndferutiuerhtfvjndfvncvxbvhyfeyrwuhrqqasdllop" // random alphabet, that can nver be guessed.
NODE_ENV="development"

CLOUDINARY_APP_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""

PayPal_Client_ID=""
Paypal_Client_Secret=""
```

Create a `.env` file in the `client` directory and add the following:

```env
PORT=3000
VITE_API_BASE_URL="http://localhost:3000/api"
VITE_FIREBASE_API=""
```

3️⃣ **Start the Backend Server:**

```bash
cd backend
npm run dev
```

4️⃣ **Start the Frontend Server:**

```bash
cd ../frontend
npm start
```

5️⃣ **Open the Application:**

Go to [http://localhost:3000](http://localhost:3000) in your browser 🚀


## Report Issues
- You can report issues on this project using Github issue.
- You can read more about this from [Github Docs](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue)

## License

- This project is licensed under the MIT License - see the [LICENSE](https://github.com/SorcererChiragsingh/TrolleyPopStore?tab=MIT-1-ov-file) file for details.
- The project Book Shelf Emporium is packaged and distributed using the [MIT License](https://choosealicense.com/licenses/mit/) which allows for commercial use, distribution, modification and private use provided that all copies of the software contain the same license and copyright.

## Acknowledgements

- A passion project by [Chirag](www.linkedin.com/in/chirag-singh-148993279)