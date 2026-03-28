# 🔐 Next.js Authentication with HttpOnly Cookies

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![JWT](https://img.shields.io/badge/Auth-JWT-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)
![Status](https://img.shields.io/badge/Status-Active-success)

Secure server-side authentication in **Next.js 16** using **HttpOnly cookies** and **JWT**.

---

## 🚀 Live Demo

👉 https://server-auth-demo.vercel.app/

**Credentials:**

- Email: `admin@example.com`
- Password: `password`

---

## ✨ Features

- 🔐 Secure authentication using **HttpOnly cookies**
- 🧠 JWT-based session management
- 🛡️ Server-side route protection with **Next.js layouts**
- 🔄 Automatic redirects based on authentication state
- 🚪 Login & logout functionality
- ⚡ Built with **Next.js App Router**

---

## 🧩 Tech Stack

- **Framework:** Next.js 16
- **Authentication:** JWT (`jsonwebtoken`)
- **Forms & Validation:** react-hook-form + zod
- **HTTP Client:** axios
- **UI:** Tailwind CSS + shadcn/ui

---

## 🏗️ Project Structure

```text
app/
 ├── api/
 │   └── auth/
 │       ├── login/route.ts
 │       └── logout/route.ts
 ├── dashboard/
 │   ├── layout.tsx
 │   └── page.tsx
 ├── login/
 │   ├── layout.tsx
 │   └── page.tsx
 └── page.tsx

lib/
 ├── auth.ts
 ├── constants.ts
 └── jwt-secret.ts
```

## 🔄 Authentication Flow

1. User submits login form
2. API route validates credentials
3. JWT stored in HttpOnly cookie
4. Cookie sent automatically
5. Server verifies JWT
6. Redirect based on auth

## ⚙️ Getting Started

```bash
git clone https://github.com/amngoyal/server-auth-demo
cd server-auth-demo
npm install
npm run dev
```

Create `.env.local`:

```env
JWT_SECRET=your-long-random-secret
```

## 🔐 Security Best Practices

- Use HttpOnly + Secure cookies
- Store secrets in env variables
- Align JWT expiry with cookie
- Hash passwords (bcrypt / Argon2)
- Add rate limiting
- Consider CSRF protection

## ⚠️ Important

Always verify JWT on the server. Decoding alone is not secure.

## 📚 Blog

👉 Medium Article: [Implementing Secure Server-Side Authentication in Next.js 16 with HttpOnly Cookies](https://medium.com/@amngoyal/implementing-secure-server-side-authentication-in-next-js-16-with-httponly-cookies-9b64461119f4)

## 🤝 Contributing

PRs and suggestions are welcome!

## 📄 License

MIT License
