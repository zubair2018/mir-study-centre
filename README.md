# Mir's Study Space – Web App

This is a web application for Mir's Study Space study centre.  
It has a public website, a student portal, and an admin dashboard for managing students and fees.


## 2. How to run locally

1. Install VS Code (optional but recommended).
2. Open the project folder in VS Code.
3. Use the **Live Server** extension, or open `index.html` directly in your browser.
4. For best results, open `admin-login.html` and `student-login.html` through Live Server so all paths work correctly.

## 3. Main features

- Landing page with information about Mir's Study Space. 
- Student registration form for adding new students. 
- Student login with email and date-of-birth password. 
- Student portal showing profile, class, fee status, and payment history. 
- Admin login to secure the admin dashboard. 
- Admin dashboard to:
  - View total students and fee statistics.
  - View, search, and edit students.
  - Add new students.
  - Record fee payments and see payment history.

## 4. Firebase

The app uses Firebase Firestore for storing students, admins, and fee history.

- Firebase is initialized in `js/firebase-config-prod.js`.
- The admin dashboard and student portal read and write data from the `students` and `admins` collections.

Make sure your Firestore rules allow the reads and writes you need.

## 5. Deployment

You can deploy this project to any static hosting service (for example, Vercel).  
Upload the same folder structure shown above so all pages, CSS, JS, and Firebase config load correctly.