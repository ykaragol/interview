import React, { useState } from "react";
import useRepoSearch from "./data/hooks/use-repo-search";
import SearchPanel from "./components/SearchPanel";
import ResultPanel from "./components/ResultPanel";

const App = () => {
  const [query, setQuery] = useState<string | undefined>();
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 9,
  });

  const { loading, error, data } = useRepoSearch(
    {
      name: query,
    },
    pagination
  );

  const onSearch = (query: string) => setQuery(query);

  const hasNext =
    data && data.total_count > pagination.page * pagination.perPage;

  const onNextPage = () =>
    hasNext && setPagination({ ...pagination, page: pagination.page + 1 });

  const onPrevPage = () =>
    pagination.page > 1 &&
    setPagination({ ...pagination, page: pagination.page - 1 });

  return (
    <div className="flex place-content-center">
      <div className="grow max-w-6xl grid gap-4 grid-cols-1 pt-6">
        <header>
          <h1 className="text-3xl">Welcome to the GitHub Repo Listing app!</h1>
          <h4 className="text-md pt-2">
            This application is for searching GitHub repositories of users or
            organizations
          </h4>
        </header>
        <SearchPanel onSearch={onSearch} searching={loading} />
        <ResultPanel
          data={data}
          loading={loading}
          error={error}
          onNextPage={onNextPage}
          onPrevPage={onPrevPage}
          currentPage={pagination.page}
          hasNext={hasNext}
        />
      </div>
    </div>
  );
};

export default App;
