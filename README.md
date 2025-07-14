# 🧑‍💻 Project: Dashboard Admin

This project is a React-based web application for employee management, featuring user authentication, profile editing, and a responsive design with theme switching.

---

## 🚀 Technologies Used

The application is built using the following key technologies:

- **React** – A JavaScript library for building user interfaces.
- **React Router DOM** – For declarative routing in React applications.
- **Tailwind CSS** – A utility-first CSS framework for building modern designs.
- **Vite** – A fast development build tool for modern front-end projects.
- **PostCSS** & **Autoprefixer** – For CSS processing and vendor prefixing.
- **ESLint** – For maintaining code quality and consistency.

---

## ⚙️ Installation and Setup

To get the project up and running on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/clar04/test-aksa

   cd test-aksa-66b9928deb8b36694afc9402a8a72afd5e2250a3

2. **Install dependencies:**

   ```bash
   npm install
   # atau gunakan yarn
   yarn install
   ```

---

## ▶️ Usage

### Development Mode

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` (or another port if 5173 is already in use).

### Build for Production

To create a production-ready build:

```bash
npm run build
# or
yarn build
```



### Preview Production Build

To preview the build locally:

```bash
npm run preview
# or
yarn preview
```

---

## 🔐 Login Credentials

This app includes a simple login mechanism.

* **Username**: `admin`
* **Password**: `password123`

Upon successful login, you'll be redirected to the dashboard view.

---

## ✨ Features

* ✅ **User Authentication** – Basic login/logout with predefined credentials.
* 👥 **Employee Management** – Add, update, and delete employee data.
* 🔎 **Search Functionality** – Real-time filtering by employee name.
* 📄 **Pagination** – Clear navigation for large data sets.
* 📝 **Profile Editing** – Users can edit their profile name.
* 🌓 **Theme Switching** – Switch between light, dark, or system themes.
* 📱 **Responsive Design** – Optimized for mobile, tablet, and desktop.

---

## ☁️ Deployment

This project is deployed on [Vercel](https://testaksa-clara.vercel.app).

---

## Demonstrasi

#### Autentikasi (Tanpa API) & Protected Routes / Access Control


https://github.com/user-attachments/assets/6a280ccb-1827-4622-9d02-f0cbf0992bc9


- Semua halaman selain login harus redirect jika belum login.
- Akses akan otomatis diarahkan ke halaman login jika user belum login.
- Login berhasil jika kredensial sesuai.  
- Login gagal jika kredensial salah.  
- Setelah refresh, user tetap login sampai melakukan logout manual.  
- Nama user tampil di pojok kanan atas.  
- Setelah logout, akses ke semua halaman (kecuali login) akan otomatis diarahkan ke halaman login.
  
---



https://github.com/user-attachments/assets/173fc541-e1e1-47f1-879c-770014588f3f


#### Navbar & Dropdown

- Tidak menggunakan library, dropdown muncul dan hilang saat diklik.
- Navbar responsif dan dapat digunakan dengan baik di perangkat mobile/tablet.

#### Dark/Light Mode

- Tersedia opsi pengaturan mode gelap/terang di UI.
- Saat pertama kali dibuka, mode default mengikuti preferensi OS.
- Jika mode OS berubah, aplikasi ikut berubah.

#### Edit Profile

- Data nama user dapat diubah.
- Setelah diedit, nama di navbar langsung berubah.
- Setelah refresh, nama tetap tersimpan.

---

#### CRUD Lokal (Tanpa API)

https://github.com/user-attachments/assets/1d7cc0ca-3f2b-45a5-9101-a832b658e719


- Semua fitur CRUD berjalan.
- Setelah refresh, data tetap ada.
- Bisa mencari data berdasarkan field tertentu.
- Pagination dibuat tanpa library dan bekerja dengan baik.
- Setelah refresh, tetap berada di halaman dan filter yang sama melalui query string.

---




