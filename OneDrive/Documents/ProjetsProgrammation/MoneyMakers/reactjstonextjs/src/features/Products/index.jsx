"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import * as styled from './style';
import { useProducts } from './useProducts';
import ProductPreview from '../../ui/ProductPreview';
import Empty from "../../ui/Empty";
import Spinner from '../../ui/Spinner';

export default function Products({field}) {

  const searchParams = useSearchParams();

  const { isLoading, error, products } = useProducts();

  if (isLoading) return <Spinner />;
  if (error) return <div>{error.message}</div>;
  if (!products.length) return <Empty labelName='products.not_found' />;

  // 1) Filter
  const filterValue = searchParams.get(field) || 'all';

  let filteredProducts;

  if (filterValue === 'all') filteredProducts = products;
  if (filterValue === 'free') filteredProducts = products.filter(product => product.price === 0);
  if (filterValue === 'premium') filteredProducts = products.filter(product => product.price !== 0);
  if (filterValue === 'student') filteredProducts = products.filter(product => product.tags.includes('student'));
  if (filterValue === 'no-discount') filteredProducts = products.filter(product => product.discount === 0);
  if (filterValue === 'with-discount') filteredProducts = products.filter(product => product.discount > 0);

  if (!filteredProducts?.length) return <Empty labelName='products.not_found' />;

  // 2) SORT
  // const sortBy = query.sortBy || 'startDate-asc';
  // const [field, direction] = sortBy.split('-');
  // const modifier = direction === 'asc' ? 1 : -1;

  const sortedProducts = filteredProducts;
  // const sortedProducts = filteredProducts.sort((a, b) => {
  //   if (typeof a[field] === 'string' && typeof b[field] === 'string') {
  //     return a[field].localeCompare(b[field]) * modifier;
  //   } else {
  //     return (a[field] - b[field]) * modifier;
  //   }
  // });

  if (!sortedProducts.length) return <Empty labelName='products.not_found' />;

  return (
    <styled.ProductsWrapper>
      {sortedProducts.map(({ id, name, custom_summary, price, formatted_price, thumbnail_url, short_url, currency }) => (
        <ProductPreview
          key={id}
          name={name}
          price={price}
          formatted_price={formatted_price}
          imagePreview={thumbnail_url}
          description={custom_summary}
          short_url={short_url}
          currency={currency}
        />
      ))}
    </styled.ProductsWrapper>
  );
}
