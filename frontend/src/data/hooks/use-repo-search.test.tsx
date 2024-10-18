import { renderHook } from "@testing-library/react";
import { useFetch, UseFetch } from "use-http";

import { useRepoSearch } from "./use-repo-search";

jest.mock("use-http");

describe("useRepoSearch", () => {
  const mockUseFetch = useFetch as jest.MockedFunction<typeof useFetch>;

  beforeEach(() => {
    mockUseFetch.mockReturnValue({
      get: jest.fn(),
      loading: false,
      error: undefined,
      data: null,
    } as unknown as UseFetch<any>);
  });

  it("should call the API when name is provided", async () => {
    renderHook(() =>
      useRepoSearch({ name: "test-user" }, { perPage: 10, page: 1 })
    );

    expect(mockUseFetch().get).toHaveBeenCalledWith(
      "?q=user:test-user+fork:true&per_page=10&page=1"
    );
  });

  it("should not call the API when name is not provided", async () => {
    renderHook(() => useRepoSearch({ name: "" }, { perPage: 10, page: 1 }));

    expect(mockUseFetch().get).not.toHaveBeenCalled();
  });

  it("should return loading state", async () => {
    mockUseFetch.mockReturnValueOnce({
      get: jest.fn(),
      loading: true,
      error: undefined,
      data: null,
    } as unknown as UseFetch<unknown>);

    const { result } = renderHook(() =>
      useRepoSearch({ name: "test-user" }, { perPage: 10, page: 1 })
    );

    expect(result.current.loading).toBe(true);
  });

  it("should return error state", async () => {
    mockUseFetch.mockReturnValueOnce({
      get: jest.fn(),
      loading: false,
      error: "Error message",
      data: null,
    } as unknown as UseFetch<any>);

    const { result } = renderHook(() =>
      useRepoSearch({ name: "test-user" }, { perPage: 10, page: 1 })
    );

    expect(result.current.error).toBe("Error message");
  });

  it("should return data", async () => {
    const mockData = { items: [] };
    mockUseFetch.mockReturnValueOnce({
      get: jest.fn(),
      loading: false,
      error: undefined,
      data: mockData,
    } as unknown as UseFetch<any>);

    const { result } = renderHook(() =>
      useRepoSearch({ name: "test-user" }, { perPage: 10, page: 1 })
    );

    expect(result.current.data).toBe(mockData);
  });

  it("should call the API with correct perPage and page props", async () => {
    renderHook(() =>
      useRepoSearch({ name: "test-user" }, { perPage: 20, page: 2 })
    );

    expect(mockUseFetch().get).toHaveBeenCalledWith(
      "?q=user:test-user+fork:true&per_page=20&page=2"
    );
  });
});
