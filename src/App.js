// import React from 'react';
// import {  Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Blog from './pages/Blog';
// import BlogDetail from './pages/BlogDetail';
// import Products from './pages/Products';

// function App() {
//   return (
//     <><Navbar /><Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/blogs" element={<Blog />} />
//       <Route path="/blogs/:id" element={<BlogDetail />} />
//       <Route path="/products" element={<Products />} />
//     </Routes>
//     <Footer /></>
//       // <Router>
//       //   <Routes>
//       //     <Route path="/" element={<Home />} />
//       //     <Route path="/about" element={<About />} />
//       //     <Route path="/contact" element={<Contact />} />
//       //     <Route path="/blogs" element={<Blog />} />
//       //     <Route path="/blogs/:id" element={<BlogDetail />} />
//       //     <Route path="/products" element={<Products />} />
//       //   </Routes>
//       // </Router>
      
//   );
// }

// export default App;



import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import AboutSection from './components/AboutSection';
import SocialIcons from './components/SocialIcons';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SocialIcons />
    </div>
  );
}

export default App;
