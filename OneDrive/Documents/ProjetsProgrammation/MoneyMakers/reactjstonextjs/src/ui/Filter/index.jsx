import React from 'react';
import { useRouter } from 'next/router';
import TagManager from 'react-gtm-module';
import * as styled from './style';

function Filter({ filterField, options }) {
  const router = useRouter();
  const { query } = router;
  const currentFilter = query[filterField] || options[0].value;

  function handleClick(value) {
    // Push event to GTM
    TagManager.dataLayer({
      dataLayer: {
        event: `filter_click_${value}`,
        filter_value: value,
        location: window.location.pathname,
      },
    });

    // Update query parameters
    const newQuery = {
      ...query,
      [filterField]: value,
    };

    if (query.page) {
      newQuery.page = 1;
    }

    router.push({
      pathname: router.pathname,
      query: newQuery,
    }, undefined, { shallow: true });
  }

  return (
    <styled.StyledFilter>
      {options.map((option) => (
        <styled.FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          $active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </styled.FilterButton>
      ))}
    </styled.StyledFilter>
  );
}

export default Filter;
