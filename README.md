# 🎬 React Movie Gallery App

## 📌 Project Overview
React Movie Gallery App is a modern and interactive movie browsing application built with React. Users can search for their favorite movies, view detailed information, and save movies to their favorites using local storage. The app is designed with a responsive UI and powered by **The Movie Database (TMDb) API** to provide up-to-date movie details.

---

## 🚀 Features
- 🎥 **Browse Popular Movies**: Fetches trending movies from the TMDb API.
- 🎭 **Search Functionality**: Find movies by title using dynamic search feature.
- ❤️ **Favorites List**: Add movies to a favorites list and persist them with local storage.
- ❌ **Remove from Favorites**: Easily remove movies from your favorites.
- 📝 **Movie Details**: View detailed information, including ratings, description, and release year.
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop screens.
- ⚡ **Fast Performance**: Built with Vite for quick development and loading times.

---

## 📸 Project Screenshots

### 🏠 Home Page
Welcome to the **React Movie Gallery**! Explore and search for your favorite movies.
![Home Page](https://github.com/Mahmud-Alam/react-movie-gallery-app/blob/main/public/images/screenshots/01.png)

### 🔍 Search Feature
Search for movies by title:
- Searching for `Iron Man`:
![Search Result 1](https://github.com/Mahmud-Alam/react-movie-gallery-app/blob/main/public/images/screenshots/02.png)
- Searching for `Iron Man 3`:
![Search Result 2](https://github.com/Mahmud-Alam/react-movie-gallery-app/blob/main/public/images/screenshots/03.png)

### ❤️ Favorite Movies
- Click on the heart icon button to save movies to your **favorites**.
![Favorite Button: Before Clicked](https://github.com/Mahmud-Alam/react-movie-gallery-app/blob/main/public/images/screenshots/04.png)
![Favorite Button: After Clicked](https://github.com/Mahmud-Alam/react-movie-gallery-app/blob/main/public/images/screenshots/05.png)

- Favorite movies are stored in **local storage** and displayed in the **Favorites Page**.
![Favorites Page](https://github.com/Mahmud-Alam/react-movie-gallery-app/blob/main/public/images/screenshots/06.png)

### 🎥 Movie Details
- Click on a movie to view its full details.
![Movie Details Page](https://github.com/Mahmud-Alam/react-movie-gallery-app/blob/main/public/images/screenshots/07.png)

### 📱 Responsive Views
- Fully optimized for all screen sizes:
![Responsive View](https://github.com/Mahmud-Alam/react-movie-gallery-app/blob/main/public/images/screenshots/08.png)
![Responsive View](https://github.com/Mahmud-Alam/react-movie-gallery-app/blob/main/public/images/screenshots/09.png)
![Responsive View](https://github.com/Mahmud-Alam/react-movie-gallery-app/blob/main/public/images/screenshots/10.png)
![Responsive View](https://github.com/Mahmud-Alam/react-movie-gallery-app/blob/main/public/images/screenshots/11.png)

---

## 🏗️ Project Structure
```
src/
 ├── components/
 │   ├── Footer.jsx
 │   ├── MovieCard.jsx
 │   ├── NavBar.jsx
 │
 ├── contexts/
 │   ├── MovieContext.jsx
 │
 ├── pages/
 │   ├── Home.jsx
 │   ├── Favorites.jsx
 │   ├── MovieDetails.jsx
 │
 ├── services/
 │   ├── api.js
 │
 ├── styles/
 │   ├── App.css
 │   ├── Home.css 
 │   ├── Favorites.css
 │   ├── Footer.css
 │   ├── index.css
 │   ├── MovieDetails.css  
 │   ├── MovieCard.css 
 │   ├── NavBar.css 
 │
 ├── utils/
 │   ├── customRound.jsx
 │   ├── Rating.jsx
 │   ├── slugify.jsx 
 │
 ├── App.jsx
 ├── main.jsx
```

---

## 🔧 Installation & Setup
### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository
```sh
git clone https://github.com/Mahmud-Alam/react-movie-gallery-app.git
cd react-movie-gallery-app
```

### Install Dependencies
```sh
npm install
```

### Run the Project
```sh
npm run dev
```
The app will be available at `http://localhost:5173/`.

### Build for Production
```sh
npm run build
```

### Lint the Code
```sh
npm run lint
```

---

## 🌐 Deployment on Vercel
The project is deployed on **Vercel** for fast and reliable hosting.

🔗 **Live Demo:** [Movie Gallery App by Mahmud Alam](https://movie-app-mahmud.vercel.app/)
🔗 **GitHub Repository:** [GitHub](https://github.com/Mahmud-Alam/react-movie-gallery-app)

---

## 🛠️ Technologies Used
- **React 19** - Component-based UI
- **React Router 7** - Navigation and routing
- **TMDb API** - Fetches movie data dynamically
- **Bootstrap Icons** - Icons for UI elements
- **Vite** - Fast development and build tool
- **LocalStorage** - Saves and persists favorite movies
- **ESLint** - Code quality and linting
- **React Hooks** - `useState`, `useEffect`, and `useContext` for state management

---

## 🔗 API Documentation
- **TMDb API:** [https://api.themoviedb.org](https://api.themoviedb.org)
- **Getting Started Guide:** [https://developer.themoviedb.org/docs/getting-started](https://developer.themoviedb.org/docs/getting-started)

---

## 📜 Meta Tags (SEO)
```html
<meta name="description" content="Discover and save your favorite movies with React Movie Gallery App by Mahmud Alam. Browse, search, and explore an extensive collection of movies with a smooth UI.">
<meta name="keywords" content="Mahmud Alam, Movie Gallery, movie app, TMDb API, movie search, film collection, favorite movies">
<meta name="author" content="Mahmud Alam">
<meta name="language" content="English">
<meta name="robots" content="index, follow">
```

---

## 🏆 Author
**Mahmud Alam**  
- Portfolio Website: [Mahmud Alam](https://mahmudalam.com/)
- 📧 mahmudalam.official@gmail.com
- 🔗 **GitHub Profile:** [GitHub](https://github.com/Mahmud-Alam)
- 🔗 **LinkedIn Profile:** [LinkedIn](https://www.linkedin.com/in/mahmudalamofficial/)

---

## 🎉 Acknowledgments
- Thanks to **The Movie Database (TMDb)** for providing free API access.
- Inspired by modern movie discovery platforms for a better user experience.

Enjoy coding! 🚀
