import React from "react";

const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const ResultList = ({ data }: { data: any }) => (
  <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {data.items.map((item: any) => (
      <a
        key={item.html_url}
        className="border p-2 rounded-md bg-slate-50 text-blue-600 hover:text-blue-800 visited:text-purple-600"
        href={item.html_url}
        target="_blank"
        rel="noreferrer noopener"
      >
        <div>{item.name}</div>
        <div className="text-sm italic text-slate-500">{item.description}</div>
        <div className="text-sm text-slate-400">
          <span className="italic">Fork Count: </span>
          {item.forks_count}
        </div>
        <div className="text-sm text-slate-400">
          <span className="italic">Stargazers Count: </span>
          {item.stargazers_count}
        </div>
        <div className="text-sm text-slate-400">
          <span className="italic">Is Fork: </span>
          {item.fork ? "Yes" : "No"}
        </div>
        <div className="text-sm text-slate-400">
          <span className="italic">Created At: </span>
          {dateTimeFormat.format(Date.parse(item.created_at))}
        </div>
      </a>
    ))}
  </div>
);

interface ResultPanelParams {
  data: any;
  error: any;
  loading: boolean;
  onNextPage: () => void;
  onPrevPage: () => void;
  currentPage: number;
  hasNext: boolean;
}

const ResultPanel = ({
  data,
  error,
  loading,
  onNextPage,
  onPrevPage,
  currentPage,
  hasNext,
}: ResultPanelParams) => {
  return (
    <div className="border p-4">
      {error && <p>Error!</p>}
      {loading && !data && <p>Loading...</p>}
      <div className="min-h-[20vh]">
        {data && data.items && (
          <>
            <div className={loading ? "animate-pulse" : ""}>
              <ResultList data={data} />
            </div>
            <div className="border-t mt-4 pt-4">
              <div className="flex gap-2">
                <button
                  onClick={onPrevPage}
                  disabled={currentPage <= 1}
                  className="px-4 py-1 text-sm text-slate-50 rounded-full border bg-blue-600 hover:bg-blue-800"
                >
                  Prev
                </button>
                <button
                  onClick={onNextPage}
                  disabled={!hasNext}
                  className="px-4 py-1 text-sm text-slate-50 rounded-full border bg-blue-600 hover:bg-blue-800"
                >
                  Next
                </button>
                <div className="border border-gray-300 rounded-lg px-2">
                  Current Page: {currentPage}
                </div>
                <div className="border border-gray-300 rounded-lg px-2">
                  {data.total_count || 0} results found.
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultPanel;
