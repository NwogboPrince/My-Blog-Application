
# Blog Application

A simple blog application built with Node.js, Express, and EJS for rendering dynamic content. This application allows users to view all articles on a single page, create new posts, edit existing posts, and delete posts.

 LIVE LINK- https://my-blog-application-1.onrender.com/
---

## **Technologies Used**

### **Backend**
- **Node.js**: JavaScript runtime for building the server-side application.
- **Express.js**: Web framework for handling routes and middleware.
- **Body-Parser**: Middleware for parsing incoming request bodies.
- **Moment.js**: Library for formatting dates.

### **Frontend**
- **EJS (Embedded JavaScript)**: Template engine for rendering dynamic HTML.
- **CSS**: Used for styling the application.

### **Development Tools**
- **Git**: Version control system for managing the codebase.
- **Nodemon**: Development tool for automatically restarting the server when changes are detected.

---

## **Features**
1. **View All Articles**:
   - Displays all articles on a single page with their title, content, author, and formatted date.

2. **Create New Posts**:
   - Users can create new blog posts by filling out a form.

3. **Edit Existing Posts**:
   - Users can edit the title and content of existing posts.

4. **Delete Posts**:
   - Users can delete posts from the application.

5. **Responsive Design**:
   - The application is styled with CSS for a clean and user-friendly interface.

---

## **Setup and Installation**

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/blog-application.git
cd blog-application
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Start the Server**
```bash
nodemon index.js
```

### **4. Open in Browser**
Navigate to `http://localhost:3000` in your browser.

---

## **File Structure**
```
Blog Application/
├── public/
│   ├── styles/
│   │   ├── article.css
│   ├── article.js
├── views/
│   ├── partials/
│   │   ├── articles.ejs
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   ├── edit.ejs
│   │   ├── show.ejs
├── index.js
├── package.json
```

---

## **Timeframe**
- **Development Time**: Approximately 2-3 days.
  - **Day 1**: Set up the project structure, install dependencies, and create basic routes.
  - **Day 2**: Implement dynamic rendering with EJS, add CRUD functionality for posts, and style the application.
  - **Day 3**: Debugging, testing, and finalizing the application.

---

## **Challenges Faced**
1. **Dynamic Rendering**:
   - Ensuring all articles are displayed on a single page without requiring an `id`.
   - Solution: Used EJS to iterate over the `articles` array and render all articles dynamically.

2. **Date Formatting**:
   - Formatting dates consistently across the application.
   - Solution: Used `moment.js` on the server side to format dates before passing them to the templates.

3. **Error Handling**:
   - Handling cases where articles or posts were not found.
   - Solution: Added proper error handling with `404` responses.

4. **Styling**:
   - Ensuring a clean and responsive design.
   - Solution: Used CSS for styling and tested the application on different screen sizes.

---

## **Future Improvements**
1. **Database Integration**:
   - Replace in-memory storage with a database like MongoDB or MySQL for persistent data storage.

2. **User Authentication**:
   - Add user authentication to allow users to log in and manage their own posts.

3. **Search and Filter**:
   - Add functionality to search and filter articles by title, author, or date.

4. **Deployment**:
   - Deploy the application to a hosting platform like Heroku, Render, or Vercel.

---

## **License**
This project is licensed under the MIT License.
```
check my profile for my contacts
