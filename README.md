
# 📚 School Library Management API

A RESTful API for managing school library operations with Cloudinary image upload and email notifications.

## 🚀 Features

- CRUD operations for Books, Authors, Students, Attendants
- Borrow/Return system with due dates
- JWT Authentication & Role-based access
- Cloudinary image upload (book covers, author photos)
- Email notifications (welcome, borrow/return confirmations, overdue reminders)

## 🛠️ Tech Stack

Node.js, Express, MongoDB, Cloudinary, Nodemailer, JWT

## 📦 Installation

```bash
git clone <your-repo>
cd library-system
npm install
npm run dev
```

🔧 Environment Variables (.env)

```env
MONGO_URI=mongodb://localhost:27017/library_system
PORT=5000
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

📡 API Endpoints

Resource Methods
/authors GET, POST, PUT, DELETE
/books GET, POST, PUT, DELETE
/students GET, POST, PUT
/attendants GET, POST
/api/auth POST /login, POST /register

Book Actions:

· POST /books/:id/borrow - Borrow a book
· POST /books/:id/return - Return a book

🖼️ Upload Image (Book Cover)

```bash
POST /books
Content-Type: multipart/form-data

Fields: title, isbn, coverImage (file), description, genre
```

📧 Email Notifications

Auto-sent for: Welcome emails, Borrow confirmation, Return confirmation, Overdue reminders

🧪 Testing with Postman

1. Import collection (if available)
2. Set env variable: base_url = http://localhost:5000
3. Login to get token: POST /api/auth/login
4. Add token to headers: Authorization: Bearer <token>

🗄️ Seed Database (Sample Data)

```bash
npm run seed
```

📁 Project Structure

```
library-system/
├── config/         # DB, Cloudinary, Nodemailer configs
├── models/         # Mongoose schemas
├── controllers/    # Business logic
├── routes/         # API endpoints
├── middleware/     # Auth, upload, validation
└── server.js       # Entry point
```

🚀 Deployment

Push to GitHub → Deploy on Render/Heroku → Add env variables

📝 License

MIT

---
