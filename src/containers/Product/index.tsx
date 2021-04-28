import React, { useCallback, useState } from 'react';
import { useStoreState, useStoreActions } from 'hooks/types';
import Product from 'components/Product';

const ProductContainer: React.FC<unknown> = () => {
  // const { id } = route.params;
  const chosenProduct = useStoreState((state) => state.products.getById(1));

  //  map our action 👇
  const addProductToBasket = useStoreActions(
    (actions) => actions.basket.addProduct,
  );

  // state to track when we are saving to basket
  const [adding, setAdding] = useState(false);

  // callback to handle click, saving to basket
  const onAddToBasketClick = useCallback(async () => {
    if (chosenProduct && chosenProduct.id) {
      setAdding(true);
      await addProductToBasket(chosenProduct.id);

      setAdding(false);
    }
  }, [chosenProduct, addProductToBasket]);

  return (
    <Product
      product={chosenProduct}
      onAdd={onAddToBasketClick}
      loading={adding}
    />
  );
};

export default ProductContainer;
