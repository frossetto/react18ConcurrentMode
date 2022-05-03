import { useDeferredValue } from 'react';

function ProductList({ products }) {
  const deferredProducts = useDeferredValue(products);

  return (
    <ul style={{ color: 'black '}}>
      {deferredProducts.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  );
}

export default ProductList;
