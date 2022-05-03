function ProductList({ products }) {
  return (
    <ul style={{ color: 'black'}}>
      {products.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  );
}

export default ProductList;
