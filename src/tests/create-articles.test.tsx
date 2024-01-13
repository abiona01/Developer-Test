import { expect, it } from "vitest";
import { render, screen } from "../utils/test-utils";
import { BrowserRouter } from "react-router-dom";
import CreateArticles from "../pages/create-articles";
// Renders a form with input fields for name, email, and body.
it("should render a form with input fields for name, email, and body", () => {
  render(
    <BrowserRouter>
      <CreateArticles />
    </BrowserRouter>,
  );
  expect(screen.getByLabelText("Name")).toBeInTheDocument();
  expect(screen.getByLabelText("Email")).toBeInTheDocument();
  expect(screen.getByLabelText("Body")).toBeInTheDocument();
}); // Form fields are pre-populated with default values.
it("should pre-populate form fields with default values", () => {
  render(
    <BrowserRouter>
      <CreateArticles />
    </BrowserRouter>,
  );
  const nameInput = screen.getByLabelText("Name") as HTMLInputElement;
  const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
  const bodyInput = screen.getByLabelText("Body") as HTMLTextAreaElement;

  expect(nameInput.value).toBe("");
  expect(emailInput.value).toBe("");
  expect(bodyInput.value).toBe("");
});
