import React, { Component } from "react";
import createReactClass from "create-react-class";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

class Counter extends Component {
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  //   state = {
  //     value: this.props.counter.value
  //   };
  render() {
    return (
      <div>
        {/* <h4>#{this.props.id}</h4> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-sm m-2"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
        {/* {this.props.counter.value > 0 ? <showDecrement /> : null} */}
        <button
          disabled={!this.props.counter.value > 0}
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-sm m-2"
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          delete
        </button>
      </div>
    );
  }

  showDecrement = createReactClass({
    render() {
      return (
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-sm m-2"
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
      );
    }
  });

  //   handleIncrement = () => {
  //     // console.log(this);
  //     this.setState({ value: this.props.counter.value + 1 });
  //   };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
