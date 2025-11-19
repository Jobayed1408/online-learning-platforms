# SkillHub - Learn Smarter, Grow Faster

**Live Site:** [(https://skill-hub-clients-0.netlify.app/)]  

SkillHub is a full-stack online learning platform where users can explore, enroll in, and manage courses while instructors can create and manage their own courses. The platform focuses on smooth interaction, intuitive UI, and efficient data management.

---

## Features

- **User Authentication**: Users can register and log in using Email/Password or Google Authentication. Passwords are validated for security.  
- **Course Management (CRUD)**: Instructors can create, update, view, and delete courses. All courses are stored in MongoDB, and images are uploaded via imgbb.  
- **Enrollment**: Students can enroll in courses, view enrolled courses, and get notifications upon successful enrollment.  
- **Home Page Animations**: Hero banner, popular courses, top instructors, and other sections include interactive animations using Framer Motion and AOS.  
- **Advanced Filtering**: Users can filter courses by category, featured courses, and more.  
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop using Tailwind CSS.  
- **Theme Toggle**: Users can switch between Dark and Light themes.  
- **Dynamic Notifications**: Toast messages notify users of successful or failed actions.  
- **Private Routes & Dashboard**: Authenticated users have access to a personalized dashboard with My Courses, Add Course, My Enrolled Courses, etc.  
- **Loading & 404 Page**: Custom loading spinners while fetching data and a custom 404 page for invalid routes.  

---

## Project Structure

**Client Side**: React + Tailwind CSS + Framer Motion + Axios  
**Server Side**: Node.js + Express + MongoDB + Firebase Authentication  

**Key Pages**:
- Home
- All Courses
- View Course Details
- Add Course
- My Courses
- My Enrolled Courses
- Login / Register
- protected router for unauthorized user

---

## 📦 Dependencies

Below are the main dependencies used in the **SkillHub** Online Learning Platform.

---

### 🚀 Client-Side (React)

| Package | Purpose |
|--------|---------|
| **react** | Core UI library |
| **react-dom** | DOM renderer for React |
| **react-router-dom** | Routing & navigation |
| **vite** | Frontend build tool |
| **tailwindcss** | Styling framework |
| **daisyui** | Prebuilt UI components |
| **framer-motion** | Animations |
| **aos** | Scroll animations |
| **axios** | API requests |
| **@tanstack/react-query** | Data fetching & caching |
| **firebase** | Authentication (Email/Password, Google) |
| **react-hot-toast** | Toast notifications |
| **react-icons** | Icon library |
| **classnames** | Conditional class handling (optional) |

---

### 🛠️ Server-Side (Node + Express)

| Package | Purpose |
|--------|---------|
| **express** | Web server framework |
| **cors** | Handle cross-origin requests |
| **dotenv** | Environment variables |
| **mongodb** | Database driver |
| **mongoose** | MongoDB modeling & schema |
| **firebase-admin** | Token verification for Firebase Auth |
| **jsonwebtoken** | JWT handling (optional) |
| **axios** | Used for imgbb image upload |
| **nodemon** | Auto server restart (development) |

---

### 🧰 Dev Tools

| Package | Purpose |
|--------|---------|
| **postcss** | CSS processing |
| **autoprefixer** | CSS prefixing |
| **morgan** | Request logging (optional) |

---

### 📌 Note
These dependencies may grow as the project evolves, but they include everything required for:
- Authentication  
- CRUD operations  
- UI components  
- Animations  
- Filtering  
- API communication  
- Database interaction  

---



<!-- ## Installation

1. Clone the repositories:  
   ```bash
   git clone [client-repo-url]
   git clone [server-repo-url] -->
