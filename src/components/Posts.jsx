import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     posts: []
  //   };
  // }

  /* redux ensures application state(from store) instead of component state */

  // componentWillMount() {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(res => res.json())
  //     .then(data => {
  //       // console.log(data);
  //       this.setState({
  //         posts: data
  //       });
  //     });
  // }

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
//   listPosts = () => {
//     const statePosts = this.state.posts;
//     const posts = statePosts.map(post => (
//       <div key={post.id}>
//         <h3>{post.title}</h3>
//         <p>{post.body}</p>
//       </div>
//     ));
//     return posts;
//   };
  listPosts() {
    const statePosts = this.state.posts;
    const posts = statePosts.map(post => (
        <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        </div>
    ));
    return posts;
  }

  render() {
    // const postItems = this.listPosts().bind(this)
    // const postItems = this.state.posts.map(post => (
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.PropTypes = {
  fetchPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

// export default Posts;
/** connect your component to store from Provider component */
export default connect(mapStateToProps, { fetchPosts })(Posts);
