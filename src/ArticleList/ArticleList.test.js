import React from "react";
import ArticleList from "./ArticleList";
import { fireEvent } from "@testing-library/react";

describe("ArticleList tests", () => {


  it("renders correctly after button is clicked", () => {
    const al = [{"title": "1","image": "1"}, {"title": "2","image": "2"},]
    const { container } = render(
      <ArticleList articleList={al}/>
    );

    expect(container).toMatchSnapshot();
  });
});