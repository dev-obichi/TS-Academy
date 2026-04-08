# Library Management System

A full-featured backend API for managing a library system built with **Node.js**, **Express**, and **MongoDB**.

## Features

- User authentication (JWT)
- CRUD operations for books
- Upload book cover images (Cloudinary)
- Borrow and return books
- Automatic email notifications:
  - Welcome emails
  - Borrow confirmation
  - Return confirmation
  - Overdue reminders (coming soon)
- Role-based access (Member & Admin)
- MongoDB with Mongoose ODM

## Tech Stack

- **Backend**: Node.js + Express
- **Database**: MongoDB (Mongoose)
- **File Upload**: Multer + Cloudinary
- **Authentication**: JWT
- **Email**: Nodemailer
- **Environment**: dotenv

## Project Structure
library-system/
├── config/          # Database, Cloudinary, Nodemailer
├── models/          # Mongoose schemas (User, Book, BorrowRecord)
├── controllers/     # Business logic
├── routes/          # API routes
├── middleware/      # Auth & file upload
├── utils/           # Email helper
├── seed.js          # Database seeder
└── server.js
