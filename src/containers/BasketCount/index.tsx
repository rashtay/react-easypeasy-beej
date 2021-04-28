import React from 'react';
import BasketCount from 'components/BasketCount';
import { useStoreState } from '../../hooks/types';

const BasketCountContainer: React.FC<unknown> = () => {
  const count = useStoreState((state) => state.basket.count);

  return <BasketCount count={count} onLinkPress={() => {}} />;
};

export default BasketCountContainer;
