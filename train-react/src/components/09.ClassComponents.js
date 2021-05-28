/**
 * @since 2019-05-13 08:02
 * @author vivaxy
 */

import React, { Component } from 'react';

import { comments } from '../lib/data';

// 类声明组件
class Comment extends Component {
  render() {
    const { comment } = this.props;
    return <li>{comment}</li>;
  }
}

const element = (
  <ul>
    {comments.map(({ id, comment }) => {
      return <Comment key={id} comment={comment} />;
    })}
  </ul>
);

export default element;
