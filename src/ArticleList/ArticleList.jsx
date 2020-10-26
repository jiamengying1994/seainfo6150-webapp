import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import styles from "./ArticleList.module.css";

const ArticleList = (props) => {
  const articles = props.articleList;

  return (
    <div className={styles.outer}>
      {articles.map((articleListItem) => (
      <div className={styles.box} key  = {articleListItem.slug}>
        <ArticleListItem
        articleListItem = {articleListItem}/>
      </div>
      ))
      }
    </div>
  );
};

export default ArticleList;