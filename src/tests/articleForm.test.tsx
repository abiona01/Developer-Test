import { expect, it } from "vitest";
import { fireEvent, render, screen } from "../utils/test-utils";
import ArticleForm from "../components/articleForm";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

// Renders a form with input fields for name, email, and body.
it("should render a form with input fields for name, email, and body", () => {
  render(
    <Router>
      <ArticleForm />
    </Router>,
  );
  expect(screen.getByLabelText("Name")).toBeInTheDocument();
  expect(screen.getByLabelText("Email")).toBeInTheDocument();
  expect(screen.getByLabelText("Body")).toBeInTheDocument();
});

// Displays validation errors for each input field if the input is invalid.
it("should display validation errors for each input field if the input is invalid", async () => {
  render(
    <Router>
      <ArticleForm />
    </Router>,
  );

  fireEvent.submit(screen.getByRole("button"));

  expect(
    await screen.findByText("Name must be at least 2 characters long"),
  ).toBeInTheDocument();
  expect(await screen.findByText("Invalid email")).toBeInTheDocument();
  expect(
    await screen.findByText("Body must be at least 10 characters long"),
  ).toBeInTheDocument();
});

it("should disable the submit button if the form is being submitted or if there are validation errors", async () => {
  render(
    <Router>
      <ArticleForm />
    </Router>,
  );

  fireEvent.submit(screen.getByRole("button"));
  expect(await screen.findByRole("button")).toBeDisabled();
});

it("should display a loading message on the submit button while the form is being submitted", async () => {
  render(
    <Router>
      <ArticleForm />
    </Router>,
  );

  fireEvent.submit(screen.getByRole("button"));

  expect(
    await screen.findByRole("button", { name: "Loading..." }),
  ).toBeInTheDocument();
});
