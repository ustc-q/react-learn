/**
 * @since 2017-05-23 16:53:10
 * @author vivaxy
 */

import React from 'react';

import { comments } from '../lib/data';

const element = (
  <ul>
    {comments.map(commentData => {
      return (
        commentData.isBlocked || (
          <li key={commentData.id}>{commentData.comment}</li>
        )
      );
    })}
  </ul>
);

export default element;
