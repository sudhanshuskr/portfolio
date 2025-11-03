// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import DotGrid from './components/DotGrid';
import Squares from './components/Squares';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App" style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "transparent", // transparent so DotGrid shows fully
        color: "#fff"
      }}>
        {/* Background DotGrid */}
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // behind everything
          color: "#222222"
        }}>
          {/* <DotGrid
            dotSize={4}
            gap={8}
            baseColor="#5227FF"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={0.5}
          /> */}
          <Squares
            speed={0.02}
            squareSize={120}
            direction='left' // up, down, left, right, diagonal
            borderColor='#f6f6dbff'
            hoverFillColor='#dde0d5ff'
          />
        </div>
        <Header />
        <main style={{ position: "relative", zIndex: 1 }}>
          <Routes>  {/* Use Routes instead of Switch */}
            <Route path="/" element={<Home />} />  {/* Home route */}
            <Route path="/portfolio" element={<Home />} />  {/* Home route */}
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router >
  );
}

// Home page component (can contain a landing page or intro)


export default App;
