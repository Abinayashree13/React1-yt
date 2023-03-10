import React from "react";
import "./PriceTag.css";
class PriceTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cprice: 500,
      quan: 1,
      price: 500,
    };
  }
  decrement = (prevState) => {
    this.setState({
      quan: this.state.quan - 1,
      price: this.state.price - this.state.cprice,
    });
  };
  increment = (prevState) => {
    this.setState({
      quan: this.state.quan + 1,
      price: this.state.price + this.state.cprice,
    });
  };
  render() {
    return (
      <div class="pt">
        <span className="broll">
          <button id="btn1" onClick={this.decrement}>
            -
          </button>
          <span id="quan">{this.state.quan}</span>
          <button id="btn2" onClick={this.increment}>
            +
          </button>
        </span>
        <span id="ptag">₹{this.state.price}</span>
      </div>
    );
  }
}
export default PriceTag;
