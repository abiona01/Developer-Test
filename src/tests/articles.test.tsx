import React from "react";
import { render, screen } from "../utils/test-utils";
import { BrowserRouter } from "react-router-dom";
import Articles from "../pages/articles";
import { JSX } from "react/jsx-runtime";

// Wrap the component with BrowserRouter in the test
const renderWithRouter = (
  component:
    | string
    | number
    | boolean
    | JSX.Element
    | Iterable<React.ReactNode>
    | null
    | undefined,
) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

// Renders the "Articles" heading
it("should render the 'Articles' heading", () => {
  renderWithRouter(<Articles />);
  expect(screen.getByText("Articles")).toBeInTheDocument();
});

// Renders the "Create Article" button
it("should render the 'Create Article' button", () => {
  renderWithRouter(<Articles />);
  expect(screen.getByText("+ Create Article")).toBeInTheDocument();
});

// More specific assertions about loading state and article list
it("should display loading message while fetching articles", async () => {
  renderWithRouter(<Articles />);
  expect(screen.getByText("Loading Articles")).toBeInTheDocument();
  // You might want to add additional assertions related to loading state
  // Mock the API response to simulate loading success or failure and assert on the expected behavior
});
