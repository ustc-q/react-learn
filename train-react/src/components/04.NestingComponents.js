/**
 * @since 2017-05-23 16:04:34
 * @author vivaxy
 */

import React from 'react';
import { avatarURL } from './03.UsingProps';

const element = (
  <p>
    <img alt="avatar" src={avatarURL} />
    <span className="comment">Hello World!</span>
  </p>
);

export default element;
