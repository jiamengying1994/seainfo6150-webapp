import React from "react";
import ArticleImage from "./ArticleImage";
import { fireEvent } from "@testing-library/react";

describe("ArticleImage test", () => {


  it("renders correctly", () => {
    const al = {"url": "https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg"}
    const { container} = render(
      <ArticleImage articleImage={al}/>
    );

    expect(container).toMatchSnapshot();
  });
});