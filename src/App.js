import React, { Component } from 'react';
import QuoteForm from './components/QuoteForm'
import Quotes from './containers/Quotes'

class App extends Component {
  render() {
    // debugger;
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <QuoteForm />
        <Quotes />
        {/* <Quotes quotes={this.props.store.getState().quotes} /> */}
      </div>
    );
  }
}

export default App;
