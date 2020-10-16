import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticleList = (props) => {
  const articles = props.articleList;

  return (
    <>
      {articles.map((articleListItem) => (
        <ArticleListItem articleListItem={articleListItem}/>
      ))}
    </>
  );
};

export default ArticleList;