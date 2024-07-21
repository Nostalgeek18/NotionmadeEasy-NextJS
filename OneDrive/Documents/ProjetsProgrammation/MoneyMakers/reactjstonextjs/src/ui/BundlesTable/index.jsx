import React from 'react';
import { useRouter } from 'next/router';
import * as styled from './style';
import BundlePreview from '../ProductPreview';
import Empty from '../../ui/Empty';

export default function BundlesTable({ bundles }) {
  const router = useRouter();
  const { query } = router;

  if (!bundles.length) return <Empty labelName='packages' />;

  // 1) Filter
  const filterValue = query.discount || 'all';

  let filteredBundles;

  if (filterValue === 'all') filteredBundles = bundles;
  if (filterValue === 'free') filteredBundles = bundles.filter(bundle => bundle.price === 0);
  if (filterValue === 'premium') filteredBundles = bundles.filter(bundle => bundle.price !== 0);
  if (filterValue === 'no-discount') filteredBundles = bundles.filter(bundle => bundle.discount === 0);
  if (filterValue === 'with-discount') filteredBundles = bundles.filter(bundle => bundle.discount > 0);

  // 2) SORT
  const sortBy = query.sortBy || 'startDate-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;

  const sortedBundles = filteredBundles.sort((a, b) => {
    if (typeof a[field] === 'string' && typeof b[field] === 'string') {
      return a[field].localeCompare(b[field]) * modifier;
    } else {
      return (a[field] - b[field]) * modifier;
    }
  });

  if (!sortedBundles.length) return <Empty labelName='packages' />;

  return (
    <styled.TableWrapper>
      {sortedBundles.map(({ id, name, descriptionPreview, price, imagePreview }) => (
        <BundlePreview
          key={id}
          name={name}
          price={price}
          imagePreview={imagePreview}
          descriptionPreview={descriptionPreview}
        />
      ))}
    </styled.TableWrapper>
  );
}
