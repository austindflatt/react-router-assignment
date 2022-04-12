import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import ContactForm from './components/ContactForm';
import Submitted from './components/Submitted';
import NotFound from './pages/NotFound';
import { Container } from '@mantine/core';

function App() {
  return (
    <>
    <BrowserRouter>
    <Container>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />}>
        <Route path='form' element={<ContactForm />} />
        <Route path='submitted' element={<Submitted />} />
      </Route>
      <Route path='/*' element={<NotFound />} />
    </Routes>
    </Container>
    </BrowserRouter>
    </>
  );
}

export default App;