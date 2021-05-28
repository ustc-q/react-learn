/**
 * @since 2017-05-23 16:36:01
 * @author vivaxy
 */

import React from 'react';

import { comments } from '../lib/data';

function Comment({ comment }) {
  return <li>{comment}</li>;
}

function VIPComment({ comment }) {
  return <li>[VIP] {comment}</li>;
}

function getCommentType(commentData) {
  if (commentData.isVIP) {
    return VIPComment;
  }
  return Comment;
}

const element = (
  <ul>
    {comments.map((commentData) => {
      const CommentType = getCommentType(commentData);
      const { id, comment } = commentData;
      return <CommentType key={id} comment={comment} />;
    })}
  </ul>
);

export default element;
