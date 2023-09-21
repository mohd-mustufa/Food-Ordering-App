import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

describe("Test Cases For Contact Us Page", () => {
  it("Should check if header is being rendered", () => {
    render(<Contact />);

    // Querying
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should check if contact us page contains the sentence", () => {
    render(<Contact />);

    // Querying
    const word = screen.getByText("This is the contact us page!");

    // Assertion
    expect(word).toBeInTheDocument();
  });
});
