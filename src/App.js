import { useState, useTransition } from 'react';

import { generateProducts } from './data';
import ProductList from './components/ProductList';
import DeferredProductList from './components/DeferredProductList';

const dummyProducts = generateProducts();

function filterProducts(filterTerm) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.toLowerCase().includes(filterTerm.toLowerCase()));
}

function App() {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState('');

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event) {
    setFilterTerm(event.target.value);

    // startTransition(() => {
    //   setFilterTerm(event.target.value);
    // });
  }

  return (
    <div id="app" style={{ color: 'white'}}>
      <input type="text" onChange={updateFilterHandler} />
        {/* <ProductList products={filteredProducts} /> */}
        <DeferredProductList products={filteredProducts} />
        {/* {isPending ? (<p style={{color: 'white'}}>Updating List...</p>) : (<ProductList products={filteredProducts} />)} */}
    </div>
  );
}

export default App;
