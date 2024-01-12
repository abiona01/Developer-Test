import { describe, expect, it } from "vitest";

import SearchForm from "../components/search-form";

describe("SearchForm", () => {
  it("should render", () => {
    expect(<SearchForm />).toMatchSnapshot();
  });
});
