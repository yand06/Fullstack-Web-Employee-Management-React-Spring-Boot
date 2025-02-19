# 🛍️ Employee Management
> A Full-Stack Employee Management System using Spring Boot & React  
![Project Status](https://img.shields.io/badge/status-active-success.svg)  
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.0--SNAPSHOT-brightgreen.svg)
![Java](https://img.shields.io/badge/Java-17-orange.svg)  
![React](https://img.shields.io/badge/React-19-blue.svg)  

## 📖 About Project  
This project is a **full-stack** employee management system that allows users to perform CRUD operations on employees.  
The backend is powered by **Spring Boot**, while the frontend is built using **ReactJS** with Bootstrap for styling.  

## ⭐ Main Features  
- 📝 Full CRUD functionality for employee management  
- 🎨 Clean and intuitive user interface with ReactJS  
- 🔒 Secure data handling with MySQL  

## 🛠️ Tech Stack  
### Backend:
- [Spring Boot](https://spring.io/projects/spring-boot) - Backend Framework  
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa) - Data Persistence  
- [MySQL](https://www.mysql.com/) - Database  
- [Maven](https://maven.apache.org/) - Dependency Management  

### Frontend:
- [React 19](https://react.dev/) - Frontend Library  
- [React Router DOM](https://reactrouter.com/) - Client-side Routing  
- [Bootstrap 5](https://getbootstrap.com/) - UI Framework  
- [Axios](https://axios-http.com/) - API Calls  

## 🏁 Getting Started  

### 🔧 Prerequisites  
- **Backend:** JDK 17+, Maven 3.6+, MySQL 8+  
- **Frontend:** Node.js 18+, npm 9+  

### 🚀 Installation  

#### 1️⃣ Clone this repository  
```bash
git clone https://github.com/[username]/employee-management
cd employee-management
```

#### 2️⃣ Backend Setup  
```bash
cd springboot-backend
mvn clean install
mvn spring-boot:run
```

#### 3️⃣ Frontend Setup  
```bash
cd react-frontend
npm install
npm start
```

## 🌐 API Endpoints  
- `GET /employees` - List all employees  
- `POST /employees` - Add a new employee  
- `PUT /employees/{id}` - Update an employee  
- `DELETE /employees/{id}` - Delete an employee  

## 🔧 Development  
```bash
# Run backend tests
mvn test

# Run frontend tests
npm test

# Build the React app
npm run build
```
