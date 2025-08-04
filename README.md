# 🦷 Dentist Portfolio – Case Study App

A modern portfolio web app for dentists to showcase clinical case studies with image uploads.

## Features

- Upload before/after images using UploadThing
- Store case data with Prisma & PostgreSQL
- Responsive UI built with Tailwind CSS
- Server Actions with Next.js 14

## Tech Stack

Next.js 14 · TypeScript · Tailwind CSS · UploadThing · Prisma · PostgreSQL

## Setup

```bash
git clone https://github.com/your-username/dentist-portfolio.git
cd my-app
npm install
```

### ENV config

DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/dbname
UPLOADTHING_SECRET=your-secret
UPLOADTHING_APP_ID=your-app-id

### run prisma

npx prisma generate
npx prisma migrate dev --name init
