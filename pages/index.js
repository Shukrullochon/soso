import Navbar from './components/Navbar';

import Main from './components/Main';
 
import Categories from './components/Categories';

import Products from './components/Products';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Categories />
      
      <Products />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}


