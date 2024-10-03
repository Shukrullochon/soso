const Categories = () => (
    <section id="categories" style={{ padding: '50px' }}>
      <h2>Categories</h2>
      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px', listStyle: 'none' }}>
        <li><a href="#">BMW.com</a></li>
        <li><a href="#">BMW Group</a></li>
        <li><a href="#">BMW M Driving Experience</a></li>
        <li><a href="#">BMW Motorrad </a></li>
        <li><a href="#">MINI</a></li>
        <li><a href="#">Brand Experience Centre</a></li>
        <li><a href="#">BMW Excellence Club</a></li>
        <li><a href="#">BMW Lifestyle</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Корпоративные продажи</a></li>
      </ul>
    </section>
  );
  
  export default Categories;
  