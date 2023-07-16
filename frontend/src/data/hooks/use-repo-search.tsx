import { useEffect } from "react";
import { useFetch } from "use-http";

interface Query {
  name?: string;
}
interface Pagination {
  page: number;
  perPage: number;
}

const DEFAULT_PAGINATION = {
  perPage: 10,
  page: 1,
};

export const useRepoSearch = (
  { name }: Query,
  { perPage, page }: Pagination = DEFAULT_PAGINATION
) => {
  const { get, loading, error, data } = useFetch(
    `https://api.github.com/search/repositories`,
    {}
  );

  // Normally we shouldn't have the following hook. But since use-http doesn't support
  // a parameter like `skip` or `enabled` to control whether the request should be sent or not,
  // we have to use this workaround.
  // Eg. @tanstack/react-query has a `enabled` parameter to control this.
  // But in here, I just wanted to try a different and lightweight library.
  useEffect(
    () => {
      if (name && !loading) {
        get(`?q=user:${name}+fork:true&per_page=${perPage}&page=${page}`);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [name, perPage, page]
  );

  return {
    data,
    loading,
    error,
  };
};

export default useRepoSearch;
