import React from "react";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import styles from "./ArticleListItem.module.css";

export class ArticleListItem extends React.Component {
  constructor(props) {
      super(props);
      this.state = {isToggleOn: false};
      this.handleClick = this.handleClick.bind(this);
   }

  handleClick() {
       this.setState(state => ({
         isToggleOn: !this.state.isToggleOn
       }));
  }

  render() {
  return (
    <>
      <div>
        <h2 className={styles.title}>{this.props.articleListItem.title}</h2>
        <p className={styles.date} key={this.props.articleListItem.title}>
         {this.state.isToggleOn?this.props.articleListItem.displayDate: ""}
        </p>
        {this.state.isToggleOn?this.props.articleListItem.shortText: ""}
        <p key={this.props.articleListItem.slug}>
        </p>
      </div>
      <ArticleTextToggleButton
      onClick={this.handleClick}
      buttonText={this.state.isToggleOn?'Show less':'Show more'}/>
    </>
  );
  }
}


export default ArticleListItem;