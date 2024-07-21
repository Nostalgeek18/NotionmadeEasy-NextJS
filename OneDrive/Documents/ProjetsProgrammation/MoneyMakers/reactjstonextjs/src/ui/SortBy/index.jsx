import React from 'react';
import { useRouter } from 'next/router';
import Select from '../Select';

export default function SortBy({ options }) {
  const router = useRouter();
  const { query } = router;
  const sortBy = query.sortBy || "";

  function handleChange(e) {
    const newQuery = { ...query };

    if (e.target.value === "none") {
      delete newQuery.sortBy; // no sorting
    } else {
      newQuery.sortBy = e.target.value;
    }

    router.push({
      pathname: router.pathname,
      query: newQuery,
    }, undefined, { shallow: true });
  }

  return (
    <Select
      options={options}
      type="white"
      onChange={handleChange}
      value={sortBy}
    />
  );
}
