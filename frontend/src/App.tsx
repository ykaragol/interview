import React from "react";
import useRepoSearch from "./data/hooks/use-repo-search";

const App = () => {
  const { loading, error, data } = useRepoSearch(
    {
      name: "facebook",
    },
    {
      perPage: 10,
      page: 1,
    }
  );

  const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to the GitHub Repo Listing app!</h2>

        {loading && <p>Loading...</p>}
        {error && <p>Error!</p>}
        {data && (
          <>
            <div>{data.total_count} results found.</div>
            <div>
              {data.items.map((item: any) => (
                <div>
                  {item.name} - {item.description}
                  {item.html_url}
                  {item.forks_count}
                  {item.stargazers_count}
                  {item.fork}
                  {item.license.name}
                  Created At: {dateTimeFormat.format(
                    Date.parse(item.created_at)
                  )}
                  </div>
              ))}
            </div>
          </>
        )}
      </header>
    </div>
  );
};

export default App;

          // <div>
          //   <img src={data.avatar_url} alt="avatar" width="100" height="100" />
          //   Name: {data.name} <br />
          //   Login: {data.login} <br />
          //   Description: {data.description} <br />
          //   Public Repo Count: {data.public_repos} <br />
          //   Created At: {dateTimeFormat.format(
          //     Date.parse(data.created_at)
          //   )}{" "}
          //   <br />
          // </div>
