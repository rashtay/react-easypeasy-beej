import React from 'react';

interface Props {
  products: Product[];
  onProductPress: (product: Product) => void;
}

const ProductList: React.FC<Props> = ({ products, onProductPress }) => {
  return (
    <div>
      <h1>Our products</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <button type="button" onClick={() => onProductPress(product)}>
              {product.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
