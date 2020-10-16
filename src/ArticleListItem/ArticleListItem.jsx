import React from "react";


const ArticleListItem  = (props) => {
  const articleListItem  = props.articleListItem;

  return (
    <>
      <div>
        <h2>{articleListItem.title}</h2>

         <time datetime = "2018-11-22">{articleListItem.displayDate} </time>

        <p>
         {articleListItem.shortText}
        </p>
      </div>
    </>
  );
};


export default ArticleListItem;