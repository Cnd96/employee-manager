import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SearchBar from ".";
describe("Search Bar test", () => {
  it("Renders search bar", () => {
    render(
      <SearchBar placeHolder="Search name" value="" onChange={() => {}} />
    );
    const searchField = screen.getByPlaceholderText("Search name");
    expect(searchField).toBeInTheDocument();
  });
});
