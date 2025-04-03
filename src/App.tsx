// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm.tsx';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';
import About from './components/About';
import ContactForm from './ContactForm';
import ProductsPage from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="pt-24 pb-12"> {/* Adjust pt-24 to match your header height */}
          <div className="container mx-auto px-4">
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path='/' element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/contact' element={<ContactForm />} />
              <Route path="/products" element={<ProductsPage />} />
            </Routes>
          </div>
          </main>
          <Footer />
    </BrowserRouter>
  );
}

export default App