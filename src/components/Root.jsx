import React from 'react';
import App from './App';
import About from './pages/About';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NoMatch from './pages/NoMatch';

export default function Root() {
  return (
    <Router>
      <div className='todo-app-container'>
        <NavigationBar />
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<App />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route exact path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<BlogPost />} />
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
