import React, { Component } from 'react';
const context = React.createContext();

class A extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: 1,
    };
  }
  render() {
    const { store } = this.state; 
    return (
      <context.Provider value={store}>
        <B /> 
      </context.Provider>
    );
  }
}

function B() {
  return (<C />);
}

class C extends Component {
  state = {};
  render() {
    return (
      <>
        <context.Consumer>
          {
            (store) => {
              return <h2>{store}</h2>
            }
          }
        </context.Consumer>
      </>
    );
  }
}
 
export default A;