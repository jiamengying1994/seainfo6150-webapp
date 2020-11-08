import React from "react";
import ArticleListItem from "./ArticleListItem";
import { fireEvent } from "@testing-library/react";

describe("ArticleListItem tests", () => {


  it("renders correctly after button is clicked", () => {
    const al = {"title": "hello"}
    const { container, getByText } = render(
      <ArticleListItem articleListItem={al}/>
    );
    const button = getByText("Show more");
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });
});