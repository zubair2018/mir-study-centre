# 📚 Mir's Study Space — Web App

## 🗂️ FILE STRUCTURE (Save exactly like this in VS Code)

```
mirs-study-space/          ← Your main project folder
│
├── index.html             ← 🏠 Landing Page (Homepage)
├── register.html          ← 📝 Student Registration
├── student-login.html     ← 🔑 Student Login
├── student-portal.html    ← 👤 Student Dashboard
├── admin-login.html       ← 🛡️ Admin Login
├── admin-dashboard.html   ← ⚙️ Admin Panel (Main control panel)
│
├── css/
│   └── style.css          ← 🎨 All styles for the whole website
│
├── js/
│   └── main.js            ← ⚡ JavaScript (navbar, animations, toast)
│
└── images/                ← 🖼️ ADD YOUR IMAGES HERE
    ├── hero-student.png   ← Hero section image (right side of homepage)
    ├── centre-photo.jpg   ← Photo of the study centre
    ├── logo.png           ← Your centre logo (optional)
    └── favicon.ico        ← Browser tab icon (optional)
```

## 🔑 LOGIN CREDENTIALS

**Admin Login:**
- Username: `admin`
- Password: `mir123`
- URL: admin-login.html

**Student Login:**
- Register first at register.html
- Then login with phone number + password

## 🖼️ WHERE TO ADD IMAGES

Open `index.html` and find these comments:
```html
<!-- Replace with: <img src="images/hero-student.png" alt="Students studying" /> -->
<!-- Replace with: <img src="images/centre-photo.jpg" alt="Mir's Study Space" /> -->
```
Just swap the comment with an actual `<img>` tag pointing to your image.

## 🚀 HOW TO RUN

1. Install VS Code extension: **"Live Server"** by Ritwick Dey
2. Right-click on `index.html` → "Open with Live Server"
3. Your website opens at http://127.0.0.1:5500

## 📋 WHAT EACH PAGE DOES

| File | Purpose |
|------|---------|
| index.html | Beautiful landing page with all info |
| register.html | 3-step student registration form |
| student-login.html | Students login with phone + password |
| student-portal.html | Students see their info, fee status, history |
| admin-login.html | Admin secure login |
| admin-dashboard.html | Full admin panel: manage students, fees, payments |

## ⚙️ ADMIN PANEL FEATURES

- **Overview** — Total students, money collected, pending fees
- **All Students** — See/search/filter all students, edit or delete
- **Add Student** — Manually add student with all details
- **Fee Records** — All payments with date, mode (Cash/UPI), reference
- **Record Payment** — Add fee payment for any student

## 💾 DATA STORAGE

Currently uses browser `localStorage` (no server needed!).
For a real deployment, you'd connect to a database like Firebase or MySQL.

## 🔧 TO CHANGE PHONE NUMBER

Open `index.html`, search for `99066XXX20` and replace with real number.
Also update in `student-portal.html` footer section.

## 🎨 TO CHANGE COLORS

Open `css/style.css`, find `:root` at the top:
```css
--primary: #1a3a5c;   ← Main dark blue
--accent: #e8a020;    ← Golden yellow
--accent2: #2ec4b6;   ← Teal green
```
Change these hex codes to any color you want.
