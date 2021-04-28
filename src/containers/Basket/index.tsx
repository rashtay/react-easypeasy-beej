import React from 'react';
import Basket from 'components/Basket';
import { useStoreActions, useStoreState } from '../../hooks/types';

const BasketContainer: React.FC<unknown> = () => {
  const basketProducts = useStoreState((state) => state.basket.products);

  //  map our action 👇
  const removeProductFromBasket = useStoreActions(
    (actions) => actions.basket.removeProduct,
  );

  return (
    <Basket
      products={basketProducts}
      onProductPress={() => {}}
      onRemoveProduct={(idx) => removeProductFromBasket(idx)}
    />
  );
};

export default BasketContainer;
