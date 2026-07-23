import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function HomePage() {
  return <main className="page">Welcome home.</main>;
}

function AboutPage() {
  return <main className="page">About this project.</main>;
}

function ContactPage() {
  return <main className="page">Get in touch.</main>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
