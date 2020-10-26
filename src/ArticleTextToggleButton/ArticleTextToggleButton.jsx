import React from "react";
import styles from "./ArticleTextToggleButton.module.css";

export class ArticleTextToggleButton extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <button className={styles.button} onClick={this.props.onClick}>
      {this.props.buttonText}
      </button>
    );
  }
  }






export default ArticleTextToggleButton;