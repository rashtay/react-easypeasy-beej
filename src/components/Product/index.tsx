import React from 'react';

interface Props {
  product: Product | undefined;
  onAdd: () => void;
  loading: boolean;
}

const Product: React.FC<Props> = ({ product, onAdd, loading }) => {
  if (!product) {
    return null;
  }

  return (
    <div>
      <span>{product.name}</span>
      <span>£ {product.price}</span>

      <button type="button" onClick={onAdd}>
        {loading ? 'Adding...' : 'Add to basket'}
      </button>
    </div>
  );
};

export default Product;
