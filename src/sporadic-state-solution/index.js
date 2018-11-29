import React from 'react';
import ReactDOM from 'react-dom';

// Setup the context object for our user information
const UserContext = React.createContext('user');

class Hello extends React.Component {
  render () {
    return (
      <h1>Hello, <IsItMe/>!</h1>
    );
  }
}

class IsItMe extends React.Component {
  render () {
    return (
      <YoureLookingFor/>
    );
  }
}

class YoureLookingFor extends React.Component {
  render () {
    return (
    // Create a consumer of the context that will subscribe to changes for the value
    <UserContext.Consumer>
      {({isItLionel}) => {
        if (isItLionel === true) {
          return (
            <span>Lionel</span>
          );
        } else {
          return (
            <span>You</span>
          )
        }
      }}
    </UserContext.Consumer>
  )}3
}

// This is a simpler implementation where you can programmatically access the context object and do what you want with it.
// class YoureLookingFor extends React.Component {
//   static contextType = UserContext;
//   render () {
//     if (this.context.isItLionel === true) {
//       return (
//         <span>Lionel</span>
//       );
//     } else {
//       return (
//         <span>You</span>
//       )
//     }
//   }
// }

// Cache the element we'll be rendering to.
const root = document.querySelector('#root');

// Setup the provider with the default values
ReactDOM.render(
  <UserContext.Provider value={{isItLionel:true}}>
    <Hello/>
  </UserContext.Provider>,
  root
);