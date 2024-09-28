// components/Layout.js
import Navbar from './Navbar';
import Footer from './Footer';
import { useRouter } from 'next/router';



export default function Layout({ children }) {
  const router = useRouter();
  
  // "register" sahifasida navbar va footer ko'rinmasligi uchun tekshiruv
  const isRegisterPage = router.pathname === '/register';

  return (
    <>
      {!isRegisterPage && <Navbar />}
      <main>{children}</main>
      {!isRegisterPage && <Footer />}
    </>
  );
}

