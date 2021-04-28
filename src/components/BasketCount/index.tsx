import React from 'react';

type Props = {
  count: number;
  onLinkPress: () => void;
};

const BasketCount: React.FC<Props> = ({ count, onLinkPress }) => {
  return (
    <div>
      <button type="button" onClick={onLinkPress}>
        Basket({count} items)
      </button>
    </div>
  );
};

export default BasketCount;
