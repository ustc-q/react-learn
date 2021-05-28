/**
 * @since 20180702 20:52
 * @author vivaxy
 */

import React, { Component } from 'react';

export default class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.focusInput = this.focusInput.bind(this);
  }

  focusInput() {
    this.refs.inputRef.focus();
  }

  render() {
    return (
      <div>
        <input ref="inputRef" />
        <button onClick={this.focusInput}>聚焦</button>
      </div>
    );
  }
};
