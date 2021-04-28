import React, { useEffect } from 'react';
import { useStoreState } from 'hooks/types';
import ProductList from 'components/ProductList';
import http from 'services/api';

const ProductListContainer: React.FC<unknown> = () => {
  const products = useStoreState((state) => state.products.items);

  useEffect(() => {
    const apiCall = async () => {
      const employees = await http.get('api/users?page=2', {
        customBaseUrl: 'https://reqres.in/',
      });

      // tronlog(employees, 'employees');
      return employees;
    };

    apiCall();
  }, []);

  return <ProductList products={products} onProductPress={() => {}} />;
};

export default ProductListContainer;
