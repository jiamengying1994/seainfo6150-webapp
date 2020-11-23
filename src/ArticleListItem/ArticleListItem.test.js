import React from "react";
import ArticleListItem from "./ArticleListItem";
import { fireEvent } from "@testing-library/react";

describe("ArticleListItem tests", () => {


  it("renders correctly after button is clicked", () => {
    const al = {"title": "hello", "image": "https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg"}
    const { container, getByText } = render(
      <ArticleListItem articleListItem={al} />
    );
    const button = getByText("Show more");
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });
});