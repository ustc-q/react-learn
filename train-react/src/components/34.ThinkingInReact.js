/**
 * @since 2017-06-05 15:09:12
 * @author vivaxy
 */

import React, { Component } from 'react';

import sleep from '../lib/sleep';

function Comment(props) {
  const { comment, avatarURL } = props;
  return (
    <p>
      <img src={avatarURL} />
      <span className="comment">{comment}</span>
    </p>
  );
}

function CommentList(props) {
  const { comments } = props;
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            avatarURL={comment.avatarURL}
            comment={comment.comment}
          />
        );
      })}
    </div>
  );
}

function CommentForm(props) {
  const {
    isSubmitting,
    updateNewComment,
    submitNewComment,
    newComment,
  } = props;
  const handleChange = (e) => {
    updateNewComment(e.target.value);
  };
  const handleSubmit = () => {
    submitNewComment({ newComment });
  };
  return (
    <div>
      <input
        disabled={isSubmitting}
        type="text"
        value={newComment}
        onChange={handleChange}
      />
      <button disabled={isSubmitting} onClick={handleSubmit}>
        提交
      </button>
    </div>
  );
}

function Loading() {
  return <div>loading ...</div>;
}

export default class ThinkingInReact extends Component {
  state = {
    // 加载状态
    loading: true,
    isSubmitting: false,

    // 评论信息
    comments: [],
    newComment: '',
  };

  constructor(props) {
    super(props);
    this.updateNewComment = this.updateNewComment.bind(this);
    this.submitNewComment = this.submitNewComment.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('./comments.json');
    const responseJSON = await response.json();
    await sleep(1000);
    this.setState({
      comments: responseJSON,
      loading: false,
    });
  }

  updateNewComment(value) {
    this.setState({ newComment: value });
  }

  async submitNewComment({ newComment }) {
    this.setState({ isSubmitting: true });
    const response = await fetch('./addComment.json');
    const responseJSON = await response.json();
    if (responseJSON.code === 200) {
      await sleep(1000);
      this.setState({
        newComment: '',
        comments: [
          ...this.state.comments,
          {
            id: this.state.comments.length + 1,
            avatarURL:
              'https://p0.meituan.net/shopdiy/8065a561c13890fc446abfd5976ffb8a1291.png',
            comment: newComment,
          },
        ],
        isSubmitting: false,
      });
    }
  }

  render() {
    const { loading, comments, newComment, isSubmitting } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div>
        <CommentList comments={comments} />
        <CommentForm
          newComment={newComment}
          updateNewComment={this.updateNewComment}
          submitNewComment={this.submitNewComment}
          isSubmitting={isSubmitting}
        />
      </div>
    );
  }
}
