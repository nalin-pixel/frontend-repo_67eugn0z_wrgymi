import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Brands from './pages/Brands'
import Placeholder from './pages/Placeholder'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/characters" element={<Placeholder title="Characters" />} />
        <Route path="/showroom" element={<Placeholder title="Showroom" />} />
        <Route path="/capabilities" element={<Placeholder title="Capabilities" />} />
        <Route path="/about" element={<Placeholder title="About" />} />
        <Route path="/press" element={<Placeholder title="Press & Case Studies" />} />
        <Route path="/contact" element={<Placeholder title="Contact" />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
