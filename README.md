# 🌐 linkConnect

**linkConnect** is a full-stack web application that lets users create a personalized page to share all their important links. It supports Google login via NextAuth, background uploads to AWS S3, and an analytics dashboard built with Chart.js. Deployed on Vercel.

## 🚀 Features

- 🔗 Centralized personal link-sharing page  
- 🖼️ Upload custom backgrounds (stored in AWS S3)  
- 🔐 Google login with NextAuth  
- 📊 Real-time analytics (clicks, visitors) via Chart.js  
- ⚡ Clean and responsive UI with Tailwind CSS  
- ☁️ Deployed on Vercel with environment-based config  

## 🛠 Tech Stack

**Frontend & Full Stack Framework:**  
- Next.js (App Router)  
- React  
- Tailwind CSS  
- Chart.js  

**Backend:**  
- Node.js  
- MongoDB  
- NextAuth (Google Provider)  
- AWS S3 (image storage)  

## 📁 Folder Structure

/src
├── actions # Server-side actions (e.g., API logic)
├── app # Next.js app router pages
├── components # Reusable UI components
├── libs # Utility functions (e.g., AWS S3, DB, query clients)
├── models # MongoDB models (e.g., User, Link)

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/linkConnect.git
cd linkConnect

2. Install Dependencies

npm install

3. Set Up Environment Variables

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

MONGO_URI=your_mongodb_connection_string
SECRET=your_nextauth_jwt_secret

BUCKET_NAME=your_s3_bucket_name
S3_ACCESS_KEY=your_aws_access_key
S3_SECRET_ACCESS_KEY=your_aws_secret_access_key

NEXT_PUBLIC_URL=http://localhost:3000

4. Run the Development Server

npm run dev
Visit http://localhost:3000 to view the app.

Made with ❤️ by Rachit
