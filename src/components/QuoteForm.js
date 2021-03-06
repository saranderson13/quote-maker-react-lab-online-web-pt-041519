import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    content: '',
    author: '',
    votes: 0
  }

  handleOnChange = event => {
    // debugger;
    if (event.target.name === "content") {
      this.setState({
        content: event.target.value
      })
    } else if (event.target.name === "author") {
      this.setState({
        author: event.target.value
      })
    }
  }

  handleOnSubmit = event => {
    event.preventDefault();

    // Create quote object from state
    let quoteInfo = {
      id: uuid(),
      content: this.state.content,
      author: this.state.author,
      votes: this.state.votes
    }

    // Pass quote object to action creator
    this.props.addQuote(quoteInfo)

    // Update component state to return to default state
    this.setState({content: '', author: ''})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={(event) => {this.handleOnSubmit(event)}}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        name="content"
                        value={this.state.content}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        name="author"
                        type="text"
                        value={this.state.author}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => ({
  addQuote: formData => dispatch(addQuote(formData))
})

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm);
