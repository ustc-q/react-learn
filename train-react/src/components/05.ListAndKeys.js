/**
 * @since 2017-05-23 16:06:38
 * @author vivaxy
 */

import React from 'react';

import { comments } from '../lib/data';

const commentElements = comments.map(({ id, comment }) => {
  return <li key={id}>{comment}</li>;
});

const element = <ul>{commentElements}</ul>;

export default element;
