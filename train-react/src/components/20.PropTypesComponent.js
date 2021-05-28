/**
 * @since 2017-06-05 17:18:22
 * @author vivaxy
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { avatarURL } from './UsingProps';

export default class PropTypesComponent extends Component {
  static propTypes = {
    comment: PropTypes.string.isRequired,
    avatarURL: PropTypes.string,
  };

  static defaultProps = { avatarURL };

  render() {
    const { comment, avatarURL } = this.props;
    return (
      <p>
        <img src={avatarURL} />
        <span className="comment">{comment}</span>
      </p>
    );
  }
}
