import { useFetch } from "use-http";

interface Query {
  name: string;
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
  return useFetch(
    `https://api.github.com/search/repositories?q=user:${name}+fork:true&per_page=${perPage}&page=${page}`,
    {},
    [name, perPage, page]
  );
};

export default useRepoSearch;
