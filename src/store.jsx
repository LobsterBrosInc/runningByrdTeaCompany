import React from 'react';
import ReactDOM from 'react-dom';

class Store extends React.Component {
  render () {
    return (
      <div>
        <h2>THIS IS THE STORE</h2>
        <h1>ADRIAN'S STORE</h1>
      </div>
    )
  }
}

export default Store;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Store />, document.getElementById('store-container'));
});
