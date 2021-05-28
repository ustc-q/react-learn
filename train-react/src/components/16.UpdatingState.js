/**
 * @since 2017-05-23 17:08:49
 * @author vivaxy
 */

import React, { Component } from 'react';

export default class UpdatingState extends Component {
  state = {
    isSubmitting: false,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 不生效
    this.state = { isSubmitting: true };
    // 生效
    this.setState({ isSubmitting: true });
  }

  render() {
    const { isSubmitting } = this.state;
    return (
      <button disabled={isSubmitting} onClick={this.handleClick}>
        提交
      </button>
    );
  }
}
