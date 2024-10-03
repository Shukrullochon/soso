const Products = () => (
    <section id="products" style={{ padding: '50px' }}>
      <h2>Our Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '20px' }}>
            <h3>BMW Premium Selection {index + 1}</h3>
            <p>Тест-драйв{index + 1}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Products;
  