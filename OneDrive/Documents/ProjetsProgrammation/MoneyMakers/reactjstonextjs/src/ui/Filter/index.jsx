import React, { useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import TagManager from 'react-gtm-module';
import * as styled from './style';
import { useRouter } from 'next/navigation';

function Filter({ filterField, options }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  function handleClick(value) {
    // Push event to GTM
    TagManager.dataLayer({
      dataLayer: {
        event: `filter_click_${value}`,
        filter_value: value,
        location: window.location.pathname,
      },
    });

    router.push(pathname + '?' + createQueryString(filterField, value));
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
