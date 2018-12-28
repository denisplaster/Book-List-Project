import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    const { img, title, author } = this.props.info;
    const { deleteItem } = this.props;

    return (
      <div className="book">
        <img src={img} width="150px" alt="book" />
        <div>
          <h4>Title : {title}</h4>
          <h6>By : {author}</h6>
          <button onClick={deleteItem}> delete item</button>
        </div>
      </div>
    );
  }
}
