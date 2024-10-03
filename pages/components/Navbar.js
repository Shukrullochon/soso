import Link from 'next/link';

const Navbar = () => (
  <nav style={{ padding: '10px', backgroundColor: '#000000', color: '#0400ff' }}>
    <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none' }}>
      <li><Link href="/">BMW</Link></li>
      <li><Link href="#categories">С удовольствием за рулем</Link></li>
      <li><Link href="#about">ВСЕ МЕНЯЕТСЯ. ЦЕННОСТИ ОСТАЮТСЯ.</Link></li>
      <li><Link href="#products">Categories</Link></li>
      <li><Link href="#testimonials">Запись на сервис</Link></li>
      <li><Link href="#contact">Больше о BMW</Link></li>
    </ul>
  </nav>
);

export default Navbar;
