import React, { useState } from "react";
import useRepoSearch from "./data/hooks/use-repo-search";
import SearchPanel from "./components/SearchPanel";
import ResultPanel from "./components/ResultPanel";

const App = () => {
  const [query, setQuery] = useState<string | undefined>();
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 10,
  });

  const { loading, error, data } = useRepoSearch(
    {
      name: query,
    },
    pagination
  );

  const onSearch = (query: string) => setQuery(query);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to the GitHub Repo Listing app!</h2>
      </header>
      <SearchPanel onSearch={onSearch} searching={loading} />
      <ResultPanel data={data} loading={loading} error={error} />
    </div>
  );
};

export default App;
