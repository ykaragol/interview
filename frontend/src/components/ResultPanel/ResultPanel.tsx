import React from "react";

interface ResultPanelParams {
  data: any;
  error: any;
  loading: boolean;
}

const ResultPanel = ({ data, error, loading }: ResultPanelParams) => {
  const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {data && (
        <>
          <div>{data.total_count} results found.</div>
          <div>
            {data.items.map((item: any, index: number) => (
              <div key={index}>
                {item.name} - {item.description}
                {item.html_url}
                {item.forks_count}
                {item.stargazers_count}
                {item.fork}
                {/* {item.license.name} */}
                Created At: {dateTimeFormat.format(Date.parse(item.created_at))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ResultPanel;
