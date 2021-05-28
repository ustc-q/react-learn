/**
 * @since 2017-05-23 17:12:57
 * @author vivaxy
 */

import React, { Component } from 'react';

import logger from '../lib/logger';

export default class AsynchronousStateUpdating extends Component {
  state = {
    isSubmitting: false,
    value: ''
  };

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleInputChange(e) {
    this.setState({ value: e.target.value });
  }

  handleButtonClick() {
    this.setState({ value: '' }, () => {
      logger('回调', this.state);
    });
    this.setState({ isSubmitting: true });
    logger('同步', this.state);
  }

  render() {
    logger('render');
    const { isSubmitting, value } = this.state;
    return (
      <div>
        <input value={value} onChange={this.handleInputChange} />
        <button disabled={isSubmitting} onClick={this.handleButtonClick}>
          提交
        </button>
      </div>
    );
  }
}
