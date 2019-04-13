import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class Postform extends Component {
    
  constructor(props) {
      super(props);

      this.state = {
        title: "",
        body: ""
      };

      this.onChange = this.onChange.bind(this);
  }

//   onChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
  onChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      });
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    const postData = this.state;
    // const postData = {
    //     title: this.state.title,
    //     body: this.state.body
    // }
    /**
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(postData)
    })
      .then(result => result.json())
      .then(data => console.log(data));
      */

     // Call action in Redux instead of calling fetch request in single React component
     this.props.createPost(postData);
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label><br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body:</label><br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.post}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

Postform.prototypes = {
  createPost: PropTypes.func.isRequired
}

// export default Postform;
export default connect(null, { createPost })(Postform);
