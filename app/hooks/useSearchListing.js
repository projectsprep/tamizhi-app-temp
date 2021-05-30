import _ from "lodash";
import { useState, useEffect } from "react";

export default function useSearchListing(
  apiFunc,
  page_number,
  search,
  category,
  per_page = 5
) {
  const [listing, setListing] = useState([]);
  const [isNeed, setIsNeed] = useState(false);
  const [isMore, setIsMore] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    _.debounce(() => onQueryChange(), 500)();
  }, [search, category, isNeed]);

  useEffect(() => {
    if (isMore) {
      onPageChange();
    }
    if (page_number === 1) return setIsNeed(true);
  }, [page_number]);

  const refresh = () => {
    _.debounce(() => onQueryChange(), 500)();
  };

  const onQueryChange = async () => {
    setLoading(true);

    const response = await apiFunc({
      search,
      page_number,
      per_page,
      category,
    });

    if (!response.ok) return setLoading(false);
    setIsMore(response.data.isMore);
    setListing(response.data.data);

    setIsNeed(false);
    setLoading(false);
  };

  const onPageChange = async () => {
    const response = await apiFunc({
      search,
      page_number,
      per_page,
      category,
    });

    if (!response.ok) return;

    setIsMore(response.data.isMore);
    setListing([...listing, ...response.data.data]);
    setIsNeed(false);
  };

  return { listing, loading, isMore, refresh };
}
