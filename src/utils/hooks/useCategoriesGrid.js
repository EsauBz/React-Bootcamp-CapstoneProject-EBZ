import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useCategoriesGrid() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [categoriesGrid, setCategoriesGrid] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getCategoriesGrid() {
      try {
        setCategoriesGrid({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "category")]]'
          )}&lang=en-us&pageSize=30`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setCategoriesGrid({ data, isLoading: false });
      } catch (err) {
        setCategoriesGrid({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getCategoriesGrid();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return categoriesGrid;
}
