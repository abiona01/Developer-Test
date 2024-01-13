import { describe, expect, it } from "vitest";
import { render, screen } from "../utils/test-utils";
import SearchForm from "../components/search-form";

describe("SearchForm", () => {
  it("should render", () => {
    expect(<SearchForm />).toMatchSnapshot();
  });
});

// The SearchForm component should disable the search button when the input value is empty
describe("SearchForm", () => {
  it("should disable the search button when the input value is empty", () => {
    render(<SearchForm />);
    const button = screen.getByRole("button", { name: "Search" });
    expect(button).toBeDisabled();
  });
});

// The SearchForm component should enable the search button when the input value is not empty
// describe("SearchForm", () => {
//   it("should enable the search button when the input value is not empty", () => {
//     render(<SearchForm />);
//     const input = screen.getByPlaceholderText("Search by name");
//     const button = screen.getByRole("button", { name: "Search" });
//     userEvent.type(input, "test");
//     expect(button).toBeEnabled();
//   });
// });
