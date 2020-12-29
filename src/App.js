import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import bird from './images/bird.jpg';

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    const value = counters[index].value;
    if (counters[index].value > 0) {
      counters[index].value--
    } else {
      counters[index].value = 0;
    }
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = id => {
    // console.log("delete ", id);
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };
  render() {
    return (
      // <React.Fragment>
      //   <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      //   <main className="container">
      //     <Counters
      //       counters={this.state.counters}
      //       onDelete={this.handleDelete}
      //       onIncrement={this.handleIncrement}
      //       onDecrement={this.handleDecrement}
      //       onReset={this.handleReset} />
      //   </main>
      // </React.Fragment>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="row card-body">
              <div class="col-sm-6">
                <h5 class="card-title">...</h5>
                <p class="card-text">....</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
              <img class="col-sm-6" alt="sans" src={bird} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
