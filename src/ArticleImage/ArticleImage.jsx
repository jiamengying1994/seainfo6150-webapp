import React from "react";
import styles from './ArticleImage.module.css';

export class ArticleImage extends React.Component {
  constructor(props) {
      super(props);

   }

  render() {

  return (
    <div className={styles.article_image}>
    <img src={this.props.url} alt={this.props.title}></img>
    </div>
    );
  }
}

export default ArticleImage;
