import React from 'react';

interface Props {
  products: (Product | undefined)[];
  onProductPress: (product: Product) => void;
  onRemoveProduct: (idx: number) => void;
}

const Basket: React.FC<Props> = ({
  products,
  onProductPress,
  onRemoveProduct,
}) => {
  if (!products || (products && !products.length)) {
    return <p>No products</p>;
  }

  return (
    <div>
      <h1>The merchandise</h1>
      <ul>
        {products.map((product, idx: number) => {
          const key = idx + 1;

          return (
            <li key={key}>
              <button
                type="button"
                onClick={() => onProductPress(product as Product)}
              >
                {product?.name}
              </button>

              <button type="button" onClick={() => onRemoveProduct(idx)}>
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Basket;
