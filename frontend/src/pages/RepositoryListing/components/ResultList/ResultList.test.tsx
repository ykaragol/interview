import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultList from "./ResultList";

describe("ResultList", () => {
  it("renders correctly with given data", () => {
    const mockData = {
      items: [
        {
          html_url: "https://github.com/test/repo1",
          name: "repo1",
          watchers: 10,
          created_at: "2021-01-01T00:00:00Z",
        },
        {
          html_url: "https://github.com/test/repo2",
          name: "repo2",
          watchers: 20,
          created_at: "2022-01-02T00:00:00Z",
        },
      ],
    };

    const { getByText } = render(<ResultList data={mockData} />);

    mockData.items.forEach((item) => {
      expect(getByText(item.name)).toBeInTheDocument();
      expect(getByText(item.watchers.toString())).toBeInTheDocument();

      const day = new Date(item.created_at).getDate();
      const year = new Date(item.created_at).getFullYear();

      expect(getByText(`January ${day}, ${year}`, { exact: false })).toBeInTheDocument();
    });
  });

  it("handles empty data gracefully", () => {
    const { container } = render(<ResultList data={{ items: [] }} />);

    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
