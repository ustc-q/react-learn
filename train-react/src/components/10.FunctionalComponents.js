/**
 * @since 2017-05-23 16:20:05
 * @author vivaxy
 */

import React from 'react';

import { comments } from '../lib/data';

// 函数式组件
function Comment(props) {
  return <li>{props.comment}</li>;
}

const element = (
  <ul>
    {comments.map(({ id, comment }) => {
      return <Comment key={id} comment={comment} />;
    })}
  </ul>
);

export default element;
