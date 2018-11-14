import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentWillMount() {
    console.log("will mount", this.props);
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    console.log("will receive props", nextProps);
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
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

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapReduxStateToComponentProps = reduxState => ({
  posts: reduxState.postsData.items,
  newPost: reduxState.postsData.item
});

export default connect(
  mapReduxStateToComponentProps,
  { fetchPosts }
)(Posts);
